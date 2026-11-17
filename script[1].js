// SafeSense Design Thinking Portfolio — Navigation, Progress Bar & Scroll Reveal
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  const scrollProgress = document.getElementById('scrollProgress');
  const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

  // Mobile menu toggle
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      mainNav.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll progress bar & active chapter highlight
  const sections = Array.from(navLinks)
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
    if (scrollProgress) {
      scrollProgress.style.width = `${pct}%`;
    }

    let currentId = '';
    for (const sec of sections) {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 140) {
        currentId = `#${sec.id}`;
      }
    }

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === currentId);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Subtle scroll-reveal animation
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }
});
