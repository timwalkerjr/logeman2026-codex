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