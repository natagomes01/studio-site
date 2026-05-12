// Initialize on-scroll reveal + nav sticky behavior + lang banner.
// Loaded as a deferred module from BaseLayout.

(() => {
  if (typeof window === 'undefined') return;

  // ---------- On-scroll reveal ----------
  const reveals = document.querySelectorAll<HTMLElement>('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  // ---------- Nav sticky state ----------
  const nav = document.querySelector<HTMLElement>('.alb-nav');
  if (nav) {
    const setScrolled = () => {
      if (window.scrollY > 24) nav.classList.add('is-scrolled');
      else nav.classList.remove('is-scrolled');
    };
    setScrolled();
    window.addEventListener('scroll', setScrolled, { passive: true });
  }

  // ---------- Lang detection banner ----------
  const banner = document.querySelector<HTMLElement>('.alb-lang-banner');
  const dismissBtn = document.querySelector<HTMLButtonElement>('.alb-lang-banner__close');
  if (banner) {
    const STORAGE_KEY = 'alb-lang-pref';
    const BANNER_KEY = 'alb-lang-banner-dismissed';
    const currentLocale = banner.dataset.currentLocale as 'pt-br' | 'en' | undefined;
    if (currentLocale) {
      const dismissed = localStorage.getItem(BANNER_KEY) === '1';
      const userPref = localStorage.getItem(STORAGE_KEY);
      if (!dismissed && !userPref) {
        const browserLang = (navigator.language || '').toLowerCase();
        const browserPrefersEn =
          browserLang.startsWith('en') && !browserLang.startsWith('en-br');
        const browserPrefersPt = browserLang.startsWith('pt');
        const showSuggestion =
          (currentLocale === 'pt-br' && browserPrefersEn) ||
          (currentLocale === 'en' && browserPrefersPt);
        if (showSuggestion) {
          requestAnimationFrame(() => banner.classList.add('is-shown'));
          setTimeout(() => banner.classList.remove('is-shown'), 8000);
        }
      }
    }
    if (dismissBtn) {
      dismissBtn.addEventListener('click', () => {
        banner.classList.remove('is-shown');
        localStorage.setItem('alb-lang-banner-dismissed', '1');
      });
    }
  }

  // ---------- Persist language choice on switcher click ----------
  const langLink = document.querySelector<HTMLAnchorElement>('.alb-lang__alt');
  if (langLink) {
    langLink.addEventListener('click', () => {
      const targetLocale = langLink.dataset.targetLocale;
      if (targetLocale) {
        localStorage.setItem('alb-lang-pref', targetLocale);
        localStorage.setItem('alb-lang-banner-dismissed', '1');
      }
    });
  }

  // ---------- Smooth scroll for in-page anchors ----------
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (ev) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      ev.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
