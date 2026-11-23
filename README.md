# FIXORA — Mobile Phone Repair & Accessories Shop

**Project Number:** 1  
**Brand Name:** FIXORA  
**Business Category:** Mobile Phone Repair & Accessories Shop  
**Tagline:** *Smart Repairs. Better Connections.*  
**Dashboard:** None (Public Multi-Page Business Website)

---

## 1. Project Overview

**FIXORA** is a complete, responsive, 29-page frontend website designed for an independent mobile phone repair specialist and accessories shop. It communicates diagnostic-first smartphone repair services (screen replacement, battery replacement, charging port repair, camera repair, speaker/microphone repair, software troubleshooting, water damage inspection, and multi-point diagnostics) alongside a curated mobile accessories catalogue (protective cases, screen protectors, wall chargers, braided cables, wireless earbuds, wired earphones, power banks, desk stands, and car phone holders).

Key adherence principles:
- **Truthful & Transparent:** Does not invent business history, official brand partnerships, authorized repair status, warranty guarantees, fake reviews, or real phone/address details.
- **No Shared Navbar/Footer Partials:** Every single HTML file (`index.html` and all 28 files inside `pages/`) contains its own complete, self-contained `<header>` navbar markup and `<footer>` markup without `fetch()` partial injection.
- **Local Verified Real Photography:** All 42 real photographs and the vector brand logo are stored locally inside organized subdirectories under `assets/images/`.

---

## 2. Premium Brand Identity & Color System (`FIXORA TECH PREMIUM`)

### Primary Palette
| Color | Hex | Usage |
|---|---|---|
| Graphite Black | `#202833` | Primary brand identity & dark surfaces |
| Electric Cyan | `#20B8C4` | Primary CTAs, highlights & active indicators |
| Soft Silver | `#AAB6C2` | Secondary visual accent |
| Ice White | `#F4F7FA` | Main light-mode background |
| Slate Blue | `#354454` | Secondary brand surface & borders |

### Light & Dark Theme Tokens (`assets/css/style.css`)
- **Light Mode (`:root, [data-theme="light"]`):**
  - `--color-primary: #202833`
  - `--color-accent: #20B8C4`
  - `--color-background: #F4F7FA`
  - `--color-surface: #FFFFFF`
  - `--color-text: #27313B`
  - `--color-text-secondary: #667482`
  - `--color-border: #E0E6EB`
- **Dark Mode (`[data-theme="dark"]`):**
  - `--color-primary: #E7EEF3`
  - `--color-accent: #54D5DD`
  - `--color-background: #141B23`
  - `--color-surface: #1E2934`
  - `--color-surface-elevated: #273541`
  - `--color-text: #F0F4F7`
  - `--color-text-secondary: #BAC6CF`
  - `--color-border: #354652`

---

## 3. Typography & Strict Technology Stack

### Typography (Google Fonts)
- **Headings:** `Sora` (600, 700, 800)
- **Body Copy:** `Inter` (400, 500, 600, 700)
- **Technical Labels & Specifications:** `Space Mono` (400, 700)

### Technology Stack
- **HTML5** (Semantic structure, JSON-LD schema, Open Graph tags)
- **Tailwind CSS CDN** (Configured with FIXORA design tokens)
- **Custom CSS** (`assets/css/style.css`)
- **Modular Vanilla JavaScript** (`assets/js/*.js`)
- **Inline SVG Icons**
- **Zero Prohibited Frameworks:** No React, Next.js, Vue, Angular, Bootstrap, jQuery, TypeScript, Vite, Node/npm build tools, or `package.json`.

---

## 4. Project Folder Structure

```text
fixora/
├── index.html
├── pages/
│   ├── home-2.html
│   ├── about.html
│   ├── services.html
│   ├── service-details.html
│   ├── screen-repair.html
│   ├── battery-replacement.html
│   ├── charging-port-repair.html
│   ├── camera-repair.html
│   ├── speaker-microphone-repair.html
│   ├── software-troubleshooting.html
│   ├── water-damage-inspection.html
│   ├── diagnostics.html
│   ├── accessories.html
│   ├── accessory-details.html
│   ├── accessories-categories.html
│   ├── repair-process.html
│   ├── pricing-guide.html
│   ├── brands-supported.html
│   ├── faq.html
│   ├── contact.html
│   ├── repair-request.html
│   ├── gallery.html
│   ├── blog.html
│   ├── blog-details.html
│   ├── privacy-policy.html
│   ├── terms.html
│   ├── 404.html
│   └── coming-soon.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   ├── navigation.js
│   │   ├── theme.js
│   │   ├── direction.js
│   │   ├── services.js
│   │   ├── accessories.js
│   │   ├── pricing.js
│   │   ├── booking.js
│   │   ├── forms.js
│   │   ├── gallery.js
│   │   └── animations.js
│   └── images/
│       ├── logo/
│       ├── hero/
│       ├── smartphones/
│       ├── screen-repair/
│       ├── battery-repair/
│       ├── charging-port/
│       ├── camera-repair/
│       ├── speaker-repair/
│       ├── diagnostics/
│       ├── accessories/
│       ├── cases-covers/
│       ├── screen-protectors/
│       ├── chargers-cables/
│       ├── audio-accessories/
│       ├── technicians/
│       ├── workshop/
│       ├── gallery/
│       └── blog/
└── README.md
```

