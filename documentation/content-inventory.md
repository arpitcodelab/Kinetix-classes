# Kinetix Classes — Verbatim Content Inventory

> **Document Status:** Complete Phase 1 Audit Deliverable  
> **Source Website:** `https://kinetix-classes-for.grexa.site/`  
> **Extraction Method:** Automated Playwright headless Chromium crawl + full DOM traversal + screenshot verification  
> **Tagging Standard:**  
> - `[VERIFIED]` — Present and extracted verbatim from source DOM/rendered website.  
> - `[NEEDS VERIFICATION]` — Present on source but contains ambiguity, conflicting data, unverified claims, or suspicious timestamps.  
> - `[MISSING]` — Essential educational website section not present on source site; requires client input before implementation.

---

## 1. Global / Header & Navigation (All Pages)

| Element | Source Content / Target | Status | Notes |
|---|---|---|---|
| **Site Logo / Avatar** | Circular avatar image with stylized icon | `[VERIFIED]` | 512x512 JPEG/PNG hosted on Google CDN (`logo_avatar.jpg`) |
| **Brand Name** | `Kinetix Classes For Neet and Jee` | `[VERIFIED]` | Exact text used in header, titles, and footer |
| **Phone Link** | `8448040355` (`tel:8448040355`) | `[VERIFIED]` | Consistent across all pages |
| **Header Address Link** | `Greater Noida, Uttar Pradesh, 201310` | `[VERIFIED]` | Links to Google Maps Place ID `ChIJC5tZtyfrDDkR2WHg2F06RR8` |
| **Hours Trigger Pill** | `Business hours: Monday-Sunday: 24 hours` | `[NEEDS VERIFICATION]` | Displayed in header pill; 24/7 hours is standard Google Business profile default, unrealistic for offline coaching center |
| **Nav Link: Home** | Text: `Home` → `/` | `[VERIFIED]` | HTTP 200 |
| **Nav Link: Products & Services** | Text: `Products & Services` → `/products-services` | `[VERIFIED]` | HTTP 200 |
| **Nav Link: About** | Text: `About` → `/about` | `[VERIFIED]` | HTTP 200 |
| **Nav Link: Contact** | Text: `Contact` → `/contact` | `[VERIFIED]` | HTTP 200 |
| **Nav Link: Posts** | Text: `Posts` → `/posts` | `[VERIFIED]` | HTTP 200 |
| **Header CTA Button** | `Contact us` | `[VERIFIED]` | Opens slideover lead modal / form trigger |
| **Mobile Menu Toggle** | Hamburger button (`aria-label="Open menu"`) | `[VERIFIED]` | Mobile breakpoint 390px |
| **Sticky Mobile CTA** | Floating bar with `Contact us` (`website_stickyLeadButton`) | `[VERIFIED]` | Visible on mobile viewport |

---

## 2. Page: Home (`/`)

- **URL:** `https://kinetix-classes-for.grexa.site/`
- **Page Title:** `Kinetix Classes For Neet and Jee - Best Coaching Center Near me in 3rd Street Alpha 2, Greater Noida` `[VERIFIED]`
- **Meta Description:** `Kinetix Classes | NEET Coaching, JEE Coaching & 11th 12th PCMB in Alpha 2, Greater Noida* Kinetix Classes at I-120, Alpha 2, Greater Noida is a trusted coaching institute` `[VERIFIED]`
- **OG / Social Meta:** `og:title`, `og:description`, `og:image` (`https://lh3.googleusercontent.com/a-/ALV-UjV1...`), `twitter:card="summary_large_image"` `[VERIFIED]`

### 2.1 Hero Section
- **H1:** `Kinetix Classes For Neet and Jee - Coaching Center` `[VERIFIED]`
- **Verbatim Paragraph Copy:**  
  `[VERIFIED]`
  > "Kinetix Classes | NEET Coaching,  
  > JEE Coaching & 11th 12th PCMB in Alpha 2, Greater Noida*  
  > Kinetix Classes at I-120, Alpha 2, Greater Noida is a trusted coaching institute for NEET, JEE Main, JEE Advanced, 11th 12th Physics Chemistry Maths Biology PCB/PCM. We provide complete science coaching for Class 9, 10, 11 & 12 with board + competitive exam preparation.  
  > Our Courses:NEET Coaching in Greater Noida, JEE Coaching in Greater Noida, 11th 12th PCMB Coaching, 9th 10th Foundation Course, Dropper & Crash Batch.  
  > Why Students Choose Kinetix:  
  > 1. Affordable Fee Structure: Low fee with Scholarship Test + Easy EMI option  
  > 2. Expert Faculty: IITians & Doctors with 8+ years of NEET/JEE teaching experience  
  > 3. Personal Attention: Small batch size."
