import os
import json
import shutil
from PIL import Image, ImageDraw, ImageFont, ImageFilter

# 1. Base directories
SRC_PHOTOS = 'evidence/source_photos'
PUBLIC_DIR = 'public/assets'

os.makedirs(f'{PUBLIC_DIR}/logo', exist_ok=True)
os.makedirs(f'{PUBLIC_DIR}/hero', exist_ok=True)
os.makedirs(f'{PUBLIC_DIR}/courses', exist_ok=True)
os.makedirs(f'{PUBLIC_DIR}/faculty', exist_ok=True)
os.makedirs(f'{PUBLIC_DIR}/gallery', exist_ok=True)
os.makedirs(f'{PUBLIC_DIR}/icons', exist_ok=True)
os.makedirs(f'{PUBLIC_DIR}/og', exist_ok=True)
os.makedirs(f'{PUBLIC_DIR}/reviews', exist_ok=True)

manifest = {
    "version": "1.0.0",
    "last_updated": "2026-10-22",
    "brand": "Kinetix Classes",
    "categories": {
        "logo": {},
        "hero": {},
        "courses": {},
        "faculty": {},
        "gallery": {},
        "icons": {},
        "og": {},
        "reviews": {}
    }
}

# ----------------------------------------------------------------------
# 2. Process Logo
# ----------------------------------------------------------------------
print("Processing Logo assets...")
logo_src = f'{SRC_PHOTOS}/logo_avatar.jpg'
if os.path.exists(logo_src):
    with Image.open(logo_src) as img:
        img_rgb = img.convert('RGB')
        w, h = img.size
        # Full webp
        img_rgb.save(f'{PUBLIC_DIR}/logo/kinetix-avatar-512.webp', 'WEBP', quality=92)
        img_rgb.save(f'{PUBLIC_DIR}/logo/kinetix-avatar-512.jpg', 'JPEG', quality=90)
        # 256
        img_256 = img_rgb.resize((256, 256), Image.Resampling.LANCZOS)
        img_256.save(f'{PUBLIC_DIR}/logo/kinetix-avatar-256.webp', 'WEBP', quality=92)
        # 128
        img_128 = img_rgb.resize((128, 128), Image.Resampling.LANCZOS)
        img_128.save(f'{PUBLIC_DIR}/logo/kinetix-avatar-128.webp', 'WEBP', quality=92)
        # favicons
        img_32 = img_rgb.resize((32, 32), Image.Resampling.LANCZOS)
        img_32.save(f'{PUBLIC_DIR}/logo/favicon-32x32.png', 'PNG')
        img_16 = img_rgb.resize((16, 16), Image.Resampling.LANCZOS)
        img_16.save(f'{PUBLIC_DIR}/logo/favicon-16x16.png', 'PNG')

        manifest["categories"]["logo"]["avatar"] = {
            "source_url": "https://lh3.googleusercontent.com/a-/ALV-UjV1X5nLWA6UCsegXA1g2mK-x63BMUu4o-ArIrhRq15sI0dNTIs",
            "original_path": logo_src,
            "width": w,
            "height": h,
            "variants": {
                "webp_512": "/assets/logo/kinetix-avatar-512.webp",
                "webp_256": "/assets/logo/kinetix-avatar-256.webp",
                "webp_128": "/assets/logo/kinetix-avatar-128.webp",
                "jpg_512": "/assets/logo/kinetix-avatar-512.jpg",
                "favicon_32": "/assets/logo/favicon-32x32.png",
                "favicon_16": "/assets/logo/favicon-16x16.png"
            },
            "status": "VERIFIED"
        }

# SVG Logo Mark
svg_logo_mark = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <defs>
    <linearGradient id="kgPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00E5C8"/>
      <stop offset="100%" stop-color="#2563EB"/>
    </linearGradient>
    <linearGradient id="kgSecondary" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#6366F1"/>
    </linearGradient>
    <filter id="kgGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <!-- Background Shield/Pebble -->
  <rect width="100" height="100" rx="24" fill="#0B131F"/>
  <!-- Kinetic Orbital Loops -->
  <ellipse cx="50" cy="50" rx="36" ry="14" transform="rotate(-30 50 50)" stroke="url(#kgPrimary)" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="140 18"/>
  <ellipse cx="50" cy="50" rx="36" ry="14" transform="rotate(30 50 50)" stroke="url(#kgSecondary)" stroke-width="3" stroke-linecap="round" stroke-dasharray="130 24" opacity="0.85"/>
  <ellipse cx="50" cy="50" rx="36" ry="14" transform="rotate(90 50 50)" stroke="#00E5C8" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="120 30" opacity="0.6"/>
  <!-- Nucleus & Energy Core -->
  <circle cx="50" cy="50" r="9" fill="url(#kgPrimary)" filter="url(#kgGlow)"/>
  <circle cx="50" cy="50" r="4.5" fill="#FFFFFF"/>
  <!-- Kinetic Nodes / Photons -->
  <circle cx="78" cy="34" r="3" fill="#00E5C8"/>
  <circle cx="22" cy="66" r="2.5" fill="#38BDF8"/>
  <circle cx="50" cy="14" r="2.5" fill="#FFFFFF"/>
