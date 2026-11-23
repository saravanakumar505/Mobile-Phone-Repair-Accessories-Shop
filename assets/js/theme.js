/**
 * FIXORA — Global Light & Dark Theme Controller (theme.js)
 * Persists preference in localStorage under 'fixora-theme'
 * Default: 'light' (or respects system preference if no saved setting exists)
 */
(function () {
  const STORAGE_KEY = 'fixora-theme';

  function getInitialTheme() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    } catch (e) {}
    return 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {}
    updateThemeButtons(theme);
  }

  function updateThemeButtons(theme) {
    const toggles = document.querySelectorAll('[data-theme-toggle]');
    toggles.forEach((btn) => {
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
      btn.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
      const sunIcon = btn.querySelector('.theme-icon-sun');
      const moonIcon = btn.querySelector('.theme-icon-moon');
      if (sunIcon && moonIcon) {
        if (theme === 'dark') {
          sunIcon.classList.remove('hidden');
          moonIcon.classList.add('hidden');
        } else {
          sunIcon.classList.add('hidden');
          moonIcon.classList.remove('hidden');
        }
      }
    });
  }

  // Apply immediately to prevent flash
  const currentTheme = getInitialTheme();
  document.documentElement.setAttribute('data-theme', currentTheme);

  document.addEventListener('DOMContentLoaded', () => {
    updateThemeButtons(document.documentElement.getAttribute('data-theme') || 'light');

    document.addEventListener('click', (e) => {
      const toggle = e.target.closest('[data-theme-toggle]');
      if (!toggle) return;
      const active = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = active === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  });

  window.FixoraTheme = { applyTheme, getInitialTheme };
})();