- **CTAs:**
  - `Contact us` (Button) `[VERIFIED]`
  - `8448040355` (`tel:8448040355`) `[VERIFIED]`

### 2.2 Business Overview Aside / Quick Facts
- **What we do (Heading / dt):** `What we do` `[VERIFIED]`
- **What we do (Content / dd):** `Coaching Center, Private Tutor, Learning Centre, Studying Centre, Training centre, Education Centre, Tutor, Educational institution, Educational testing service` `[VERIFIED]` *(Automated Google category tag dump)*
- **Location (Heading / dt):** `Location` `[VERIFIED]`
- **Location (Content / dd):** `I 120 Alpha 2 Greater Noida 201310, 3rd Street Alpha 2, Greater Noida, Uttar Pradesh, 201310` `[VERIFIED]`
- **Business Hours Dialog:**
  - `Monday: 24 hours` `[NEEDS VERIFICATION]`
  - `Tuesday: 24 hours` `[NEEDS VERIFICATION]`
  - `Wednesday: 24 hours` `[NEEDS VERIFICATION]`
  - `Thursday: 24 hours` `[NEEDS VERIFICATION]`
  - `Friday: 24 hours` `[NEEDS VERIFICATION]`
  - `Saturday: 24 hours` `[NEEDS VERIFICATION]`
  - `Sunday: 24 hours` `[NEEDS VERIFICATION]`
  - Dialog note: `You can contact us anytime during the day with your query.` `[VERIFIED]`

### 2.3 Services Section
- **Section Heading (H2):** `Services From The Best Coaching Center in Greater Noida` `[VERIFIED]`
- **Service Offerings (10 Items):**
  1. **H3:** `JEE Coaching classes` `[VERIFIED]`  
     **Copy:** "Structured preparation for JEE Main and Advanced with experienced faculty, concept-building, problem-solving practice, mock tests, and performance analysis. IIT JEE Coaching Greater Noida JEE Main Coaching JEE Advanced Coaching Best JEE Institute" `[VERIFIED]`  
     **CTA:** `Enquire` (Button) `[VERIFIED]`
  2. **H3:** `NEET Coaching classes` `[VERIFIED]`  
     **Copy:** "Comprehensive NEET preparation with Biology, Physics, Chemistry, NCERT-based learning, test series, previous-year questions, and regular mentoring. Best NEET Coaching Greater Noida NEET Preparation Medical Entrance Coaching" `[VERIFIED]`  
     **CTA:** `Enquire` (Button) `[VERIFIED]`
  3. **H3:** `NDA Coaching classess` `[VERIFIED]` *(Typo "classess" verbatim from source)*  
     **Copy:** "NDA coaching with Mathematics, General Ability Test (GAT), English, reasoning, mock tests, and interview guidance. NDA Coaching Greater Noida. NDA Preparation Defence Exam Coaching Defence Exam Coaching" `[VERIFIED]` *(Duplicated phrase "Defence Exam Coaching" verbatim)*  
     **CTA:** `Enquire` (Button) `[VERIFIED]`
  4. **H3:** `CUET Coaching classes` `[VERIFIED]`  
     **Copy:** "Complete CUET coaching with subject preparation, aptitude training, mock tests, and exam strategy sessions. CUET Coaching Greater Noida CUET Classes CUET Preparation" `[VERIFIED]`  
     **CTA:** `Enquire` (Button) `[VERIFIED]`
  5. **H3:** `Class 12 PCB Coaching` `[VERIFIED]`  
     **Copy:** "Class 12 PCB coaching in Greater Noida covering Physics, Chemistry and Biology for CBSE, ICSE and NEET preparation. Regular assessments, NCERT-based teaching, doubt sessions and expert faculty help students achieve top scores." `[VERIFIED]`  
     **CTA:** `Enquire` (Button) `[VERIFIED]`
  6. **H3:** `Class 11 PCM Coaching` `[VERIFIED]`  
     **Copy:** "Class 11 PCM coaching in Greater Noida with expert faculty for Physics, Chemistry and Mathematics. Ideal for CBSE and ICSE students preparing for school exams and IIT JEE foundation with regular tests, assignments and doubt-solving sessions." `[VERIFIED]`  
     **CTA:** `Enquire` (Button) `[VERIFIED]`
  7. **H3:** `Class 12 PCM Coaching` `[VERIFIED]`  
     **Copy:** "Class 12 PCM coaching in Greater Noida for board exams and IIT JEE preparation. Expert coaching in Physics, Chemistry and Mathematics with weekly tests, previous year papers, revision classes and personalized mentoring for excellent results." `[VERIFIED]`  
     **CTA:** `Enquire` (Button) `[VERIFIED]`
  8. **H3:** `ICSE Physics , Chemistry , Maths , Biology Classes` `[VERIFIED]`  
     **Copy:** "ICSE Physics, Chemistry, Maths & Biology Classes in Greater Noida by Kinetix Classes provide expert coaching for Classes 11 & 12 with experienced faculty, small batches, regular tests, practical learning, doubt-solving sessions and complete board exam preparation for excellent academic performance." `[VERIFIED]`  
     **CTA:** `Enquire` (Button) `[VERIFIED]`
  9. **H3:** `CBSE Physics, Chemistry, Math and Biology Coaching` `[VERIFIED]`  
     **Copy:** "CBSE Physics, Chemistry, Maths & Biology Coaching in Greater Noida by Kinetix Classes offers expert coaching for Classes 11 & 12 with experienced faculty, small batches, concept-based learning, regular tests, doubt-solving sessions and complete preparation for CBSE board exams, NEET and IIT JEE." `[VERIFIED]`  
     **CTA:** `Enquire` (Button) `[VERIFIED]`
  10. **H3:** `Class 10 Board Coaching for Math and science` `[VERIFIED]`  
      **Copy:** "Class 10 board coaching in Greater Noida for CBSE and ICSE students covering Mathematics, Science, English, Hindi and Social Science. Chapter-wise practice, sample papers, mock tests and expert guidance help students score high in board exams." `[VERIFIED]`  
      **CTA:** `Enquire` (Button) `[VERIFIED]`