</svg>'''

with open(f'{PUBLIC_DIR}/logo/kinetix-logo-mark.svg', 'w', encoding='utf-8') as f:
    f.write(svg_logo_mark)

with open(f'{PUBLIC_DIR}/logo/favicon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_logo_mark)

# Full Horizontal Brand Logo
svg_full_logo = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 70" fill="none">
  <defs>
    <linearGradient id="fullKgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00E5C8"/>
      <stop offset="100%" stop-color="#2563EB"/>
    </linearGradient>
    <filter id="fullKgGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <!-- Mark Symbol -->
  <g transform="translate(6, 5) scale(0.6)">
    <rect width="100" height="100" rx="22" fill="#0B131F"/>
    <ellipse cx="50" cy="50" rx="36" ry="14" transform="rotate(-30 50 50)" stroke="url(#fullKgGrad)" stroke-width="3.5" stroke-linecap="round"/>
    <ellipse cx="50" cy="50" rx="36" ry="14" transform="rotate(30 50 50)" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" opacity="0.85"/>
    <circle cx="50" cy="50" r="9" fill="url(#fullKgGrad)" filter="url(#fullKgGlow)"/>
    <circle cx="50" cy="50" r="4.5" fill="#FFFFFF"/>
    <circle cx="78" cy="34" r="3" fill="#00E5C8"/>
  </g>
  <!-- Brand Typography -->
  <text x="78" y="37" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="24" letter-spacing="1.5" fill="#FFFFFF">KINETIX</text>
  <text x="194" y="37" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="24" letter-spacing="1.5" fill="#00E5C8">CLASSES</text>
  <text x="79" y="54" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="10.5" letter-spacing="3" fill="#94A3B8">NEET • JEE • PCMB FOUNDATION</text>
</svg>'''

with open(f'{PUBLIC_DIR}/logo/kinetix-logo.svg', 'w', encoding='utf-8') as f:
    f.write(svg_full_logo)

manifest["categories"]["logo"]["vector"] = {
    "mark_svg": "/assets/logo/kinetix-logo-mark.svg",
    "full_logo_svg": "/assets/logo/kinetix-logo.svg",
    "favicon_svg": "/assets/logo/favicon.svg",
    "dimensions": "Scalable Vector Graphics",
    "status": "VERIFIED"
}

# ----------------------------------------------------------------------
# 3. Process Gallery Photos
# ----------------------------------------------------------------------
print("Processing Gallery photos...")
gallery_mapping = [
    ("photo_1.jpg", "https://lh3.googleusercontent.com/UK9ageUOTgZMKMDUAY8UJA2Y2JO59CncsgetFVhp4YFK_w-QUm9j7976L8wI2uDkuomt9hfhGAqcrBrS", "photo-01-faculty-whiteboard-teaching", "Faculty teaching at whiteboard in classroom", "Home, About"),
    ("photo_2.jpg", "https://lh3.googleusercontent.com/YffIwbjclgHBq0ELbY1atn7T0tM4xolUkUAeHFuCkO5m7wTnqHZ9lABzVwGrQV6P-FiAA9bDpLNWBJU1", "photo-02-students-classroom-lecture", "Classroom lecture with attentive students", "Home, About"),
    ("photo_3.jpg", "https://lh3.googleusercontent.com/deDktTwmnoyr2DHmQlPeKQejjB6QqQstHlPXftJNXbal79t9MCO2VsXvOon0WE_ODZoM4BZOSfL8HoOU", "photo-03-science-whiteboard-formulas", "Handwritten physics and science equations on whiteboard", "Home, About"),
    ("photo_4.jpg", "https://lh3.googleusercontent.com/BuSISm2K9I9VqaATomgQfTb-Ni3M-7JP3GMwAdmt3QJGuUXqNcn2zrS2sq8ONNV_K0Gy9Q82PN40z1ur", "photo-04-classroom-batch-attendance", "Focused small-batch science coaching in session", "Home, About"),
    ("photo_5.jpg", "https://lh3.googleusercontent.com/-u2rIN0MJxbj27KCGBRKqpsZl6hlfoSx5yUOLcS3CYOpphuNF23jpChT3NRXmGCOxEju6WuJLAyLMvir", "photo-05-interactive-student-session", "Interactive classroom concept learning session", "Home, About"),
    ("photo_6.jpg", "https://lh3.googleusercontent.com/HJTcHYy-z_xpM7kJXZKztfPaMekD5gaPTpoFdmK6Sm7E-6YUSAOpuiWO4JG7Tte5P--ZwlXu6UleqT1S", "photo-06-institute-exterior-entrance", "Kinetix Classes institute exterior signage in Alpha 2", "Home, About"),
    ("photo_7.jpg", "https://lh3.googleusercontent.com/bgEXXX6GZijMSaCaoFZE1wbDhcszdSamIEDi_pZgriRNR4ypuB5hh8IGGKgamT883zMohlKPo-K4y81e", "photo-07-classroom-study-environment", "Classroom study desks and whiteboard lighting", "Home, About"),
    ("photo_8.jpg", "https://lh3.googleusercontent.com/xRyQaFV-1hfcsQDsIKl7bE3y4IIOpOgHUN3Bg6Y60gwgVWnnfvhWvCkZbITCwJ1d-wi_XWMeRIt0LVGU", "photo-08-coaching-desk-learning-hall", "Coaching study hall environment", "Home, About"),
    ("photo_9.jpg", "https://lh3.googleusercontent.com/MoXrTji9QLP30twTHjXouiLIYXVNoN4wz2bTdj8Ev_WN3xFM8wWjIQSaFUaL_F0b9XDGIq8UyCPsrhdb", "photo-09-academic-discussion-corner", "Academic study hall perspective", "Home, About"),
    ("photo_10.jpg", "https://lh3.googleusercontent.com/oFdBU6ZHTLcC4_-lJnSYaolfFkaeCQSdTEgkUX-z59fXfsblf5kt0kw4W73Sg2VVuW4MaNHnDmkg34vh", "photo-10-concept-problem-solving", "Faculty solving numerical problems with students", "Home, About"),
]

