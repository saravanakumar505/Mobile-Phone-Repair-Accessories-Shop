/**
 * FIXORA — Main Bootstrap, Toast Notifications & Back-to-Top Controller (main.js)
 */
(function () {
  // Toast Notifications API
  function showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      container.setAttribute('aria-live', 'polite');
      document.body.appendChild(container);
    }

    const borderColors = {
      success: '#3C956F',
      warning: '#D79A39',
      error: '#CE5555',
      info: '#20B8C4'
    };

    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.style.borderInlineStartColor = borderColors[type] || borderColors.info;
    toast.innerHTML = `
      <div class="flex-1 text-sm font-medium">${message}</div>
      <button type="button" class="text-theme-muted hover:text-theme-primary text-lg leading-none" aria-label="Dismiss notification">&times;</button>
    `;

    const closeBtn = toast.querySelector('button');
    closeBtn.addEventListener('click', () => toast.remove());

    container.appendChild(toast);
    setTimeout(() => {
      if (toast.parentNode) toast.remove();
    }, 4500);
  }

  window.FixoraToast = { show: showToast };

  document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons if loaded
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }

    // Back-to-Top Button
    let backToTop = document.querySelector('.back-to-top');
    if (!backToTop) {
      backToTop = document.createElement('button');
      backToTop.type = 'button';
      backToTop.className = 'back-to-top';
      backToTop.setAttribute('aria-label', 'Scroll back to top');
      backToTop.setAttribute('title', 'Back to Top');
      backToTop.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      `;
      document.body.appendChild(backToTop);
    }

    window.addEventListener(
      'scroll',
      () => {
        if (window.scrollY > 360) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      },
      { passive: true }
    );

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
})();

