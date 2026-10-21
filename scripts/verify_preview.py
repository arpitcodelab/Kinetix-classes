import os
import sys
import time
from playwright.sync_api import sync_playwright

os.makedirs('evidence/rebuild', exist_ok=True)

routes = [
    ('/', 'home'),
    ('/courses', 'courses'),
    ('/about', 'about'),
    ('/faculty', 'faculty'),
    ('/contact', 'contact'),
    ('/privacy-policy', 'privacy-policy'),
]

console_errors = []

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    # 1. Desktop Test (1440x900)
    print("Testing Desktop 1440x900...")
    context_desktop = browser.new_context(viewport={'width': 1440, 'height': 900})
    page_d = context_desktop.new_page()
    page_d.on('console', lambda msg: console_errors.append(f"[CONSOLE {msg.type}] {msg.text}") if msg.type == 'error' else None)
    page_d.on('pageerror', lambda err: console_errors.append(f"[PAGE ERROR] {err}"))

    for route, name in routes:
        url = f"http://localhost:4173{route}"
        print(f"  Navigating to {url}...")
        resp = page_d.goto(url, wait_until='networkidle')
        status = resp.status if resp else 'No response'
        time.sleep(0.5)
        shot_path = f"evidence/rebuild/desktop-1440-{name}.png"
        page_d.screenshot(path=shot_path, full_page=True)
        print(f"  -> {status} | Saved {shot_path}")

    # Test Lead Modal interaction on desktop
    page_d.goto("http://localhost:4173/")
    time.sleep(0.5)
    page_d.click("button:has-text('Book Free Counseling')")
    time.sleep(0.4)
    page_d.screenshot(path="evidence/rebuild/desktop-lead-modal.png")
    print("  -> Saved evidence/rebuild/desktop-lead-modal.png")

    # 2. Mobile Test (390x844)
    print("\nTesting Mobile 390x844...")
    context_mobile = browser.new_context(
        viewport={'width': 390, 'height': 844},
        user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
    )
    page_m = context_mobile.new_page()
    page_m.on('console', lambda msg: console_errors.append(f"[MOBILE ERROR] {msg.text}") if msg.type == 'error' else None)

    for route, name in routes:
        url = f"http://localhost:4173{route}"
        resp = page_m.goto(url, wait_until='networkidle')
        status = resp.status if resp else 'No response'
        time.sleep(0.4)
        shot_path = f"evidence/rebuild/mobile-390-{name}.png"
        page_m.screenshot(path=shot_path, full_page=True)
        print(f"  -> {status} | Saved {shot_path}")

    browser.close()

print("\n=== VERIFICATION RESULTS ===")
if console_errors:
    print(f"ERRORS DETECTED ({len(console_errors)}):")
    for err in console_errors:
        print(f"  - {err}")
    sys.exit(1)
else:
    print("SUCCESS: 0 console errors across all desktop and mobile pages!")