- **Section Link:** `View all services` → `/products-services` `[VERIFIED]`

### 2.4 Products Section
- **Section Heading (H2):** `Products from Kinetix Classes For Neet and Jee in Greater Noida` `[VERIFIED]`
- **Product Offerings (8 Items):**
  1. **H3:** `Class 12 PCB Coaching in Greater Noida` `[VERIFIED]`  
     **Image:** `https://lh3.googleusercontent.com/glsgmb/AMnFcurbFRmu...` (`prod_12pcb.jpg`) `[VERIFIED]`  
     **CTA:** `Enquire` `[VERIFIED]`
  2. **H3:** `Class 10 Board Coaching Near me.` `[VERIFIED]`  
     **Image:** `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXj...` (`prod_10board.jpg`) `[VERIFIED]`  
     **CTA:** `Enquire` `[VERIFIED]`
  3. **H3:** `Class 11 PCM Coaching in Greater Noida.` `[VERIFIED]`  
     **Image:** `https://lh3.googleusercontent.com/glsgmb/AMnFcuo-yh...` (`prod_11pcm.jpg`) `[VERIFIED]`  
     **CTA:** `Enquire` `[VERIFIED]`
  4. **H3:** `NEET Coaching in Greater Noida` `[VERIFIED]`  
     **Image:** `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJc...` (`prod_neet.jpg`) `[VERIFIED]`  
     **CTA:** `Enquire` `[VERIFIED]`
  5. **H3:** `Class 12 PCM Coaching in Greater Noida` `[VERIFIED]`  
     **Image:** `https://lh3.googleusercontent.com/glsgmb/AMnFcup_5T...` (`prod_12pcm.jpg`) `[VERIFIED]`  
     **CTA:** `Enquire` `[VERIFIED]`
  6. **H3:** `Class 11 PCB Coaching in Greater Noida` `[VERIFIED]`  
     **Image:** `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUT...` (`prod_11pcb.jpg`) `[VERIFIED]`  
     **CTA:** `Enquire` `[VERIFIED]`
  7. **H3:** `IIT JEE Coaching in Greater Noida` `[VERIFIED]`  
     **Image:** `https://lh3.googleusercontent.com/glsgmb/AMnFcurglJ...` (`prod_iitjee.jpg`) `[VERIFIED]`  
     **CTA:** `Enquire` `[VERIFIED]`
  8. **H3:** `Class 9 Coaching classes` `[VERIFIED]`  
     **Image:** `https://lh3.googleusercontent.com/glsgmb/AMnFcuqSho...` (`prod_class9.jpg`) `[VERIFIED]`  
     **CTA:** `Enquire` `[VERIFIED]`
- **Section Link:** `View all products` → `/products-services?tab=products` `[VERIFIED]`

