/**
 * FIXORA — Navigation Controller (navigation.js)
 * Handles desktop dropdowns, sticky header state, mobile drawer, nested submenus, and active links.
 * Note: Every HTML page contains its own complete navbar and footer markup.
 */
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    const drawerToggle = document.querySelector('[data-mobile-toggle]');
    const drawerClose = document.querySelector('[data-mobile-close]');
    const drawer = document.querySelector('.mobile-drawer');
    const backdrop = document.querySelector('.mobile-drawer-backdrop');

    // Sticky Header Shadow on Scroll
    function handleScroll() {
      if (!header) return;
      if (window.scrollY > 12) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Mobile Drawer Open / Close
    function openDrawer() {
      if (!drawer || !backdrop) return;
      drawer.classList.add('open');
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (drawerToggle) drawerToggle.setAttribute('aria-expanded', 'true');
    }

    function closeDrawer() {
      if (!drawer || !backdrop) return;
      drawer.classList.remove('open');
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
      if (drawerToggle) drawerToggle.setAttribute('aria-expanded', 'false');
    }

    if (drawerToggle) {
      drawerToggle.addEventListener('click', () => {
        const isOpen = drawer && drawer.classList.contains('open');
        if (isOpen) closeDrawer();
        else openDrawer();
      });
    }

    if (drawerClose) {
      drawerClose.addEventListener('click', closeDrawer);
    }

    if (backdrop) {
      backdrop.addEventListener('click', closeDrawer);
    }

    // Mobile Nested Accordion Submenus
    const mobileSubToggles = document.querySelectorAll('[data-mobile-submenu-toggle]');
    mobileSubToggles.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-mobile-submenu-toggle');
        const submenu = document.getElementById(targetId);
        if (!submenu) return;
        const isHidden = submenu.classList.contains('hidden');
        if (isHidden) {
          submenu.classList.remove('hidden');
          btn.setAttribute('aria-expanded', 'true');
          const icon = btn.querySelector('.submenu-chevron');
          if (icon) icon.style.transform = 'rotate(180deg)';
        } else {
          submenu.classList.add('hidden');
          btn.setAttribute('aria-expanded', 'false');
          const icon = btn.querySelector('.submenu-chevron');
          if (icon) icon.style.transform = 'rotate(0deg)';
        }
      });
    });

    // Desktop Dropdown Click & Keyboard Support
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    dropdowns.forEach((dd) => {
      const btn = dd.querySelector('[data-dropdown-btn]');
      if (!btn) return;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dd.classList.contains('open');
        dropdowns.forEach((d) => d.classList.remove('open'));
        if (!isOpen) dd.classList.add('open');
      });
    });

    // Close on outside click or Escape key
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-dropdown')) {
        dropdowns.forEach((d) => d.classList.remove('open'));
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDrawer();
        dropdowns.forEach((d) => d.classList.remove('open'));
      }
    });

    // Highlight Active Page Link
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    const navAnchors = document.querySelectorAll('.site-header a[href], .mobile-drawer a[href]');
    navAnchors.forEach((a) => {
      const href = a.getAttribute('href') || '';
      const targetFile = href.split('/').pop().split('?')[0].split('#')[0];
      if (targetFile && targetFile === currentFile) {
        a.classList.add('active');
      }
    });
  });
})();

