import { 
  createIcons, 
  Search, FileText, ArrowDownRight, Play, Github, Youtube,
  ExternalLink, Printer, X, Check, Copy, Award, Layers,
  Briefcase, Cpu, Code, Clock, ShieldCheck, Handshake, Terminal,
  Globe, Linkedin, Palette, Contact, Download,
  Moon, Sun, ChevronLeft, ChevronRight, ArrowUp, Mail, Trophy, Medal, QrCode
} from 'lucide';
import QRCode from 'qrcode';
import confetti from 'canvas-confetti';
import { careerEras, executiveMetrics, availability } from './data/career.js';
import { projects, externalProfiles } from './data/projects.js';
import { skillDomains, verifiedCredentials, toolsAndSoftware } from './data/skills.js';

// Icons setup
const icons = {
  Search, FileText, ArrowDownRight, Play, Github, Youtube,
  ExternalLink, Printer, X, Check, Copy, Award, Layers,
  Briefcase, Cpu, Code, Clock, ShieldCheck, Handshake, Terminal,
  Globe, Linkedin, Palette, Contact, Download,
  Moon, Sun, ChevronLeft, ChevronRight, ArrowUp, Mail, Trophy, Medal, QrCode
};

/* ==========================================================================
   MODULE-LEVEL CONSTANTS
   ========================================================================== */

// Shared vCard string — used by both download button and QR code
const vcardData = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  'FN:Harussani Manaphassan',
  'N:Manaphassan;Harussani;;;',
  'TITLE:Head of Creative \u00b7 Brand Systems Architect',
  'ORG:SuamiSihat \u00b7 Appcable',
  'EMAIL;TYPE=INTERNET;TYPE=WORK:harussani.manaphassan@gmail.com',
  'URL:https://manaphassan.github.io/cv/',
  'URL;TYPE=LinkedIn:https://www.linkedin.com/in/manaphassan',
  'URL;TYPE=Behance:https://www.behance.net/manaphassan',
  'URL;TYPE=GitHub:https://github.com/manaphassan',
  'ADR;TYPE=WORK:;;Banting \u2022 Cyberjaya \u2022 Shah Alam;Selangor;;;Malaysia',
  'NOTE:Portfolio of Harussani Manaphassan. Head of Creative at Suamisihat. Brand Systems Architect. 19+ years of creative practice.',
  'END:VCARD'
].join('\r\n');

// Skill constellation data
const DOMAIN_META = {
  brand:    { label: 'Brand & Identity',     color: '#1D4ED8' },
  ux:       { label: 'UX / Product Design',  color: '#0891B2' },
  ai:       { label: 'AI & Video',           color: '#7C3AED' },
  tech:     { label: 'Development',          color: '#059669' },
  lead:     { label: 'Creative Leadership',  color: '#B45309' },
};

const CONST_NODES = [
  { id: 'brand-id',  label: 'Brand Identity',      domain: 'brand', x: 14, y: 32, r: 7 },
  { id: 'vis-id',    label: 'Visual Identity',     domain: 'brand', x: 26, y: 18, r: 5 },
  { id: 'art-dir',   label: 'Art Direction',       domain: 'brand', x: 10, y: 52, r: 5 },
  { id: 'typo',      label: 'Typography',          domain: 'brand', x: 36, y: 12, r: 4 },
  { id: 'packaging', label: 'Packaging',           domain: 'brand', x: 20, y: 66, r: 5 },
  { id: 'print',     label: 'Pre-Press & Print',   domain: 'brand', x: 7,  y: 72, r: 4 },
  { id: 'uxui',      label: 'UX / UI Design',      domain: 'ux',    x: 50, y: 26, r: 7 },
  { id: 'figma',     label: 'Figma',               domain: 'ux',    x: 40, y: 40, r: 5 },
  { id: 'wire',      label: 'Wireframing',         domain: 'ux',    x: 60, y: 15, r: 4 },
  { id: 'proto',     label: 'Prototyping',         domain: 'ux',    x: 68, y: 28, r: 4 },
  { id: 'mobile',    label: 'Mobile App Design',   domain: 'ux',    x: 73, y: 17, r: 5 },
  { id: 'ds',        label: 'Design Systems',      domain: 'ux',    x: 46, y: 52, r: 6 },
  { id: 'ai-vid',    label: 'AI Video',            domain: 'ai',    x: 78, y: 56, r: 6 },
  { id: 'veo',       label: 'Google Veo',          domain: 'ai',    x: 88, y: 48, r: 5 },
  { id: 'capcut',    label: 'CapCut',              domain: 'ai',    x: 90, y: 66, r: 4 },
  { id: 'claude',    label: 'Claude Code',         domain: 'ai',    x: 80, y: 76, r: 5 },
  { id: 'react',     label: 'React / Svelte',      domain: 'tech',  x: 68, y: 73, r: 5 },
  { id: 'nocobase',  label: 'NocoBase',            domain: 'tech',  x: 60, y: 83, r: 4 },
  { id: 'motion',    label: 'Motion Graphics',     domain: 'ai',    x: 72, y: 44, r: 4 },
  { id: 'lead',      label: 'Creative Direction',  domain: 'lead',  x: 32, y: 79, r: 7 },
  { id: 'pitch',     label: 'Pitch Decks',         domain: 'lead',  x: 20, y: 86, r: 5 },
  { id: 'pm',        label: 'Project Management',  domain: 'lead',  x: 44, y: 90, r: 5 },
];

const CONST_EDGES = [
  ['brand-id','vis-id'], ['brand-id','art-dir'], ['brand-id','packaging'],
  ['vis-id','typo'], ['art-dir','print'],
  ['uxui','figma'], ['uxui','wire'], ['uxui','proto'],
  ['wire','mobile'], ['proto','mobile'], ['figma','ds'],
  ['ai-vid','veo'], ['ai-vid','capcut'], ['ai-vid','claude'],
  ['claude','react'], ['react','nocobase'], ['ai-vid','motion'],
  ['lead','pitch'], ['lead','pm'],
  // Cross-domain bridges
  ['brand-id','figma'], ['ds','brand-id'], ['ds','react'],
  ['lead','brand-id'], ['lead','uxui'], ['motion','uxui'],
];

function refreshIcons() {
  createIcons({ icons });
}

/* ==========================================================================
   1. HERO METRICS (READABLE SWISS TYPOGRAPHY + COUNT-UP)
   ========================================================================== */
function renderHeroMetrics() {
  const container = document.getElementById('hero-metrics-grid');
  if (!container) return;

  container.innerHTML = executiveMetrics.map((m, idx) => `
    <div class="p-4 rounded-xl border border-paper-200 bg-paper-50 flex flex-col justify-between">
      <span class="font-mono text-xs text-paper-500 uppercase tracking-wider block mb-1 font-bold">
        [0${idx + 1}]
      </span>
      <div>
        <div
          class="metric-value font-display font-extrabold text-2xl sm:text-3xl text-paper-950 tracking-tight leading-none mb-1"
          data-countup="${m.value}">
          ${m.value}
        </div>
        <p class="font-mono text-xs font-bold text-paper-900 leading-tight">${m.label}</p>
        <p class="font-mono text-xs text-paper-600 mt-0.5">${m.sub}</p>
      </div>
    </div>
  `).join('');
}

