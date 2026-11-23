/**
 * FIXORA — Repair Request Enquiry Form Controller (booking.js)
 * Frontend validation, URL parameter pre-filling, date/time validation, optional damage photo preview,
 * and clear repair request summary generation.
 * Note: Does NOT claim appointment confirmation or backend submission without connected backend integration.
 */
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('repair-request-form');
    if (!form) return;

    const serviceSelect = document.getElementById('rr-service-type');
    const brandSelect = document.getElementById('rr-device-brand');
    const modelInput = document.getElementById('rr-device-model');
    const dateInput = document.getElementById('rr-preferred-date');
    const fileInput = document.getElementById('rr-damage-image');
    const filePreviewBox = document.getElementById('rr-file-preview');
    const fileNameLabel = document.getElementById('rr-file-name');
    const fileImgThumb = document.getElementById('rr-file-thumb');
    const fileRemoveBtn = document.getElementById('rr-file-remove');
    const fileErrorEl = document.getElementById('rr-file-error');

    const submitBtn = document.getElementById('rr-submit-btn');
    const resetBtn = document.getElementById('rr-reset-btn');
    const feedbackBox = document.getElementById('rr-feedback-box');
    const summaryBox = document.getElementById('rr-summary-box');
    const summaryContent = document.getElementById('rr-summary-content');

    // Set minimum date to today
    const todayStr = new Date().toISOString().split('T')[0];
    if (dateInput) {
      dateInput.setAttribute('min', todayStr);
    }

    // Pre-select service or brand from URL query parameters
    const params = new URLSearchParams(window.location.search);
    const paramService = params.get('service');
    const paramBrand = params.get('brand');

    const serviceMap = {
      'screen-repair': 'Screen Repair',
      'battery-replacement': 'Battery Replacement',
      'charging-port-repair': 'Charging Port Repair',
      'camera-repair': 'Camera Repair',
      'speaker-microphone-repair': 'Speaker Repair',
      'microphone-repair': 'Microphone Repair',
      'software-troubleshooting': 'Software Troubleshooting',
      'water-damage-inspection': 'Water Damage Inspection',
      'diagnostics': 'General Diagnostics'
    };

    if (paramService && serviceSelect) {
      const mapped = serviceMap[paramService] || paramService;
      Array.from(serviceSelect.options).forEach((opt) => {
        if (opt.value.toLowerCase() === mapped.toLowerCase()) {
          serviceSelect.value = opt.value;
        }
      });
    }

    if (paramBrand && brandSelect) {
      Array.from(brandSelect.options).forEach((opt) => {
        if (opt.value.toLowerCase() === paramBrand.toLowerCase()) {
          brandSelect.value = opt.value;
        }
      });
    }

    // Optional Damage Image Validation & Local Preview
    if (fileInput) {
      fileInput.addEventListener('change', () => {
        if (fileErrorEl) {
          fileErrorEl.textContent = '';
          fileErrorEl.classList.remove('visible');
        }
        const file = fileInput.files && fileInput.files[0];
        if (!file) {
          if (filePreviewBox) filePreviewBox.classList.add('hidden');
          return;
        }

        const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
        const maxSizeBytes = 5 * 1024 * 1024; // 5MB

        if (!validTypes.includes(file.type)) {
          fileInput.value = '';
          if (filePreviewBox) filePreviewBox.classList.add('hidden');
          if (fileErrorEl) {
            fileErrorEl.textContent = 'Please select a valid image file (JPG, PNG, or WEBP).';
            fileErrorEl.classList.add('visible');
          }
          return;
        }

        if (file.size > maxSizeBytes) {
          fileInput.value = '';
          if (filePreviewBox) filePreviewBox.classList.add('hidden');
          if (fileErrorEl) {
            fileErrorEl.textContent = 'Image file size must be 5 MB or smaller.';
            fileErrorEl.classList.add('visible');
          }
          return;
        }

        if (fileNameLabel) {
          fileNameLabel.textContent = `${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
        }
        if (fileImgThumb) {
          const reader = new FileReader();
          reader.onload = function (e) {
            fileImgThumb.src = e.target.result;
          };
          reader.readAsDataURL(file);
        }
        if (filePreviewBox) {
          filePreviewBox.classList.remove('hidden');
        }
      });
    }

    if (fileRemoveBtn && fileInput) {
      fileRemoveBtn.addEventListener('click', () => {
        fileInput.value = '';
        if (filePreviewBox) filePreviewBox.classList.add('hidden');
        if (fileImgThumb) fileImgThumb.src = '';
      });
    }

    // Helper for inline validation errors
    function setFieldError(inputEl, errId, message) {
      const errEl = document.getElementById(errId);
      if (message) {
        if (inputEl) inputEl.classList.add('input-error');
        if (errEl) {
          errEl.textContent = message;
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

      const fullName = document.getElementById('rr-full-name');
      const phone = document.getElementById('rr-phone');
      const email = document.getElementById('rr-email');
      const description = document.getElementById('rr-problem-desc');
      const startedWhen = document.getElementById('rr-problem-started');
      const turningOn = document.getElementById('rr-turning-on');
      const prefTime = document.getElementById('rr-preferred-time');
      const colorInput = document.getElementById('rr-device-color');
      const yearInput = document.getElementById('rr-purchase-year');
      const notesInput = document.getElementById('rr-additional-notes');

      let isValid = true;

      // Validate Full Name
      if (!fullName || fullName.value.trim().length < 2) {
        isValid = setFieldError(fullName, 'err-rr-name', 'Please enter your full name.') && isValid;
      } else {
        setFieldError(fullName, 'err-rr-name', '');
      }

      // Validate Phone Number
      const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/;
      if (!phone || !phoneRegex.test(phone.value.trim())) {
        isValid = setFieldError(phone, 'err-rr-phone', 'Please enter a valid contact phone number.') && isValid;
      } else {
        setFieldError(phone, 'err-rr-phone', '');
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email.value.trim())) {
        isValid = setFieldError(email, 'err-rr-email', 'Please enter a valid email address.') && isValid;
      } else {
        setFieldError(email, 'err-rr-email', '');
      }

      // Validate Brand & Model
      if (!brandSelect || !brandSelect.value) {
        isValid = setFieldError(brandSelect, 'err-rr-brand', 'Please select your device brand.') && isValid;
      } else {
        setFieldError(brandSelect, 'err-rr-brand', '');
      }

      if (!modelInput || modelInput.value.trim().length < 2) {
        isValid = setFieldError(modelInput, 'err-rr-model', 'Please enter your smartphone model (e.g., iPhone 14, Galaxy S23).') && isValid;
      } else {
        setFieldError(modelInput, 'err-rr-model', '');
      }

      // Validate Repair Type
      if (!serviceSelect || !serviceSelect.value) {
        isValid = setFieldError(serviceSelect, 'err-rr-service', 'Please select the primary repair or inspection required.') && isValid;
      } else {
        setFieldError(serviceSelect, 'err-rr-service', '');
      }

      // Validate Problem Description
      if (!description || description.value.trim().length < 10) {
        isValid = setFieldError(description, 'err-rr-desc', 'Please describe what is happening with your phone (at least 10 characters).') && isValid;
      } else {
        setFieldError(description, 'err-rr-desc', '');
      }

      // Validate Date (no past dates)
      if (!dateInput || !dateInput.value) {
        isValid = setFieldError(dateInput, 'err-rr-date', 'Please choose a preferred date for your enquiry.') && isValid;
      } else if (dateInput.value < todayStr) {
        isValid = setFieldError(dateInput, 'err-rr-date', 'Preferred date cannot be in the past.') && isValid;
      } else {
        setFieldError(dateInput, 'err-rr-date', '');
      }

      if (!prefTime || !prefTime.value) {
        isValid = setFieldError(prefTime, 'err-rr-time', 'Please select a preferred time window.') && isValid;
      } else {
        setFieldError(prefTime, 'err-rr-time', '');
      }

      if (!isValid) {
        if (feedbackBox) {
          feedbackBox.className = 'mt-6 p-4 rounded-xl border border-[#CE5555] bg-[#CE5555]/10 text-sm text-theme-primary';
          feedbackBox.textContent = 'Please review the highlighted fields above and complete all required repair details.';
          feedbackBox.classList.remove('hidden');
        }
        if (window.FixoraToast) {
          window.FixoraToast.show('Please check the highlighted form fields.', 'error');
        }
        return;
      }

      // Loading State
      const origText = submitBtn ? submitBtn.innerHTML : 'Prepare Repair Request';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Preparing Request Summary...</span>';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = origText;
        }

        if (feedbackBox) {
          feedbackBox.className = 'mt-6 p-5 rounded-xl border border-[#3C956F] bg-[#3C956F]/15 text-theme-primary';
          feedbackBox.innerHTML = `
            <p class="font-heading font-bold text-base mb-1">Your repair request has been prepared. The shop must review and confirm your appointment and repair estimate.</p>
            <p class="text-xs text-theme-secondary m-0">Note: This is a frontend repair enquiry summary. Actual message transmission requires a connected backend or email service integration.</p>
          `;
          feedbackBox.classList.remove('hidden');
        }

        const attachedFile = fileInput && fileInput.files && fileInput.files[0] ? fileInput.files[0].name : 'None attached';

        if (summaryBox && summaryContent) {
          summaryContent.innerHTML = `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <span class="block font-mono-tech text-xs text-theme-muted uppercase">Customer</span>
                <strong class="text-theme-primary">${escapeHtml(fullName.value.trim())}</strong>
                <span class="block text-xs text-theme-secondary">${escapeHtml(phone.value.trim())} &bull; ${escapeHtml(email.value.trim())}</span>
              </div>
              <div>
                <span class="block font-mono-tech text-xs text-theme-muted uppercase">Device Details</span>
                <strong class="text-theme-primary">${escapeHtml(brandSelect.value)} — ${escapeHtml(modelInput.value.trim())}</strong>
                <span class="block text-xs text-theme-secondary">Colour: ${escapeHtml((colorInput && colorInput.value) || 'Not specified')} | Year: ${escapeHtml((yearInput && yearInput.value) || 'Not specified')}</span>
              </div>
              <div>
                <span class="block font-mono-tech text-xs text-theme-muted uppercase">Requested Service</span>
                <strong class="text-theme-accent">${escapeHtml(serviceSelect.value)}</strong>
                <span class="block text-xs text-theme-secondary">Turns On: ${escapeHtml((turningOn && turningOn.value) || 'Unsure')} | Started: ${escapeHtml((startedWhen && startedWhen.value) || 'Recently')}</span>
              </div>
              <div>
                <span class="block font-mono-tech text-xs text-theme-muted uppercase">Preferred Inspection Window</span>
                <strong class="text-theme-primary">${escapeHtml(dateInput.value)} (${escapeHtml(prefTime.value)})</strong>
                <span class="block text-xs text-theme-secondary">Damage Photo: ${escapeHtml(attachedFile)}</span>
              </div>
              <div class="sm:col-span-2 pt-2 border-t border-theme">
                <span class="block font-mono-tech text-xs text-theme-muted uppercase mb-1">Problem Description</span>
                <p class="text-xs text-theme-primary m-0">${escapeHtml(description.value.trim())}</p>
                ${notesInput && notesInput.value.trim() ? `<p class="text-xs text-theme-secondary mt-1 m-0">Notes: ${escapeHtml(notesInput.value.trim())}</p>` : ''}
              </div>
            </div>
          `;
          summaryBox.classList.remove('hidden');
          summaryBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        if (window.FixoraToast) {
          window.FixoraToast.show('Repair request summary prepared for shop review.', 'success');
        }
      }, 600);
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        form.reset();
        form.querySelectorAll('.input-error').forEach((el) => el.classList.remove('input-error'));
        form.querySelectorAll('.error-text').forEach((el) => {
          el.textContent = '';
          el.classList.remove('visible');
        });
        if (filePreviewBox) filePreviewBox.classList.add('hidden');
        if (feedbackBox) feedbackBox.classList.add('hidden');
        if (summaryBox) summaryBox.classList.add('hidden');
      });
    }

    function escapeHtml(str) {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }
  });
})();

