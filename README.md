<div align="center">

<img src="https://manaphassan.github.io/cv/hm-logo.svg" width="80" height="80" alt="HM — Harussani Manaphassan" />

# Harussani Manaphassan

**Head of Creative · Brand Systems Architect · Product Designer**

*19+ years · Commercial Print → Broadcast → Smart City → Telehealth Product*  
*Banting • Cyberjaya • Shah Alam, Selangor, Malaysia*

[![Live Portfolio](https://img.shields.io/badge/🌐_Live_Portfolio-manaphassan.github.io%2Fcv-020617?style=for-the-badge)](https://manaphassan.github.io/cv/)
&nbsp;
[![LinkedIn](https://img.shields.io/badge/LinkedIn-manaphassan-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/manaphassan)
&nbsp;
[![Behance](https://img.shields.io/badge/Behance-manaphassan-1769FF?style=for-the-badge&logo=behance&logoColor=white)](https://www.behance.net/manaphassan)

</div>

---

## About

I started on the floor of a commercial printing press in Taiping, Perak — not by design, but because that's where I found work. The CMYK constraints, unforgiving deadlines, and direct client accountability I learned on that floor have shaped every brand system, product, and pitch I've built in the 19 years since.

That foundation runs through:

- A brand identity credited as part of a **Best IoT Startup Malaysia** win at Rice Bowl Startup Awards (ASEAN Finalist)
- A pitch deck and product UX that helped secure **RM100,000 in MDEC CIP SPARK grant funding**
- Brand systems directing **9 portfolio brands** at a health technology holding group
- A **14-year continuous founder trust partnership** across four commercial ventures

This repository is the source for my interactive CV portfolio — a 5-act career narrative with 22 projects, an ATS-optimised printable resume, QR contact sharing, and an interactive skill constellation.

> *Written by a human. See [/humans.txt](https://manaphassan.github.io/cv/humans.txt).*

---

## The 5-Act Career Story

| Act | Era | What Happened |
| :---: | :--- | :--- |
| **01** | 2007 – 2009 | Started on the press floor in Taiping, Perak. Pre-press CMYK, industrial presses, direct client work. Junior → Senior Designer in 2 years. Helped launch the Kuala Kangsar branch. |
| **02** | 2009 – 2012 | National broadcast and federal government communications. Embedded photojournalist for the Minister of Home Affairs. Managed RTM documentary production. Won 2nd place, national PSA scriptwriting (KKM/FINAS). |
| **03** | 2012 – 2018 | Solo creative lead for 6 simultaneous business entities at SMSfocal Group. Designed corporate identity for PICC, MIDF Property, and 9 other clients. Formed the 14-year founder relationship that led everything after. |
| **04** | 2018 – 2024 | Head of Creative at JomParkir → Govicle. Full brand ownership for JomParking® as it scaled nationally. Rice Bowl Best IoT Startup Malaysia (ASEAN Finalist). Enterprise rebrand across 5 IoT product lines. |
| **05** | 2024 – Now | Head of Creative for 9 venture brands at Suamisihat Holding. Product Design Lead for SuamiSihat telehealth app (iOS/Android, Figma) — the pitch deck secured RM100,000 MDEC funding. AI video pipelines, brand systems, Appcable identity. |

---

## Portfolio Features

<details>
<summary><strong>Navigation & UX</strong></summary>

- Sticky chapter nav — desktop pill strip + mobile compact `01–05` pills, both synced to scroll
- Command Palette `Ctrl+K` — search across all projects, profiles, and links
- Dark mode — full CSS custom-property palette flip; persists via `localStorage`; respects OS `prefers-color-scheme`
- Scroll-to-top FAB — appears after 500px scroll
- E-ink paper warm background + WCAG AA colour contrast (4.5:1+)

</details>

<details>
<summary><strong>Content & Interactions</strong></summary>

- **22 projects** across 5 career acts — all data-driven from `src/data/projects.js`
- **Show-more collapse** — Act 03's 11 projects starts at 6; expands on demand
- **Animated discipline filter** — fade transition, per-category count badges
- **3D card tilt** — project cards respond to cursor with perspective tilt (desktop only)
- **Typewriter effect** — hero subtitle types in character by character on load
- **Animated count-up** — 5 hero metrics count from zero via IntersectionObserver
- **Project quick-preview** — floating image tooltip follows cursor above project cards

</details>

<details>
<summary><strong>Lightbox Gallery</strong></summary>

- Prev/Next buttons overlaid on main image
- `←` `→` keyboard navigation
- Touch swipe (left/right, 48px threshold)
- 150ms crossfade between gallery images
- Thumbnail strip with active scroll-into-view
- Backdrop click to close

</details>

<details>
<summary><strong>Contact & Sharing</strong></summary>

- **QR Code Share dialog** — generates vCard QR or Portfolio URL QR; download as PNG
- **Save vCard `.vcf`** — RFC 2426 contact card; Apple Contacts / Google / Outlook compatible; confetti on save
- **ATS-optimised printable CV** — 1-page resume with Print-to-PDF; forces black text; hides UI chrome
- **Email CTA** — `mailto:` link in contact section

</details>

<details>
<summary><strong>Skill Constellation</strong></summary>

- 22 animated floating skill nodes across 5 domains (Brand, UX, AI, Tech, Leadership)
- 22 edges including cross-domain bridges (Figma bridges Brand ↔ UX)
- Hover highlights active node + connected edges; dims unrelated nodes
- Tooltip shows skill name and domain
- Responsive canvas, dark mode aware, pauses on cursor leave

</details>

<details>
<summary><strong>Human Authorship</strong></summary>

- `/humans.txt` — human authorship declaration following [humanstxt.org](https://humanstxt.org) standard
- JSON-LD Person schema in `<head>` — structured data for search engines and AI parsers
- **★ Human-Authored certificate** printed on every exported CV/PDF
- Specific, verifiable copy (place names, company names, award bodies, amounts) to counter AI-content detectors

</details>

---

## Tech Stack

```
HTML5  ·  Vanilla JavaScript (ES Modules)  ·  Tailwind CSS v3
Vite  ·  Lucide Icons  ·  qrcode  ·  canvas-confetti
Canvas API (skill constellation)  ·  GitHub Pages  ·  GitHub Actions
```

---

## Getting Started

```bash
git clone https://github.com/manaphassan/cv.git
cd cv
npm install
npm run dev          # → http://localhost:3000
npm run build        # → dist/
npm run preview      # preview production build
```

---

## Availability Status

The hero badge is controlled by a single line in `src/data/career.js`:

```js
export const availability = {
  status: 'available',    // 'available' | 'limited' | 'unavailable'
  message: 'Open to creative direction, brand systems & product design projects',
};
```

Change `status` and push — the badge updates within minutes via GitHub Actions.

---

## Connect

| | |
| :--- | :--- |
| 🌐 Portfolio | [manaphassan.github.io/cv](https://manaphassan.github.io/cv/) |
| 💼 LinkedIn | [linkedin.com/in/manaphassan](https://www.linkedin.com/in/manaphassan) |
| 🎨 Behance | [behance.net/manaphassan](https://www.behance.net/manaphassan) |
| 🐙 GitHub | [github.com/manaphassan](https://github.com/manaphassan) |
| 📧 Email | [manaphassan@gmail.com](mailto:manaphassan@gmail.com) |
| 📱 Phone | [+60 10-265 7097](tel:+60102657097) |
| 💳 Digital Card | [manaphassan.github.io/cv/card.html](https://manaphassan.github.io/cv/card.html) |
| 👤 Humans | [manaphassan.github.io/cv/humans.txt](https://manaphassan.github.io/cv/humans.txt) |

---

<div align="center">

&copy; 2007 – Present Harussani Manaphassan. All rights reserved.

</div>