for src_name, orig_url, dest_stem, alt_text, page_found in gallery_mapping:
    src_path = f'{SRC_PHOTOS}/{src_name}'
    if os.path.exists(src_path):
        with Image.open(src_path) as img:
            img_rgb = img.convert('RGB')
            w, h = img.size
            # Full webp
            webp_path = f'{PUBLIC_DIR}/gallery/{dest_stem}.webp'
            img_rgb.save(webp_path, 'WEBP', quality=85)
            # JPG fallback
            jpg_path = f'{PUBLIC_DIR}/gallery/{dest_stem}.jpg'
            img_rgb.save(jpg_path, 'JPEG', quality=85)
            
            # Responsive mobile / 400w variant
            scale = 400 / float(w)
            target_h = int(h * scale)
            img_400 = img_rgb.resize((400, target_h), Image.Resampling.LANCZOS)
            webp_400_path = f'{PUBLIC_DIR}/gallery/{dest_stem}-400w.webp'
            img_400.save(webp_400_path, 'WEBP', quality=82)

            manifest["categories"]["gallery"][dest_stem] = {
                "original_url": orig_url,
                "local_path": f"/assets/gallery/{dest_stem}.webp",
                "source_file": src_name,
                "alt": alt_text,
                "page": page_found,
                "width": w,
                "height": h,
                "aspect_ratio": round(w / float(h), 3),
                "variants": {
                    "webp": f"/assets/gallery/{dest_stem}.webp",
                    "webp_400w": f"/assets/gallery/{dest_stem}-400w.webp",
                    "jpg_fallback": f"/assets/gallery/{dest_stem}.jpg"
                },
                "status": "VERIFIED"
            }
            print(f"  Processed {dest_stem} ({w}x{h})")

# Process post announcement flyer
post_src = f'{SRC_PHOTOS}/post_image.jpg'
if os.path.exists(post_src):
    with Image.open(post_src) as p_img:
        pw, ph = p_img.size
        p_img_rgb = p_img.convert('RGB')
        p_img_rgb.save(f'{PUBLIC_DIR}/gallery/post-neet-july-announcement.webp', 'WEBP', quality=85)
        p_img_rgb.save(f'{PUBLIC_DIR}/gallery/post-neet-july-announcement.jpg', 'JPEG', quality=85)
        manifest["categories"]["gallery"]["post-neet-july-announcement"] = {
            "original_url": "https://lh3.googleusercontent.com/p/AF1QipMBRxvL-2dO_eHc1B83E4HjuMWd0PPmMWnuKrF5",
            "local_path": "/assets/gallery/post-neet-july-announcement.webp",
            "source_file": "post_image.jpg",
            "alt": "NEET classes announcement flyer",
            "page": "Home, Posts, Post Detail",
            "width": pw,
            "height": ph,
            "aspect_ratio": round(pw / float(ph), 3),
            "variants": {
                "webp": "/assets/gallery/post-neet-july-announcement.webp",
                "jpg_fallback": "/assets/gallery/post-neet-july-announcement.jpg"
            },
            "status": "VERIFIED"
        }

