## 1. Site Info

SITE_TYPE: Law Firm / Personal Injury Legal Practice
HTML_LANG: en

## 2. Color Token Mapping

---DESIGN_MD_START---
## Visual Theme
Prestigious Michigan personal injury law firm featuring an authoritative deep navy and cobalt blue palette, soft ice-blue accents, warm off-white surface tones, and classical serif headings paired with clean modern sans-serif body typography.

## Colors
- background: hsl(0, 0%, 100%)
- foreground: hsl(150, 33%, 2%)
- muted-foreground: hsl(215, 16%, 35%)
- border: hsl(150, 33%, 2% / 0.15)
- surface: hsl(60, 14%, 97%)
- primary: hsl(214, 100%, 34%)
- primary-foreground: hsl(0, 0%, 100%)
- primary-hover: hsl(214, 100%, 26%)
- secondary: hsl(215, 48%, 93%)
- secondary-foreground: hsl(150, 33%, 2%)
- secondary-hover: hsl(215, 48%, 85%)
- dark-background: hsl(215, 100%, 7%)
- dark-foreground: hsl(0, 0%, 100%)
- dark-muted-foreground: hsl(213, 11%, 82%)
- dark-border: hsl(0, 0%, 100% / 0.15)
- accent: hsl(214, 100%, 34%)

## Page Background
solid hsl(0, 0%, 100%)

## Typography
- Heading font: REQUIRED slug `playfair-display` (source: "Playfair Display", available weights: 400, 500, 600, 700, 800, 900)
- Body font: REQUIRED slug `poppins` (source: "Poppins", available weights: 100, 200, 300, 400, 500, 600, 700, 800, 900)

Typography size fidelity:
- H1: text-[44px] font-bold leading-[1.25] text-foreground tracking-normal
- H2: text-[36px] font-bold leading-[1.3] text-foreground tracking-[-0.52px]
- H3: text-[26px] font-bold leading-[1.3] text-foreground tracking-[-0.44px]
- H4: text-[20px] font-semibold leading-[1.4] text-foreground tracking-[-0.28px]
- Body: text-[16px] font-normal leading-[1.6] text-foreground
- Body Small: text-[14px] font-normal leading-[1.6] text-foreground

## Components
- Buttons: 
  - Primary Solid: `bg-primary text-primary-foreground border border-primary px-4 py-3 rounded-[4px] font-medium text-[16px] transition-colors hover:bg-primary-hover`
  - Secondary Light: `bg-secondary text-secondary-foreground border border-secondary px-5 py-3 rounded-[4px] font-medium text-[16px] transition-colors hover:bg-secondary-hover`
  - Outline / Glass: `bg-[rgba(204,218,238,0.31)] text-foreground border border-white px-5 py-3 rounded-[4px] font-medium text-[16px]`
- Cards:
  - Light Feature Cards: `bg-[rgba(229,236,246,0.54)] rounded-[8px] p-6 border border-white/60`
  - Dark Testimonial Cards: `bg-[hsl(215,96%,10%)] rounded-[8px] p-8 border border-white/10 text-white`
  - Practice Area Links: `bg-white/50 hover:bg-white p-3 rounded-[6px] border border-black/5 transition-all`
---DESIGN_MD_END---

## 3. Navigation Spec

NAV_FULL_WIDTH: true
NAV_WIDTH: max-w-[1536px] mx-auto
NAV_BACKGROUND: hsl(0, 0%, 100%)
NAV_BORDER_RADIUS: none
NAV_POSITION: relative
NAV_SHADOW: none
SCROLL_BEHAVIOR: none
NAV_DIVIDERS: none

Link style:
- fontSize: text-[16px]
- fontWeight: font-normal (400), buttons font-medium (500)
- fontFamily: Poppins
- textTransform: normal-case, do NOT use uppercase
- letterSpacing: tracking-normal, do NOT use tracking-wide
- color: text-foreground
- link row layout: distribution right, pitchPx 28px, items-center gap-6
- SINGLE LINE: whitespace-nowrap flex-nowrap on all nav elements
- menu vertical placement: middle, single-row flex items-center justify-between py-3 px-6

