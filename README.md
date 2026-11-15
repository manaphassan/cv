# Harussani Manaphassan — Interactive CV & Portfolio

> **Head of Creative · Brand Systems Architect**  
> *Banting • Cyberjaya • Shah Alam, Malaysia*  
> 🌐 **Live:** [https://manaphassan.github.io/cv/](https://manaphassan.github.io/cv/)

---

## 🧭 About

A story-driven, interactive career portfolio for **Harussani Manaphassan** — 19+ years of professional practice across commercial pre-press production, national broadcast television, smart city mobility platforms (JomParking®), digital payment systems (GoPayy+), telehealth product design, and AI-assisted creative workflows.

The portfolio is structured as a **5-act career narrative** with 22 projects, an ATS-optimised printable CV, QR contact sharing, and an interactive skill constellation.

> All career narrative, project descriptions, and professional content on this site were written by Harussani Manaphassan. See [`/humans.txt`](https://manaphassan.github.io/cv/humans.txt).

---

## 🎯 Core Disciplines

| Discipline | Detail |
| :--- | :--- |
| **Brand Identity & Creative Direction** | Multi-brand identity frameworks, design tokens, packaging dielines, and retail POSM |
| **Product Design & UX/UI** | Mobile app design (iOS/Android, Figma), user journey mapping, wireframing, design systems |
| **Creative Technology & AI** | AI video pipelines (Google Veo, CapCut), Claude Code, creative asset automation (SS-CAM) |
| **Development & No-Code** | React, Svelte, NocoBase, HTML5/CSS3, Tailwind CSS, JavaScript, Vite, GitHub Actions |
| **Commercial Print & Media** | Pre-press CMYK, large-format, broadcast TV production, motion graphics |

---

## 🏆 Featured Work

| Project | Role | Impact |
| :--- | :--- | :--- |
| **[SuamiSihat Telehealth App](https://www.suamisihat.app/)** | Product Design Lead | Designed UX/UI (Figma, iOS/Android) and pitch deck securing **RM100,000 MDEC CIP SPARK grant** |
| **[JomParking®](https://web.jomparking.com/) & [GoPayy+](https://govicle.com/gopayy/)** | Head of Creative Dept. | Brand ownership across 5 IoT product lines; **Best IoT Startup Malaysia** (Rice Bowl, ASEAN Finalist) |
| **[Appcable](https://appcable.com/)** | Brand Systems Architect | Full corporate visual identity, Swiss-grid stationery, and brand guidelines |
| **[SuamiSihat Design System](https://assets.suamisihat.myds.me/)** | Systems Architect | Single Source of Truth design system across 9 holding group brands |
| **[SS-CAM](https://github.com/SuamiSihat/ss_cam)** | Creator | Windows workstation deployment utility — fonts, palettes, folder hierarchy, Job ID tracking |
| **PICC, MIDF, NCAP, Zhafwell, TH Hotel…** | Creative Lead | 22 total projects across brand, print, digital, and broadcast — view all at the live site |

---

## ⚡ Portfolio Features

### Navigation & UX
- **5-Act Story Chronicle** — career structured as a narrative with scroll-triggered reveals
- **Sticky Chapter Nav** — desktop pill strip + mobile compact 01–05 chapter pills, both synced to scroll position
- **Command Palette (`Ctrl+K`)** — keyboard search across all projects, profiles, and links
- **Scroll-to-Top FAB** — appears after 500px scroll
- **Dark Mode** — full palette flip via CSS custom properties; persists to `localStorage`; respects OS preference

### Content & Data
- **22 Projects** across 5 career acts, all data-driven from `src/data/projects.js`
- **Show-More Collapse** — Act 03 (11 projects) starts collapsed to 6, expands on demand
- **Discipline Filter** — animated fade-in/out transitions, count badges per category
- **Live GitHub Repos** — fetches latest repos from GitHub API; falls back to curated list
- **Dynamic Years Engine** — auto-calculates years of practice, footer year, and status badge

### Interactions
- **3D Card Tilt** — project cards respond to cursor position with perspective tilt (desktop)
- **Typewriter Effect** — hero subtitle types in on load
- **Animated Count-Up** — 5 hero metrics count from zero on scroll into view
- **Project Quick-Preview** — floating image preview follows cursor above project cards (desktop)
- **Lightbox Gallery** — prev/next buttons, ← → keyboard, touch swipe, 150ms crossfade

### Contact & Sharing
- **QR Code Share** — generates vCard QR or Portfolio URL QR; download as PNG
- **Save vCard (`.vcf`)** — RFC 2426 contact card, compatible with Apple/Google/Outlook; confetti on save
- **Email CTA** — `mailto:` link in contact section
- **Printable Executive CV** — ATS-optimised 1-page resume with `Ctrl+P` / Print to PDF

### Visualisation
- **Skill Constellation** — interactive canvas with 22 animated floating skill nodes, 22 edges, hover highlights, domain legend
- **Timeline Spine** — scroll-reactive animated vertical progress bar through career chapters
- **Top Progress Bar** — global reading depth indicator

### Accessibility & Performance
- **WCAG AA** colour contrast (4.5:1+ on all text)
- **E-ink paper** warm off-white background (`rgb(250 249 247)`)
- `loading="lazy"` on all gallery images
- `prefers-color-scheme` respected on first visit
- Passive scroll event listeners throughout

### Human Authorship
- **`/humans.txt`** — human authorship declaration (humanstxt.org standard)
- **JSON-LD Person schema** — structured data for search engines and AI parsers
- **Human-Authored certificate** printed on every CV/PDF export
- Specific, verifiable copy (place names, company names, award bodies, amounts) to counter AI-content detectors

---

## 🛠️ Built With

| Layer | Technology |
| :--- | :--- |
| Core | HTML5, Vanilla JavaScript ES Modules |
| Bundler | [Vite](https://vitejs.dev/) + `vite-plugin-static-copy` |
| Styles | [Tailwind CSS v3](https://tailwindcss.com/) with CSS custom property dark mode |
| Icons | [Lucide](https://lucide.dev/) |
| QR Code | [qrcode](https://www.npmjs.com/package/qrcode) |
| Animation | CSS Keyframes, Canvas API (constellation), `requestAnimationFrame` |
| Confetti | [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) |
| Hosting | [GitHub Pages](https://pages.github.com/) via GitHub Actions CI/CD |

---

## 🚀 Local Development

```bash
# Clone
git clone https://github.com/manaphassan/cv.git
cd cv

# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
cv/
├── public/
│   └── humans.txt              # Human authorship declaration
├── mywork/                     # Static portfolio images (22 projects)
│   ├── 01-corporate-identity/
│   ├── 02-commercial-print-posm/
│   └── 03-digital-product-ui/
├── src/
│   ├── data/
│   │   ├── career.js           # Career eras, metrics, availability status
│   │   ├── projects.js         # 22 project entries with gallery data
│   │   └── skills.js           # Skill domains, tools, credentials
│   ├── main.js                 # All JS: render, animate, interact
│   └── style.css               # Tailwind + CSS custom properties
├── index.html                  # Single-page app shell + all dialogs
├── tailwind.config.js          # CSS variable-based paper scale
└── vite.config.js              # Relative base, static copy of mywork/
```

---

## 🔧 Configuration

### Availability Badge
Update one line in `src/data/career.js` to change the hero status badge:
```js
export const availability = {
  status: 'available',    // 'available' | 'limited' | 'unavailable'
  message: 'Open to creative direction, brand systems & product design projects',
};
```

### Adding a Project
Add an entry to the `projects` array in `src/data/projects.js`:
```js
{
  id: 'unique-id',
  act: 3,                        // 1–5 (which career act)
  actTitle: 'Act 03: ...',
  title: 'Project Title',
  client: 'Client Name',
  category: 'brand-corp',        // brand-corp | product-ux | print-posm | ai-systems | media-motion
  year: '2015 – 2017',
  badge: 'Short Badge Label',
  summary: 'One paragraph description.',
  deliverables: ['Item 1', 'Item 2'],
  impact: 'Business impact sentence.',
  image: 'mywork/path/to/image.jpg',
  gallery: ['mywork/...', 'mywork/...'],
  links: [{ label: 'Live Site', url: 'https://...' }]
}
```

---

## 📬 Connect

| Channel | Link |
| :--- | :--- |
| 🌐 Portfolio | [manaphassan.github.io/cv](https://manaphassan.github.io/cv/) |
| 💼 LinkedIn | [linkedin.com/in/manaphassan](https://www.linkedin.com/in/manaphassan) |
| 🎨 Behance | [behance.net/manaphassan](https://www.behance.net/manaphassan) |
| 🐙 GitHub | [github.com/manaphassan](https://github.com/manaphassan) |
| 📧 Email | [harussani.manaphassan@gmail.com](mailto:harussani.manaphassan@gmail.com) |
| 👤 Humans | [manaphassan.github.io/cv/humans.txt](https://manaphassan.github.io/cv/humans.txt) |

---

&copy; 2007 – Present Harussani Manaphassan. All rights reserved.