function initCountUpMetrics() {
  const metricEls = document.querySelectorAll('.metric-value[data-countup]');
  if (!metricEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      const el = entry.target;
      const raw = el.getAttribute('data-countup');
      const match = raw.match(/^(\D*)(\d+)(\D*)$/);
      if (!match) return;
      const [, prefix, numStr, suffix] = match;
      const target = parseInt(numStr, 10);
      const padded = numStr.length > 1 && numStr.startsWith('0');
      const duration = 1100;
      const start = performance.now();
      function update(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const cur = Math.round(eased * target);
        const display = padded ? String(cur).padStart(numStr.length, '0') : String(cur);
        el.textContent = prefix + display + suffix;
        if (p < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    });
  }, { threshold: 0.5 });

  metricEls.forEach(el => observer.observe(el));
}

/* ==========================================================================
   2. EMBEDDED ACT PROJECTS (STORY-DRIVEN GALLERY)
   ========================================================================== */
function renderProjectCard(p) {
  const hasLinks = p.links && p.links.length > 0;
  
  return `
    <article 
      data-id="${p.id}"
      data-category="${p.category}"
      class="story-card group cursor-pointer border border-paper-300 rounded-2xl overflow-hidden bg-white hover:border-paper-500 transition-all flex flex-col justify-between">
      
      <div>
        <!-- Image Frame -->
        <div class="relative aspect-video w-full overflow-hidden bg-paper-150 border-b border-paper-200">
          <img 
            src="${encodeURI(p.image)}" 
            alt="${p.title}" 
            loading="lazy"
            onerror="this.onerror=null; this.src='mywork/02-commercial-print-posm/billboards-outdoor/billboard-display-highway.jpg';"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          <div class="absolute top-3 left-3 bg-paper-950/90 text-white font-mono text-xs uppercase font-bold tracking-wider px-3 py-1 rounded">
            ${p.badge}
          </div>
          <div class="absolute bottom-3 right-3 bg-white/95 text-paper-900 font-mono text-xs font-bold px-2.5 py-1 rounded border border-paper-200">
            ${p.year}
          </div>
        </div>

        <!-- Content -->
        <div class="p-5 sm:p-6">
          <span class="font-mono text-xs text-paper-700 uppercase tracking-wider block mb-1 font-bold">
            ${p.client}
          </span>
          <h3 class="font-display font-bold text-lg sm:text-xl text-paper-950 group-hover:text-accent-blue transition-colors mb-2 leading-snug">
            ${p.title}
          </h3>
          <p class="text-sm sm:text-base text-paper-800 leading-relaxed font-sans line-clamp-2 mb-4">
            ${p.summary}
          </p>

          <div class="flex flex-wrap gap-1.5 mb-2">
            ${p.deliverables.slice(0, 3).map(d => `
              <span class="font-mono text-xs px-2.5 py-1 rounded bg-paper-100 border border-paper-200 text-paper-900 font-semibold">
                ${d}
              </span>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="px-5 sm:px-6 py-3.5 bg-paper-50 border-t border-paper-200 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
        <span class="text-paper-700 truncate max-w-[200px] font-semibold">
          &ldquo;${p.impact.substring(0, 36)}...&rdquo;
        </span>
        <div class="flex items-center gap-2">
          ${hasLinks ? `
            <a href="${p.links[0].url}" target="_blank" rel="noreferrer" class="px-2.5 py-1 rounded-md bg-white border border-paper-300 text-accent-blue font-bold hover:border-accent-blue transition-all flex items-center gap-1 shadow-2xs" onclick="event.stopPropagation();" title="${p.links[0].label}">
              <span>${p.links[0].label.length > 15 ? p.links[0].label.substring(0, 13) + '…' : p.links[0].label}</span>
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
          ` : ''}
          <span class="text-paper-950 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            <span>Details</span>
            <i data-lucide="arrow-down-right" class="w-4 h-4 text-accent-blue"></i>
          </span>
        </div>
      </div>

    </article>
  `;
}

const SHOW_MORE_THRESHOLD = 6;

function renderActProjects() {
  const acts = [1, 3, 4, 5];
  acts.forEach(actNum => {
    const container = document.getElementById(`act-0${actNum}-projects`);
    if (!container) return;

    const actProjects = projects.filter(p => p.act === actNum);

    // For large acts (Act 03 has 11 projects), show first N with a show-more toggle
    const shouldCollapse = actProjects.length > SHOW_MORE_THRESHOLD;
    const visible = shouldCollapse ? actProjects.slice(0, SHOW_MORE_THRESHOLD) : actProjects;
    const hidden = shouldCollapse ? actProjects.slice(SHOW_MORE_THRESHOLD) : [];

    container.innerHTML = visible.map(p => renderProjectCard(p)).join('');

    if (shouldCollapse) {
      container.insertAdjacentHTML('afterend', `
        <div id="show-more-act-${actNum}" class="mt-6 text-center">
          <button class="show-more-btn px-6 py-2.5 rounded-xl border border-paper-300 font-mono text-xs font-bold text-paper-700 hover:bg-paper-100 hover:border-paper-500 transition-all inline-flex items-center gap-2">
            <span>Show all ${actProjects.length} projects</span>
            <i data-lucide="arrow-down-right" class="w-4 h-4"></i>
          </button>
        </div>
      `);
      const showMoreWrap = document.getElementById(`show-more-act-${actNum}`);
      showMoreWrap?.querySelector('.show-more-btn')?.addEventListener('click', () => {
        container.insertAdjacentHTML('beforeend', hidden.map(p => renderProjectCard(p)).join(''));
        showMoreWrap.remove();
        // Re-apply active discipline filter to newly added cards
        const activeBtn = document.querySelector('.filter-discipline-btn.font-bold');
        if (activeBtn) activeBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        refreshIcons();
      });
    }

    // Event delegation — handles both initial + show-more cards
    container.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      const card = e.target.closest('.story-card');
      if (!card) return;
      openLightbox(card.getAttribute('data-id'));
    });
  });

  refreshIcons();
}

/* ==========================================================================
   3. ANIMATED SCROLL INTERSECTION OBSERVER
   ========================================================================== */
function initScrollObserver() {
  const chapters = document.querySelectorAll('.story-chapter');
  const navPills = document.querySelectorAll('.act-nav-pill');
  const mobilePills = document.querySelectorAll('.mobile-act-pill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        
        const id = entry.target.getAttribute('id');
        const activeClass = 'act-nav-pill px-3.5 py-1.5 rounded-lg border border-paper-950 bg-paper-950 text-white font-bold transition-all shadow-sm';
        const inactiveClass = 'act-nav-pill px-3.5 py-1.5 rounded-lg border border-paper-200 text-paper-700 hover:text-paper-950 hover:border-paper-400 transition-all font-medium';
        const mobileActive = 'mobile-act-pill flex-1 text-center py-1.5 rounded-lg border border-paper-950 bg-paper-950 text-white font-mono text-[10px] font-bold';
        const mobileInactive = 'mobile-act-pill flex-1 text-center py-1.5 rounded-lg border border-paper-200 text-paper-700 font-mono text-[10px] font-bold';

        navPills.forEach(pill => {
          pill.className = pill.getAttribute('href') === `#${id}` ? activeClass : inactiveClass;
        });
        mobilePills.forEach(pill => {
          pill.className = pill.getAttribute('href') === `#${id}` ? mobileActive : mobileInactive;
        });
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -80px 0px"
  });

  chapters.forEach(ch => observer.observe(ch));
}

