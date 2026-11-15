import {
  createIcons,
  ArrowLeft, Phone, Mail, Linkedin, Palette, Globe, Github,
  Download, Share2, Moon, Sun, ChevronRight, ExternalLink,
  QrCode
} from 'lucide';
import QRCode from 'qrcode';

/* ==========================================================================
   VCARD DATA
   ========================================================================== */
const vcardData = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  'FN:Harussani Manaphassan',
  'N:Manaphassan;Harussani;;;',
  'TITLE:Head of Creative \u00b7 Brand Systems Architect',
  'ORG:SuamiSihat Holding \u00b7 Appcable',
  'TEL;TYPE=CELL,VOICE:+60102657097',
  'EMAIL;TYPE=INTERNET;TYPE=WORK:manaphassan@gmail.com',
  'URL:https://manaphassan.github.io/cv/',
  'URL;TYPE=LinkedIn:https://www.linkedin.com/in/manaphassan',
  'URL;TYPE=Behance:https://www.behance.net/manaphassan',
  'URL;TYPE=GitHub:https://github.com/manaphassan',
  'ADR;TYPE=WORK:;;Shah Alam;Selangor;;;Malaysia',
  'NOTE:Head of Creative at Suamisihat Holding. Brand Systems Architect. 19+ years of creative practice across brand identity, product design, and AI-assisted creative workflows.',
  'END:VCARD'
].join('\r\n');

/* ==========================================================================
   DARK MODE — syncs with main portfolio via localStorage
   ========================================================================== */
function initDarkMode() {
  const html = document.documentElement;
  const btn  = document.getElementById('btn-dark-mode');
  const moon = btn?.querySelector('[data-lucide="moon"]');
  const sun  = btn?.querySelector('[data-lucide="sun"]');

  function applyTheme(dark) {
    html.classList.toggle('dark', dark);
    moon?.classList.toggle('hidden', dark);
    sun?.classList.toggle('hidden', !dark);
  }

  const saved = localStorage.getItem('theme');
  applyTheme(saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches));

  btn?.addEventListener('click', () => {
    const isDark = !html.classList.contains('dark');
    applyTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

/* ==========================================================================
   SCROLL PROGRESS BAR
   ========================================================================== */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress-bar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const p = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = Math.min(100, Math.max(0, p)) + '%';
  }, { passive: true });
}

/* ==========================================================================
   DYNAMIC YEAR
   ========================================================================== */
function initDynamicYear() {
  const y = new Date().getFullYear();
  ['card-year', 'footer-year'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = y;
  });
}

/* ==========================================================================
   QR CODE — always dark ink on white background
   ========================================================================== */
async function initQR() {
  const canvas = document.getElementById('qr-canvas');
  if (!canvas) return;
  await QRCode.toCanvas(canvas, 'https://manaphassan.github.io/cv/', {
    width: 160,
    margin: 1,
    color: { dark: '#020617', light: '#FFFFFF' }
  }).catch(console.error);
}

/* ==========================================================================
   SAVE CONTACT
   ========================================================================== */
function initSaveContact() {
  const btn   = document.getElementById('btn-save-contact');
  const label = document.getElementById('save-label');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = 'Harussani_Manaphassan.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    if (label) {
      label.textContent = 'Saved \u2713';
      setTimeout(() => { label.textContent = 'Save Contact'; }, 2500);
    }
  });
}

/* ==========================================================================
   SHARE CARD — Web Share API → clipboard fallback
   ========================================================================== */
function initShareCard() {
  const btn   = document.getElementById('btn-share-card');
  const label = document.getElementById('share-label');
  if (!btn) return;

  btn.addEventListener('click', async () => {
    const cardUrl  = 'https://manaphassan.github.io/cv/card.html';
    const shareData = {
      title: 'Harussani Manaphassan',
      text:  'Head of Creative \u00b7 Brand Systems Architect\n+60102657097 \u00b7 manaphassan@gmail.com',
      url:   cardUrl,
    };

    if (navigator.share && navigator.canShare?.(shareData)) {
      try { await navigator.share(shareData); }
      catch (e) { if (e.name !== 'AbortError') console.error(e); }
    } else {
      await navigator.clipboard.writeText(cardUrl).catch(() => {});
      if (label) {
        label.textContent = 'Link Copied!';
        setTimeout(() => { label.textContent = 'Share Card'; }, 2500);
      }
    }
  });
}

/* ==========================================================================
   INIT
   ========================================================================== */
document.addEventListener('DOMContentLoaded', async () => {
  initDarkMode();
  initScrollProgress();
  initDynamicYear();

  // Render Lucide icons
  createIcons({
    icons: {
      ArrowLeft, Phone, Mail, Linkedin, Palette, Globe, Github,
      Download, Share2, Moon, Sun, ChevronRight, ExternalLink, QrCode
    }
  });

  await initQR();
  initSaveContact();
  initShareCard();
});