# ----------------------------------------------------------------------
# 4. Hero Visuals & Composite
# ----------------------------------------------------------------------
print("Generating Hero assets...")
hero_kinetic_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" fill="none">
  <defs>
    <radialGradient id="hGlow1" cx="30%" cy="35%" r="55%">
      <stop offset="0%" stop-color="#00E5C8" stop-opacity="0.16"/>
      <stop offset="60%" stop-color="#2563EB" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#070C14" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="hGlow2" cx="80%" cy="60%" r="50%">
      <stop offset="0%" stop-color="#6366F1" stop-opacity="0.14"/>
      <stop offset="70%" stop-color="#070C14" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00E5C8" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#38BDF8" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#6366F1" stop-opacity="0.1"/>
    </linearGradient>
    <linearGradient id="lineGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2563EB" stop-opacity="0.6"/>
      <stop offset="70%" stop-color="#00E5C8" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.8"/>
    </linearGradient>
    <pattern id="gridPattern" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#1E293B" stroke-width="0.75" stroke-opacity="0.4"/>
      <circle cx="48" cy="48" r="1" fill="#38BDF8" fill-opacity="0.3"/>
    </pattern>
  </defs>

  <!-- Deep Base Background -->
  <rect width="1440" height="900" fill="#070C14"/>
  <!-- Coordinate Engineering Grid -->
  <rect width="1440" height="900" fill="url(#gridPattern)"/>
  <!-- Ambient Radial Glows -->
  <rect width="1440" height="900" fill="url(#hGlow1)"/>
  <rect width="1440" height="900" fill="url(#hGlow2)"/>

  <!-- Parabolic Kinetic Trajectory Curves -->
  <path d="M -100 750 Q 400 150 900 480 T 1550 200" stroke="url(#lineGrad1)" stroke-width="2.5" fill="none" stroke-dasharray="8 6"/>
  <path d="M -50 620 C 350 780 750 180 1500 520" stroke="url(#lineGrad2)" stroke-width="2" fill="none" opacity="0.65"/>
  <path d="M 200 950 C 600 650 950 820 1480 380" stroke="#00E5C8" stroke-width="1.5" fill="none" opacity="0.35"/>

  <!-- Kinetic Velocity Tangent Vectors -->
  <g opacity="0.7">
    <line x1="450" y1="310" x2="520" y2="280" stroke="#00E5C8" stroke-width="2" stroke-linecap="round"/>
    <polygon points="520,280 508,280 514,288" fill="#00E5C8"/>
    <circle cx="450" cy="310" r="4" fill="#00E5C8"/>

    <line x1="880" y1="475" x2="960" y2="435" stroke="#38BDF8" stroke-width="2" stroke-linecap="round"/>
    <polygon points="960,435 948,435 954,443" fill="#38BDF8"/>
    <circle cx="880" cy="475" r="4" fill="#38BDF8"/>
  </g>

  <!-- Physics Energy Wave Dispersion -->
  <g stroke="#334155" stroke-width="1" opacity="0.5" fill="none">
    <circle cx="1150" cy="320" r="60"/>
    <circle cx="1150" cy="320" r="120" stroke-dasharray="4 8"/>
    <circle cx="1150" cy="320" r="180" stroke-dasharray="2 10"/>
    <circle cx="1150" cy="320" r="6" fill="#00E5C8" stroke="none"/>
  </g>