### 2.5 Photo Gallery Section
- **Section Heading (H2):** `Our photo gallery` `[VERIFIED]`
- **Subtitle:** `Kinetix Classes For Neet and Jee · Photos` `[VERIFIED]`
- **Button:** `View all photos (18)` `[VERIFIED]` *(Note: Exactly 10 distinct photo URLs are populated in the DOM)*
- **Photos Rendered (10 Items):**
  - Photo 1: Classroom board & teaching (`photo_1.jpg`) `[VERIFIED]`
  - Photo 2: Students in classroom (`photo_2.jpg`) `[VERIFIED]`
  - Photo 3: Whiteboard problem-solving (`photo_3.jpg`) `[VERIFIED]`
  - Photo 4: Classroom view (`photo_4.jpg`) `[VERIFIED]`
  - Photo 5: Class study session (`photo_5.jpg`) `[VERIFIED]`
  - Photo 6: Exterior / entrance / signage (`photo_6.jpg`) `[VERIFIED]`
  - Photo 7: Classroom angle 2 (`photo_7.jpg`) `[VERIFIED]`
  - Photo 8: Classroom angle 3 (`photo_8.jpg`) `[VERIFIED]`
  - Photo 9: Study hall / desks (`photo_9.jpg`) `[VERIFIED]`
  - Photo 10: Faculty instruction (`photo_10.jpg`) `[VERIFIED]`

### 2.6 Google Reviews Section
- **Section Heading (H2):** `Google reviews` `[VERIFIED]`
- **Aggregate Rating:** 5.0 Stars (Based on 10 reviews) `[VERIFIED]`
- **Review Items (10 Verbatim Reviews):**
  1. **Author:** `Pk Desai` | **Date:** `September 23, 2026` | **Rating:** 5 Stars  
     **Copy:** "I m studying in dps greater noida,After the joining this coaching all doubts are clear , Teachers are really good they explain all topics very precisely, Join now" `[VERIFIED]`
  2. **Author:** `Sanjeev Kumar` | **Date:** `September 2, 2026` | **Rating:** 5 Stars  
     **Copy:** "Good" `[VERIFIED]`
  3. **Author:** `Aditya Singh` | **Date:** `September 2, 2026` | **Rating:** 5 Stars  
     **Copy:** "Great coaching institute with supportive teachers and a good learning environment. Highly recommended!" `[VERIFIED]`
  4. **Author:** `Dharmvir Singh` | **Date:** `August 31, 2026` | **Rating:** 5 Stars  
     **Copy:** "Very good study Understand properly" `[VERIFIED]`
  5. **Author:** `Sushila Gautam` | **Date:** `August 27, 2026` | **Rating:** 5 Stars  
     **Copy:** "Good environment and facility for studies and best prepartion for jee and neet with experienced teacher" `[VERIFIED]`
  6. **Author:** `Mohit Pal` | **Date:** `August 27, 2026` | **Rating:** 5 Stars  
     **Copy:** "Very nice classes and very handsome teacher 😊" `[VERIFIED]`
  7. **Author:** `Sarvesh Chaturvedi` | **Date:** `August 14, 2026` | **Rating:** 5 Stars  
     **Copy:** "The teaching staff are excellent and they took care personally of each and every student. the teaching staff even explains all the things step by step..." `[VERIFIED]`
  8. **Author:** `Sonu Khan` | **Date:** `August 11, 2026` | **Rating:** 5 Stars  
     **Copy:** "Number one institute for neet , jee , 11th , 12th , pcm and pcb in greater Noida , I m preparing for neet this year all the teachers are very experienced and highly qualified ! Highly suggested" `[VERIFIED]`
  9. **Author:** `Rehan Ansari` | **Date:** `August 11, 2026` | **Rating:** 5 Stars  
     **Copy:** "am preparing for JEE Main and joined KINETIX Classes for Class 11 Physics, Chemistry, and Mathematics. The faculty is experienced, the study material is well organized, and the mock tests are very helpful. One of the best coaching institutes in Greater Noida for JEE, CBSE Class 11, and Class 12 students." `[VERIFIED]`
  10. **Author:** `Mohatsim Mansoori` | **Date:** `August 10, 2026` | **Rating:** 5 Stars  
      **Copy:** "My brother is in 11th CBSE PCMB at Kinetix Classes. They cover board + NEET/JEE syllabus together. Physics, Chemistry, Maths, Biology faculty are very experienced and focus on concept clarity and practical knowledge. They also help ICSE students with board preparation. Small batches and weekly tests keep the student on track." `[VERIFIED]`
- **CTA Link:** `Read all reviews on Google` → `https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJC5tZtyfrDDkR2WHg2F06RR8` `[VERIFIED]`

### 2.7 Latest Posts & Updates Section
- **Section Heading (H2):** `Latest Posts & Updates` `[VERIFIED]`
- **Post Item:**
  - **H3 / Title:** `Neet classes start from 1 st july ..` `[VERIFIED]`
  - **Date:** `July 3, 2026` `[VERIFIED]`
  - **Image:** `https://lh3.googleusercontent.com/p/AF1QipMBRxvL-2dO...` (`post_image.jpg`) `[VERIFIED]`
  - **Link:** `Read full post` → `/posts/neet-classes-start-from-1-st-july__8147479800874660152` `[VERIFIED]`
