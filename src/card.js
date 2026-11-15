import QRCode from 'qrcode';

/* ==========================================================================
   VCARD DATA — includes phone number
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

document.addEventListener('DOMContentLoaded', async () => {

  /* -- QR Code (portfolio URL) -- */
  const canvas = document.getElementById('qr-canvas');
  if (canvas) {
    const isDark = document.documentElement.classList.contains('dark');
    await QRCode.toCanvas(canvas, 'https://manaphassan.github.io/cv/', {
      width: 180,
      margin: 1,
      color: {
        dark:  isDark ? '#020617' : '#020617',
        light: '#FFFFFF'
      }
    }).catch(console.error);
  }

  /* -- Save Contact (.vcf) -- */
  document.getElementById('btn-save-contact')?.addEventListener('click', () => {
    const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = 'Harussani_Manaphassan.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    const btn = document.getElementById('btn-save-contact');
    if (btn) {
      btn.textContent = 'Saved \u2713';
      setTimeout(() => { btn.textContent = 'Save Contact'; }, 2500);
    }
  });

  /* -- Share Card (Web Share API → clipboard fallback) -- */
  document.getElementById('btn-share-card')?.addEventListener('click', async () => {
    const cardUrl = 'https://manaphassan.github.io/cv/card.html';
    const shareData = {
      title: 'Harussani Manaphassan',
      text:  'Head of Creative \u00b7 Brand Systems Architect\n+60102657097 \u00b7 manaphassan@gmail.com',
      url:   cardUrl,
    };

    const btn = document.getElementById('btn-share-card');

    if (navigator.share && navigator.canShare?.(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (e) {
        if (e.name !== 'AbortError') console.error(e);
      }
    } else {
      await navigator.clipboard.writeText(cardUrl).catch(() => {});
      if (btn) {
        btn.textContent = 'Link Copied!';
        setTimeout(() => { btn.textContent = 'Share Card'; }, 2500);
      }
    }
  });

});