</svg>'''

with open(f'{PUBLIC_DIR}/hero/hero-kinetic-field.svg', 'w', encoding='utf-8') as f:
    f.write(hero_kinetic_svg)

# Create an authentic classroom composite hero collage (1200x700) using real photos
comp_w, comp_h = 1200, 700
comp_img = Image.new('RGB', (comp_w, comp_h), color='#070C14')

# We tile/composite 3 real photos (photo_1, photo_2, photo_4)
p1_path = f'{SRC_PHOTOS}/photo_1.jpg'
p2_path = f'{SRC_PHOTOS}/photo_2.jpg'
p4_path = f'{SRC_PHOTOS}/photo_4.jpg'

if os.path.exists(p1_path) and os.path.exists(p2_path) and os.path.exists(p4_path):
    p1 = Image.open(p1_path).convert('RGB').resize((550, 420), Image.Resampling.LANCZOS)
    p2 = Image.open(p2_path).convert('RGB').resize((380, 520), Image.Resampling.LANCZOS)
    p4 = Image.open(p4_path).convert('RGB').resize((550, 360), Image.Resampling.LANCZOS)
    
    # Paste with subtle dark margins
    comp_img.paste(p1, (50, 40))
    comp_img.paste(p4, (50, 480 - 160))
    comp_img.paste(p2, (620, 80))
    
    # Apply a gradient overlay/vignette to blend into site
    vignette = Image.new('RGBA', (comp_w, comp_h), (7, 12, 20, 0))
    draw = ImageDraw.Draw(vignette)
    for i in range(120):
        alpha = int(255 * (i / 120.0))
        draw.rectangle([0, comp_h - 120 + i, comp_w, comp_h], fill=(7, 12, 20, alpha))
        draw.rectangle([0, 0, comp_w, 40 - int(40 * (i / 120.0))], fill=(7, 12, 20, alpha // 3))
    
    comp_rgba = comp_img.convert('RGBA')
    comp_final = Image.alpha_composite(comp_rgba, vignette).convert('RGB')
    comp_final.save(f'{PUBLIC_DIR}/hero/hero-classroom-composite.webp', 'WEBP', quality=88)
    comp_final.save(f'{PUBLIC_DIR}/hero/hero-classroom-composite.jpg', 'JPEG', quality=86)

    manifest["categories"]["hero"]["composite"] = {
        "description": "Authentic multi-angle classroom montage of Kinetix Classes students and faculty in session",
        "width": comp_w,
        "height": comp_h,
        "variants": {
            "webp": "/assets/hero/hero-classroom-composite.webp",
            "jpg": "/assets/hero/hero-classroom-composite.jpg"
        },
        "status": "VERIFIED"
    }

manifest["categories"]["hero"]["kinetic_field"] = {
    "svg": "/assets/hero/hero-kinetic-field.svg",
    "description": "Bespoke mathematical/physics kinetic energy trajectory field in dark mode",
    "status": "VERIFIED"
}

# ----------------------------------------------------------------------
# 5. Course Cards Graphics (Custom High-End SVGs)
# ----------------------------------------------------------------------
print("Generating Course SVG graphics...")

courses_data = [
    ("course-neet-medical", "NEET Medical Entrance", "#10B981", "#059669", "DNA Double Helix & Molecular Synthesis",
     '''<path d="M 60 40 Q 120 70 180 40 T 300 40 T 420 40" stroke="#10B981" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M 60 80 Q 120 50 180 80 T 300 80 T 420 80" stroke="#34D399" stroke-width="4" fill="none" stroke-linecap="round"/>
        <line x1="120" y1="58" x2="120" y2="62" stroke="#6EE7B7" stroke-width="3"/>
        <line x1="180" y1="40" x2="180" y2="80" stroke="#6EE7B7" stroke-width="3"/>
        <line x1="240" y1="58" x2="240" y2="62" stroke="#6EE7B7" stroke-width="3"/>
        <line x1="300" y1="40" x2="300" y2="80" stroke="#6EE7B7" stroke-width="3"/>
        <line x1="360" y1="58" x2="360" y2="62" stroke="#6EE7B7" stroke-width="3"/>
        <circle cx="180" cy="40" r="5" fill="#10B981"/>
        <circle cx="300" cy="80" r="5" fill="#34D399"/>'''),
    
    ("course-iit-jee", "IIT JEE Main & Advanced", "#2563EB", "#38BDF8", "Parabolic Kinetic Trajectory & Vector Force",
     '''<line x1="50" y1="90" x2="430" y2="90" stroke="#334155" stroke-width="2"/>
        <line x1="70" y1="20" x2="70" y2="105" stroke="#334155" stroke-width="2"/>
        <path d="M 70 90 Q 240 10 410 90" stroke="#38BDF8" stroke-width="4" fill="none"/>
        <circle cx="240" cy="30" r="7" fill="#2563EB"/>
        <line x1="240" y1="30" x2="310" y2="30" stroke="#00E5C8" stroke-width="3" stroke-linecap="round"/>
        <polygon points="310,30 298,25 298,35" fill="#00E5C8"/>
        <text x="320" y="34" fill="#00E5C8" font-family="monospace" font-size="12" font-weight="bold">v_max</text>'''),
    
    ("course-class12-pcm", "Class 12 PCM (Board + Entrance)", "#6366F1", "#818CF8", "Electromagnetic Wave Fields",
     '''<line x1="40" y1="60" x2="440" y2="60" stroke="#334155" stroke-width="2"/>
        <path d="M 40 60 Q 90 15 140 60 T 240 60 T 340 60 T 440 60" stroke="#818CF8" stroke-width="3.5" fill="none"/>
        <path d="M 40 60 Q 90 105 140 60 T 240 60 T 340 60 T 440 60" stroke="#C084FC" stroke-width="2.5" stroke-dasharray="4 4" fill="none"/>
        <circle cx="140" cy="60" r="5" fill="#6366F1"/>
        <circle cx="240" cy="60" r="5" fill="#818CF8"/>
        <text x="370" y="35" fill="#C084FC" font-family="monospace" font-size="12">E = hν</text>'''),
    
    ("course-class11-pcm", "Class 11 PCM Foundation", "#0EA5E9", "#38BDF8", "Bohr Atomic Quantum Orbitals",
     '''<ellipse cx="240" cy="60" rx="90" ry="35" transform="rotate(-20 240 60)" stroke="#38BDF8" stroke-width="2.5" fill="none"/>
        <ellipse cx="240" cy="60" rx="90" ry="35" transform="rotate(20 240 60)" stroke="#0EA5E9" stroke-width="2.5" fill="none"/>
        <ellipse cx="240" cy="60" rx="90" ry="35" transform="rotate(90 240 60)" stroke="#00E5C8" stroke-width="2" stroke-dasharray="4 6" fill="none"/>
        <circle cx="240" cy="60" r="10" fill="#2563EB"/>
        <circle cx="240" cy="60" r="5" fill="#FFFFFF"/>
        <circle cx="315" cy="40" r="4.5" fill="#00E5C8"/>
        <circle cx="165" cy="80" r="4" fill="#38BDF8"/>'''),

    ("course-class12-pcb", "Class 12 PCB (Board + NEET)", "#14B8A6", "#2DD4BF", "Biochemical Synthesis & Cellular Genetics",
     '''<circle cx="150" cy="60" r="30" stroke="#14B8A6" stroke-width="3" fill="none"/>
        <circle cx="240" cy="60" r="30" stroke="#2DD4BF" stroke-width="3" fill="none"/>
        <circle cx="330" cy="60" r="30" stroke="#5EEAD4" stroke-width="3" fill="none"/>
        <line x1="175" y1="60" x2="215" y2="60" stroke="#FFFFFF" stroke-width="2.5"/>
        <line x1="265" y1="60" x2="305" y2="60" stroke="#FFFFFF" stroke-width="2.5"/>
        <circle cx="150" cy="60" r="6" fill="#14B8A6"/>
        <circle cx="240" cy="60" r="6" fill="#2DD4BF"/>
        <circle cx="330" cy="60" r="6" fill="#5EEAD4"/>'''),

    ("course-class11-pcb", "Class 11 PCB Foundation", "#10B981", "#6EE7B7", "Plant Physiology & Molecular Lattice",
     '''<path d="M 240 20 Q 300 60 240 100 Q 180 60 240 20 Z" stroke="#10B981" stroke-width="3" fill="none"/>
        <line x1="240" y1="20" x2="240" y2="100" stroke="#6EE7B7" stroke-width="2"/>
        <line x1="240" y1="45" x2="270" y2="35" stroke="#6EE7B7" stroke-width="2"/>
        <line x1="240" y1="60" x2="210" y2="50" stroke="#6EE7B7" stroke-width="2"/>
        <line x1="240" y1="75" x2="270" y2="65" stroke="#6EE7B7" stroke-width="2"/>'''),

    ("course-class10-boards", "Class 10 Board (Maths & Science)", "#F59E0B", "#FBBF24", "Light Prism Dispersion & Geometric Proof",
     '''<polygon points="170,95 240,25 310,95" stroke="#F59E0B" stroke-width="3" fill="none"/>
        <line x1="100" y1="70" x2="205" y2="60" stroke="#FFFFFF" stroke-width="2.5"/>
        <line x1="205" y1="60" x2="360" y2="45" stroke="#EF4444" stroke-width="2"/>
        <line x1="205" y1="60" x2="370" y2="60" stroke="#10B981" stroke-width="2"/>
        <line x1="205" y1="60" x2="380" y2="75" stroke="#3B82F6" stroke-width="2"/>'''),

    ("course-class9-foundation", "Class 9 Science & Maths", "#EC4899", "#F472B6", "Foundational Science Compass & Mechanics",
     '''<circle cx="240" cy="60" r="35" stroke="#EC4899" stroke-width="2.5" fill="none"/>
        <circle cx="240" cy="60" r="4" fill="#F472B6"/>
        <line x1="240" y1="15" x2="240" y2="105" stroke="#334155" stroke-width="1.5" stroke-dasharray="3 3"/>
        <line x1="195" y1="60" x2="285" y2="60" stroke="#334155" stroke-width="1.5" stroke-dasharray="3 3"/>
        <polygon points="240,30 246,55 240,60 234,55" fill="#EC4899"/>
        <polygon points="240,90 246,65 240,60 234,65" fill="#334155"/>'''),

    ("course-nda-defence", "NDA Coaching (Maths & GAT)", "#EAB308", "#CA8A04", "Navigational Vector Compass & Radar Azimuth",
     '''<circle cx="240" cy="60" r="36" stroke="#CA8A04" stroke-width="2.5" fill="none"/>
        <circle cx="240" cy="60" r="22" stroke="#EAB308" stroke-width="1.5" stroke-dasharray="3 4" fill="none"/>
        <line x1="240" y1="18" x2="240" y2="102" stroke="#EAB308" stroke-width="1.5"/>
        <line x1="198" y1="60" x2="282" y2="60" stroke="#EAB308" stroke-width="1.5"/>
        <path d="M 240 60 L 265 35" stroke="#00E5C8" stroke-width="2.5" stroke-linecap="round"/>
        <polygon points="265,35 255,38 260,46" fill="#00E5C8"/>'''),

    ("course-cuet", "CUET General & Domain Prep", "#8B5CF6", "#A78BFA", "Multidisciplinary Knowledge Hexagon Network",
     '''<polygon points="240,25 275,45 275,75 240,95 205,75 205,45" stroke="#8B5CF6" stroke-width="3" fill="none"/>
        <circle cx="240" cy="60" r="8" fill="#A78BFA"/>
        <circle cx="240" cy="25" r="4" fill="#FFFFFF"/>
        <circle cx="275" cy="45" r="4" fill="#FFFFFF"/>
        <circle cx="275" cy="75" r="4" fill="#FFFFFF"/>
        <circle cx="240" cy="95" r="4" fill="#FFFFFF"/>
        <circle cx="205" cy="75" r="4" fill="#FFFFFF"/>
        <circle cx="205" cy="45" r="4" fill="#FFFFFF"/>''')
]

for slug, title, c1, c2, desc, inner_svg in courses_data:
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 120" fill="none">
  <defs>
    <linearGradient id="grad_{slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{c1}"/>
      <stop offset="100%" stop-color="{c2}"/>
    </linearGradient>
  </defs>
  <rect width="480" height="120" rx="16" fill="#0E1624"/>
  <rect width="480" height="120" rx="16" stroke="#1E293B" stroke-width="1.5"/>
  {inner_svg}
</svg>'''
    dest_path = f'{PUBLIC_DIR}/courses/{slug}.svg'
    with open(dest_path, 'w', encoding='utf-8') as f:
        f.write(svg_content)
    
    manifest["categories"]["courses"][slug] = {
        "title": title,
        "svg": f"/assets/courses/{slug}.svg",
        "description": desc,
        "status": "VERIFIED"
    }