- **Section Link:** `View all posts` → `/posts` `[VERIFIED]`

### 2.8 Lead Banner / Call to Action
- **Heading:** `Your next step starts here.` `[VERIFIED]`
- **Copy:** `Tell Kinetix Classes For Neet and Jee what you’re looking for. We’re here to help you get started.` `[VERIFIED]`
- **Button:** `Contact us` `[VERIFIED]`

### 2.9 Global Footer
- **Brand Heading:** `Kinetix Classes For Neet and Jee` `[VERIFIED]`
- **Footer Excerpt:** `Kinetix Classes | NEET Coaching, JEE Coaching & 11th 12th PCMB in Alpha 2, Greater Noida* Kinetix Classes at I-120, Alpha 2, Greater Noida is a trusted coaching institute for NEET, JEE Main, JEE Advanced, 11th 12th Physics Chemistry Math... Read more` `[VERIFIED]`
- **Quick Links (Heading):** `Quick links` `[VERIFIED]`
  - `Home` (`/`) `[VERIFIED]`
  - `Products & Services` (`/products-services`) `[VERIFIED]`
  - `About` (`/about`) `[VERIFIED]`
  - `Contact` (`/contact`) `[VERIFIED]`
  - `Privacy Policy` (`/privacy-policy`) `[VERIFIED]`
  - `Posts` (`/posts`) `[VERIFIED]`
- **Contact Us (Heading):** `Contact us` `[VERIFIED]`
  - Subtext: `Looking for the right Coaching Center?` `[VERIFIED]`
  - Phone: `8448040355` (`tel:8448040355`) `[VERIFIED]`
  - Map link: `Get directions on Google Maps (opens in a new tab)` `[VERIFIED]`
  - Map link: `View map on Google Maps (opens in a new tab)` `[VERIFIED]`
- **Site Credit:** `Grexa` (`https://grexa.ai/`) `[VERIFIED]`

---

## 3. Page: About (`/about`)

- **URL:** `https://kinetix-classes-for.grexa.site/about`
- **Page Title:** `About | Kinetix Classes For Neet and Jee` `[VERIFIED]`
- **Meta Description:** `Get to know Kinetix Classes For Neet and Jee, offering Coaching Center, Private Tutor, Learning Centre, Studying Centre. Browse our photos and get in touch.` `[VERIFIED]`
- **H1:** `About Kinetix Classes For Neet and Jee` `[VERIFIED]`
- **Section Content:**
  - Repeats the verbatim hero copy:
    > "Kinetix Classes | NEET Coaching,  
    > JEE Coaching & 11th 12th PCMB in Alpha 2, Greater Noida*  
    > Kinetix Classes at I-120, Alpha 2, Greater Noida is a trusted coaching institute for NEET, JEE Main, JEE Advanced, 11th 12th Physics Chemistry Maths Biology PCB/PCM. We provide complete science coaching for Class 9, 10, 11 & 12 with board + competitive exam preparation.  
    > Our Courses:NEET Coaching in Greater Noida, JEE Coaching in Greater Noida, 11th 12th PCMB Coaching, 9th 10th Foundation Course, Dropper & Crash Batch.  
    > Why Students Choose Kinetix:  
    > 1. Affordable Fee Structure: Low fee with Scholarship Test + Easy EMI option  
    > 2. Expert Faculty: IITians & Doctors with 8+ years of NEET/JEE teaching experience  
    > 3. Personal Attention: Small batch size." `[VERIFIED]`
- **Section: Photo Gallery:** `Our photo gallery` (identical to Home page) `[VERIFIED]`
- **Section: Contact Timing:**  
  - **H2:** `Know when to reach us.` `[VERIFIED]`  
  - **Copy:** `We’d love to hear from you. Here’s when you can reach us. Planning ahead? Contact us to find a convenient time.` `[VERIFIED]`  
  - **H2:** `Business hours` → Monday–Sunday: 24 hours `[NEEDS VERIFICATION]`  
  - **Link:** `Contact details and directions` → `/contact` `[VERIFIED]`
- **Section: Products Subset:**  
  - **H2:** `Products from Kinetix Classes For Neet and Jee in Greater Noida` `[VERIFIED]`  
  - Displays top 3 products (`Class 12 PCB`, `Class 10 Board`, `Class 11 PCM`) `[VERIFIED]`  
  - **Link:** `View all products` → `/products-services?tab=products` `[VERIFIED]`
- **Section: Google Reviews:** Identical 10 reviews from Home page `[VERIFIED]`
- **Section: Latest Posts:** Identical post block from Home page `[VERIFIED]`
- **Section: Lead Banner & Global Footer:** Identical to Home page `[VERIFIED]`