---

## 5. Complete 29-Page Inventory

1. `index.html` — Main Landing Page (15 ordered sections from Hero to Footer)
2. `pages/home-2.html` — Alternative Home (Graphite Workbench Hero, Category Strip, Spotlights)
3. `pages/about.html` — About FIXORA, Repair Philosophy, Mission & Workshop Environment
4. `pages/services.html` — All 10 Repair Services Directory with Live Search & Category Filtering
5. `pages/service-details.html` — Dynamic Service Specification Template (`?service=<id>`)
6. `pages/screen-repair.html` — Cracked Screen, Digitizer & Display Panel Service Guide
7. `pages/battery-replacement.html` — Battery Degradation, Safe Replacement & Care Guide
8. `pages/charging-port-repair.html` — USB-C / Lightning Port Cleaning & Connector Assessment
9. `pages/camera-repair.html` — Rear & Front Camera Module & Lens Glass Service
10. `pages/speaker-microphone-repair.html` — Earpiece, Loudspeaker & Microphone Diagnostics
11. `pages/software-troubleshooting.html` — OS Troubleshooting, Performance & Data Backup Warnings
12. `pages/water-damage-inspection.html` — Moisture Disconnection, Corrosion Check & Safety Advice
13. `pages/diagnostics.html` — 8-Point Hardware & Software Diagnostic Protocol
14. `pages/accessories.html` — Full Mobile Accessories Catalogue (10 Categories, Search, Price Filter, Sort)
15. `pages/accessory-details.html` — Dynamic Accessory Product Detail View (`?id=<product-id>`)
16. `pages/accessories-categories.html` — 8 Visual Accessory Category Cards
17. `pages/repair-process.html` — 6-Step Repair Journey Timeline
18. `pages/pricing-guide.html` — Interactive Illustrative Repair Pricing Guide & Disclaimer
19. `pages/brands-supported.html` — 9 Configurable Supported Brands & Independent Service Notice
20. `pages/faq.html` — Interactive FAQ Accordion with Search, 9 Category Filters & Expand/Collapse All
21. `pages/contact.html` — Contact Placeholders, Map Placeholder & Validated Enquiry Form
22. `pages/repair-request.html` — Dedicated Repair Request Form with Image Preview & Summary Output
23. `pages/gallery.html` — 20-Item Categorized Workshop & Accessories Gallery with Lightbox Modal
24. `pages/blog.html` — Mobile Care Journal with Featured Article, Search & 7 Category Filters
25. `pages/blog-details.html` — In-Depth Technical Article & Related Posts
26. `pages/privacy-policy.html` — Privacy Policy Template (Marked for Owner Review)
27. `pages/terms.html` — Terms & Conditions Template (Marked for Owner & Legal Review)
28. `pages/404.html` — Branded 404 Error Page
29. `pages/coming-soon.html` — Branded Coming Soon Feature Preview Page

---

## 6. How to Run Locally

Because FIXORA uses zero build tools or npm dependencies, you can run it immediately:
1. **Direct File Open:** Double-click `index.html` in any modern browser (Chrome, Edge, Firefox, Safari).
2. **Local Static Server (Recommended):**
   ```bash
   python -m http.server 8080
   ```
   Then open `http://localhost:8080`.

---

## 7. Key Interactive Features & Customization Instructions

### Theme Switching (`assets/js/theme.js`)
- Click the sun/moon icon in the navbar on any page to switch between Light Mode (`light` default) and Dark Mode (`dark`).
- Preference persists in `localStorage` under `fixora-theme` and is applied via an inline `<head>` script before first paint to prevent theme flash.

### English-Only RTL/LTR Layout Direction (`assets/js/direction.js`)
- Click the `LTR` / `RTL` button in the navbar to toggle `<html dir="ltr" lang="en">` and `<html dir="rtl" lang="en">`.
- Reverses horizontal flex/grid layouts, drawer positioning, and directional arrows while keeping **100% of website text in English**.

### Customizing Prices, Services & Accessories
- **Repair Pricing:** Edit `PRICING_CONFIG` inside `assets/js/pricing.js` to replace illustrative price ranges with your confirmed shop prices.
- **Services Dataset:** Edit `SERVICES_DATA` inside `assets/js/services.js`.
- **Accessories Catalogue:** Edit `ACCESSORIES_DATA` inside `assets/js/accessories.js` to update sample product names, descriptions, and prices.

### Customizing Store Contact Details & Backend Integration
- Search for `[Configure ...]` placeholders in `pages/contact.html`, `index.html`, and the `<footer>` of your pages to insert your verified phone number, email address, street address, opening hours, and map embed URL.
- **Backend Limitation Notice:** Both `pages/repair-request.html` (`assets/js/booking.js`) and `pages/contact.html` (`assets/js/forms.js`) perform complete client-side validation and generate an on-screen summary. To transmit enquiries via email or save them to a database, connect the form submit handlers in `booking.js` and `forms.js` to your backend API or email gateway.

