import {
  createIcons,
  ArrowLeft, Moon, Sun, Contact
} from 'lucide';

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

function initScrollProgress() {
  const bar = document.getElementById('scroll-progress-bar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const p = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = Math.min(100, Math.max(0, p)) + '%';
  }, { passive: true });
}

function initDynamicYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initScrollProgress();
  initDynamicYear();
  createIcons({ icons: { ArrowLeft, Moon, Sun, Contact } });
});