---

## 4. Page: Contact (`/contact`)

- **URL:** `https://kinetix-classes-for.grexa.site/contact`
- **Page Title:** `Contact | Kinetix Classes For Neet and Jee` `[VERIFIED]`
- **Meta Description:** `Contact Kinetix Classes For Neet and Jee about Coaching Center, Private Tutor, Learning Centre, Studying Centre. Find our contact details, address and directions, or send` `[VERIFIED]`
- **H1:** `Contact Kinetix Classes For Neet and Jee` `[VERIFIED]`
- **Contact Details & Directions Card:**
  - **H2:** `Contact details & directions` `[VERIFIED]`
  - **Phone Link:** `8448040355` (`tel:8448040355`) `[VERIFIED]`
  - **Address:** `I 120 Alpha 2 Greater Noida 201310, 3rd Street Alpha 2, Greater Noida, Uttar Pradesh, 201310` `[VERIFIED]`
  - **Map Link 1:** `Get directions on Google Maps (opens in a new tab)` `[VERIFIED]`
  - **Map Link 2:** `View map on Google Maps (opens in a new tab)` `[VERIFIED]`
- **Business Hours Card:**
  - **H2:** `Business hours` `[VERIFIED]`
  - `Monday-Sunday: 24 hours` `[NEEDS VERIFICATION]`
  - `You can contact us anytime during the day with your query.` `[VERIFIED]`
- **Section: A few helpful details:**
  - **H2:** `A few helpful details.` `[VERIFIED]`
  - Subhead: `Have something in mind?` `[VERIFIED]`
  - Copy: `Tell Kinetix Classes For Neet and Jee what you’re looking for. We’re here to help you get started.` `[VERIFIED]`
  - CTA Button: `Contact us` (triggers modal lead form) `[VERIFIED]`
- **Contact Form Fields (in slideover/modal form):**
  - Name (text) `[VERIFIED]`
  - Phone (tel) `[VERIFIED]`
  - Email (email) `[VERIFIED]`
  - Message (textarea) `[VERIFIED]`
- **Note on Direct Submissions:** No custom backend endpoint exists on Grexa; submissions trigger site builder backend email notifications or fallback `[VERIFIED]`

---

## 5. Page: Products & Services (`/products-services`)

- **URL:** `https://kinetix-classes-for.grexa.site/products-services`
- **Page Title:** `Products and Services From The Best Coaching Center in Greater Noida | Kinetix Classes For Neet and Jee` `[VERIFIED]`
- **Meta Description:** `Explore Coaching Center, Private Tutor, Learning Centre, Studying Centre from Kinetix Classes For Neet and Jee. Contact us for availability and details.` `[VERIFIED]`
- **H1:** `Products and Services From The Best Coaching Center in Greater Noida` `[VERIFIED]`
- **Intro Copy:** `Explore Coaching Center, Private Tutor, Learning Centre, Studying Centre from Kinetix Classes For Neet and Jee. Ask us about availability, details or your specific needs.` `[VERIFIED]`
- **Search Form:**
  - Input: `name="q"`, `placeholder="What are you looking for?"`, `label="Search products & services"` `[VERIFIED]`
  - Submit Button: `Search` `[VERIFIED]`
- **Tab Filter Navigation:**
  - Tab 1: `Services` (Active) → `/products-services` `[VERIFIED]`
  - Tab 2: `Products` → `/products-services?tab=products` `[VERIFIED]`
- **Full Services List (12 Items):**
  1. `JEE Coaching classes` `[VERIFIED]`
  2. `NEET Coaching classes` `[VERIFIED]`
  3. `NDA Coaching classess` *(typo on site)* `[VERIFIED]`
  4. `CUET Coaching classes` `[VERIFIED]`
  5. `Class 12 PCB Coaching` `[VERIFIED]`
  6. `Class 11 PCM Coaching` `[VERIFIED]`
  7. `Class 12 PCM Coaching` `[VERIFIED]`
  8. `ICSE Physics , Chemistry , Maths , Biology Classes` `[VERIFIED]`
  9. `CBSE Physics, Chemistry, Math and Biology Coaching` `[VERIFIED]`
  10. `Class 10 Board Coaching for Math and science` `[VERIFIED]`
  11. **H2:** `Class 9 Math and science coaching` `[VERIFIED]`  
      **Copy:** "Class 9 coaching in Greater Noida for CBSE and ICSE students with expert teaching in Mathematics, Science, English, Hindi and Social Science. Weekly tests, concept-based learning, revision classes and personal attention ensure strong academic performance." `[VERIFIED]`  
      **CTA:** `Enquire` `[VERIFIED]`
  12. **H2:** `Tuition classes` `[VERIFIED]`  
      **Copy:** *(Empty description on source site)* `[NEEDS VERIFICATION]`  
      **CTA:** `Enquire` `[VERIFIED]`