/* ==========================================================================
   4. LIGHTBOX DIALOG (with gallery nav state)
   ========================================================================== */
let lbGallery = [];
let lbIndex = 0;

function navigateLightbox(dir) {
  if (lbGallery.length <= 1) return;
  lbIndex = (lbIndex + dir + lbGallery.length) % lbGallery.length;
  const img = document.getElementById('lb-main-image');
  if (!img) return;

  // Crossfade: fade out → swap src → fade in
  img.style.transition = 'opacity 0.15s ease';
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = encodeURI(lbGallery[lbIndex]);
    img.style.opacity = '1';
  }, 150);

  // Sync thumbnail highlight
  document.querySelectorAll('.lb-thumb-btn').forEach((btn, i) => {
    btn.className = i === lbIndex
      ? 'lb-thumb-btn w-16 h-16 rounded-lg overflow-hidden border-2 border-paper-950 shrink-0'
      : 'lb-thumb-btn w-16 h-16 rounded-lg overflow-hidden border-2 border-paper-200 shrink-0 hover:border-paper-950 transition-all';
  });
  // Scroll active thumb into view
  document.querySelectorAll('.lb-thumb-btn')[lbIndex]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
}

function openLightbox(projectId) {
  const p = projects.find(item => item.id === projectId);
  if (!p) return;

  const dialog = document.getElementById('lightbox-dialog');
  const lbBadge = document.getElementById('lb-badge');
  const lbTitle = document.getElementById('lb-title');
  const lbClient = document.getElementById('lb-client');
  const lbMainImage = document.getElementById('lb-main-image');
  const lbThumbnails = document.getElementById('lb-thumbnails');
  const lbSummary = document.getElementById('lb-summary');
  const lbDeliverables = document.getElementById('lb-deliverables');
  const lbLinksContainer = document.getElementById('lb-links-container');

  lbBadge.textContent = p.badge;
  lbTitle.textContent = p.title;
  lbClient.textContent = `${p.client} · ${p.year}`;

  lbMainImage.src = encodeURI(p.image);
  lbMainImage.alt = p.title;
  lbSummary.textContent = p.summary;

  lbDeliverables.innerHTML = `
    ${p.deliverables.map(d => `
      <li class="flex items-start gap-2">
        <span class="text-paper-400 font-mono text-sm mt-0.5 font-bold">&mdash;</span>
        <span class="text-paper-800">${d}</span>
      </li>
    `).join('')}
    <li class="pt-3 font-mono text-xs text-accent-blue font-bold">
      [Design & Commercial Impact]: ${p.impact}
    </li>
  `;

  // External Links inside modal
  if (lbLinksContainer) {
    if (p.links && p.links.length > 0) {
      lbLinksContainer.innerHTML = p.links.map(l => `
        <a href="${l.url}" target="_blank" rel="noreferrer" class="px-3 py-1.5 rounded-lg border border-paper-300 bg-paper-50 hover:bg-white text-paper-900 font-mono text-xs font-bold hover:border-paper-500 transition-all flex items-center gap-1.5">
          <span>${l.label}</span>
          <i data-lucide="external-link" class="w-3.5 h-3.5 text-accent-blue"></i>
        </a>
      `).join('');
    } else {
      lbLinksContainer.innerHTML = '';
    }
  }

  const images = p.gallery && p.gallery.length > 0 ? p.gallery : [p.image];
  lbGallery = images;
  lbIndex = 0;

  lbMainImage.src = encodeURI(images[0]);

  lbThumbnails.innerHTML = images.map((img, idx) => `
    <button 
      class="lb-thumb-btn w-16 h-16 rounded-lg overflow-hidden border-2 ${idx === 0 ? 'border-paper-950' : 'border-paper-200'} shrink-0 hover:border-paper-950 transition-all"
      data-img="${img}" data-idx="${idx}">
      <img src="${encodeURI(img)}" class="w-full h-full object-cover" alt="" loading="lazy" onerror="this.src='mywork/02-commercial-print-posm/billboards-outdoor/billboard-display-highway.jpg';" />
    </button>
  `).join('');

  lbThumbnails.querySelectorAll('.lb-thumb-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      lbIndex = parseInt(btn.getAttribute('data-idx'), 10);
      lbThumbnails.querySelectorAll('.lb-thumb-btn').forEach(b => b.className = 'lb-thumb-btn w-16 h-16 rounded-lg overflow-hidden border-2 border-paper-200 shrink-0 hover:border-paper-950 transition-all');
      btn.className = 'lb-thumb-btn w-16 h-16 rounded-lg overflow-hidden border-2 border-paper-950 shrink-0';
      lbMainImage.src = encodeURI(btn.getAttribute('data-img'));
    });
  });

  // Show/hide nav buttons
  const prevBtn = document.getElementById('lb-prev');
  const nextBtn = document.getElementById('lb-next');
  const hasMultiple = images.length > 1;
  if (prevBtn) prevBtn.classList.toggle('hidden', !hasMultiple);
  if (nextBtn) nextBtn.classList.toggle('hidden', !hasMultiple);

  dialog.showModal();
  refreshIcons();
}

/* ==========================================================================
   5. FEATURED BRAND ARCHITECTURE (APPCABLE BRAND COLLATERAL SUITE)
   ========================================================================== */
const appcableAssets = [
  {
    id: 'logo',
    name: '01. Logo Mark',
    title: 'Geometric Brand Mark & Identity Symbolism',
    tag: 'Visual Identity',
    image: 'mywork/03-digital-product-ui/appcable/appcable-logo-identity.jpg',
    description: 'Designed a precise geometric mark conveying modern connectivity, modularity, and enterprise reliability for an emerging automation and systems brand.',
    specs: 'Golden-ratio geometry, negative-space cable integration, vector master assets scalable from 16px favicon to large architectural signage.'
  },
  {
    id: 'stationery',
    name: '02. Letterhead',
    title: 'Corporate Stationery & Formal Documentation',
    tag: 'Print & Corporate',
    image: 'mywork/03-digital-product-ui/appcable/appcable-letterhead.jpg',
    description: 'Structured an authoritative, minimalist Swiss-grid letterhead for official client proposals, enterprise contracts, and corporate communications.',
    specs: 'A4 format, strict baseline typographic grid, calibrated margins, and production-ready pre-flight CMYK values.'
  },
  {
    id: 'card',
    name: '03. Business Cards',
    title: 'Executive Dual-Tone Business Card Suite',
    tag: 'Tactile Collateral',
    image: 'mywork/03-digital-product-ui/appcable/appcable-business-card.jpg',
    description: 'Engineered high-contrast executive cards featuring blind deboss accents, tactile matte cardstock, and a dual-face color palette (clean white obverse with deep midnight reverse).',
    specs: '350gsm premium cotton cardstock, spot UV coating, and precise bleed registration.'
  },
  {
    id: 'merch',
    name: '04. Apparel & Merch',
    title: 'Brand Apparel & Team Merchandise',
    tag: 'Physical Culture',
    image: 'mywork/03-digital-product-ui/appcable/appcable-tshirt-mockup.jpg',
    description: 'Designed understated, high-taste company apparel featuring subtle monochrome chest branding and typographic details on hem tags.',
    specs: 'Vector screenprint separations, Pantone color specifications, and production garment templates.'
  }
];