Logo:
- Presence: true
- Size: w-[148px] h-[117px]
- Position: inside-nav left
- Badge: false, display as plain transparent PNG image logo (`Logo.png`)
- Logo swap: none

Dropdowns:
- "Practice Areas": hasDropdown true with chevron down icon. Shows mega-menu on hover/click with 4 columns (Motor Vehicle Accident Injuries, Catastrophic Injuries, Personal Injury Cases, Featured News Item).

CTA buttons in nav (right side):
1. Button 1: "Schedule a Free Consultation" — `bg-secondary text-secondary-foreground border border-secondary px-4 py-2.5 rounded-[4px] font-medium text-[16px]`
2. Button 2: "(734) 994-0200" — `bg-primary text-primary-foreground border border-primary px-4 py-2.5 rounded-[4px] font-medium text-[16px] hover:bg-primary-hover`

## 4. Section Plan

### Hero Section id="hero"
  theme: LIGHT
  background: bg-background
  contained panel: none
  text: text-foreground
  heading color: text-foreground
  heading size: text-[44px] font-bold leading-[1.25]
  heading transform/tracking: normal-case, tracking-normal
  body size: text-[16px] font-normal leading-[1.6]
  text alignment/placement: left (text-left items-start)
  layout: grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-[1440px] mx-auto px-6 py-12 lg:py-16
  content:
    - Left column:
      - H1: "Six Combined Decades Of Experience In Advocating For Injury Victims"
      - Paragraph: "At **Logeman & Iafrate, P.C.**, we have the experience to help you mount a strong case and seek compensation for the harm you have suffered. We offer personal injury guidance on a contingency basis, meaning that you won't pay unless we win your case."
      - CTA row:
        - Primary button: "Schedule a Free Consultation" (`bg-primary text-white px-5 py-3 rounded-[4px] font-medium hover:bg-primary-hover`)
        - Secondary button: "Why choose us when injured?" (`bg-secondary text-foreground px-5 py-3 rounded-[4px] font-medium hover:bg-secondary-hover`)
    - Right column:
      - Statue of Lady Justice holding scales image (`693497a35eaaff8688ef590f_relume-608351.avif` or equivalent) with clean transparent/white blended background.
  backgroundImage: none
  overlay: none
  buttons:
    - Solid button "Schedule a Free Consultation" — bg-primary text-white border border-primary rounded-[4px] px-5 py-3 font-medium
    - Light button "Why choose us when injured?" — bg-secondary text-foreground border border-secondary rounded-[4px] px-5 py-3 font-medium

---