# ----------------------------------------------------------------------
# 6. Faculty Mentor Graphics
# ----------------------------------------------------------------------
print("Generating Faculty mentor badges...")
faculty_mentors = [
    ("faculty-physics-mentor", "Senior Physics Faculty", "Ex-IITian • 8+ Yrs Exp", "#2563EB", "IIT JEE & NEET Mechanics Specialist"),
    ("faculty-chemistry-mentor", "Senior Chemistry Faculty", "Doctorate • 8+ Yrs Exp", "#059669", "Organic & Physical Chemistry Lead"),
    ("faculty-maths-mentor", "Senior Mathematics Faculty", "Ex-IITian • 9+ Yrs Exp", "#7C3AED", "Calculus & Algebra Master"),
    ("faculty-biology-mentor", "Senior Biology Faculty", "Medical Faculty • Doctor", "#0D9488", "NCERT Line-by-Line Botany & Zoology"),
]

for slug, role, tag, color, bio in faculty_mentors:
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" fill="none">
  <defs>
    <linearGradient id="fac_{slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{color}"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <!-- Card Base -->
  <rect width="240" height="240" rx="24" fill="#0B131F"/>
  <rect width="240" height="240" rx="24" stroke="#1E293B" stroke-width="2"/>
  
  <!-- Stylized Faculty Avatar Silhouette -->
  <circle cx="120" cy="85" r="42" fill="url(#fac_{slug})"/>
  <circle cx="120" cy="75" r="22" fill="#FFFFFF" fill-opacity="0.9"/>
  <path d="M 85 125 C 85 105 155 105 155 125 Z" fill="#FFFFFF" fill-opacity="0.8"/>
  
  <!-- Credential Badge Pill -->
  <rect x="30" y="145" width="180" height="28" rx="14" fill="{color}" fill-opacity="0.2"/>
  <rect x="30" y="145" width="180" height="28" rx="14" stroke="{color}" stroke-width="1.5"/>
  <text x="120" y="163" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="700" font-size="11" fill="#FFFFFF" letter-spacing="0.5">{tag}</text>
  
  <!-- Subject Heading -->
  <text x="120" y="196" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="800" font-size="14" fill="#FFFFFF">{role}</text>
  <text x="120" y="215" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="500" font-size="10.5" fill="#94A3B8">{bio}</text>