- **Pagination Link:** `Next page` → `/products-services?page=2` `[VERIFIED]`
- **Footer & Lead Prompt:** Identical to Home page `[VERIFIED]`

---

## 6. Page: Products Tab (`/products-services?tab=products`)

- **URL:** `https://kinetix-classes-for.grexa.site/products-services?tab=products`
- **Page Title:** `Products and Services From The Best Coaching Center in Greater Noida | Kinetix Classes For Neet and Jee` `[VERIFIED]`
- **H1:** `Products and Services From The Best Coaching Center in Greater Noida` `[VERIFIED]`
- **Tab Filter Navigation:**
  - Tab 1: `Services` → `/products-services` `[VERIFIED]`
  - Tab 2: `Products` (Active) → `/products-services?tab=products` `[VERIFIED]`
- **Products Grid (8 Items with Thumbnails):**
  1. `Class 12 PCB Coaching in Greater Noida` (Thumbnail: `prod_12pcb.jpg`) `[VERIFIED]`
  2. `Class 10 Board Coaching Near me.` (Thumbnail: `prod_10board.jpg`) `[VERIFIED]`
  3. `Class 11 PCM Coaching in Greater Noida.` (Thumbnail: `prod_11pcm.jpg`) `[VERIFIED]`
  4. `NEET Coaching in Greater Noida` (Thumbnail: `prod_neet.jpg`) `[VERIFIED]`
  5. `Class 12 PCM Coaching in Greater Noida` (Thumbnail: `prod_12pcm.jpg`) `[VERIFIED]`
  6. `Class 11 PCB Coaching in Greater Noida` (Thumbnail: `prod_11pcb.jpg`) `[VERIFIED]`
  7. `IIT JEE Coaching in Greater Noida` (Thumbnail: `prod_iitjee.jpg`) `[VERIFIED]`
  8. `Class 9 Coaching classes` (Thumbnail: `prod_class9.jpg`) `[VERIFIED]`
- **Status message:** `You’ve explored all available products and services.` `[VERIFIED]`

---

## 7. Page: Posts Listing (`/posts`)

- **URL:** `https://kinetix-classes-for.grexa.site/posts`
- **Page Title:** `Posts | Kinetix Classes For Neet and Jee` `[VERIFIED]`
- **Meta Description:** `Read the latest news, offers and updates from Kinetix Classes For Neet and Jee.` `[VERIFIED]`
- **H1:** `Latest Posts & Updates` `[VERIFIED]`
- **Subhead:** `Fresh stories, announcements and offers about Coaching Center, Private Tutor, Learning Centre, straight from our business.` `[VERIFIED]`
- **Posts Card List (Exactly 1 Post Exists):**
  - **H2 / Title:** `Neet classes start from 1 st july ..` `[VERIFIED]`
  - **Date:** `July 3, 2026` `[VERIFIED]`
  - **Image:** `https://lh3.googleusercontent.com/p/AF1QipMBRxvL-2dO_eHc1B83E4HjuMWd0PPmMWnuKrF5` (`post_image.jpg`) `[VERIFIED]`
  - **Link:** `Read full post` → `/posts/neet-classes-start-from-1-st-july__8147479800874660152` `[VERIFIED]`
- **Status message:** `You’ve reached the end of these updates.` `[VERIFIED]`

---

## 8. Page: Post Detail (`/posts/neet-classes-start-from-1-st-july__8147479800874660152`)

- **URL:** `https://kinetix-classes-for.grexa.site/posts/neet-classes-start-from-1-st-july__8147479800874660152`
- **Page Title:** `Neet classes start from 1 st july .. | Kinetix Classes For Neet and Jee` `[VERIFIED]`
- **Meta Description:** `Neet classes start from 1 st july ..` `[VERIFIED]`
- **Published Timestamp:** `2026-07-03T18:13:14.457Z` `[VERIFIED]`
- **Breadcrumb Navigation:** `Home` (`/`) → `Posts` (`/posts`) → `Neet classes start from 1 st july ..` `[VERIFIED]`
- **H1:** `Neet classes start from 1 st july ..` `[VERIFIED]`
- **Post Image:** `https://lh3.googleusercontent.com/p/AF1QipMBRxvL-2dO_eHc1B83E4HjuMWd0PPmMWnuKrF5` `[VERIFIED]`
- **Post Body Text:** *(No additional body paragraphs exist beyond the post title itself)* `[NEEDS VERIFICATION]`
- **Navigation Controls:**
  - Notice: `You’re reading our earliest available post.` `[VERIFIED]`
  - Notice: `You’re all caught up. This is our latest post.` `[VERIFIED]`
  - Back link: `Back to all posts` → `/posts` `[VERIFIED]`