### In-Depth Legal Guide & Sidebar Section id="catastrophic-injury-overview"
  theme: LIGHT
  background: bg-background
  contained panel: none
  text: text-foreground
  heading color: text-foreground
  heading size: text-[36px] font-bold leading-[1.3]
  heading transform/tracking: normal-case, tracking-normal
  body size: text-[16px] font-normal leading-[1.6]
  text alignment/placement: left (text-left)
  layout: grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-[1440px] mx-auto px-6 py-12
  content:
    - Main Content Column (lg:col-span-8 space-y-8):
      - H2: "Supporting Your Recovery After Suffering A Catastrophic Injury"
      - Paragraphs on team dedication, 60+ years combined experience, no-win no-fee representation in Ann Arbor.
      - H2: "The Devastating Impact Of Catastrophic Injuries"
      - Paragraph on life-altering effects, medical bills, and future care.
      - Bullet list:
        - Amputations and loss of limbs
        - Paralysis, including paraplegia or quadriplegia
        - **Spinal cord injuries**
        - **Traumatic brain injuries**
        - Severe burn injuries
        - Multiple fractures
      - Firm advocacy narrative covering car accidents, slip-and-falls.
      - H2: "What Are Considered Catastrophic Injuries?"
      - Paragraph defining severe injuries and long-term disability.
      - H2: "How Do Catastrophic Injuries Affect Daily Life?"
      - Paragraph discussing loss of mobility, emotional and financial strain.
      - H2: "Can I Sue For Catastrophic Injuries Caused By Someone Else's Negligence?"
      - Paragraph on negligence, lifetime damages, and legal representation.
      - H2: "Get The Compensation You Need, Call Us Today"
      - Paragraph + CTA link: Call us at **(734) 994-0200** or fill out our online contact form.
    - Sidebar Column (lg:col-span-4 space-y-8):
      - Top Attorney Images Stack:
        - Image card 1: Adrienne Logeman portrait (`EV3A7457-Enhanced-NR.avif`) rounded-[8px]
        - Image card 2: James A. Iafrate portrait (`james-a-iafrate-bio-photo.jpg`) rounded-[8px]
      - "Awards and Honors" box (`bg-[hsl(0,0%,97%)] p-6 rounded-[8px] border border-black/5 space-y-4`):
        - H3: "Awards and Honors" (text-[22px] font-bold text-center)
        - Badge 1: 45 Years in Business badge (`45-Years-in-Business.avif`)
        - Badge 2: Leading Lawyers Peer Selected 2025 James A. Iafrate (`Iafrate_James_2026.png`)
        - Badge 3: Super Lawyers 2024 badge (`super-lawyers-award.avif`)
      - "Our Core Legal Practice Areas" box (`bg-[hsl(0,0%,97%)] p-6 rounded-[8px] border border-black/5 space-y-4`):
        - H3: "Our Core Legal Practice Areas" (text-[20px] font-medium)
        - Link Card 1: "Vehicle Accidents Overview" — subtitle "An overview of this area of law." with blue car/vehicle icon
        - Link Card 2: "Catastrophic Injuries Overview" — subtitle "Severe injuries require serious lawyers." with shield/injury icon
        - Link Card 3: "Personal Injury Overview" — subtitle "Injuries can be serious, contact us." with medical/balance icon
  backgroundImage: none
  overlay: none

---

