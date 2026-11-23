/**
 * FIXORA — Scroll Reveal Animations Controller (animations.js)
 * Respects prefers-reduced-motion.
 */
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const revealEls = document.querySelectorAll('.reveal-on-scroll');
    if (revealEls.length === 0) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));
  });
})();

