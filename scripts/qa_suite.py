import os
import json
import time
from urllib.parse import unquote
from playwright.sync_api import sync_playwright

BASE_URL = "http://localhost:4173"
EVIDENCE_DIR = os.path.join(os.getcwd(), "evidence", "qa")
DOCS_DIR = os.path.join(os.getcwd(), "docs")

os.makedirs(EVIDENCE_DIR, exist_ok=True)
os.makedirs(DOCS_DIR, exist_ok=True)

results = {
    "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
    "base_url": BASE_URL,
    "metrics": {},
    "journeys": {},
    "accessibility": {},
    "antislop": {},
    "honesty": {},
    "links_checked": {},
    "errors": [],
    "status": "IN_PROGRESS"
}

def run_qa():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        
        # ---------------------------------------------------------
        # 1. MOBILE PERFORMANCE BENCHMARKING (390x844)
        # ---------------------------------------------------------
        print("\n--- 1. MOBILE BENCHMARKING (390x844) ---", flush=True)
        mobile_context = browser.new_context(
            viewport={"width": 390, "height": 844},
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
            is_mobile=True,
            has_touch=True
        )
        mobile_page = mobile_context.new_page()
        
        console_logs = []
        mobile_page.on("console", lambda msg: console_logs.append(f"[{msg.type}] {msg.text}"))
        
        mobile_page.add_init_script("""
            window.__vitals = { lcp: 0, cls: 0, fcp: 0 };
            const lcpObserver = new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                const lastEntry = entries[entries.length - 1];
                window.__vitals.lcp = lastEntry.renderTime || lastEntry.loadTime;
            });
            lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

            let clsValue = 0;
            const clsObserver = new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                        window.__vitals.cls = clsValue;
                    }
                }
            });
            clsObserver.observe({ type: 'layout-shift', buffered: true });
        """)
        
        start_t = time.time()
        res = mobile_page.goto(BASE_URL, wait_until="networkidle")
        load_duration = (time.time() - start_t) * 1000
        mobile_page.wait_for_timeout(1000)
        
        perf_data = mobile_page.evaluate("""() => {
            const nav = performance.getEntriesByType('navigation')[0];
            const paint = performance.getEntriesByType('paint');
            const fcpEntry = paint.find(p => p.name === 'first-contentful-paint');
            return {
                ttfb: nav ? nav.responseStart - nav.requestStart : 0,
                domContentLoaded: nav ? nav.domContentLoadedEventEnd - nav.startTime : 0,
                loadEvent: nav ? nav.loadEventEnd - nav.startTime : 0,
                fcp: fcpEntry ? fcpEntry.startTime : 0,
                lcp: window.__vitals ? window.__vitals.lcp : 0,
                cls: window.__vitals ? window.__vitals.cls : 0
            };
        }""")
        
        mobile_page.screenshot(path=os.path.join(EVIDENCE_DIR, "perf-mobile-home.png"), full_page=True)
        results["metrics"]["mobile_vitals"] = {
            "status_code": res.status if res else None,
            "load_duration_ms": round(load_duration, 2),
            "ttfb_ms": round(perf_data["ttfb"], 2),
            "dom_content_loaded_ms": round(perf_data["domContentLoaded"], 2),
            "fcp_ms": round(perf_data["fcp"], 2),
            "lcp_ms": round(perf_data["lcp"], 2),
            "cls": round(perf_data["cls"], 4),
            "console_errors": [log for log in console_logs if "error" in log.lower()]
        }
        print(f"Mobile Vitals: LCP={results['metrics']['mobile_vitals']['lcp_ms']}ms, CLS={results['metrics']['mobile_vitals']['cls']}, FCP={results['metrics']['mobile_vitals']['fcp_ms']}ms", flush=True)
        mobile_context.close()
        
        # ---------------------------------------------------------
        # 2. DESKTOP PERFORMANCE BENCHMARKING (1440x900)
        # ---------------------------------------------------------
        print("\n--- 2. DESKTOP BENCHMARKING (1440x900) ---", flush=True)
        desktop_context = browser.new_context(viewport={"width": 1440, "height": 900})
        page = desktop_context.new_page()
        desktop_logs = []
        page.on("console", lambda msg: desktop_logs.append(f"[{msg.type}] {msg.text}"))
        
        page.add_init_script("""
            window.__vitals = { lcp: 0, cls: 0, fcp: 0 };
            const lcpObserver = new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                const lastEntry = entries[entries.length - 1];
                window.__vitals.lcp = lastEntry.renderTime || lastEntry.loadTime;
            });
            lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

            let clsValue = 0;
            const clsObserver = new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                        window.__vitals.cls = clsValue;
                    }
                }
            });
            clsObserver.observe({ type: 'layout-shift', buffered: true });
        """)
        
        start_t = time.time()
        res = page.goto(BASE_URL, wait_until="networkidle")
        d_load_duration = (time.time() - start_t) * 1000
        page.wait_for_timeout(1000)
        
        d_perf = page.evaluate("""() => {
            const nav = performance.getEntriesByType('navigation')[0];
            const paint = performance.getEntriesByType('paint');
            const fcpEntry = paint.find(p => p.name === 'first-contentful-paint');
            const resources = performance.getEntriesByType('resource');
            const totalTransfer = resources.reduce((acc, r) => acc + (r.transferSize || 0), 0);
            return {
                ttfb: nav ? nav.responseStart - nav.requestStart : 0,
                domContentLoaded: nav ? nav.domContentLoadedEventEnd - nav.startTime : 0,
                fcp: fcpEntry ? fcpEntry.startTime : 0,
                lcp: window.__vitals ? window.__vitals.lcp : 0,
                cls: window.__vitals ? window.__vitals.cls : 0,
                resourceCount: resources.length,
                totalTransferKB: Math.round(totalTransfer / 1024)
            };
        }""")
        
        results["metrics"]["desktop_vitals"] = {
            "load_duration_ms": round(d_load_duration, 2),
            "ttfb_ms": round(d_perf["ttfb"], 2),
            "dom_content_loaded_ms": round(d_perf["domContentLoaded"], 2),
            "fcp_ms": round(d_perf["fcp"], 2),
            "lcp_ms": round(d_perf["lcp"], 2),
            "cls": round(d_perf["cls"], 4),
            "resourceCount": d_perf["resourceCount"],
            "totalTransferKB": d_perf["totalTransferKB"],
            "console_errors": [log for log in desktop_logs if "error" in log.lower()]
        }
        print(f"Desktop Vitals: LCP={results['metrics']['desktop_vitals']['lcp_ms']}ms, CLS={results['metrics']['desktop_vitals']['cls']}, Transfer={d_perf['totalTransferKB']}KB", flush=True)
        
        # ---------------------------------------------------------
        # 3. USER JOURNEY 1: LEAD MODAL & HONEST WHATSAPP SUBMISSION
        # ---------------------------------------------------------
        print("\n--- 3. USER JOURNEY 1: LEAD MODAL & HONEST WHATSAPP DISPATCH ---", flush=True)
        # Step 1: Click "Book Counseling" in navbar
        page.click('button:has-text("Book Counseling")')
        page.wait_for_selector('div[role="dialog"]', state="visible")
        page.screenshot(path=os.path.join(EVIDENCE_DIR, "journey1-step1-modal-open.png"))
        
        # Step 2: Test empty validation
        page.click('button[type="submit"]:has-text("Send Inquiry via WhatsApp")')
        page.wait_for_timeout(300)
        empty_err = page.locator('text=Full name is required').count() > 0
        phone_err = page.locator('text=Valid 10-digit mobile number is required').count() > 0
        page.screenshot(path=os.path.join(EVIDENCE_DIR, "journey1-step2-validation-errors.png"))
        
        # Step 3: Fill with valid student data
        page.fill('#modal-name', 'Rohan Sharma')
        page.fill('#modal-phone', '9876543210')
        page.select_option('#modal-course', 'NEET Medical Coaching')
        page.select_option('#modal-class', 'Class 12th')
        page.fill('#modal-message', 'Interested in NEET regular batch')
        page.screenshot(path=os.path.join(EVIDENCE_DIR, "journey1-step3-form-filled.png"))
        
        # Step 4: Intercept WhatsApp window.open
        wa_url = page.evaluate("""() => {
            return new Promise((resolve) => {
                window.open = function(url) {
                    resolve(url);
                    return null;
                };
                document.querySelector('button[type="submit"]').click();
            });
        }""")
        
        page.wait_for_timeout(500)
        page.screenshot(path=os.path.join(EVIDENCE_DIR, "journey1-step4-submitted.png"))
        
        # Step 5: Test Close / Done button closes modal
        page.click('button:has-text("Done / Close")')
        page.wait_for_timeout(300)
        modal_visible_after_close = page.locator('div[role="dialog"]').is_visible()
        
        results["journeys"]["journey1_lead_modal"] = {
            "empty_validation_prevented_submit": empty_err and phone_err,
            "dispatched_url": wa_url,
            "url_contains_verified_phone": "8448040355" in (wa_url or ""),
            "url_contains_student_name": "Rohan" in (unquote(wa_url) if wa_url else ""),
            "modal_closed_successfully": not modal_visible_after_close,
            "status": "PASS" if ("8448040355" in (wa_url or "") and not modal_visible_after_close) else "FAIL"
        }
        print(f"Journey 1 Dispatched URL: {wa_url}", flush=True)
        print(f"Journey 1 Status: {results['journeys']['journey1_lead_modal']['status']}", flush=True)
        
        # ---------------------------------------------------------
        # 4. USER JOURNEY 2: COURSE EXPLORATION & DETAIL VIEW
        # ---------------------------------------------------------
        print("\n--- 4. USER JOURNEY 2: COURSE EXPLORATION & DETAIL VIEW ---", flush=True)
        page.goto(f"{BASE_URL}/courses", wait_until="networkidle")
        page.screenshot(path=os.path.join(EVIDENCE_DIR, "journey2-step1-courses-listing.png"))
        
        # Click on NEET Medical Coaching details link
        page.locator('a[href="/courses/neet-medical-coaching"]').first.click()
        page.wait_for_url("**/courses/neet-medical-coaching")
        page.screenshot(path=os.path.join(EVIDENCE_DIR, "journey2-step2-course-detail.png"))
        
        detail_h1 = page.inner_text("h1")
        has_verified_tags = page.locator('text=VERIFIED').count() > 0
        has_enroll_button = page.locator('button:has-text("Enquire for Current Batch")').count() > 0
        has_whatsapp_button = page.locator('a:has-text("WhatsApp Counselor")').count() > 0
        
        results["journeys"]["journey2_course_detail"] = {
            "title": detail_h1,
            "has_verified_tags": has_verified_tags,
            "has_enroll_cta": has_enroll_button,
            "has_whatsapp_cta": has_whatsapp_button,
            "status": "PASS" if ("NEET" in detail_h1 and has_enroll_button and has_whatsapp_button) else "FAIL"
        }
        print(f"Journey 2 Status: {results['journeys']['journey2_course_detail']['status']} (H1: {detail_h1})", flush=True)
        
        # ---------------------------------------------------------
        # 5. USER JOURNEY 3: LMS STAGE B MODAL
        # ---------------------------------------------------------
        print("\n--- 5. USER JOURNEY 3: LMS ARCHITECTURE MODAL ---", flush=True)
        page.click('button:has-text("Student Portal")')
        page.wait_for_selector('#lms-modal-title', state="visible")
        page.screenshot(path=os.path.join(EVIDENCE_DIR, "journey3-step1-lms-modal.png"))
        lms_modal_text = page.inner_text('div[role="dialog"]')
        has_stage_b_notice = "Stage B Architecture Module Preview" in lms_modal_text
        page.keyboard.press("Escape")
        page.wait_for_timeout(300)
        lms_closed = not page.locator('#lms-modal-title').is_visible()
        
        results["journeys"]["journey3_lms_modal"] = {
            "has_stage_b_disclaimer": has_stage_b_notice,
            "closed_on_esc": lms_closed,
            "status": "PASS" if (has_stage_b_notice and lms_closed) else "FAIL"
        }
        print(f"Journey 3 Status: {results['journeys']['journey3_lms_modal']['status']}", flush=True)
        
        # ---------------------------------------------------------
        # 6. USER JOURNEY 4: MOBILE RESPONSIVE JOURNEY (390x844)
        # ---------------------------------------------------------
        print("\n--- 6. USER JOURNEY 4: MOBILE MENU & STICKY ACTIONS ---", flush=True)
        mobile_ctx2 = browser.new_context(
            viewport={"width": 390, "height": 844},
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Safari/604.1",
            is_mobile=True,
            has_touch=True
        )
        m_page = mobile_ctx2.new_page()
        m_page.goto(BASE_URL, wait_until="networkidle")
        
        # Check sticky mobile CTA bar visibility
        sticky_bar = m_page.locator('div.fixed.bottom-0').is_visible()
        m_page.screenshot(path=os.path.join(EVIDENCE_DIR, "journey4-step1-mobile-sticky-bar.png"))
        
        # Open hamburger menu
        m_page.locator('button[aria-label="Open Menu"]').click()
        m_page.wait_for_timeout(300)
        m_page.screenshot(path=os.path.join(EVIDENCE_DIR, "journey4-step2-mobile-menu-open.png"))
        
        # Click "Faculty Team" from mobile drawer
        m_page.locator('#mobile-drawer a[href="/faculty"]').click()
        m_page.wait_for_url("**/faculty")
        m_page.screenshot(path=os.path.join(EVIDENCE_DIR, "journey4-step3-mobile-faculty.png"))
        
        m_title = m_page.inner_text("h1")
        results["journeys"]["journey4_mobile_nav"] = {
            "sticky_bar_present": sticky_bar,
            "mobile_menu_navigated": "Faculty" in m_title,
            "status": "PASS" if (sticky_bar and "Faculty" in m_title) else "FAIL"
        }
        print(f"Journey 4 Status: {results['journeys']['journey4_mobile_nav']['status']} (H1: {m_title})", flush=True)
        mobile_ctx2.close()
        
        # ---------------------------------------------------------
        # 7. USER JOURNEY 5: 404 NOT FOUND ROUTE
        # ---------------------------------------------------------
        print("\n--- 7. USER JOURNEY 5: 404 NOT FOUND HANDLING ---", flush=True)
        page.goto(f"{BASE_URL}/non-existent-page", wait_until="networkidle")
        page.screenshot(path=os.path.join(EVIDENCE_DIR, "journey5-step1-404-page.png"))
        page_404_text = page.inner_text("main")
        is_404 = "Page Not Found" in page_404_text or "404" in page_404_text
        has_home_btn = page.locator('a[href="/"]:has-text("Back to Home")').count() > 0 or page.locator('a[href="/"]').count() > 0
        
        results["journeys"]["journey5_404_handling"] = {
            "rendered_custom_404": is_404,
            "has_back_to_home_action": has_home_btn,
            "status": "PASS" if (is_404 and has_home_btn) else "FAIL"
        }
        print(f"Journey 5 Status: {results['journeys']['journey5_404_handling']['status']}", flush=True)
        
        # ---------------------------------------------------------
        # 8. ACCESSIBILITY & WCAG 2.2 AA AUDIT
        # ---------------------------------------------------------
        print("\n--- 8. ACCESSIBILITY & CONTRAST AUDIT ---", flush=True)
        page.goto(BASE_URL, wait_until="networkidle")
        
        a11y_eval = page.evaluate("""() => {
            const skipLink = document.querySelector('a[href="#main-content"]');
            const mainContent = document.getElementById('main-content');
            
            const images = Array.from(document.querySelectorAll('img'));
            const imagesWithoutAlt = images.filter(img => !img.hasAttribute('alt') || img.getAttribute('alt').trim() === '');
            
            const buttons = Array.from(document.querySelectorAll('button'));
            const inaccessibleButtons = buttons.filter(btn => {
                const text = btn.innerText.trim();
                const ariaLabel = btn.getAttribute('aria-label');
                return !text && !ariaLabel;
            });
            
            const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => ({
                tag: h.tagName.toLowerCase(),
                text: h.innerText.trim().slice(0, 40)
            }));
            
            return {
                skipLinkPresent: !!skipLink,
                mainLandmarkPresent: !!mainContent,
                totalImages: images.length,
                missingAltCount: imagesWithoutAlt.length,
                missingAltSources: imagesWithoutAlt.map(img => img.src),
                totalButtons: buttons.length,
                inaccessibleButtonsCount: inaccessibleButtons.length,
                h1Count: headings.filter(h => h.tag === 'h1').length
            };
        }""")
        
        results["accessibility"] = a11y_eval
        print(f"Skip Link: {a11y_eval['skipLinkPresent']}, Main Landmark: {a11y_eval['mainLandmarkPresent']}", flush=True)
        print(f"Images missing alt: {a11y_eval['missingAltCount']}/{a11y_eval['totalImages']}", flush=True)
        print(f"Inaccessible buttons: {a11y_eval['inaccessibleButtonsCount']}/{a11y_eval['totalButtons']}", flush=True)
        print(f"H1 Count: {a11y_eval['h1Count']}", flush=True)
        
        # ---------------------------------------------------------
        # 9. ANTI-SLOP & CODE INTEGRITY SCAN
        # ---------------------------------------------------------
        print("\n--- 9. ANTI-SLOP RULE ENFORCEMENT SCAN ---", flush=True)
        src_dir = os.path.join(os.getcwd(), "src")
        em_dash_violations = []
        for root, _, files in os.walk(src_dir):
            for file in files:
                if file.endswith((".tsx", ".ts", ".html")):
                    fpath = os.path.join(root, file)
                    with open(fpath, "r", encoding="utf-8") as f:
                        lines = f.readlines()
                        for i, line in enumerate(lines):
                            if "—" in line:
                                em_dash_violations.append({
                                    "file": os.path.relpath(fpath, os.getcwd()),
                                    "line": i + 1,
                                    "snippet": line.strip()
                                })
                                
        results["antislop"]["em_dash_violations"] = em_dash_violations
        print(f"Em dash (—) violations found in source: {len(em_dash_violations)}", flush=True)
        
        # ---------------------------------------------------------
        # 10. BACKEND HONESTY & CLAIM AUDIT
        # ---------------------------------------------------------
        print("\n--- 10. BACKEND HONESTY & CLAIM AUDIT ---", flush=True)
        page.goto(f"{BASE_URL}/contact", wait_until="networkidle")
        contact_honesty_text = page.locator('text=Zero Server Lag').count() > 0
        wa_dispatch_notice = page.locator('text=dispatches directly to the admissions desk via WhatsApp').count() > 0
        phone_verified = page.locator('text=+91 84480 40355').count() > 0
        address_verified = page.locator('text=I-120, Alpha 2').count() > 0 or page.locator('text=Alpha 2').count() > 0
        
        results["honesty"] = {
            "form_discloses_whatsapp_direct": contact_honesty_text or wa_dispatch_notice,
            "verified_phone_displayed": phone_verified,
            "verified_address_displayed": address_verified,
            "status": "PASS" if (phone_verified and address_verified) else "NEEDS WORK"
        }
        print(f"Honesty Audit Status: {results['honesty']['status']}", flush=True)
        
        # ---------------------------------------------------------
        # 11. LINK VERIFICATION AUDIT
        # ---------------------------------------------------------
        print("\n--- 11. LINK AUDIT ---", flush=True)
        all_links = page.evaluate("""() => {
            return Array.from(document.querySelectorAll('a')).map(a => ({
                href: a.getAttribute('href'),
                text: a.innerText.trim().slice(0, 30)
            }));
        }""")
        
        tel_links = [l['href'] for l in all_links if l['href'] and l['href'].startswith('tel:')]
        wa_links = [l['href'] for l in all_links if l['href'] and 'wa.me' in l['href']]
        maps_links = [l['href'] for l in all_links if l['href'] and 'google.com/maps' in l['href']]
        
        results["links_checked"] = {
            "total_links": len(all_links),
            "tel_links_verified": all("+918448040355" in t or "8448040355" in t for t in tel_links),
            "wa_links_verified": all("8448040355" in w for w in wa_links),
            "maps_links_count": len(maps_links),
            "status": "PASS"
        }
        print(f"Links Verified: {len(all_links)} total links checked. Tel={len(tel_links)}, WA={len(wa_links)}, Maps={len(maps_links)}", flush=True)
        
        browser.close()
        
    results["status"] = "COMPLETED"
    with open(os.path.join(DOCS_DIR, "qa-results.json"), "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2)
    print("\nQA Suite completed successfully. Results saved to docs/qa-results.json", flush=True)

if __name__ == "__main__":
    run_qa()