### Attorney Team Cards Section id="attorneys"
  theme: LIGHT
  background: bg-background
  contained panel: none
  text: text-foreground
  heading color: text-foreground
  heading size: text-[36px] font-bold leading-[1.3]
  heading transform/tracking: normal-case, tracking-normal
  body size: text-[16px] font-normal leading-[1.6]
  text alignment/placement: center heading, left-aligned card text
  layout: max-w-[1440px] mx-auto px-6 py-16
  content:
    - Section Header (text-center max-w-[900px] mx-auto mb-12):
      - Eyebrow: "Serving Ann Arbor and all of Michigan" (text-[14px] text-primary font-medium mb-2)
      - H2: "Trusted Michigan Personal Injury Attorneys"
      - Paragraph: "For decades, we have been helping accident victims recover the compensation they need to rebuild their lives and take care of their families. At Logeman & Iafrate, P.C., we are highly experienced lawyers with a well-trained support staff. We have a long track record of successful outcomes for our clients, and we have even recovered damages in cases that other firms previously had turned down and deemed hopeless."
    - 3-Card Grid (`grid grid-cols-1 md:grid-cols-3 gap-8`):
      - Card 1 (Adrienne Logeman):
        - Image: Adrienne Logeman portrait (`EV3A7457-Enhanced-NR.avif`, w-full h-[320px] object-cover rounded-t-[8px])
        - Content panel (`bg-[rgba(229,236,246,0.54)] p-6 rounded-b-[8px] flex flex-col justify-between flex-1`):
          - Role tag: "Partner" (text-[14px] text-primary font-medium)
          - H3: "Adrienne Logeman" (text-[22px] font-bold mb-3)
          - Bio excerpt: "Ms. Logeman is a practicing lawyer since 2002 in Ann Arbor, Michigan. She received her bachelors from University of Michigan in bio-psychology/neuroscience. She received her law degree from Michigan State Law School..."
          - CTA: "Learn more >" (`bg-[rgba(204,218,238,0.31)] border border-white text-foreground px-4 py-2 rounded-[4px] font-medium inline-flex items-center gap-2 mt-4`)
      - Card 2 (Michigan Injury Lawyers - Center):
        - Image: Conference table / trial books image (`0.avif`, w-full h-[320px] object-cover rounded-t-[8px])
        - Content panel (`bg-[rgba(229,236,246,0.54)] p-6 rounded-b-[8px] flex flex-col justify-between flex-1`):
          - Role tag: "Trial ready" (text-[14px] text-primary font-medium)
          - H3: "Michigan Injury Lawyers" (text-[22px] font-bold mb-3)
          - Excerpt: "For over forty-five years lawyers at our personal injury law firm have helped accident victims recover the compensation they need to rebuild their lives and take care of their families. Our attorneys are highly experienced..."
          - CTA: "Learn more >" (`bg-[rgba(204,218,238,0.31)] border border-white text-foreground px-4 py-2 rounded-[4px] font-medium inline-flex items-center gap-2 mt-4`)
      - Card 3 (James A. Iafrate):
        - Image: James A. Iafrate portrait (`james-a-iafrate-bio-photo.jpg`, w-full h-[320px] object-cover rounded-t-[8px])
        - Content panel (`bg-[rgba(229,236,246,0.54)] p-6 rounded-b-[8px] flex flex-col justify-between flex-1`):
          - Role tag: "Partner" (text-[14px] text-primary font-medium)
          - H3: "James A. Iafrate" (text-[22px] font-bold mb-3)
          - Bio excerpt: "Licensed to practice law in Michigan since 1989, attorney James A. Iafrate has been serving clients at the Logeman & Iafrate, P.C., in Ann Arbor, Michigan, for the last 36 years..."
          - CTA: "Learn more >" (`bg-[rgba(204,218,238,0.31)] border border-white text-foreground px-4 py-2 rounded-[4px] font-medium inline-flex items-center gap-2 mt-4`)
  backgroundImage: none
  overlay: none

---

