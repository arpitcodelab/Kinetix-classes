import os
import sys
import time
from playwright.sync_api import sync_playwright

os.makedirs('evidence/rebuild', exist_ok=True)

routes = [
    ('/', 'home'),
    ('/courses', 'courses'),
    ('/courses/neet-medical-coaching', 'course-detail'),
    ('/about', 'about'),
    ('/faculty', 'faculty'),
    ('/contact', 'contact'),
    ('/privacy-policy', 'privacy-policy'),
]

viewports = [
    (1440, 900, 'desktop-1440'),
    (1024, 768, 'tablet-1024'),
    (768, 1024, 'tablet-768'),
    (390, 844, 'mobile-390'),
]

console_errors = []

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    for width, height, vp_name in viewports:
        print(f"\n--- Testing Viewport: {vp_name} ({width}x{height}) ---")
        context = browser.new_context(
            viewport={'width': width, 'height': height},
            is_mobile=(width < 600),
            has_touch=(width < 600)
        )
        page = context.new_page()
        page.on('console', lambda msg: console_errors.append(f"[{vp_name}][{msg.type}] {msg.text}") if msg.type == 'error' else None)
        page.on('pageerror', lambda err: console_errors.append(f"[{vp_name}][PAGE ERROR] {err}"))

        for route, name in routes:
            url = f"http://localhost:4173{route}"
            resp = page.goto(url, wait_until='networkidle')
            status = resp.status if resp else 'No response'
            time.sleep(0.4)
            shot_path = f"evidence/rebuild/{vp_name}-{name}.png"
            page.screenshot(path=shot_path, full_page=True)
            print(f"  [{status}] {route} -> {shot_path}")

        context.close()

    # Test Lead Modal interaction on desktop
    print("\n--- Testing Lead Modal Interaction ---")
    ctx_modal = browser.new_context(viewport={'width': 1440, 'height': 900})
    page_m = ctx_modal.new_page()
    page_m.goto("http://localhost:4173/")
    time.sleep(0.5)
    page_m.click("button:has-text('Book Free Counseling')")
    time.sleep(0.4)
    page_m.screenshot(path="evidence/rebuild/desktop-1440-lead-modal.png")
    print("  -> Saved evidence/rebuild/desktop-1440-lead-modal.png")

    ctx_modal.close()
    browser.close()

print("\n=== RESPONSIVE VERIFICATION AUDIT COMPLETED ===")
if console_errors:
    print(f"ERRORS DETECTED ({len(console_errors)}):")
    for err in console_errors:
        print(f"  - {err}")
    sys.exit(1)
else:
    print("PERFECT: 0 console errors across all 1440px, 1024px, 768px, and 390px viewports!")