---

## 9. Page: Privacy Policy (`/privacy-policy`)

- **URL:** `https://kinetix-classes-for.grexa.site/privacy-policy`
- **Page Title:** `Privacy Policy | Kinetix Classes For Neet and Jee` `[VERIFIED]`
- **Meta Description:** `Read how Kinetix Classes For Neet and Jee collects and uses information provided through this website.` `[VERIFIED]`
- **H1:** `Privacy Policy` `[VERIFIED]`
- **Effective Date:** `Effective Date: 1st January, 2025` `[VERIFIED]`
- **Sections (Verbatim):**
  - **H2:** `Information We Collect` `[VERIFIED]`  
    - Bullet 1: `Personal information you provide (such as name, email, phone number) when you contact us or sign up for services.` `[VERIFIED]`  
    - Bullet 2: `Non-personal information (such as browser type, IP address, pages visited) collected automatically through cookies or analytics tools.` `[VERIFIED]`
  - **H2:** `How We Use Information` `[VERIFIED]`  
    - Bullet 1: `Provide, operate, and improve our website and services.` `[VERIFIED]`  
    - Bullet 2: `Respond to inquiries or customer support requests.` `[VERIFIED]`  
    - Bullet 3: `Send updates, offers, or marketing communications (you can opt out anytime).` `[VERIFIED]`  
    - Bullet 4: `Analyze website traffic and usage patterns.` `[VERIFIED]`
  - **H2:** `Sharing of Information` `[VERIFIED]`  
    - Copy: `We do not sell, rent, or trade your personal information. We may share data only with trusted third parties who help us operate our website, comply with legal requirements, or protect our rights.` `[VERIFIED]`
  - **H2:** `Cookies` `[VERIFIED]`  
    - Copy: `Our website may use cookies to enhance your browsing experience. You can adjust your browser settings to refuse cookies, but some features may not function properly.` `[VERIFIED]`
  - **H2:** `Data Security` `[VERIFIED]`  
    - Copy: `We implement reasonable measures to protect your personal information. However, no method of transmission over the Internet is completely secure.` `[VERIFIED]`
  - **H2:** `Your Rights` `[VERIFIED]`  
    - Copy: `You may request access, correction, or deletion of your personal data by contacting us at https://kinetix-classes-for.grexa.site/contact.` `[VERIFIED]`
  - **H2:** `Updates to This Policy` `[VERIFIED]`  
    - Copy: `We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated effective date.` `[VERIFIED]`
  - **H2:** `Contact Us` `[VERIFIED]`  
    - Copy: `If you have any questions about this Privacy Policy, please contact us at:` `[VERIFIED]`  
    - Bullet 1: `📞 8448040355` `[VERIFIED]`  
    - Bullet 2: `📍 Greater Noida, Uttar Pradesh, 201310` `[VERIFIED]`

---

## 10. Missing Elements & Placeholders Table

To comply with the strict **"Never Invent Facts"** policy, the following items are confirmed absent from the source website and must remain labeled placeholders or open questions for the client:

| Section / Element | Status | Required Action / Placeholder Rule |
|---|---|---|
| **Faculty Bios & Names** | `[MISSING]` | The copy claims *"IITians & Doctors with 8+ years of NEET/JEE teaching experience"*, but lists **zero** names, photos, degrees, or subject assignments. Cannot invent faculty members. |
| **Fee Structure & Pricing** | `[MISSING]` | The copy claims *"Affordable Fee Structure: Low fee with Scholarship Test + Easy EMI option"*, but lists no amounts, installment plans, or test schedules. |
| **Student Ranks / Results** | `[MISSING]` | No past JEE/NEET AIR ranks, percentile scores, or university admission testimonials exist. Must omit results bragging rather than fabricate. |
| **Social Media Profiles** | `[MISSING]` | No links exist to Instagram, YouTube, Facebook, LinkedIn, Twitter/X, or Telegram. |
| **WhatsApp Chat Integration** | `[MISSING]` | Only standard `tel:8448040355` exists; no direct WhatsApp wa.me link was configured. |
| **Upcoming Batch Dates** | `[NEEDS VERIFICATION]` | Only 1 historical announcement: *"Neet classes start from 1 st july .."*. Upcoming 2026/2027 batch launch dates are missing. |
| **Offline Operating Hours** | `[NEEDS VERIFICATION]` | Currently listed as `24 hours` Monday–Sunday. Real offline institute reception hours need client confirmation. |

