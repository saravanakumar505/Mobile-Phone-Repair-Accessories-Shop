/**
 * FIXORA — Gallery Filtering & Lightbox Controller (gallery.js)
 * Supports category filters, keyboard navigation (ArrowLeft, ArrowRight, Escape), and touch controls.
 */
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = Array.from(document.querySelectorAll('[data-gallery-item]'));
    if (galleryItems.length === 0) return;

    const filterBtns = document.querySelectorAll('[data-gallery-filter]');
    const modal = document.getElementById('fixora-lightbox');
    const modalImg = document.getElementById('lightbox-img');
    const modalTitle = document.getElementById('lightbox-title');
    const modalCat = document.getElementById('lightbox-category');
    const modalCounter = document.getElementById('lightbox-counter');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');

    let activeCategory = 'all';
    let visibleItems = [...galleryItems];
    let currentIndex = 0;

    function updateVisibleItems() {
      visibleItems = galleryItems.filter((item) => {
        const cat = (item.getAttribute('data-gallery-category') || '').toLowerCase();
        const match = activeCategory === 'all' || cat === activeCategory.toLowerCase();
        if (match) item.classList.remove('hidden');
        else item.classList.add('hidden');
        return match;
      });
    }

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        activeCategory = btn.getAttribute('data-gallery-filter') || 'all';
        filterBtns.forEach((b) => {
          b.classList.remove('btn-accent');
          b.classList.add('btn-outline');
        });
        btn.classList.remove('btn-outline');
        btn.classList.add('btn-accent');
        updateVisibleItems();
      });
    });

    function openLightbox(index) {
      if (!modal || visibleItems.length === 0) return;
      currentIndex = (index + visibleItems.length) % visibleItems.length;
      const item = visibleItems[currentIndex];
      const imgEl = item.querySelector('img');
      const title = item.getAttribute('data-gallery-title') || (imgEl ? imgEl.alt : 'FIXORA Workshop');
      const cat = item.getAttribute('data-gallery-category') || 'Repair Gallery';

      if (modalImg && imgEl) {
        modalImg.src = imgEl.src;
        modalImg.alt = title;
      }
      if (modalTitle) modalTitle.textContent = title;
      if (modalCat) modalCat.textContent = cat;
      if (modalCounter) modalCounter.textContent = `${currentIndex + 1} / ${visibleItems.length}`;

      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      if (!modal) return;
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    galleryItems.forEach((item) => {
      item.addEventListener('click', () => {
        const idx = visibleItems.indexOf(item);
        if (idx !== -1) openLightbox(idx);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', () => openLightbox(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => openLightbox(currentIndex + 1));

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeLightbox();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (!modal || !modal.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') openLightbox(currentIndex - 1);
      if (e.key === 'ArrowRight') openLightbox(currentIndex + 1);
    });
  });
})();