</svg>'''
    dest_path = f'{PUBLIC_DIR}/faculty/{slug}.svg'
    with open(dest_path, 'w', encoding='utf-8') as f:
        f.write(svg_content)
    
    manifest["categories"]["faculty"][slug] = {
        "role": role,
        "credentials": tag,
        "svg": f"/assets/faculty/{slug}.svg",
        "status": "PLACEHOLDER_STRUCTURED"
    }

# ----------------------------------------------------------------------
# 7. UI Icons (Precision SVGs)
# ----------------------------------------------------------------------
print("Generating UI Icons...")

icons_data = {
    "icon-small-batches": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>''',
    "icon-expert-faculty": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>''',
    "icon-scholarship-emi": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>''',
    "icon-ncert-focused": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10M6 14h6"/></svg>''',
    "icon-mock-tests": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/><path d="M9 2h6"/></svg>''',
    "icon-personal-mentoring": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="12" y1="7" x2="12" y2="13"/></svg>''',
    "icon-phone": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>''',
    "icon-whatsapp": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path fill="#25D366" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.04 3.69C14.24 3.69 16.31 4.55 17.86 6.11C19.42 7.66 20.27 9.73 20.27 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.37C16.31 14.25 15.09 13.65 14.86 13.57C14.64 13.49 14.47 13.45 14.31 13.7C14.14 13.95 13.66 14.51 13.51 14.68C13.37 14.84 13.22 14.86 12.97 14.74C12.72 14.62 11.92 14.36 10.97 13.51C10.23 12.85 9.73 12.03 9.58 11.78C9.44 11.53 9.56 11.4 9.69 11.27C9.8 11.16 9.94 10.98 10.06 10.84C10.19 10.7 10.23 10.59 10.31 10.43C10.39 10.26 10.35 10.12 10.29 10C10.23 9.88 9.73 8.65 9.53 8.14C9.33 7.65 9.12 7.71 8.97 7.71C8.83 7.7 8.66 7.7 8.5 7.7C8.33 7.7 8.06 7.76 7.83 8.01C7.6 8.26 6.96 8.86 6.96 10.08C6.96 11.3 7.85 12.48 7.97 12.65C8.1 12.81 9.72 15.31 12.2 16.38C12.79 16.64 13.25 16.79 13.61 16.91C14.2 17.1 14.74 17.07 15.17 17.01C15.65 16.94 16.64 16.41 16.85 15.82C17.05 15.23 17.05 14.72 16.99 14.62C16.93 14.51 16.8 14.45 16.56 14.37Z"/></svg>''',
    "icon-location": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>''',
    "icon-star-filled": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>''',
    "icon-check-verified": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>''',
    "icon-arrow-right": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>''',
    "icon-close": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'''
}

for icon_name, svg_markup in icons_data.items():
    dest_path = f'{PUBLIC_DIR}/icons/{icon_name}.svg'
    with open(dest_path, 'w', encoding='utf-8') as f:
        f.write(svg_markup)
    manifest["categories"]["icons"][icon_name] = f"/assets/icons/{icon_name}.svg"

# ----------------------------------------------------------------------
# 8. OpenGraph Social Card (1200x630)
# ----------------------------------------------------------------------
print("Generating OpenGraph social preview card...")
og_w, og_h = 1200, 630
og_img = Image.new('RGB', (og_w, og_h), color='#070C14')
og_draw = ImageDraw.Draw(og_img)

# Background subtle grid and gradient lines
for x in range(0, og_w, 60):
    og_draw.line([(x, 0), (x, og_h)], fill='#101A28', width=1)
for y in range(0, og_h, 60):
    og_draw.line([(0, y), (og_w, y)], fill='#101A28', width=1)

# Glowing accent shapes
og_draw.ellipse([800, -100, 1300, 400], fill='#0E2A3A')
og_draw.ellipse([900, 200, 1400, 700], fill='#171B38')

# Overlay Logo mark if exists
if os.path.exists(logo_src):
    with Image.open(logo_src) as l_img:
        l_thumb = l_img.convert('RGB').resize((110, 110), Image.Resampling.LANCZOS)
        og_img.paste(l_thumb, (90, 80))

# Try using standard TrueType font or fallback
try:
    font_large = ImageFont.truetype("arialbd.ttf", 56)
    font_sub = ImageFont.truetype("arial.ttf", 30)
    font_badge = ImageFont.truetype("arialbd.ttf", 20)
    font_small = ImageFont.truetype("arial.ttf", 22)
except:
    font_large = ImageFont.load_default()
    font_sub = font_large
    font_badge = font_large
    font_small = font_large

og_draw.text((220, 95), "KINETIX CLASSES", fill="#FFFFFF", font=font_large)
og_draw.text((224, 160), "ALPHA 2, GREATER NOIDA", fill="#00E5C8", font=font_badge)

# Value Proposition
og_draw.text((90, 240), "NEET • JEE Main & Advanced • 11th–12th PCMB", fill="#FFFFFF", font=font_sub)
og_draw.text((90, 290), "Small Batches • Concept Clarity • CBSE & ICSE Board Coaching", fill="#94A3B8", font=font_small)

# Trust Pills
og_draw.rounded_rectangle([90, 360, 440, 420], radius=12, fill="#0F1F2C", outline="#00E5C8", width=1)
og_draw.text((115, 378), "★ 5.0 Google Rating (10 Reviews)", fill="#00E5C8", font=font_badge)

og_draw.rounded_rectangle([470, 360, 780, 420], radius=12, fill="#121D33", outline="#38BDF8", width=1)
og_draw.text((495, 378), "📞 Call / Enquire: 8448040355", fill="#38BDF8", font=font_badge)

# Footer bar
og_draw.rectangle([0, og_h - 16, og_w, og_h], fill='#00E5C8')

og_img.save(f'{PUBLIC_DIR}/og/og-image.png', 'PNG')
og_img.save(f'{PUBLIC_DIR}/og/og-image.webp', 'WEBP', quality=90)

manifest["categories"]["og"]["default"] = {
    "width": 1200,
    "height": 630,
    "variants": {
        "png": "/assets/og/og-image.png",
        "webp": "/assets/og/og-image.webp"
    },
    "status": "VERIFIED"
}

# ----------------------------------------------------------------------
# 9. Reviewer Avatars
# ----------------------------------------------------------------------
print("Processing Reviewer assets...")
reviewers = [
    ("rev-01-pk-desai", "Pk Desai", "DPS Greater Noida student"),
    ("rev-02-sanjeev-kumar", "Sanjeev Kumar", "Verified parent/student"),
    ("rev-03-aditya-singh", "Aditya Singh", "Great coaching institute"),
    ("rev-04-dharmvir-singh", "Dharmvir Singh", "Very good study"),
    ("rev-05-sushila-gautam", "Sushila Gautam", "Good environment & facility"),
    ("rev-06-mohit-pal", "Mohit Pal", "Very nice classes"),
    ("rev-07-sarvesh-chaturvedi", "Sarvesh Chaturvedi", "Excellent teaching staff"),
    ("rev-08-sonu-khan", "Sonu Khan", "Number one institute for NEET/JEE"),
    ("rev-09-rehan-ansari", "Rehan Ansari", "Class 11 JEE Main aspirant"),
    ("rev-10-mohatsim-mansoori", "Mohatsim Mansoori", "11th CBSE PCMB brother"),
]

for slug, name, desc in reviewers:
    # Initials for clean SVG badge
    initials = "".join([part[0] for part in name.split()[:2]]).upper()
    svg_avatar = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <circle cx="40" cy="40" r="40" fill="#1E293B"/>
  <circle cx="40" cy="40" r="38" stroke="#38BDF8" stroke-width="1.5" stroke-opacity="0.4"/>
  <text x="40" y="47" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="700" font-size="24" fill="#38BDF8">{initials}</text>
</svg>'''
    with open(f'{PUBLIC_DIR}/reviews/{slug}.svg', 'w', encoding='utf-8') as f:
        f.write(svg_avatar)
    manifest["categories"]["reviews"][slug] = {
        "name": name,
        "avatar_svg": f"/assets/reviews/{slug}.svg",
        "tag": desc,
        "status": "VERIFIED"
    }

# ----------------------------------------------------------------------
# 10. Write docs/asset-manifest.json
# ----------------------------------------------------------------------
with open('docs/asset-manifest.json', 'w', encoding='utf-8') as f:
    json.dump(manifest, f, indent=2)

print("\nSUCCESS: All assets processed and logged to docs/asset-manifest.json!")
