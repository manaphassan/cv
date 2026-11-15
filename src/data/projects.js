export const projectCategories = [
  { id: "all", label: "All Works" },
  { id: "brand-corp", label: "Brand Architecture & Identity" },
  { id: "product-ux", label: "Digital Product & UI/UX" },
  { id: "print-posm", label: "Packaging & Print" },
  { id: "ai-systems", label: "Creative Tech & AI Workflows" },
  { id: "media-motion", label: "Broadcast & Motion" }
];

export const externalProfiles = {
  linkedin: "https://www.linkedin.com/in/manaphassan",
  behance: "https://www.behance.net/manaphassan",
  github: "https://github.com/manaphassan",
  youtube: "https://www.youtube.com/@harussani.manaphassan",
  borneoShowreel: "https://www.youtube.com/watch?v=xmuCcunYNGU&list=PL1BCB093F66106553",
  appcable: "https://appcable.com/"
};

export const projects = [
  /* ==========================================================================
     ACT 05: CREATIVE LEADERSHIP & AUTONOMOUS AI (2024–PRESENT)
     ========================================================================== */
  {
    id: "suamisihat-design-system",
    act: 5,
    actTitle: "Act 05: Creative Leadership & Product Direction",
    title: "SuamiSihat™ Design System — Single Source of Truth",
    client: "Suamisihat Holding Sdn. Bhd.",
    category: "product-ux",
    lens: ["executive", "creative", "tech"],
    year: "2024 – Present",
    badge: "Enterprise Design System",
    summary: "Single Source of Truth design system governing brand guidelines, tokenized design components, color palettes, and digital asset repositories across 9 holding group entities.",
    deliverables: ["Single Source of Truth Architecture", "Design Token Libraries", "9-Entity Brand Guidelines", "Interactive Component Specs"],
    impact: "Unifies brand consistency across all marketing, clinic interiors, e-commerce stores, and telehealth digital products.",
    image: "mywork/02-commercial-print-posm/displays-frames/acrylic-frame-display.jpg",
    gallery: [
      "mywork/02-commercial-print-posm/displays-frames/acrylic-frame-display.jpg",
      "mywork/03-digital-product-ui/appcable/appcable-logo-identity.jpg"
    ],
    links: [
      { label: "Live Design System", url: "https://assets.suamisihat.myds.me/" },
      { label: "Behance Portfolio", url: "https://www.behance.net/manaphassan" }
    ]
  },
  {
    id: "ss-cam-tool",
    act: 5,
    actTitle: "Act 05: Creative Leadership & Product Direction",
    title: "SS-CAM (SuamiSihat Creative Asset Management) — Workstation Automation",
    client: "SuamiSihat Creative Operations",
    category: "ai-systems",
    lens: ["tech", "executive"],
    year: "2025 – 2026",
    badge: "Windows Creative Deployment Utility",
    summary: "Windows deployment utility for SuamiSihat creative workstations. Automatically installs brand typography, color palettes, and asset libraries, while generating standardized project folders with built-in Job ID tracking.",
    deliverables: ["Windows Deployment Script", "Brand Font Auto-Installer", "Job ID Directory Generator", "Creative Workflow Automation"],
    impact: "Eliminates workstation setup drift and enforces structural folder hierarchy and file governance across all in-house designers.",
    image: "mywork/02-commercial-print-posm/billboards-outdoor/billboard-display-urban.jpg",
    gallery: [
      "mywork/02-commercial-print-posm/billboards-outdoor/billboard-display-urban.jpg"
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/SuamiSihat/ss_cam" }
    ]
  },
  {
    id: "suamisihat-app",
    act: 5,
    actTitle: "Act 05: Creative Leadership & Product Direction",
    title: "SuamiSihat Telehealth & Mobile App",
    client: "Suamisihat Technology Sdn. Bhd.",
    category: "product-ux",
    lens: ["creative", "tech"],
    year: "2024 – Present",
    badge: "Product Design & MDEC Grant Pitch",
    summary: "Conceptualized the digital health platform from zero to one. Designed the complete user experience, information architecture, wireframes, high-fidelity UI mockups, and the comprehensive pitch deck that helped the company secure RM100,000 in MDEC CIP SPARK grant funding. Directed creative product execution through final delivery.",
    deliverables: ["Pitch Deck & Presentation", "User Flows & Wireframes", "High-Fidelity Mobile UI", "Creative Project Direction"],
    impact: "Designed the pitch deck that helped unlock RM100,000 in MDEC CIP SPARK funding and established the digital product foundation for the venture.",
    image: "mywork/02-commercial-print-posm/displays-frames/acrylic-frame-display.jpg",
    gallery: [
      "mywork/02-commercial-print-posm/displays-frames/acrylic-frame-display.jpg",
      "mywork/01-corporate-identity/picc/picc-corporate-identity.jpg"
    ],
    links: [
      { label: "SuamiSihat App (suamisihat.app)", url: "https://www.suamisihat.app/" },
      { label: "Design System (SSOT)", url: "https://assets.suamisihat.myds.me/" },
      { label: "Ecosystem Hub", url: "https://suamisihat.com.my" }
    ]
  },
  {
    id: "ai-video-veo",
    act: 5,
    actTitle: "Act 05: Creative Leadership & Product Direction",
    title: "Google Veo AI Commercial Video Pipeline",
    client: "Suamisihat Ecommerce Sdn. Bhd.",
    category: "ai-systems",
    lens: ["tech", "creative"],
    year: "2025 – Present",
    badge: "AI Video Creative Direction",
    summary: "Built a high-velocity commercial AI video creative workflow leveraging Google Veo and generative image engines for Dr. MIT Ring Season 1 (13 episodes + 1 feature film), producing scalable, high-converting ad variations.",
    deliverables: ["13 AI Video Episodes", "Feature Film (S1E14)", "Creative Prompt Engineering SOP", "Direct-Response Ad Matrix"],
    impact: "Cut commercial video turnaround by 80% while establishing an automated creative engine for direct-to-consumer campaigns.",
    image: "mywork/02-commercial-print-posm/billboards-outdoor/billboard-display-urban.jpg",
    gallery: [
      "mywork/02-commercial-print-posm/billboards-outdoor/billboard-display-urban.jpg",
      "mywork/02-commercial-print-posm/th-hotel/th-hotel-rollup-banner.jpg"
    ]
  },
  {
    id: "appcable-brand-system",
    act: 5,
    actTitle: "Act 05: Creative Leadership & Product Direction",
    title: "Appcable — Brand Identity & Design Systems",
    client: "Appcable Sdn. Bhd.",
    category: "brand-corp",
    lens: ["creative", "tech"],
    year: "2024 – Present",
    badge: "Brand Identity & Systems",
    summary: "Designed the corporate brand identity, geometric logo system, typography hierarchy, business cards, corporate letterhead, and brand apparel for Appcable. Established streamlined creative operations and automated design workflows to scale brand execution.",
    deliverables: ["Corporate Visual Identity", "Stationery & Collateral Suite", "Brand Guidelines", "Design & Workflow Automation"],
    impact: "Established a cohesive, modern brand identity across physical and digital touchpoints for an emerging automation venture.",
    image: "mywork/03-digital-product-ui/appcable/appcable-logo-identity.jpg",
    gallery: [
      "mywork/03-digital-product-ui/appcable/appcable-logo-identity.jpg",
      "mywork/03-digital-product-ui/appcable/appcable-letterhead.jpg",
      "mywork/03-digital-product-ui/appcable/appcable-business-card.jpg",
      "mywork/03-digital-product-ui/appcable/appcable-tshirt-mockup.jpg"
    ],
    links: [
      { label: "Appcable.com", url: "https://appcable.com/" }
    ]
  },

  /* ==========================================================================
     ACT 04: NATIONAL SMART CITY PLATFORM & REBRAND (2018–2024)
     ========================================================================== */
  {
    id: "jomparking-govicle",
    act: 4,
    actTitle: "Act 04: Smart Mobility & Scale",
    title: "JomParking® — National Smart Parking Platform",
    client: "JomParkir Sdn. Bhd. → Govicle Sdn. Bhd.",
    category: "product-ux",
    lens: ["executive", "tech", "creative"],
    year: "2018 – 2024",
    badge: "Best IoT Startup Malaysia (Rice Bowl)",
    summary: "Complete brand ownership for a nationally deployed parking platform serving millions of motorists and municipal local authorities across Malaysia. Directed brand identity, marketing campaigns, and investor decks.",
    deliverables: ["JomParking® Identity System", "Mobile & Web UI Assets", "Municipal Tender Proposals", "Govicle Enterprise Rebrand"],
    impact: "Won Best IoT Startup Malaysia at the Rice Bowl Startup Awards (ASEAN Finalist) and expanded brand from single app to regional mobility ecosystem.",
    image: "mywork/02-commercial-print-posm/billboards-outdoor/billboard-display-urban.jpg",
    gallery: [
      "mywork/02-commercial-print-posm/billboards-outdoor/billboard-display-urban.jpg",
      "mywork/02-commercial-print-posm/billboards-outdoor/billboard-display-highway.jpg",
      "mywork/02-commercial-print-posm/billboards-outdoor/billboard-outdoor-mockup-04.jpg",
      "mywork/02-commercial-print-posm/billboards-outdoor/billboard-outdoor-mockup-08.jpg"
    ],
    links: [
      { label: "Live Platform", url: "https://web.jomparking.com/" },
      { label: "Behance Case Study", url: "https://www.behance.net/manaphassan" }
    ]
  },
  {
    id: "gopayy-plus",
    act: 4,
    actTitle: "Act 04: Smart Mobility & Scale",
    title: "GoPayy+ — Ultimate Digital Payment Solution",
    client: "Govicle Sdn. Bhd.",
    category: "product-ux",
    lens: ["tech", "executive", "creative"],
    year: "2021 – 2024",
    badge: "Digital Payment & Municipal POS",
    summary: "Digital payment solution and flexible point-of-sale platform with multi-channel payment support, reporting tools, and municipal enforcement integration.",
    deliverables: ["Product Identity Guidelines", "Payment Interface Design", "Municipal Council Collateral", "Marketing Pitch Visuals"],
    impact: "Streamlined fine payment and digital fee processing across municipal councils in Melaka and Johor.",
    image: "mywork/02-commercial-print-posm/billboards-outdoor/billboard-outdoor-mockup-04.jpg",
    gallery: [
      "mywork/02-commercial-print-posm/billboards-outdoor/billboard-outdoor-mockup-04.jpg",
      "mywork/02-commercial-print-posm/billboards-outdoor/billboard-outdoor-mockup-08.jpg",
      "mywork/02-commercial-print-posm/billboards-outdoor/billboard-display-urban.jpg"
    ],
    links: [
      { label: "GoPayy+ Solution", url: "https://govicle.com/gopayy/" }
    ]
  },
  {
    id: "bollymuzik-fm",
    act: 4,
    actTitle: "Act 04: Smart Mobility & Scale",
    title: "Bollymuzik.fm™ — Digital Radio & Mobile UI",
    client: "Bollymuzik.fm Network",
    category: "product-ux",
    lens: ["creative", "tech"],
    year: "2014 – 2016",
    badge: "Digital Streaming & Radio UI",
    summary: "Visual identity, web streaming audio player interface, and cross-platform mobile app UI for an online digital radio broadcasting network.",
    deliverables: ["Radio Identity & Logo System", "Web Player UX/UI", "Mobile Radio App Interfaces", "Streaming Promotion Collateral"],
    impact: "Delivered responsive web & mobile streaming player interfaces and integrated brand identity for digital broadcast listeners.",
    image: "mywork/03-digital-product-ui/bollymuzik/bollymuzik-streaming-ui-02.png",
    gallery: [
      "mywork/03-digital-product-ui/bollymuzik/bollymuzik-streaming-ui-01.png",
      "mywork/03-digital-product-ui/bollymuzik/bollymuzik-streaming-ui-02.png",
      "mywork/03-digital-product-ui/bollymuzik/bollymuzik-mobile-ui-01.png",
      "mywork/03-digital-product-ui/bollymuzik/bollymuzik-brand-assets.png"
    ]
  },

  /* ==========================================================================
     ACT 03: THE 6-ENTITY SOLO OPERATOR (2012–2018)
     ========================================================================== */
  {
    id: "picc-identity",
    act: 3,
    actTitle: "Act 03: The Solo Operator & 14-Yr Trust",
    title: "Putrajaya International Convention Centre (PICC)",
    client: "Putrajaya International Convention Centre™",
    category: "brand-corp",
    lens: ["creative"],
    year: "2012 – 2018",
    badge: "National Landmark Identity & Fleet",
    summary: "Comprehensive corporate brand system, vehicle fleet livery (Proton Exora), corporate desk calendars, stationery, umbrellas, uniforms, and exhibition popups for Malaysia's premier convention landmark.",
    deliverables: ["Corporate Identity Guidelines", "Vehicle Fleet Livery (Proton Exora)", "Executive Desk Calendars & Diaries", "VIP Merchandise & Apparel"],
    impact: "Executed premier national convention branding across physical vehicle fleets, executive VIP stationery, and large-scale exhibition venues.",
    image: "mywork/01-corporate-identity/picc/picc-corporate-identity.jpg",
    gallery: [
      "mywork/01-corporate-identity/picc/picc-corporate-identity.jpg",
      "mywork/01-corporate-identity/picc/picc-fleet-proton-exora.jpg",
      "mywork/01-corporate-identity/picc/picc-desk-calendar.jpg",
      "mywork/01-corporate-identity/picc/picc-desk-calendar-02.jpg",
      "mywork/01-corporate-identity/picc/picc-backpack-merchandise.jpg",
      "mywork/01-corporate-identity/picc/picc-apparel-shirt.jpg",
      "mywork/01-corporate-identity/picc/picc-umbrella.jpg",
      "mywork/01-corporate-identity/picc/picc-writing-pad.jpg"
    ]
  },
  {
    id: "midf-property",
    act: 3,
    actTitle: "Act 03: The Solo Operator & 14-Yr Trust",
    title: "MIDF Property Berhad — Corporate Identity & Iconography",
    client: "MIDF Property Berhad™",
    category: "brand-corp",
    lens: ["creative"],
    year: "2014 – 2018",
    badge: "Islamic Property & Financial Group",
    summary: "Islamic corporate identity, property development marketing presentation assets, custom icon systems, and corporate signage for a leading Malaysian financial and property institution.",
    deliverables: ["Corporate Property Collateral", "Custom Iconography System", "Development Proposal Presentations", "Marketing Signage Guidelines"],
    impact: "Unified visual language for premier commercial and industrial developments under MIDF Property Berhad.",
    image: "mywork/01-corporate-identity/midf-property/midf-property-branding-01.jpg",
    gallery: [
      "mywork/01-corporate-identity/midf-property/midf-property-branding-01.jpg",
      "mywork/01-corporate-identity/midf-property/midf-property-branding-02.jpg",
      "mywork/01-corporate-identity/midf-property/midf-property-branding-03.jpg",
      "mywork/01-corporate-identity/midf-property/midf-iconography-01.jpg",
      "mywork/01-corporate-identity/midf-property/midf-iconography-02.jpg"
    ]
  },
  {
    id: "dhc-halal",
    act: 3,
    actTitle: "Act 03: The Solo Operator & 14-Yr Trust",
    title: "Desatera Halal Committee™ — Identity & Governance",
    client: "Desatera Halal Committee",
    category: "brand-corp",
    lens: ["creative"],
    year: "2013 – 2016",
    badge: "Institutional Halal Compliance",
    summary: "Visual identity guidelines, executive notebooks, tote bags, stationery, and event accreditation collateral for national institutional halal compliance bodies.",
    deliverables: ["Halal Identity Guidelines", "Executive Notebooks & Stationery", "VIP Merchandise & Tote Bags", "Event Badges & Lanyards"],
    impact: "Standardized professional compliance identity across national food service catering contracts.",
    image: "mywork/01-corporate-identity/dhc-halal/dhc-notebook.jpg",
    gallery: [
      "mywork/01-corporate-identity/dhc-halal/dhc-notebook.jpg",
      "mywork/01-corporate-identity/dhc-halal/dhc-tote-bag.jpg",
      "mywork/01-corporate-identity/dhc-halal/dhc-stationery-pen.jpg"
    ]
  },
  {
    id: "restoran-chamca",
    act: 3,
    actTitle: "Act 03: The Solo Operator & 14-Yr Trust",
    title: "Restoran Chamcha — F&B Brand Collateral",
    client: "Restoran Chamcha (SMSfocal Group)",
    category: "print-posm",
    lens: ["creative"],
    year: "2012 – 2016",
    badge: "Hospitality & Retail POSM",
    summary: "Complete menu design, trifold promotional brochures, student marketing campaigns, and walk-in store signage for an F&B entity within the SMSfocal group.",
    deliverables: ["Trifold Menu Brochure", "Marketing Flyers", "In-store POSM", "Promotional Campaigns"],
    impact: "Supported daily retail foot-traffic and customer ordering flows as part of the 6-entity solo creative mandate.",
    image: "mywork/02-commercial-print-posm/restoran-chamca/chamca-trifold-brochure.jpg",
    gallery: [
      "mywork/02-commercial-print-posm/restoran-chamca/chamca-trifold-brochure.jpg",
      "mywork/02-commercial-print-posm/restoran-chamca/chamca-student-flyer.jpg"
    ]
  },

  {
    id: "ez-food-panic",
    act: 3,
    actTitle: "Act 03: The Solo Operator & 14-Yr Trust",
    title: "EZ Food Panic™ — F&B Brand Identity & POSM",
    client: "EZ Food Panic",
    category: "print-posm",
    lens: ["creative"],
    year: "2013 – 2016",
    badge: "F&B Brand & Retail POSM",
    summary: "Full brand identity system, packaging design, buntings, roll-up banners, business cards, and promotional flyers for a retail F&B outlet brand. Delivered a complete POSM suite from concept to production-ready artwork.",
    deliverables: ["Brand Logo & Identity", "Retail Packaging Design", "Roll-up Banners & Buntings", "Business Cards & Letterhead"],
    impact: "Established a distinctive retail brand presence across physical touchpoints from product packaging to in-store signage.",
    image: "mywork/02-commercial-print-posm/ez-food-panic/ez-food-panic-packaging.jpg",
    gallery: [
      "mywork/02-commercial-print-posm/ez-food-panic/ez-food-panic-packaging.jpg",
      "mywork/02-commercial-print-posm/ez-food-panic/ez-food-panic-packaging-02.jpg",
      "mywork/02-commercial-print-posm/ez-food-panic/ez-food-panic-banner.jpg",
      "mywork/02-commercial-print-posm/ez-food-panic/ez-food-panic-bunting.jpg",
      "mywork/02-commercial-print-posm/ez-food-panic/ez-food-panic-bunting-02.jpg",
      "mywork/02-commercial-print-posm/ez-food-panic/ez-food-panic-flyer.jpg",
      "mywork/02-commercial-print-posm/ez-food-panic/ez-food-panic-business-card.jpg",
      "mywork/02-commercial-print-posm/ez-food-panic/ez-food-panic-letterhead.jpg"
    ]
  },
  {
    id: "dr-jeruk",
    act: 3,
    actTitle: "Act 03: The Solo Operator & 14-Yr Trust",
    title: "Dr Jeruk — Natural Health Brand & Trade Booth",
    client: "Dr Jeruk",
    category: "print-posm",
    lens: ["creative"],
    year: "2014 – 2016",
    badge: "Health Brand & Trade Collateral",
    summary: "Logo design, business cards, x-banner display, and canopy booth branding for a natural health remedy product entering trade and retail channels.",
    deliverables: ["Logo Design & Identity", "Business Card Design", "X-Banner Display", "10×10 Trade Canopy Booth"],
    impact: "Gave the brand a credible retail presence for trade booths and direct-to-consumer sales channels.",
    image: "mywork/02-commercial-print-posm/dr-jeruk/drjeruk-logo-mockup.jpg",
    gallery: [
      "mywork/02-commercial-print-posm/dr-jeruk/drjeruk-logo-mockup.jpg",
      "mywork/02-commercial-print-posm/dr-jeruk/drjeruk-business-card.jpg",
      "mywork/02-commercial-print-posm/dr-jeruk/drjeruk-xbanner.jpg",
      "mywork/02-commercial-print-posm/dr-jeruk/drjeruk-canopy-booth.jpg"
    ]
  },
  {
    id: "ncap-merchandise",
    act: 3,
    actTitle: "Act 03: The Solo Operator & 14-Yr Trust",
    title: "NCAP — Corporate Branded Merchandise Suite",
    client: "NCAP",
    category: "print-posm",
    lens: ["creative"],
    year: "2013 – 2015",
    badge: "Corporate Merchandise & Apparel",
    summary: "Complete corporate branded merchandise suite including embroidered polo shirts, caps, mugs, and roll-up banners for an institutional client event.",
    deliverables: ["Branded Polo Shirts & Caps", "Customised Mugs", "Roll-up Banner System", "Corporate Merchandise Coordination"],
    impact: "Unified brand presence across corporate events and institutional touchpoints.",
    image: "mywork/02-commercial-print-posm/ncap/ncap-rollup-banner.jpg",
    gallery: [
      "mywork/02-commercial-print-posm/ncap/ncap-rollup-banner.jpg",
      "mywork/02-commercial-print-posm/ncap/ncap-polo-shirt.jpg",
      "mywork/02-commercial-print-posm/ncap/ncap-cap.jpg",
      "mywork/02-commercial-print-posm/ncap/ncap-mug.jpg"
    ]
  },
  {
    id: "oas-corporate",
    act: 3,
    actTitle: "Act 03: The Solo Operator & 14-Yr Trust",
    title: "OAS (Oriental Agro Spices) — Corporate Identity & Packaging",
    client: "OAS",
    category: "brand-corp",
    lens: ["creative"],
    year: "2013 – 2016",
    badge: "Agro Brand & Packaging",
    summary: "Corporate identity, letterhead stationery, and retail dates packaging design for an agro-commodity and spices trading company positioning for retail and export markets.",
    deliverables: ["Corporate Logo & Identity", "Letterhead & Stationery", "Retail Packaging Design", "Brand Guidelines"],
    impact: "Established a professional halal agro-commodity brand identity for retail and export market positioning.",
    image: "mywork/01-corporate-identity/oas-corporate/oas-identity-logo.jpg",
    gallery: [
      "mywork/01-corporate-identity/oas-corporate/oas-identity-logo.jpg",
      "mywork/01-corporate-identity/oas-corporate/oas-letterhead.jpg",
      "mywork/01-corporate-identity/oas-corporate/oas-dates-packaging.jpg"
    ]
  },
  {
    id: "zhafwell-trading",
    act: 3,
    actTitle: "Act 03: The Solo Operator & 14-Yr Trust",
    title: "Zhafwell Trading™ — Brand Identity & Product Collateral",
    client: "Zhafwell Trading",
    category: "brand-corp",
    lens: ["creative"],
    year: "2015 – 2017",
    badge: "Trading Brand & Product Identity",
    summary: "Full brand identity system, product line mockups, pop-up display banners, and stationery for a trading and product distribution company entering trade exhibitions.",
    deliverables: ["Logo Identity System", "Product Line Mockups", "Pop-up Banner (3×3)", "Corporate Stationery"],
    impact: "Built a cohesive product brand presence enabling trade exhibition participation and retail channel entry.",
    image: "mywork/01-corporate-identity/zhafwell/zhafwell-logo-identity.jpg",
    gallery: [
      "mywork/01-corporate-identity/zhafwell/zhafwell-logo-identity.jpg",
      "mywork/01-corporate-identity/zhafwell/zhafwell-logo-mockup-01.jpg",
      "mywork/01-corporate-identity/zhafwell/zhafwell-logo-mockup-02.jpg",
      "mywork/01-corporate-identity/zhafwell/zhafwell-logo-mockup-03.jpg",
      "mywork/01-corporate-identity/zhafwell/zhafwell-product-01.jpg",
      "mywork/01-corporate-identity/zhafwell/zhafwell-product-02.jpg",
      "mywork/01-corporate-identity/zhafwell/zhafwell-product-03.jpg",
      "mywork/01-corporate-identity/zhafwell/zhafwell-popup-banner.jpg",
      "mywork/01-corporate-identity/zhafwell/zhafwell-popup-3x3.jpg",
      "mywork/01-corporate-identity/zhafwell/zhafwell-stationery.jpg"
    ]
  },
  {
    id: "empire-natasha",
    act: 3,
    actTitle: "Act 03: The Solo Operator & 14-Yr Trust",
    title: "Empire Natasha™ — Fashion Brand Identity",
    client: "Empire Natasha",
    category: "brand-corp",
    lens: ["creative"],
    year: "2015 – 2017",
    badge: "Fashion & Lifestyle Brand",
    summary: "Visual brand identity system and brand application mockups for a fashion and lifestyle brand, covering logo lockups, brand mark variations, and collateral applications.",
    deliverables: ["Brand Logo & Identity System", "Brand Application Mockups", "Visual Brand Guidelines", "Collateral Design"],
    impact: "Established a distinctive fashion brand identity with consistent application across retail and digital channels.",
    image: "mywork/01-corporate-identity/empire-natasha/empire-natasha-identity-01.jpg",
    gallery: [
      "mywork/01-corporate-identity/empire-natasha/empire-natasha-identity-01.jpg",
      "mywork/01-corporate-identity/empire-natasha/empire-natasha-identity-02.jpg",
      "mywork/01-corporate-identity/empire-natasha/empire-natasha-identity-03.jpg",
      "mywork/01-corporate-identity/empire-natasha/empire-natasha-identity-04.jpg"
    ]
  },
  {
    id: "rofanas-enterprise",
    act: 3,
    actTitle: "Act 03: The Solo Operator & 14-Yr Trust",
    title: "Rofanas Enterprise™ — Promotional Print Collateral",
    client: "Rofanas Enterprise",
    category: "print-posm",
    lens: ["creative"],
    year: "2013 – 2015",
    badge: "Enterprise Promotional Print",
    summary: "Promotional flyers and print collateral for a business enterprise, delivering campaign flyers, awareness materials, and printed promotional sheets for field sales and marketing.",
    deliverables: ["Promotional Flyer Design", "Print-Ready Artwork", "Campaign Collateral", "POSM Production"],
    impact: "Supported enterprise promotion and business development activities through impactful stacked-print materials.",
    image: "mywork/02-commercial-print-posm/rofanas/rofanas-flyers.jpg",
    gallery: [
      "mywork/02-commercial-print-posm/rofanas/rofanas-flyers.jpg"
    ]
  },

  /* ==========================================================================
     ACT 02: HIGH-STAKES BROADCAST & GOVERNMENT MEDIA (2009–2012)
     ========================================================================== */
  {
    id: "borneo-showreel",
    act: 2,
    actTitle: "Act 02: High-Stakes Broadcast",
    title: "Borneo Showreel & Broadcast TV Documentaries",
    client: "RTM · FINAS · Galaxy Features Network",
    category: "media-motion",
    lens: ["creative"],
    year: "2010 – 2012",
    badge: "Borneo Showreel & KKM TV Award",
    summary: "Broadcast documentaries (1001 Malaysia for RTM), motion graphics, camera operations, and award-winning scriptwriting for FINAS and Ministry of Health (KKM).",
    deliverables: ["Borneo Motion Graphics Showreel", "RTM 1001 Malaysia Documentary Series", "National Organ Donation PSA Script", "FINAS Production Management"],
    impact: "Won 2nd Place in the National TV PSA Scriptwriting Competition (KKM/RTM/FINAS) and delivered national broadcast standard motion media.",
    image: "mywork/02-commercial-print-posm/billboards-outdoor/billboard-display-highway.jpg",
    gallery: [
      "mywork/02-commercial-print-posm/billboards-outdoor/billboard-display-highway.jpg"
    ],
    links: [
      { label: "Borneo Showreel on YouTube", url: "https://www.youtube.com/watch?v=xmuCcunYNGU&list=PL1BCB093F66106553" },
      { label: "YouTube Channel", url: "https://www.youtube.com/@harussani.manaphassan" }
    ]
  },

  /* ==========================================================================
     ACT 01: CRAFT & INDUSTRIAL PRINT RIGOR (2007–2009)
     ========================================================================== */
  {
    id: "th-hotel-branding",
    act: 1,
    actTitle: "Act 01: Industrial Press Rigor",
    title: "TH Hotel™ (Tabung Haji) Signage & Large Format",
    client: "TH Hotel & Convention Centre",
    category: "print-posm",
    lens: ["creative"],
    year: "2015 – 2017",
    badge: "Industrial Large-Format Print",
    summary: "Large format roll-up banner systems, outdoor signage, and commercial hospitality print production with exacting color pre-flight standards.",
    deliverables: ["Roll-up Banner Systems", "Large-Format Signage", "Pre-Flight Color Separation", "Event Exhibition Collateral"],
    impact: "Commercial print precision delivered under strict architectural and convention deadlines.",
    image: "mywork/02-commercial-print-posm/th-hotel/th-hotel-rollup-banner.jpg",
    gallery: [
      "mywork/02-commercial-print-posm/th-hotel/th-hotel-rollup-banner.jpg",
      "mywork/02-commercial-print-posm/th-hotel/th-hotel-rollup-4set.jpg",
      "mywork/02-commercial-print-posm/th-hotel/th-hotel-event-banner.jpg",
      "mywork/02-commercial-print-posm/th-hotel/th-hotel-bunting.jpg",
      "mywork/02-commercial-print-posm/th-hotel/th-hotel-ramadan-flyer.jpg",
      "mywork/02-commercial-print-posm/th-hotel/th-hotel-vehicle-livery.jpg",
      "mywork/02-commercial-print-posm/th-hotel/th-hotel-lightbox.jpg",
      "mywork/02-commercial-print-posm/th-hotel/th-hotel-letterhead.jpg",
      "mywork/02-commercial-print-posm/th-hotel/th-hotel-business-card.jpg"
    ]
  },
  {
    id: "industrial-print-catalog",
    act: 1,
    actTitle: "Act 01: Industrial Press Rigor",
    title: "Commercial Print & Billboard Advertising Systems",
    client: "Commercial Print & Outdoor Media",
    category: "print-posm",
    lens: ["creative"],
    year: "2007 – 2014",
    badge: "Machining & Pre-Press Discipline",
    summary: "Production design, large-format billboard advertisements, acrylic framing displays, and walk-in commercial print operations.",
    deliverables: ["Highway Billboard Templates", "Acrylic Frame Displays", "Pre-Press CMYK Workflows", "Direct-to-Plate Pre-Flight"],
    impact: "Established the foundational production discipline and machine knowledge that anchors subsequent design leadership.",
    image: "mywork/02-commercial-print-posm/displays-frames/acrylic-frame-display.jpg",
    gallery: [
      "mywork/02-commercial-print-posm/displays-frames/acrylic-frame-display.jpg",
      "mywork/02-commercial-print-posm/billboards-outdoor/billboard-display-highway.jpg",
      "mywork/02-commercial-print-posm/billboards-outdoor/billboard-display-urban.jpg",
      "mywork/02-commercial-print-posm/billboards-outdoor/billboard-outdoor-mockup-04.jpg",
      "mywork/02-commercial-print-posm/billboards-outdoor/billboard-outdoor-mockup-08.jpg"
    ]
  }
];
