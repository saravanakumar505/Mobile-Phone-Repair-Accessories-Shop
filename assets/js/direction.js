/**
 * FIXORA — Global RTL / LTR Layout Direction Controller (direction.js)
 * IMPORTANT: Changes layout direction ONLY. Keeps all website content in English (lang="en").
 */
(function () {
  const STORAGE_KEY = 'fixora-dir';

  function getInitialDir() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'rtl' || saved === 'ltr') {
        return saved;
      }
    } catch (e) {}
    return 'ltr';
  }

  function applyDirection(dir) {
    const validDir = dir === 'rtl' ? 'rtl' : 'ltr';
    document.documentElement.dir = validDir;
    document.documentElement.lang = 'en';
    try {
      localStorage.setItem(STORAGE_KEY, validDir);
    } catch (e) {}
    updateDirectionButtons(validDir);
  }

  function updateDirectionButtons(dir) {
    const toggles = document.querySelectorAll('[data-dir-toggle]');
    toggles.forEach((btn) => {
      const label = btn.querySelector('.dir-label');
      if (label) {
        label.textContent = dir === 'rtl' ? 'RTL' : 'LTR';
      } else {
        btn.textContent = dir === 'rtl' ? 'RTL' : 'LTR';
      }
      btn.setAttribute('aria-label', dir === 'rtl' ? 'Switch layout direction to Left-to-Right (LTR)' : 'Switch layout direction to Right-to-Left (RTL)');
      btn.setAttribute('title', dir === 'rtl' ? 'Current: RTL (Click for LTR)' : 'Current: LTR (Click for RTL)');
    });
  }

  // Apply immediately
  const initialDir = getInitialDir();
  document.documentElement.dir = initialDir;
  document.documentElement.lang = 'en';

  document.addEventListener('DOMContentLoaded', () => {
    updateDirectionButtons(document.documentElement.dir || 'ltr');

    document.addEventListener('click', (e) => {
      const toggle = e.target.closest('[data-dir-toggle]');
      if (!toggle) return;
      const current = document.documentElement.dir === 'rtl' ? 'rtl' : 'ltr';
      const next = current === 'rtl' ? 'ltr' : 'rtl';
      applyDirection(next);
    });
  });

  window.FixoraDirection = { applyDirection, getInitialDir };
})();