function initAppcableBrandShowcase() {
  const tabsContainer = document.getElementById('appcable-tabs-grid');
  const canvas = document.getElementById('appcable-canvas');
  if (!tabsContainer || !canvas) return;

  function renderAsset(asset) {
    canvas.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div class="lg:col-span-7 rounded-xl overflow-hidden border border-paper-200 bg-paper-150 aspect-video sm:aspect-4/3 flex items-center justify-center group">
          <img 
            src="${encodeURI(asset.image)}" 
            alt="${asset.title}" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onerror="this.src='mywork/03-digital-product-ui/appcable/appcable-logo-identity.jpg';"
          />
        </div>
        <div class="lg:col-span-5 space-y-4">
          <div>
            <span class="font-mono text-xs px-2.5 py-1 rounded bg-accent-blue/10 text-accent-blue font-bold uppercase tracking-wider">
              ${asset.tag}
            </span>
            <h4 class="font-display font-bold text-xl sm:text-2xl text-paper-950 mt-2 leading-snug">
              ${asset.title}
            </h4>
          </div>
          <p class="text-sm text-paper-700 leading-relaxed font-sans">
            ${asset.description}
          </p>
          <div class="p-3.5 rounded-lg bg-paper-50 border border-paper-200 font-mono text-xs">
            <span class="text-paper-500 block text-xs uppercase font-bold mb-1">Production & Design Specs</span>
            <p class="text-paper-900 font-medium">${asset.specs}</p>
          </div>
          <div class="pt-2">
            <a href="https://appcable.com/" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 font-mono text-xs font-bold text-paper-950 hover:text-accent-blue transition-colors">
              <span>View Live Appcable Platform</span>
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
          </div>
        </div>
      </div>
    `;
    refreshIcons();
  }

  tabsContainer.innerHTML = appcableAssets.map((a, idx) => `
    <button 
      data-asset="${a.id}"
      class="appcable-tab-btn p-3 rounded-xl border text-left transition-all ${
        idx === 0 ? 'bg-paper-950 text-white font-bold' : 'bg-white border-paper-200 text-paper-800 hover:border-paper-400 font-medium'
      }">
      <span class="font-mono font-bold text-xs block">${a.name}</span>
      <span class="text-xs opacity-80 truncate block">${a.tag}</span>
    </button>
  `).join('');

  renderAsset(appcableAssets[0]);

  tabsContainer.querySelectorAll('.appcable-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      tabsContainer.querySelectorAll('.appcable-tab-btn').forEach(b => {
        b.className = 'appcable-tab-btn p-3 rounded-xl border text-left transition-all bg-white border-paper-200 text-paper-800 hover:border-paper-400 font-medium';
      });
      btn.className = 'appcable-tab-btn p-3 rounded-xl border text-left transition-all bg-paper-950 text-white font-bold';
      const asset = appcableAssets.find(a => a.id === btn.getAttribute('data-asset'));
      if (asset) renderAsset(asset);
    });
  });
}

/* ==========================================================================
   DISCIPLINE FILTER SYSTEM (with count badges)
   ========================================================================== */
function initDisciplineFilter() {
  const filterBtns = document.querySelectorAll('.filter-discipline-btn');
  if (!filterBtns.length) return;

  // Build category counts from projects data
  const counts = { all: projects.length };
  projects.forEach(p => {
    const c = p.category;
    if (c === 'product-ux') counts['product-ux'] = (counts['product-ux'] || 0) + 1;
    else if (c === 'brand-corp' || c === 'branding') counts['brand-corp'] = (counts['brand-corp'] || 0) + 1;
    else if (c === 'print-posm' || c === 'commercial-posm') counts['commercial-posm'] = (counts['commercial-posm'] || 0) + 1;
    else if (c === 'ai-systems' || c === 'broadcast-video' || c === 'media-motion') counts['creative-tech'] = (counts['creative-tech'] || 0) + 1;
  });

  filterBtns.forEach(btn => {
    const disc = btn.getAttribute('data-discipline');
    const count = counts[disc];
    if (count !== undefined) {
      btn.innerHTML = `${btn.textContent.trim()} <span class="font-normal opacity-60">(${count})</span>`;
    }
  });

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const discipline = btn.getAttribute('data-discipline');

      filterBtns.forEach(b => {
        b.className = 'filter-discipline-btn px-3 py-1 rounded-md border border-paper-200 bg-white text-paper-700 hover:text-paper-950 hover:border-paper-400 transition-all font-semibold shrink-0';
      });
      btn.className = 'filter-discipline-btn px-3 py-1 rounded-md border border-paper-950 bg-paper-950 text-white font-bold transition-all shrink-0 shadow-2xs';

      const cards = document.querySelectorAll('.story-card');
      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        const shouldShow = discipline === 'all' ||
          (discipline === 'product-ux'      && cat === 'product-ux') ||
          (discipline === 'brand-corp'      && (cat === 'brand-corp' || cat === 'branding')) ||
          (discipline === 'commercial-posm' && (cat === 'commercial-posm' || cat === 'print-posm')) ||
          (discipline === 'creative-tech'   && (cat === 'ai-systems' || cat === 'broadcast-video' || cat === 'media-motion'));

        if (shouldShow) {
          // Cancel any pending hide timer
          if (card._filterTimer) { clearTimeout(card._filterTimer); delete card._filterTimer; }
          card.classList.remove('hidden');
          // Double rAF ensures the display change is committed before the transition fires
          requestAnimationFrame(() => requestAnimationFrame(() => { card.style.opacity = '1'; }));
        } else {
          card.style.opacity = '0';
          card._filterTimer = setTimeout(() => {
            card.classList.add('hidden');
            card.style.opacity = '';
          }, 220);
        }
      });
    });
  });
}

/* ==========================================================================
   6. VERIFIED CREDENTIALS & SKILLS
   ========================================================================== */
function renderCredentialsAndSkills() {
  const credsContainer = document.getElementById('credentials-list-container');
  const skillsContainer = document.getElementById('skills-matrix-container');

  if (credsContainer) {
    credsContainer.innerHTML = `
      <span class="font-mono text-xs uppercase tracking-wider text-paper-500 font-bold block mb-2">[VERIFIED CREDENTIALS & INSTITUTIONAL EVIDENCE]</span>
      <div class="space-y-3">
        ${verifiedCredentials.map(c => `
          <div class="p-4 rounded-xl border border-paper-200 bg-paper-50 flex items-start justify-between gap-3">
            <div>
              <h5 class="font-bold text-base text-paper-950">${c.title}</h5>
              <p class="font-mono text-xs text-paper-700 font-bold mt-0.5">${c.issuer} &middot; <strong class="text-paper-950">${c.value}</strong></p>
              <p class="text-xs text-paper-600 mt-1">${c.detail}</p>
            </div>
            <span class="font-mono text-xs font-bold text-paper-500 shrink-0">${c.year}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  if (skillsContainer) {
    skillsContainer.innerHTML = `
      <span class="font-mono text-xs uppercase tracking-wider text-paper-500 font-bold block mb-2">[CORE DISCIPLINES & PRACTICE]</span>
      <div class="space-y-4">
        ${skillDomains.map(d => `
          <div class="p-5 rounded-xl border border-paper-200 bg-white">
            <h4 class="font-bold text-base text-paper-950 mb-1">${d.title}</h4>
            <p class="text-xs text-paper-600 mb-3">${d.description}</p>
            <div class="flex flex-wrap gap-2 pt-1">
              ${d.skills.map(s => `
                <span class="px-2.5 py-1 rounded-lg bg-paper-50 text-paper-800 font-mono text-xs font-medium border border-paper-200">
                  ${typeof s === 'string' ? s : s.name}
                </span>
              `).join('')}
            </div>
          </div>
        `).join('')}
        <div class="p-5 rounded-xl border border-paper-200 bg-white">
          <h4 class="font-bold text-base text-paper-950 mb-3">Tools &amp; Software</h4>
          <div class="space-y-3">
            ${toolsAndSoftware.map(cat => `
              <div>
                <span class="font-mono text-xs text-paper-500 uppercase tracking-wider font-bold block mb-1.5">${cat.category}</span>
                <div class="flex flex-wrap gap-1.5">
                  ${cat.tools.map(t => `<span class="px-2.5 py-1 rounded-lg bg-paper-50 text-paper-800 font-mono text-xs font-medium border border-paper-200">${t}</span>`).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }
}

/* ==========================================================================
   7. LIVE GITHUB RADAR
   ========================================================================== */
async function fetchGitHubRepos() {
  const container = document.getElementById('github-repos-container');
  if (!container) return;

  const fallbackRepos = [
    {
      name: "SS-CAM (SuamiSihat Creative Asset Management)",
      description: "Windows deployment utility for SuamiSihat creative workstations — installs brand typography, palettes, asset libraries, and project folder generator.",
      language: "PowerShell / Shell",
      stargazers_count: 8,
      html_url: "https://github.com/SuamiSihat/ss_cam"
    },
    {
      name: "manaphassan_portfolio",
      description: "Interactive narrative career growth chronicle and systems monograph hosted on GitHub Pages.",
      language: "JavaScript",
      stargazers_count: 4,
      html_url: "https://github.com/manaphassan/manaphassan_portfolio"
    },
    {
      name: "ssDesignSystem",
      description: "Enterprise design system, tokenized components, and brand guidelines for SuamiSihat.",
      language: "Svelte",
      stargazers_count: 5,
      html_url: "https://github.com/manaphassan/ssDesignSystem"
    },
    {
      name: "bmb20",
      description: "MEENA Home AI 8-deck LCARS system deployed on DietPi Raspberry Pi 3B edge hardware.",
      language: "Python",
      stargazers_count: 7,
      html_url: "https://github.com/manaphassan/bmb20"
    }
  ];

  try {
    const res = await fetch('https://api.github.com/users/manaphassan/repos?sort=updated&per_page=4');
    if (!res.ok) throw new Error('Offline or rate limited');
    const data = await res.json();
    const repos = Array.isArray(data) && data.length > 0 ? data : fallbackRepos;
    renderRepos(repos);
  } catch (e) {
    renderRepos(fallbackRepos);
  }

  function renderRepos(list) {
    container.innerHTML = list.slice(0, 4).map(repo => `
      <a 
        href="${repo.html_url}" 
        target="_blank" 
        rel="noreferrer" 
        class="p-5 rounded-xl border border-paper-200 bg-paper-50 hover:bg-white hover:border-paper-400 transition-all flex flex-col justify-between group">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="font-mono font-bold text-sm text-paper-950 group-hover:text-accent-blue transition-colors">
              ${repo.name}
            </span>
            <i data-lucide="external-link" class="w-4 h-4 text-paper-400 group-hover:text-paper-950 transition-colors"></i>
          </div>
          <p class="text-xs text-paper-700 line-clamp-2 leading-relaxed mb-4">
            ${repo.description || 'Public software and creative automation repository.'}
          </p>
        </div>
        <div class="pt-3 border-t border-paper-200 font-mono text-xs text-paper-600 flex justify-between font-medium">
          <span>${repo.language || 'Code'}</span>
          <span>★ ${repo.stargazers_count || 0}</span>
        </div>
      </a>
    `).join('');
    refreshIcons();
  }
}

/* ==========================================================================
   8. COMMAND PALETTE (Ctrl+K)
   ========================================================================== */
function initCommandPalette() {
  const dialog = document.getElementById('cmd-dialog');
  const btn = document.getElementById('btn-cmd-palette');
  const input = document.getElementById('cmd-input');
  const results = document.getElementById('cmd-results');

  if (!dialog || !btn || !input || !results) return;

  const commands = [
    { title: "Download Executive CV (PDF)", cat: "Dossier", action: () => openResume() },
    { title: "SuamiSihat Telehealth App (suamisihat.app)", cat: "Live Platform", action: () => window.open('https://www.suamisihat.app/', '_blank') },
    { title: "JomParking® Platform (web.jomparking.com)", cat: "Live Platform", action: () => window.open('https://web.jomparking.com/', '_blank') },
    { title: "GoPayy+ Digital Payment (govicle.com/gopayy)", cat: "Live Platform", action: () => window.open('https://govicle.com/gopayy/', '_blank') },
    { title: "SuamiSihat™ Design System (Single Source of Truth)", cat: "Live System", action: () => window.open('https://assets.suamisihat.myds.me/', '_blank') },
    { title: "SS-CAM (SuamiSihat Creative Asset Management) Workstation Tool (GitHub)", cat: "Code", action: () => window.open('https://github.com/SuamiSihat/ss_cam', '_blank') },
    { title: "LinkedIn Profile (linkedin.com/in/manaphassan)", cat: "Profile", action: () => window.open(externalProfiles.linkedin, '_blank') },
    { title: "Behance Portfolio (behance.net/manaphassan)", cat: "Profile", action: () => window.open(externalProfiles.behance, '_blank') },
    { title: "Borneo Showreel on YouTube", cat: "Media", action: () => window.open(externalProfiles.borneoShowreel, '_blank') },
    { title: "Jump to Act 01: Craft & Industrial Press Rigor", cat: "Story", action: () => { window.location.hash = '#act-01'; } },
    { title: "Jump to Act 02: Broadcast Media & KKM Award", cat: "Story", action: () => { window.location.hash = '#act-02'; } },
    { title: "Jump to Act 03: The 6-Entity Solo Operator (PICC/MIDF)", cat: "Story", action: () => { window.location.hash = '#act-03'; } },
    { title: "Jump to Act 04: National Smart City (JomParking)", cat: "Story", action: () => { window.location.hash = '#act-04'; } },
    { title: "Jump to Act 05: Creative Leadership & AI (SuamiSihat)", cat: "Story", action: () => { window.location.hash = '#act-05'; } }
  ];

  function renderMatches(q = '') {
    const query = q.toLowerCase().trim();
    const list = query === '' ? commands.slice(0, 8) : commands.filter(c => c.title.toLowerCase().includes(query) || c.cat.toLowerCase().includes(query));

    if (list.length === 0) {
      results.innerHTML = `<div class="p-4 text-center font-mono text-xs text-paper-500">[NO MATCHING RESULTS]</div>`;
      return;
    }

    results.innerHTML = list.map((item, idx) => `
      <div 
        data-idx="${idx}"
        class="cmd-row p-3 rounded-lg hover:bg-paper-100 cursor-pointer flex items-center justify-between transition-colors">
        <span class="font-sans text-sm font-semibold text-paper-950">${item.title}</span>
        <span class="font-mono text-xs px-2 py-0.5 rounded bg-paper-200 text-paper-800 font-bold">${item.cat}</span>
      </div>
    `).join('');

    results.querySelectorAll('.cmd-row').forEach(row => {
      row.addEventListener('click', () => {
        const idx = parseInt(row.getAttribute('data-idx'), 10);
        dialog.close();
        list[idx].action();
      });
    });
  }

  btn.addEventListener('click', () => {
    dialog.showModal();
    input.value = '';
    renderMatches('');
    setTimeout(() => input.focus(), 80);
  });

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (dialog.open) {
        dialog.close();
      } else {
        dialog.showModal();
        input.value = '';
        renderMatches('');
        setTimeout(() => input.focus(), 80);
      }
    }
  });

  input.addEventListener('input', (e) => renderMatches(e.target.value));
}

/* ==========================================================================
   9. EXECUTIVE CV & CONTACT HANDLERS
   ========================================================================== */
function openResume() {
  const dialog = document.getElementById('resume-dialog');
  if (dialog) dialog.showModal();
}

function initResumeAndContact() {
  const openResumeBtns = [
    document.getElementById('btn-open-resume'),
    document.getElementById('btn-cta-resume')
  ];
  const closeResumeBtn = document.getElementById('btn-close-resume');
  const printResumeBtn = document.getElementById('btn-print-resume');
  const resumeDialog = document.getElementById('resume-dialog');

  openResumeBtns.forEach(btn => btn?.addEventListener('click', openResume));
  closeResumeBtn?.addEventListener('click', () => resumeDialog?.close());
  printResumeBtn?.addEventListener('click', () => window.print());

  // Close lightbox
  const lbClose = document.getElementById('lb-close');
  const lbDialog = document.getElementById('lightbox-dialog');
  lbClose?.addEventListener('click', () => lbDialog?.close());

  // Save vCard (.vcf)
  const saveVCardBtn = document.getElementById('btn-save-vcard');
  const saveVCardLabel = document.getElementById('save-vcard-label');

  saveVCardBtn?.addEventListener('click', () => {
    const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Harussani_Manaphassan.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#0F172A', '#2563EB', '#10B981']
    });

    if (saveVCardLabel) {
      saveVCardLabel.textContent = 'vCard Saved!';
      setTimeout(() => { saveVCardLabel.textContent = 'Save vCard (.vcf)'; }, 2500);
    }
  });
}

/* ==========================================================================
   10. ANIMATED SCROLL PROGRESS & TIMELINE SPINE SYSTEM
   ========================================================================== */
function initScrollProgressAndTimelineSpine() {
  const progressBar = document.getElementById('scroll-progress-bar');
  const spineTrack = document.getElementById('timeline-spine-track');
  const spineProgress = document.getElementById('timeline-spine-progress');
  const chronicleContainer = document.getElementById('story-chronicle-container');
  const nodes = document.querySelectorAll('.timeline-node');

  function updateProgress() {
    // 1. Global top reading bar
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar && maxScroll > 0) {
      const globalPercent = Math.min(100, Math.max(0, (scrollY / maxScroll) * 100));
      progressBar.style.width = `${globalPercent}%`;
    }

    // 2. Continuous timeline spine in chronicle
    if (chronicleContainer && spineProgress && spineTrack) {
      const containerRect = chronicleContainer.getBoundingClientRect();
      const trackHeight = spineTrack.offsetHeight;
      const windowCenter = window.innerHeight * 0.4;

      const scrolledIntoContainer = windowCenter - containerRect.top;
      let spinePercent = (scrolledIntoContainer / containerRect.height) * 100;
      spinePercent = Math.min(100, Math.max(0, spinePercent));
      spineProgress.style.height = `${(spinePercent / 100) * trackHeight}px`;

      // 3. Highlight timeline nodes as reader passes each act
      nodes.forEach(node => {
        const nodeRect = node.getBoundingClientRect();
        if (nodeRect.top <= window.innerHeight * 0.45) {
          node.classList.add('is-active');
        } else {
          node.classList.remove('is-active');
        }
      });
    }
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });
  updateProgress();
}

/* ==========================================================================
   11. DYNAMIC YEARS CALCULATION (FOOTER, TIMELINE & YEARS OF PRACTICE)
   ========================================================================== */
function initDynamicYears() {
  const currentYear = new Date().getFullYear();
  const startYear = 2007;
  const yearsPractice = currentYear - startYear;

  const footerYear = document.getElementById('footer-dynamic-year');
  if (footerYear) {
    footerYear.textContent = currentYear;
  }

  const timelineYear = document.getElementById('dynamic-current-year');
  if (timelineYear) {
    timelineYear.textContent = currentYear;
  }

  const dynamicYearsEls = document.querySelectorAll('.dynamic-years-practice');
  dynamicYearsEls.forEach(el => {
    el.textContent = `${yearsPractice} Years Professional Practice`;
  });
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */

/* ==========================================================================
   NEW: LIGHTBOX KEYBOARD & TOUCH SWIPE NAVIGATION
   ========================================================================== */
function initLightboxNavigation() {
  const dialog = document.getElementById('lightbox-dialog');
  if (!dialog) return;

  // Keyboard: arrow keys navigate gallery
  window.addEventListener('keydown', (e) => {
    if (!dialog.open) return;
    if (e.key === 'ArrowRight') navigateLightbox(1);
    else if (e.key === 'ArrowLeft') navigateLightbox(-1);
  });

  // Prev / Next button clicks
  document.getElementById('lb-prev')?.addEventListener('click', () => navigateLightbox(-1));
  document.getElementById('lb-next')?.addEventListener('click', () => navigateLightbox(1));

  // Backdrop click — close any open dialog
  [dialog,
   document.getElementById('resume-dialog'),
   document.getElementById('cmd-dialog')
  ].forEach(d => {
    d?.addEventListener('click', (e) => { if (e.target === d) d.close(); });
  });

  // Touch swipe on the image container
  const imageWrap = document.getElementById('lb-image-container');
  if (imageWrap) {
    let touchStartX = 0;
    imageWrap.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    imageWrap.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 48) navigateLightbox(diff > 0 ? 1 : -1);
    }, { passive: true });
  }
}

/* ==========================================================================
   NEW: SCROLL-TO-TOP FAB
   ========================================================================== */
function initScrollToTop() {
  const btn = document.getElementById('btn-scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ==========================================================================
   NEW: DARK MODE TOGGLE
   ========================================================================== */
function initDarkMode() {
  const html = document.documentElement;
  const btn = document.getElementById('btn-dark-mode');
  if (!btn) return;

  const moon = btn.querySelector('[data-lucide="moon"]');
  const sun  = btn.querySelector('[data-lucide="sun"]');

  function applyTheme(dark) {
    html.classList.toggle('dark', dark);
    moon?.classList.toggle('hidden', dark);
    sun?.classList.toggle('hidden', !dark);
  }

  // Respect saved preference, then OS preference
  const saved = localStorage.getItem('theme');
  if (saved) {
    applyTheme(saved === 'dark');
  } else {
    applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  btn.addEventListener('click', () => {
    const isDark = !html.classList.contains('dark');
    applyTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

/* ==========================================================================
   NEW: HERO TYPEWRITER EFFECT
   ========================================================================== */
function initTypewriter() {
  const el = document.getElementById('hero-typewriter');
  if (!el || !el.dataset.typewriter) return;

  const rawText = el.textContent;
  const delay   = parseInt(el.dataset.delay || '700', 10);

  // Decode HTML entities into real characters for the type loop
  const decoded = document.createElement('textarea');
  decoded.innerHTML = rawText;
  const text = decoded.value;

  el.textContent = '';
  el.classList.add('typewriter-active');

  let i = 0;
  setTimeout(() => {
    const timer = setInterval(() => {
      el.textContent = text.slice(0, ++i);
      if (i >= text.length) {
        clearInterval(timer);
        setTimeout(() => el.classList.remove('typewriter-active'), 1800);
      }
    }, 48);
  }, delay);
}

/* ==========================================================================
   NEW: 3D CARD TILT (desktop pointer:fine only)
   ========================================================================== */
function initCardTilt() {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  document.addEventListener('mouseover', (e) => {
    const card = e.target.closest('.story-card');
    if (!card || card.dataset.tiltBound) return;
    card.dataset.tiltBound = '1';

    function onMove(ev) {
      const r  = card.getBoundingClientRect();
      const x  = ev.clientX - r.left  - r.width  / 2;
      const y  = ev.clientY - r.top   - r.height / 2;
      const tx = -(y / (r.height / 2)) * 7;
      const ty =  (x / (r.width  / 2)) * 7;
      card.style.transform  = `perspective(900px) rotateX(${tx}deg) rotateY(${ty}deg) translateZ(6px)`;
      card.style.transition = 'transform 0.08s ease-out';
    }

    function onLeave() {
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.transform  = '';
    }

    card.addEventListener('mousemove',  onMove);
    card.addEventListener('mouseleave', onLeave);
  });
}

/* ==========================================================================
   NEW: AVAILABILITY BADGE (data-driven from career.js)
   ========================================================================== */
function initAvailabilityBadge() {
  const badge = document.getElementById('availability-badge');
  const dot   = document.getElementById('availability-dot');
  const text  = document.getElementById('availability-text');
  if (!badge || !dot || !text) return;

  const states = {
    available:   { cls: 'text-accent-emerald', bg: 'bg-accent-emerald', pulse: true,  label: 'AVAILABLE FOR PROJECTS' },
    limited:     { cls: 'text-amber-500',      bg: 'bg-amber-400',      pulse: true,  label: 'LIMITED AVAILABILITY' },
    unavailable: { cls: 'text-paper-500',      bg: 'bg-paper-400',      pulse: false, label: 'NOT CURRENTLY AVAILABLE' },
  };
  const s = states[availability.status] || states.available;

  badge.className = `flex items-center gap-2 font-semibold ${s.cls}`;
  dot.className   = `w-2.5 h-2.5 rounded-full ${s.bg}${s.pulse ? ' act-marker-pulse' : ''}`;
  text.textContent = s.label;
  badge.title      = availability.message;
}

/* ==========================================================================
   NEW: QR CODE SHARE DIALOG
   ========================================================================== */
function initVCardQR() {
  const dialog   = document.getElementById('qr-dialog');
  const openBtn  = document.getElementById('btn-show-qr');
  const closeBtn = document.getElementById('btn-close-qr');
  const canvas   = document.getElementById('qr-canvas');
  const hint     = document.getElementById('qr-hint');
  const dlBtn    = document.getElementById('btn-download-qr');
  const modeBtns = document.querySelectorAll('.qr-mode-btn');
  if (!dialog || !openBtn || !canvas) return;

  const qrOptions = { width: 200, margin: 1, color: { dark: '#020617', light: '#FFFFFF' } };
  let activeMode = 'vcard';

  function renderQR(mode) {
    activeMode = mode;
    const data = mode === 'vcard' ? vcardData : 'https://manaphassan.github.io/cv/';
    if (hint) hint.textContent = mode === 'vcard' ? 'Scan to save contact details' : 'Scan to visit portfolio';
    QRCode.toCanvas(canvas, data, qrOptions).catch(console.error);
    modeBtns.forEach(b => {
      const active = b.dataset.qrMode === mode;
      b.className = active
        ? 'qr-mode-btn flex-1 py-2 rounded-lg border border-paper-950 bg-paper-950 text-white font-mono text-xs font-bold transition-all'
        : 'qr-mode-btn flex-1 py-2 rounded-lg border border-paper-200 text-paper-700 font-mono text-xs font-semibold hover:border-paper-400 transition-all';
    });
  }

  openBtn.addEventListener('click', () => {
    renderQR(activeMode);
    dialog.showModal();
    refreshIcons();
  });
  closeBtn?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });

  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => renderQR(btn.dataset.qrMode));
  });

  dlBtn?.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = `Harussani_Manaphassan_QR_${activeMode}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}

/* ==========================================================================
   NEW: SKILL CONSTELLATION (canvas)
   ========================================================================== */
function initSkillConstellation() {
  const canvas  = document.getElementById('skill-constellation');
  const tooltip = document.getElementById('constellation-tooltip');
  const legendEl = document.getElementById('constellation-legend');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W = 0, H = 0, dpr = 1;
  let hoverNodeId = null;
  let conT = 0;

  function resize() {
    dpr = window.devicePixelRatio || 1;
    const wrap = canvas.parentElement;
    W = wrap.offsetWidth;
    H = wrap.offsetHeight;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width  = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  }

  function nodePos(node) {
    const phase = CONST_NODES.indexOf(node) * 0.71;
    const amp   = 3.5;
    return {
      x: (node.x / 100) * W + Math.sin(conT * 0.5 + phase) * amp,
      y: (node.y / 100) * H + Math.cos(conT * 0.4 + phase * 1.3) * amp,
    };
  }

  function nodeRadius(node) {
    return (node.r / 100) * Math.min(W, H) * 0.9;
  }

  function isDarkMode() { return document.documentElement.classList.contains('dark'); }

  function draw() {
    conT += 0.012;
    ctx.clearRect(0, 0, W, H);

    const dark = isDarkMode();
    const connected = new Set();
    if (hoverNodeId) {
      CONST_EDGES.forEach(([a, b]) => {
        if (a === hoverNodeId) connected.add(b);
        if (b === hoverNodeId) connected.add(a);
      });
    }

    // Edges
    CONST_EDGES.forEach(([aId, bId]) => {
      const a = CONST_NODES.find(n => n.id === aId);
      const b = CONST_NODES.find(n => n.id === bId);
      if (!a || !b) return;
      const pa = nodePos(a), pb = nodePos(b);
      const isLit = hoverNodeId && (aId === hoverNodeId || bId === hoverNodeId);
      ctx.beginPath();
      ctx.moveTo(pa.x, pa.y);
      ctx.lineTo(pb.x, pb.y);
      ctx.strokeStyle = isLit
        ? (dark ? 'rgba(203,213,225,0.45)' : 'rgba(51,65,85,0.35)')
        : (dark ? 'rgba(203,213,225,0.1)'  : 'rgba(51,65,85,0.12)');
      ctx.lineWidth = isLit ? 1.2 : 0.6;
      ctx.stroke();
    });

    // Nodes
    CONST_NODES.forEach(node => {
      const { x, y } = nodePos(node);
      const r     = nodeRadius(node);
      const color = DOMAIN_META[node.domain]?.color || '#64748B';
      const isHov = node.id === hoverNodeId;
      const isCon = connected.has(node.id);
      const isDim = hoverNodeId && !isHov && !isCon;

      if (isHov) {
        ctx.beginPath();
        ctx.arc(x, y, r * 2.6, 0, Math.PI * 2);
        ctx.fillStyle = color + '22';
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = isDim ? color + '30' : color + (isHov ? 'FF' : 'CC');
      ctx.fill();

      if (isHov || isCon) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      if (!isDim) {
        const fsize = Math.max(9, r * 0.95);
        ctx.font = `${isHov ? 'bold ' : ''}${fsize}px 'JetBrains Mono', monospace`;
        ctx.fillStyle = dark ? 'rgba(226,232,240,0.9)' : 'rgba(15,23,42,0.85)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(node.label, x, y + r + 3);
      }
    });

    requestAnimationFrame(draw);
  }

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    let closest = null, minD = Infinity;
    CONST_NODES.forEach(node => {
      const { x, y } = nodePos(node);
      const d = Math.hypot(mx - x, my - y);
      if (d < nodeRadius(node) * 2.8 + 16 && d < minD) { minD = d; closest = node; }
    });
    hoverNodeId = closest?.id ?? null;
    if (closest && tooltip) {
      tooltip.textContent = closest.label + ' — ' + (DOMAIN_META[closest.domain]?.label || '');
      tooltip.style.left = (mx + 14) + 'px';
      tooltip.style.top  = (my - 12) + 'px';
      tooltip.style.opacity = '1';
      canvas.style.cursor = 'pointer';
    } else if (tooltip) {
      tooltip.style.opacity = '0';
      canvas.style.cursor = 'default';
    }
  });

  canvas.addEventListener('mouseleave', () => {
    hoverNodeId = null;
    if (tooltip) tooltip.style.opacity = '0';
  });

  if (legendEl) {
    legendEl.innerHTML = Object.entries(DOMAIN_META).map(([, m]) =>
      `<span class="flex items-center gap-1.5 font-mono text-xs text-paper-600">
        <span class="w-2.5 h-2.5 rounded-full" style="background:${m.color}"></span>${m.label}
      </span>`
    ).join('');
  }

  resize();
  window.addEventListener('resize', resize);
  draw();
}

/* ==========================================================================
   NEW: PROJECT QUICK-PREVIEW (desktop hover)
   ========================================================================== */
function initProjectPreview() {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const preview = document.createElement('div');
  preview.id = 'project-preview';
  preview.style.cssText = 'position:fixed;z-index:60;pointer-events:none;width:220px;opacity:0;transform:translateY(8px) scale(0.96);transition:opacity 0.14s ease,transform 0.14s ease';
  preview.innerHTML = `
    <div style="border-radius:12px;overflow:hidden;border:1px solid rgba(203,213,225,0.9);box-shadow:0 20px 40px -12px rgba(2,6,23,0.18);background:#fff">
      <div style="aspect-ratio:16/9;overflow:hidden;background:#f1f5f9">
        <img id="pp-img" style="width:100%;height:100%;object-fit:cover" src="" alt="" />
      </div>
      <div style="padding:8px 10px;background:#020617">
        <p id="pp-badge" style="font-family:monospace;font-size:10px;color:#94a3b8;text-transform:uppercase;letter-spacing:.05em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis"></p>
        <p id="pp-title" style="font-family:monospace;font-size:11px;font-weight:700;color:#fff;margin-top:2px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis"></p>
      </div>
    </div>`;
  document.body.appendChild(preview);

  const ppImg   = document.getElementById('pp-img');
  const ppBadge = document.getElementById('pp-badge');
  const ppTitle = document.getElementById('pp-title');
  let mx = 0, my = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    if (preview.style.opacity === '1') {
      preview.style.left = Math.min(mx + 20, window.innerWidth  - 240) + 'px';
      preview.style.top  = Math.max(my - 155, 10) + 'px';
    }
  });

  document.addEventListener('mouseover', (e) => {
    const card = e.target.closest('.story-card');
    if (!card) return;
    const p = projects.find(pr => pr.id === card.getAttribute('data-id'));
    if (!p) return;
    ppImg.src = encodeURI(p.image);
    ppBadge.textContent = p.badge || p.year;
    ppTitle.textContent = p.title;
    preview.style.left = Math.min(mx + 20, window.innerWidth  - 240) + 'px';
    preview.style.top  = Math.max(my - 155, 10) + 'px';
    preview.style.opacity = '1';
    preview.style.transform = 'translateY(0) scale(1)';
  });

  document.addEventListener('mouseout', (e) => {
    if (!e.target.closest('.story-card')) return;
    if (e.relatedTarget?.closest('.story-card')) return;
    preview.style.opacity = '0';
    preview.style.transform = 'translateY(8px) scale(0.96)';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initAvailabilityBadge();
  initDynamicYears();
  renderHeroMetrics();
  initCountUpMetrics();
  renderActProjects();
  initDisciplineFilter();
  initAppcableBrandShowcase();
  renderCredentialsAndSkills();
  fetchGitHubRepos();
  initScrollObserver();
  initScrollProgressAndTimelineSpine();
  initCommandPalette();
  initResumeAndContact();
  initLightboxNavigation();
  initScrollToTop();
  initTypewriter();
  initCardTilt();
  initVCardQR();
  initSkillConstellation();
  initProjectPreview();
  refreshIcons();
});
