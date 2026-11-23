/**
 * FIXORA — Contact Form & Interactive FAQ / Blog Filters Controller (forms.js)
 */
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
    initFaqPage();
    initBlogFilter();
    initBrandCompatibilityFilter();
  });

  // 1. Contact Form Validation & Submission State
  function initContactForm() {
    const form = document.getElementById('fixora-contact-form');
    if (!form) return;

    const enquirySelect = document.getElementById('cf-enquiry-type');
    const subjectInput = document.getElementById('cf-subject');
    const feedbackEl = document.getElementById('cf-feedback');
    const submitBtn = document.getElementById('cf-submit-btn');
    const resetBtn = document.getElementById('cf-reset-btn');

    // Pre-fill from URL parameters if navigated from Accessories or Services
    const params = new URLSearchParams(window.location.search);
    const paramEnquiry = params.get('enquiry');
    const paramProduct = params.get('product');

    if (paramEnquiry && enquirySelect) {
      Array.from(enquirySelect.options).forEach((opt) => {
        if (opt.value.toLowerCase() === paramEnquiry.toLowerCase()) {
          enquirySelect.value = opt.value;
        }
      });
    }
    if (paramProduct && subjectInput) {
      subjectInput.value = `Enquiry regarding: ${paramProduct}`;
    }

    function setError(inputEl, errId, msg) {
      const errEl = document.getElementById(errId);
      if (msg) {
        if (inputEl) inputEl.classList.add('input-error');
        if (errEl) {
          errEl.textContent = msg;
          errEl.classList.add('visible');
        }
        return false;
      } else {
        if (inputEl) inputEl.classList.remove('input-error');
        if (errEl) {
          errEl.textContent = '';
          errEl.classList.remove('visible');
        }
        return true;
      }
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('cf-full-name');
      const phone = document.getElementById('cf-phone');
      const email = document.getElementById('cf-email');
      const brand = document.getElementById('cf-device-brand');
      const model = document.getElementById('cf-device-model');
      const message = document.getElementById('cf-message');
      const consent = document.getElementById('cf-consent');

      let valid = true;

      if (!fullName || fullName.value.trim().length < 2) {
        valid = setError(fullName, 'err-cf-name', 'Please enter your full name.') && valid;
      } else {
        setError(fullName, 'err-cf-name', '');
      }

      const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/;
      if (!phone || !phoneRegex.test(phone.value.trim())) {
        valid = setError(phone, 'err-cf-phone', 'Please enter a valid phone number.') && valid;
      } else {
        setError(phone, 'err-cf-phone', '');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email.value.trim())) {
        valid = setError(email, 'err-cf-email', 'Please enter a valid email address.') && valid;
      } else {
        setError(email, 'err-cf-email', '');
      }

      if (!enquirySelect || !enquirySelect.value) {
        valid = setError(enquirySelect, 'err-cf-enquiry', 'Please select an enquiry type.') && valid;
      } else {
        setError(enquirySelect, 'err-cf-enquiry', '');
      }

      if (!subjectInput || subjectInput.value.trim().length < 3) {
        valid = setError(subjectInput, 'err-cf-subject', 'Please enter a short subject.') && valid;
      } else {
        setError(subjectInput, 'err-cf-subject', '');
      }

      if (!message || message.value.trim().length < 10) {
        valid = setError(message, 'err-cf-message', 'Please enter your message (at least 10 characters).') && valid;
      } else {
        setError(message, 'err-cf-message', '');
      }

      if (!consent || !consent.checked) {
        valid = setError(consent, 'err-cf-consent', 'Please confirm consent to respond to your enquiry.') && valid;
      } else {
        setError(consent, 'err-cf-consent', '');
      }

      if (!valid) {
        if (feedbackEl) {
          feedbackEl.className = 'mt-4 p-4 rounded-xl border border-[#CE5555] bg-[#CE5555]/10 text-sm text-theme-primary';
          feedbackEl.textContent = 'Please complete all required fields highlighted above.';
          feedbackEl.classList.remove('hidden');
        }
        return;
      }

      const origText = submitBtn ? submitBtn.innerHTML : 'Send Enquiry';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Validating Enquiry...</span>';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = origText;
        }
        if (feedbackEl) {
          feedbackEl.className = 'mt-4 p-5 rounded-xl border border-[#3C956F] bg-[#3C956F]/15 text-theme-primary';
          feedbackEl.innerHTML = `
            <p class="font-heading font-bold text-base mb-1">Enquiry Validated &amp; Prepared</p>
            <p class="text-xs text-theme-secondary m-0">Thank you, <strong>${fullName.value.trim()}</strong>. Your enquiry regarding <strong>${enquirySelect.value}</strong>${brand && brand.value ? ` (${brand.value} ${model ? model.value : ''})` : ''} has been formatted. Note: Actual message delivery requires connecting this frontend form to the shop's backend or email service.</p>
          `;
          feedbackEl.classList.remove('hidden');
        }
        if (window.FixoraToast) {
          window.FixoraToast.show('Enquiry prepared. Ready for shop review.', 'success');
        }
      }, 500);
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        form.reset();
        form.querySelectorAll('.input-error').forEach((el) => el.classList.remove('input-error'));
        form.querySelectorAll('.error-text').forEach((el) => {
          el.textContent = '';
          el.classList.remove('visible');
        });
        if (feedbackEl) feedbackEl.classList.add('hidden');
      });
    }
  }

  // 2. Interactive FAQ Accordion, Search & Category Filter
  function initFaqPage() {
    const faqItems = document.querySelectorAll('[data-faq-item]');
    if (faqItems.length === 0) return;

    const searchInput = document.getElementById('faq-search-input');
    const catBtns = document.querySelectorAll('[data-faq-cat-btn]');
    const expandAllBtn = document.getElementById('faq-expand-all');
    const collapseAllBtn = document.getElementById('faq-collapse-all');
    const emptyState = document.getElementById('faq-empty-state');

    let activeCat = 'all';

    // Accordion Toggle
    faqItems.forEach((item) => {
      const btn = item.querySelector('[data-faq-toggle]');
      const panel = item.querySelector('[data-faq-panel]');
      const icon = item.querySelector('.faq-chevron');
      if (!btn || !panel) return;

      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        if (expanded) {
          panel.classList.add('hidden');
          if (icon) icon.style.transform = 'rotate(0deg)';
        } else {
          panel.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    });

    function filterFaqs() {
      const q = searchInput ? searchInput.value.trim().toLowerCase() : '';
      let visibleCount = 0;

      faqItems.forEach((item) => {
        const cat = (item.getAttribute('data-faq-category') || '').toLowerCase();
        const text = item.textContent.toLowerCase();
        const matchesCat = activeCat === 'all' || cat === activeCat.toLowerCase();
        const matchesQ = !q || text.includes(q);

        if (matchesCat && matchesQ) {
          item.classList.remove('hidden');
          visibleCount++;
        } else {
          item.classList.add('hidden');
        }
      });

      if (emptyState) {
        if (visibleCount === 0) emptyState.classList.remove('hidden');
        else emptyState.classList.add('hidden');
      }
    }

    if (searchInput) {
      searchInput.addEventListener('input', filterFaqs);
    }

    catBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        activeCat = btn.getAttribute('data-faq-cat-btn') || 'all';
        catBtns.forEach((b) => {
          b.classList.remove('btn-accent');
          b.classList.add('btn-outline');
        });
        btn.classList.remove('btn-outline');
        btn.classList.add('btn-accent');
        filterFaqs();
      });
    });

    if (expandAllBtn) {
      expandAllBtn.addEventListener('click', () => {
        faqItems.forEach((item) => {
          if (item.classList.contains('hidden')) return;
          const btn = item.querySelector('[data-faq-toggle]');
          const panel = item.querySelector('[data-faq-panel]');
          const icon = item.querySelector('.faq-chevron');
          if (btn && panel) {
            btn.setAttribute('aria-expanded', 'true');
            panel.classList.remove('hidden');
            if (icon) icon.style.transform = 'rotate(180deg)';
          }
        });
      });
    }

    if (collapseAllBtn) {
      collapseAllBtn.addEventListener('click', () => {
        faqItems.forEach((item) => {
          const btn = item.querySelector('[data-faq-toggle]');
          const panel = item.querySelector('[data-faq-panel]');
          const icon = item.querySelector('.faq-chevron');
          if (btn && panel) {
            btn.setAttribute('aria-expanded', 'false');
            panel.classList.add('hidden');
            if (icon) icon.style.transform = 'rotate(0deg)';
          }
        });
      });
    }
  }

  // 3. Blog Search & Category Filter
  function initBlogFilter() {
    const cards = document.querySelectorAll('[data-blog-card]');
    if (cards.length === 0) return;

    const searchInput = document.getElementById('blog-search-input');
    const catBtns = document.querySelectorAll('[data-blog-cat]');
    const emptyEl = document.getElementById('blog-empty-state');

    let activeCat = 'all';

    function filterArticles() {
      const q = searchInput ? searchInput.value.trim().toLowerCase() : '';
      let visible = 0;

      cards.forEach((card) => {
        const cat = (card.getAttribute('data-blog-category') || '').toLowerCase();
        const text = card.textContent.toLowerCase();
        const matchCat = activeCat === 'all' || cat === activeCat.toLowerCase();
        const matchQ = !q || text.includes(q);

        if (matchCat && matchQ) {
          card.classList.remove('hidden');
          visible++;
        } else {
          card.classList.add('hidden');
        }
      });

      if (emptyEl) {
        if (visible === 0) emptyEl.classList.remove('hidden');
        else emptyEl.classList.add('hidden');
      }
    }

    if (searchInput) searchInput.addEventListener('input', filterArticles);

    catBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        activeCat = btn.getAttribute('data-blog-cat') || 'all';
        catBtns.forEach((b) => {
          b.classList.remove('btn-accent');
          b.classList.add('btn-outline');
        });
        btn.classList.remove('btn-outline');
        btn.classList.add('btn-accent');
        filterArticles();
      });
    });
  }

  // 4. Brands Supported Quick Model Check
  function initBrandCompatibilityFilter() {
    const brandCards = document.querySelectorAll('[data-brand-card]');
    const searchInput = document.getElementById('brand-search-input');
    if (brandCards.length === 0 || !searchInput) return;

    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      brandCards.forEach((card) => {
        const text = card.textContent.toLowerCase();
        if (!q || text.includes(q)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  }
})();

