/**
 * FIXORA — Central Repair Pricing Configuration & Interactive Pricing Guide (pricing.js)
 * All prices are illustrative / configurable estimates subject to model inspection.
 */
(function () {
  function getPagePrefix() {
    const path = window.location.pathname.replace(/\\/g, '/');
    return path.includes('/pages/') ? '' : 'pages/';
  }

  const PRICING_CONFIG = {
    disclaimer:
      'Displayed prices are indicative examples and may vary based on device model, part availability, repair complexity, and inspection findings. A final estimate will be shared before repair work proceeds.',
    currency: 'USD ($)',
    categories: [
      {
        id: 'screen-services',
        name: 'Screen Services',
        items: [
          {
            serviceId: 'screen-repair',
            title: 'Screen & Display Inspection',
            priceRange: 'From $20 (Illustrative)',
            description: 'Evaluation of cracked outer glass, OLED/LCD display health, digitizer touch grid, and frame alignment.',
            conditions: 'Inspection fee is typically credited toward approved display replacement work.'
          },
          {
            serviceId: 'screen-repair',
            title: 'Screen Repair or Replacement Estimate',
            priceRange: '$49 – $189+ (Illustrative Range)',
            description: 'Complete display and touchscreen assembly replacement tailored to your exact smartphone brand and model.',
            conditions: 'Exact price depends on device generation, LCD vs. OLED panel structure, and part availability.'
          }
        ]
      },
      {
        id: 'battery-services',
        name: 'Battery Services',
        items: [
          {
            serviceId: 'battery-replacement',
            title: 'Battery Condition Inspection',
            priceRange: 'From $15 (Illustrative)',
            description: 'Testing of battery charge capacity, voltage stability under load, and physical check for cell swelling.',
            conditions: 'Helps distinguish degraded batteries from motherboard current leakage.'
          },
          {
            serviceId: 'battery-replacement',
            title: 'Battery Replacement Estimate',
            priceRange: '$35 – $95 (Illustrative Range)',
            description: 'Safe adhesive release, removal of degraded battery cell, installation of compatible replacement, and charge verification.',
            conditions: 'Varies by device model, internal adhesive construction, and battery capacity specification.'
          }
        ]
      },
      {
        id: 'charging-services',
        name: 'Charging Services',
        items: [
          {
            serviceId: 'charging-port-repair',
            title: 'Charging Port Inspection & Precision Cleaning',
            priceRange: '$20 – $35 (Illustrative Range)',
            description: 'Microscopic pin inspection, safe removal of compacted lint/debris, and USB power meter current verification.',
            conditions: 'Applicable when internal connector pins remain physically intact and uncorroded.'
          },
          {
            serviceId: 'charging-port-repair',
            title: 'Charging Port Repair or Sub-Board Replacement Estimate',
            priceRange: '$39 – $85 (Illustrative Range)',
            description: 'Replacement of worn, bent, or corroded USB-C / Lightning charging port flex assembly or daughterboard.',
            conditions: 'Subject to device disassembly complexity and model-specific port architecture.'
          }
        ]
      },
      {
        id: 'camera-audio',
        name: 'Camera and Audio',
        items: [
          {
            serviceId: 'camera-repair',
            title: 'Camera Module & Lens Glass Inspection',
            priceRange: '$35 – $125 (Illustrative Range)',
            description: 'Assessment and repair estimate for blurry focus, OIS shaking, black preview screen, or cracked exterior camera glass.',
            conditions: 'Pricing differs between outer camera lens glass replacement and full internal camera sensor module replacement.'
          },
          {
            serviceId: 'speaker-microphone-repair',
            title: 'Speaker & Earpiece Inspection / Repair',
            priceRange: '$25 – $75 (Illustrative Range)',
            description: 'Acoustic mesh clearing, earpiece receiver testing, and bottom loudspeaker driver replacement estimate.',
            conditions: 'Final estimate shared after checking whether the fault is mesh blockage or driver failure.'
          },
          {
            serviceId: 'microphone-repair',
            title: 'Microphone Channel Inspection / Repair',
            priceRange: '$29 – $80 (Illustrative Range)',
            description: 'Testing of primary call microphone and secondary recording microphones with flex or sub-board repair guidance.',
            conditions: 'Depends on whether microphone is modular or integrated on the charging sub-board.'
          }
        ]
      },
      {
        id: 'software-services',
        name: 'Software & Diagnostics',
        items: [
          {
            serviceId: 'software-troubleshooting',
            title: 'Basic Software Troubleshooting',
            priceRange: '$25 – $55 (Illustrative Range)',
            description: 'Evaluation of OS update errors, app crashes, boot loop symptoms, and system configuration conflicts.',
            conditions: 'Does not include guaranteed data recovery. Customer data backup is advised before software work.'
          },
          {
            serviceId: 'diagnostics',
            title: 'Device Performance & Multi-Point Diagnostic Assessment',
            priceRange: '$20 – $35 (Illustrative Range)',
            description: 'Structured hardware and software check for devices with unknown faults, overheating, or water exposure.',
            conditions: 'A clear repair estimate is provided after inspection; no repair proceeds without customer approval.'
          }
        ]
      }
    ]
  };

  function initPricingGuidePage() {
    const container = document.getElementById('pricing-guide-container');
    if (!container) return;

    const filterBtns = document.querySelectorAll('[data-pricing-filter]');
    const disclaimerEls = document.querySelectorAll('[data-pricing-disclaimer]');
    const pagePrefix = getPagePrefix();

    disclaimerEls.forEach((el) => {
      el.textContent = PRICING_CONFIG.disclaimer;
    });

    let activeCat = 'all';

    function renderPricing() {
      const cats =
        activeCat === 'all'
          ? PRICING_CONFIG.categories
          : PRICING_CONFIG.categories.filter((c) => c.id === activeCat);

      container.innerHTML = cats
        .map(
          (cat) => `
          <div class="mb-10 last:mb-0">
            <div class="flex items-center justify-between border-b border-theme pb-3 mb-6">
              <h2 class="font-heading text-2xl font-bold text-theme-primary">${cat.name}</h2>
              <span class="tech-badge">Configurable Reference</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              ${cat.items
                .map(
                  (item) => `
                <article class="fixora-card">
                  <div class="fixora-card-body">
                    <div class="mb-3">
                      <span class="inline-block font-mono-tech text-xs font-bold px-3 py-1 rounded-lg bg-theme-accent-soft text-theme-accent mb-2.5">
                        ${item.priceRange}
                      </span>
                      <h3 class="font-heading text-lg font-bold text-theme-primary md:min-h-[3.25rem] flex items-start">${item.title}</h3>
                    </div>
                    <p class="text-sm text-theme-secondary mb-5 flex-1">${item.description}</p>
                    <div class="bg-theme-muted p-4 rounded-xl border border-theme mb-5">
                      <span class="block font-mono-tech text-[11px] font-bold uppercase text-theme-muted mb-1">Important Conditions</span>
                      <p class="text-xs text-theme-primary m-0">${item.conditions}</p>
                    </div>
                    <div class="fixora-card-footer flex flex-wrap items-center justify-between gap-3 border-t border-theme">
                      <span class="font-mono-tech text-[11px] text-theme-muted">Final price confirmed after inspection</span>
                      <a href="${pagePrefix}repair-request.html?service=${encodeURIComponent(item.serviceId)}" class="btn-accent !py-2 !px-4 !text-xs">
                        Request Estimate
                      </a>
                    </div>
                  </div>
                </article>`
                )
                .join('')}
            </div>
          </div>`
        )
        .join('');
    }

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        activeCat = btn.getAttribute('data-pricing-filter') || 'all';
        filterBtns.forEach((b) => {
          b.classList.remove('btn-accent');
          b.classList.add('btn-outline');
        });
        btn.classList.remove('btn-outline');
        btn.classList.add('btn-accent');
        renderPricing();
      });
    });

    renderPricing();
  }

  document.addEventListener('DOMContentLoaded', initPricingGuidePage);
  window.FixoraPricing = { PRICING_CONFIG };
})();