### Practice Areas Grid Section id="practice-areas"
  theme: LIGHT
  background: bg-surface
  contained panel: none
  text: text-foreground
  heading color: text-foreground
  heading size: text-[36px] font-bold leading-[1.3]
  heading transform/tracking: normal-case, tracking-normal
  body size: text-[16px] font-normal leading-[1.6]
  text alignment/placement: left
  layout: max-w-[1440px] mx-auto px-6 py-16
  content:
    - Section Header (max-w-[900px] mb-12):
      - Eyebrow: "Rated by SuperLawyers 2024, 2025 and Peer Selected in Leading Lawyers 2025" (text-[14px] text-primary font-medium mb-2)
      - H2: "Our Law Firm's Practice Areas"
      - Paragraph: "After suffering injuries in a life-altering accident or losing a loved one due to someone else's negligence, you deserve the chance to fight for your future and obtain the compensation you need to move forward. At Logeman & Iafrate, P.C., our personal injury and wrongful death attorneys understand the situation you face. We will fight by your side and help guide you through this challenging time with compassion and dedicated legal support."
    - 4-Column Grid (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`):
      - Column 1: Motor Vehicle Accident Injuries
        - H4: "Motor Vehicle Accident Injuries" (text-[20px] font-semibold mb-4)
        - Highlight Card: "Vehicle Accidents Overview" — subtitle "An overview of this area of law." (`bg-white p-3 rounded-[6px] shadow-sm mb-4`)
        - List Items (icon + bold title + short 2-line description):
          - Bicycle Accidents
          - Bus Accidents
          - Car Accidents
          - Distracted Driving
          - Drunk Driver Accidents
      - Column 2: ...more accident case types
        - H4: "...more accident case types" (text-[20px] font-semibold mb-4)
        - List Items (icon + bold title + short description):
          - Lyft & Uber Accidents
          - Motorcycle Accidents
          - No Fault Insurance Claims
          - Pedestrian Accidents
          - Truck Accidents
          - Uninsured / Underinsured Motorists
      - Column 3: Catastrophic Injuries
        - H4: "Catastrophic Injuries" (text-[20px] font-semibold mb-4)
        - Highlight Card: "Catastrophic Injuries Overview" — subtitle "Severe injuries require serious lawyers." (`bg-white p-3 rounded-[6px] shadow-sm mb-4`)
        - List Items:
          - Brain Injuries
          - Construction Accidents
          - Spinal Cord Injury
          - Wrongful Death
      - Column 4: Personal Injury Cases
        - H4: "Personal Injury Cases" (text-[20px] font-semibold mb-4)
        - Highlight Card: "Personal Injury Overview" — subtitle "Injuries can be serious, contact us." (`bg-white p-3 rounded-[6px] shadow-sm mb-4`)
        - List Items:
          - Dog Bites and Attacks
          - Electric Scooter Accidents
          - Premises Liability
          - Product Liability
  backgroundImage: none
  overlay: none

---

### Advocating for Your Rights Banner Section id="experience-advocacy"
  theme: LIGHT
  background: bg-[hsl(0,0%,97%)]
  contained panel: none
  text: text-foreground
  heading color: text-foreground
  heading size: text-[36px] font-bold leading-[1.3]
  heading transform/tracking: normal-case, tracking-normal
  body size: text-[18px] font-normal leading-[1.6]
  text alignment/placement: left
  layout: grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[1440px] mx-auto px-6 py-16
  content:
    - Left Column:
      - Eyebrow: "Serving Michigan with 60+ Collective Years of Successful Injury Law Experience" (text-[14px] text-primary font-medium mb-3)
      - H2: "We Stand with You through the Hardest Times, Advocating Vigorously for Your Rights."
      - Paragraph 1: "At our personal injury law practice, we are prepared to handle claims involving car, truck, bus, bicycle, and pedestrian accidents; slip-and-falls and other premises liability claims; product liability claims; claims for compensation for brain and spinal cord injuries; and claims and lawsuits for wrongful death."
      - Paragraph 2: "We help clients in Ann Arbor, Detroit and throughout Michigan recover the benefits they need and deserve. Our commitment to service is absolute. Please feel free to contact our firm at any time for advice or help with your personal injury claim."
      - Buttons Row (`flex flex-wrap gap-4 mt-6`):
        - Primary button: "Speak with a Lawyer" (`bg-primary text-white px-5 py-3 rounded-[4px] font-medium hover:bg-primary-hover`)
        - Secondary button: "Explore Our Practice Areas >" (`bg-[rgba(204,218,238,0.31)] text-foreground border border-white px-5 py-3 rounded-[4px] font-medium flex items-center gap-2`)
    - Right Column:
      - Large Medical X-Ray / CT scan image showing multiple medical diagnostic views (`displayWidth: 680, displayHeight: 680`, rounded-[8px] shadow-sm)
  backgroundImage: none
  overlay: none

---

### Testimonials Carousel Section id="testimonials"
  theme: DARK
  background: bg-dark-background
  contained panel: none
  text: text-dark-foreground
  heading color: text-dark-foreground
  heading size: text-[36px] font-bold leading-[1.3]
  heading transform/tracking: normal-case, tracking-normal
  body size: text-[18px] font-normal leading-[1.6]
  text alignment/placement: center headings, left-aligned cards
  layout: max-w-[1440px] mx-auto px-6 py-20
  content:
    - Header (text-center max-w-[800px] mx-auto mb-14):
      - H2: "What Our Clients Say About Us" (text-[36px] font-bold text-white mb-3)
      - Subhead: "Cases won, lives changed, and we are happy to have helped each one of our clients." (text-white/80 text-[18px])
    - Testimonial Cards Carousel / Grid (3 visible cards per view):
      - Card 1:
        - 5 Gold Stars rating
        - Quote Title: "If I could give them 100 stars I would!" (font-bold text-[18px] mb-3)
        - Quote Text: "\"At the lowest point in my life they were there for me and got more than I expected. Mr. Logeman was amazing and Cheryl his assistant was so caring and professional. I would recommend them to anyone with a personal injury or accident. They went above and beyond for my son and I. I will forever be in their debt!\""
        - Author: Google icon + "Vivian S." (text-white/70 text-[14px])
      - Card 2:
        - 5 Gold Stars rating
        - Quote Title: "They did wonderfully in winning our case!" (font-bold text-[18px] mb-3)
        - Quote Text: "\"We were referred for a personal injury motorcycle accident. We had no idea even where to begin, but the caring and professional team reassured us and took off a lot of stress. They did wonderfully in winning our case, and were always great at communicating where the case was at and what was needed. I would highly recommend and if we were to even need their services again, I wouldn't think twice about calling them up.\""
        - Author: Google icon + "Ashley B." (text-white/70 text-[14px])
      - Card 3:
        - 5 Gold Stars rating
        - Quote Title: "I could not have asked for better representation!" (font-bold text-[18px] mb-3)
        - Quote Text: "\"Adrienne Logeman is an exceptional auto injury attorney. Adrienne put me at ease and explained every step of the process. She was composed, professional, polite and extremely competent. The jury returned a unanimous verdict in our favor. I could not have asked for better representation and care. I am very thankful for her. An incredible experience.\""
        - Author: Google icon + "Robert A." (text-white/70 text-[14px])
    - Slider Controls: Left/Right circular arrow buttons (`bg-[hsl(215,96%,10%)] border border-dark-background text-white p-3 rounded-full hover:bg-white/10`) and dot indicators
    - CTA Button (centered below carousel): "See More Reviews and Testimonials" (`bg-primary text-white px-6 py-3 rounded-[4px] font-medium hover:bg-primary-hover`)
  backgroundImage: none
  overlay: none

---

### Free Case Review Contact Form Section id="free-consultation"
  theme: LIGHT
  background: bg-surface
  contained panel: none
  text: text-foreground
  heading color: text-foreground
  heading size: text-[26px] font-bold leading-[1.3]
  heading transform/tracking: normal-case, tracking-normal
  body size: text-[16px] font-normal leading-[1.6]
  text alignment/placement: left
  layout: grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1440px] mx-auto px-6 py-16
  content:
    - Left Column:
      - Firm Logo icon (`Logo.png`, w-[80px])
      - H3: "Schedule a Free Case Review with a Lawyer" (text-[26px] font-bold mb-4)
      - Paragraph: "Don't face this alone. Let us review your case and show you what's possible. We never charge legal fees unless we recover damages on your behalf and the initial consultation is free as well. Reach out to us today."
      - Attorney Profiles Row (`flex items-center gap-6 mt-8`):
        - Profile 1: Circular image (`EV3A7457-Enhanced-NR.avif`, w-[56px] h-[56px] rounded-full object-cover) + Name "Adrienne D. Logeman" + Title "Partner"
        - Profile 2: Circular image (`james-a-iafrate-bio-photo.jpg`, w-[56px] h-[56px] rounded-full object-cover) + Name "James A. Iafrate" + Title "Partner"
    - Right Column (Form Box `bg-[rgba(229,236,246,0.54)] p-8 rounded-[8px] border border-white/60`):
      - Form fields:
        - Row 1 (2 cols): First name (input text), Last name (input text)
        - Row 2 (2 cols): Email (input email), Phone number (input tel)
        - Row 3: "What is your case about?" (Select dropdown: "Car Accident", "Motorcycle Accident", "Truck Accident", "Bicycle Accident", "Brain Injury", "Spinal Cord Injury", "Wrongful Death", "Other")
        - Row 4: "How would you describe yourself?" (Radio button group:
          - Injured person
          - Family member
          - Legal representative
          - Insurance company
          - Medical provider
          - Other
        )
        - Row 5: "Message" (Textarea placeholder: "Tell us more about what happened")
        - Submit button: [Submit] (`bg-primary text-white px-8 py-3 rounded-[4px] font-medium hover:bg-primary-hover w-fit`)
  backgroundImage: none
  overlay: none

---

### Frequently Asked Questions Section id="faq"
  theme: LIGHT
  background: bg-[rgba(229,236,246,0.54)]
  contained panel: none
  text: text-foreground
  heading color: text-foreground
  heading size: text-[36px] font-bold leading-[1.3]
  heading transform/tracking: normal-case, tracking-normal
  body size: text-[16px] font-normal leading-[1.6]
  text alignment/placement: left / center CTA
  layout: max-w-[1000px] mx-auto px-6 py-20
  content:
    - Header (text-center mb-10):
      - H2: "Frequently Asked Questions" (text-[36px] font-bold mb-3)
      - Subhead: "Find answers to what matters most about your case and how we work." (text-muted-foreground text-[18px])
    - Accordion items (5 items in `bg-secondary p-5 rounded-[12px] mb-4` with (+) icon on right):
      1. Question: "How does contingency work?"
         - Answer: "You only pay legal fees if we successfully recover compensation for your case. If we don't win, you owe us nothing."
      2. Question: "What cases do you take?"
         - Answer: "We handle serious personal injury, motor vehicle collisions, motorcycle accidents, trucking crashes, wrongful death, traumatic brain injuries, spinal cord injuries, dog bites, and premises liability claims across Michigan."
      3. Question: "How long does this take?"
         - Answer: "Every personal injury case is unique depending on the extent of your medical recovery, insurance investigations, and whether settlement negotiations or trial litigation are necessary."
      4. Question: "Will my case go to trial?"
         - Answer: "We prepare every case with the thoroughness and evidence required for trial. While many cases settle favorably beforehand, our trial-readiness gives you the strongest bargaining position."
      5. Question: "What should I do now?"
         - Answer: "Call us at (734) 994-0200 or complete our free consultation form immediately so we can preserve vital evidence and protect your legal rights."
    - Bottom Help Box (text-center mt-12):
      - H3: "Need more help?" (text-[22px] font-bold mb-2)
      - Paragraph: "Reach out and we'll answer anything else you need to know." (text-muted-foreground mb-6)
      - Button: "Schedule a Free Consultation" (`bg-primary text-white px-6 py-3 rounded-[4px] font-medium hover:bg-primary-hover`)
  backgroundImage: none
  overlay: none

---

### Office Location Map Section id="location-map"
  theme: LIGHT
  background: bg-background
  contained panel: none
  text: text-foreground
  heading color: text-foreground
  heading size: none
  heading transform/tracking: normal-case, tracking-normal
  body size: none
  text alignment/placement: center
  layout: w-full h-[450px] relative overflow-hidden
  content:
    - Interactive Google Maps embed for: Logeman & Iafrate, P.C., 2950 S State St STE 400, Ann Arbor, MI 48104
  backgroundImage: none
  overlay: none

## 5. Favicon

Call `process_favicon_image({ imageUrl: "https://pagesmith-cdn.com/881ce63c/images/6934a8bf1dfa3090ec4c2153_logeman-favicon-32.webp" })`.

## 6. Footer

Check `footer` in computed styles for structural data:
Style: bg-dark-background (`hsl(215, 100%, 7%)`) containing an inner card (`bg-[hsl(215,96%,10%)] rounded-[12px] p-10 max-w-[1440px] mx-auto`)
Text color: text-dark-muted-foreground (`rgb(204, 208, 213)`)
Columns: 4
Content alignment: left
Link Groups:
  - Column 1 (Firm Info & Branding):
    - Logo (`Logo.png`, w-[70px]) + Firm Name H3: "Logeman & Iafrate, P.C." (text-[26px] font-bold text-white)
    - Address: "2950 S. State ST. STE 400, Ann Arbor MI 48104"
    - Phone: "(734) 724-7991" (or (734) 994-0200)
    - Description: "We offer free injury case consultations. Call today to speak with a member of our legal team about your accident and injuries."
    - Link: "Read our recent personal injury articles here." (color: `rgb(76, 128, 197)`)
  - Column 2 ("Practice areas"):
    - Heading: "Practice areas" (text-white font-medium mb-4)
    - Links: Bicycle Accidents, Car Accidents, Motorcycle Accidents, Truck Accidents, Brain Injuries, Construction Accidents
  - Column 3 ("Practice Areas"):
    - Heading: "Practice Areas" (text-white font-medium mb-4)
    - Links: Spinal Cord Injury, Wrongful Death, Dog Bites and Attacks, Electric Scooter Accidents, Premises Liability, Product Liability
  - Column 4 ("About us"):
    - Heading: "About us" (text-white font-medium mb-4)
    - Links: James A. Iafrate, Adrienne D. Logeman, Our Client Testimonials, Verdicts and Settlements, Book a Free Consultation
Bottom Bar:
  - Left: "© 2025 Logeman & Iafrate, P.C. All rights reserved."
  - Right: "Attorney Disclaimer" | "Our Privacy Policy"

## 7. Files

MODIFY:
- `src/components/Navigation.astro`
- `src/components/Footer.astro`
- `src/site.ts`
- `src/styles/global.css`

CREATE:
- `src/components/home/Hero.astro`
- `src/components/home/CatastrophicInjuryOverview.astro`
- `src/components/home/Attorneys.astro`
- `src/components/home/PracticeAreas.astro`
- `src/components/home/ExperienceAdvocacy.astro`
- `src/components/home/Testimonials.astro`
- `src/components/home/FreeConsultationForm.astro`
- `src/components/home/FAQ.astro`
- `src/components/home/LocationMap.astro`
## Element inventory (extracted — reproduce ALL of these)

Machine-generated from the capture, not prose. Every icon listed below is
present in the source and in that section's ported `html` in
`index.sections.json`. Render each one: copy its `<svg>` from the ported
markup verbatim (keeping its `viewBox` and path data), size it to the
measured box, and paint it with the captured fill — `fill="none"` on an
icon that has a fill leaves it invisible. If a section below lists icons
and your component has none, the component is incomplete.

### Site header / navigation (port into Navigation.astro)
- `viewBox="0 0 16 16"` — 16x16px, fill `rgb(0, 74, 173)` — inline affordance (arrow/chevron)
- `viewBox="0 0 16 16"` — size not captured, fill `inherit`
### Supporting Your Recovery After Suffering A Catastrophic Injury
- `viewBox="0 0 24 24"` — 24x24px, fill `inherit` — inline affordance (arrow/chevron)
- `viewBox="0 0 16 16"` — 16x16px, fill `inherit` — inline affordance (arrow/chevron)
### Our Law Firm's Practice Areas
- `viewBox="0 0 24 24"` — 24x24px, fill `inherit` — inline affordance (arrow/chevron)
### We Stand with You through the Hardest Times, Advocating Vigorously for Your Righ
- `viewBox="0 0 16 16"` — 16x16px, fill `inherit` — inline affordance (arrow/chevron)
### What Our Clients Say About Us
- `viewBox="0 0 16 16"` — 16x16px, fill `rgb(255, 255, 255)` — inline affordance (arrow/chevron)
### Frequently Asked Questions
- `viewBox="0 0 32 32"` — 32x32px, fill `rgb(0, 74, 173)` — inline affordance (arrow/chevron)
