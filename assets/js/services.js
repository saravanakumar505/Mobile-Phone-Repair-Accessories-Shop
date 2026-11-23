/**
 * FIXORA — Services Data & Interactive Filtering / Details Engine (services.js)
 */
(function () {
  function getAssetPrefix() {
    const path = window.location.pathname.replace(/\\/g, '/');
    return path.includes('/pages/') ? '../' : '';
  }

  function getPagePrefix() {
    const path = window.location.pathname.replace(/\\/g, '/');
    return path.includes('/pages/') ? '' : 'pages/';
  }

  const SERVICES_DATA = [
    {
      id: 'screen-repair',
      name: 'Screen Repair and Replacement',
      category: 'Display & Touch',
      shortDesc: 'Professional display assessment, cracked glass evaluation, and touchscreen assembly replacement for modern smartphones.',
      detailedDesc: 'A cracked, shattered, or unresponsive display affects visibility, touch accuracy, and safe daily phone use. Our technicians perform a thorough inspection of both the outer glass and the underlying OLED or LCD panel, digitizer response, and frame alignment before recommending the appropriate screen replacement option for your exact device model.',
      commonIssue: 'Cracked front glass, flickering display, dead pixels, black spots, or unresponsive touch areas.',
      symptoms: [
        'Shattered or spiderweb-cracked outer glass panel',
        'Unresponsive or erratic ghost-touch behavior on screen',
        'Vertical colored lines, dark blotches, or flickering backlight',
        'Screen remains dark while phone vibrates or rings'
      ],
      inspectionSteps: [
        'Visual frame and bezel straightness evaluation',
        'Digitizer multi-touch sensitivity grid diagnostic',
        'Display connector flex cable and backlight circuit check',
        'Verification of compatible screen part options for your model'
      ],
      repairOptions: [
        'Complete display and digitizer assembly replacement',
        'Display flex connector reseating or cleaning when display panel is intact',
        'Frame alignment adjustment prior to new screen seating'
      ],
      customerNotes: 'Screen part type and availability depend on your specific smartphone brand and model. Final pricing is confirmed after physical inspection.',
      image: 'assets/images/screen-repair/cracked-phone-screen.jpg',
      secondaryImage: 'assets/images/screen-repair/smartphone-display-replacement.jpg',
      pageLink: 'screen-repair.html',
      pricingRef: 'From $49 – $189 (Illustrative / Model-Dependent)',
      relatedIds: ['diagnostics', 'battery-replacement', 'water-damage-inspection']
    },
    {
      id: 'battery-replacement',
      name: 'Battery Replacement',
      category: 'Power & Battery',
      shortDesc: 'Battery health evaluation and safe cell replacement for phones experiencing rapid drain or unexpected shutdowns.',
      detailedDesc: 'Over time, lithium-ion smartphone batteries naturally experience chemical degradation, leading to shorter daily runtime, sudden power drops, or voltage instability under load. We test battery health, current draw, and charging behavior to determine whether a battery replacement will restore reliable daily endurance.',
      commonIssue: 'Rapid battery drain, sudden shutdowns at 20%–30%, overheating during use, or swollen casing.',
      symptoms: [
        'Battery percentage drops rapidly during normal daily tasks',
        'Device powers off unexpectedly even when showing remaining charge',
        'Phone feels unusually warm during standard charging or browsing',
        'Screen or back cover lifting slightly due to battery swelling'
      ],
      inspectionSteps: [
        'Battery cycle and voltage stability diagnostic check',
        'Physical inspection for cell expansion or adhesive degradation',
        'Power management board current draw test to rule out board shorts',
        'Charging current regulation verification'
      ],
      repairOptions: [
        'Safe removal of degraded battery cell using controlled adhesive release',
        'Installation of model-compatible replacement battery cell',
        'Post-installation charge/discharge calibration check'
      ],
      customerNotes: 'If you suspect a swollen battery, avoid charging the device or applying pressure to the casing and bring it in for safe professional inspection.',
      image: 'assets/images/battery-repair/mobile-battery-replacement.jpg',
      secondaryImage: 'assets/images/battery-repair/smartphone-battery-inspection.jpg',
      pageLink: 'battery-replacement.html',
      pricingRef: 'From $35 – $95 (Illustrative / Model-Dependent)',
      relatedIds: ['charging-port-repair', 'diagnostics', 'software-troubleshooting']
    },
    {
      id: 'charging-port-repair',
      name: 'Charging Port Repair',
      category: 'Power & Battery',
      shortDesc: 'Inspection, cleaning, and connector replacement for loose, intermittent, or non-responsive charging ports.',
      detailedDesc: 'When a phone only charges if the cable is held at a specific angle—or fails to detect a charger at all—the cause can range from compacted pocket lint and bent connector pins to worn solder joints or sub-board wear. We inspect the port under magnification before advising whether precision cleaning or port assembly replacement is needed.',
      commonIssue: 'Loose cable fit, intermittent charging connection, slow charging, or no USB data recognition.',
      symptoms: [
        'Charging cable feels loose or falls out of the port easily',
        'Cable must be held at an angle to maintain a charging signal',
        'Device fails to recognize fast charging or USB computer connection',
        'Visible debris or corrosion inside the USB-C or Lightning receptacle'
      ],
      inspectionSteps: [
        'Microscopic inspection of internal contact pins and port housing',
        'Safe non-conductive removal of compacted lint or foreign debris',
        'USB power meter voltage and amperage negotiation test',
        'Sub-board flex cable and charging IC continuity evaluation'
      ],
      repairOptions: [
        'Precision port cleaning and contact restoration',
        'Charging port flex cable or daughterboard assembly replacement',
        'Connector pin repair assessment where supported'
      ],
      customerNotes: 'Never insert metal pins, toothpicks, or sharp tools into your charging port, as this can bend delicate contact pins or short power lines.',
      image: 'assets/images/charging-port/usb-c-port-inspection.jpg',
      secondaryImage: 'assets/images/charging-port/charging-connector-closeup.jpg',
      pageLink: 'charging-port-repair.html',
      pricingRef: 'From $29 – $85 (Illustrative / Model-Dependent)',
      relatedIds: ['battery-replacement', 'diagnostics', 'water-damage-inspection']
    },
    {
      id: 'camera-repair',
      name: 'Camera Repair',
      category: 'Optics & Audio',
      shortDesc: 'Front and rear camera module inspection, focus troubleshooting, and cracked camera lens glass replacement.',
      detailedDesc: 'Smartphone cameras rely on delicate optical stabilization mechanisms, sensor flex cables, and protective outer lens glass. Whether your camera shows a black preview screen, refuses to focus, shakes erratically, or suffers from cracked outer camera glass, we inspect both the optical glass and internal sensor module.',
      commonIssue: 'Blurry photos, autofocus shaking, cracked rear camera glass, or black camera app screen.',
      symptoms: [
        'Rear or front camera refuses to focus or produces blurry spots',
        'Audible buzzing or visible shaking from optical stabilization fault',
        'Cracked or scratched exterior camera lens cover glass',
        'Camera app freezes or displays a blank black preview'
      ],
      inspectionSteps: [
        'Optical inspection of outer sapphire/glass lens cover and sensor dust',
        'Autofocus and optical stabilization (OIS) actuation check',
        'Camera module flex connector and board interface check',
        'Software vs. hardware camera failure isolation'
      ],
      repairOptions: [
        'Exterior camera lens glass cover replacement',
        'Rear main, ultra-wide, or telephoto camera module replacement',
        'Front selfie camera and sensor flex replacement'
      ],
      customerNotes: 'If your outer camera glass is cracked, covering it with clean tape temporarily can help prevent dust from damaging the exposed internal sensor prior to inspection.',
      image: 'assets/images/camera-repair/smartphone-camera-repair.jpg',
      secondaryImage: 'assets/images/camera-repair/camera-module-inspection.jpg',
      pageLink: 'camera-repair.html',
      pricingRef: 'From $35 – $125 (Illustrative / Model-Dependent)',
      relatedIds: ['screen-repair', 'diagnostics', 'software-troubleshooting']
    },
    {
      id: 'speaker-microphone-repair',
      name: 'Speaker and Microphone Repair',
      category: 'Optics & Audio',
      shortDesc: 'Earpiece, loudspeaker, and microphone diagnostics and component repair for clear calls and media audio.',
      detailedDesc: 'Muffled voice calls, crackling ringtones, or callers unable to hear you can stem from clogged acoustic mesh grilles, worn speaker drivers, or damaged microphone flex circuits. We test every audio channel—earpiece receiver, bottom loudspeaker, primary call mic, and secondary noise-cancelling mic—to pinpoint the fault.',
      commonIssue: 'Muffled earpiece volume, distorted loudspeaker sound, or callers unable to hear your voice.',
      symptoms: [
        'Earpiece sound during phone calls is extremely faint or muffled',
        'Loudspeaker crackles, distorts, or produces no ringtone/media audio',
        'Callers cannot hear you unless you switch to speakerphone or earbuds',
        'Voice memos or video recordings capture static or no audio'
      ],
      inspectionSteps: [
        'Acoustic mesh inspection for dust, debris, or liquid residue',
        'Multi-microphone and dual-speaker audio channel isolation test',
        'Internal audio flex cable and spring contact examination',
        'Safe acoustic grille cleaning and component impedance check'
      ],
      repairOptions: [
        'Precision acoustic mesh cleaning and acoustic seal restoration',
        'Earpiece receiver or bottom loudspeaker unit replacement',
        'Microphone sub-board or audio flex cable replacement'
      ],
      customerNotes: 'Many low-volume earpiece complaints are caused by blocked acoustic mesh rather than a failed speaker; we always inspect the mesh first.',
      image: 'assets/images/speaker-repair/phone-speaker-repair.jpg',
      secondaryImage: 'assets/images/speaker-repair/audio-component-inspection.jpg',
      pageLink: 'speaker-microphone-repair.html',
      pricingRef: 'From $25 – $80 (Illustrative / Model-Dependent)',
      relatedIds: ['charging-port-repair', 'diagnostics', 'water-damage-inspection']
    },
    {
      id: 'software-troubleshooting',
      name: 'Software Troubleshooting',
      category: 'System & Diagnostics',
      shortDesc: 'System stability checks, update error troubleshooting, app crash diagnostics, and storage performance guidance.',
      detailedDesc: 'Not every phone fault requires a hardware part replacement. Boot loops, frozen update screens, severe lag, rapid storage saturation, and recurring app crashes often require careful software troubleshooting. We evaluate system logs, storage health, and firmware behavior while advising clearly on data backup precautions.',
      commonIssue: 'Stuck on boot logo, failed OS updates, frequent app crashes, or sluggish system response.',
      symptoms: [
        'Phone stuck on startup logo or restarting in a continuous boot loop',
        'System update fails repeatedly or stalls mid-installation',
        'Severe UI lag, freezes, or storage full alerts despite deleting files',
        'Essential system apps crashing immediately upon launch'
      ],
      inspectionSteps: [
        'Differentiating software corruption from hardware memory/battery faults',
        'Storage health and available system partition evaluation',
        'Review of safe recovery mode options vs. full factory reset',
        'Pre-service customer data backup confirmation'
      ],
      repairOptions: [
        'System cache and configuration conflict troubleshooting',
        'Operating system restore or clean firmware re-flash where supported',
        'Storage optimization and performance diagnostics'
      ],
      customerNotes: 'IMPORTANT: Certain software resets or firmware restores can erase all user data. Always maintain an independent backup when possible. We do not collect your account passwords or guarantee data recovery.',
      image: 'assets/images/smartphones/software-troubleshooting-phone.jpg',
      secondaryImage: 'assets/images/diagnostics/mobile-diagnostics-workbench.jpg',
      pageLink: 'software-troubleshooting.html',
      pricingRef: 'From $25 – $65 (Illustrative / Assessment-Based)',
      relatedIds: ['diagnostics', 'battery-replacement', 'water-damage-inspection']
    },
    {
      id: 'water-damage-inspection',
      name: 'Water Damage Inspection',
      category: 'System & Diagnostics',
      shortDesc: 'Internal moisture and corrosion inspection, ultrasonic board cleaning assessment, and repair feasibility evaluation.',
      detailedDesc: 'Liquid exposure can cause progressive corrosion across internal connectors, power rails, and display flex cables—even if the phone initially appears to work. Our technicians open the device safely, disconnect the battery, inspect for mineral deposits and oxidation, and provide an honest assessment of whether repair is feasible.',
      commonIssue: 'Accidental water drop, liquid spill, fogged camera lenses, or post-moisture power failure.',
      symptoms: [
        'Device fails to power on after splash, rain, or immersion',
        'Visible condensation or fogging inside front or rear camera lenses',
        'Display flickering, touch failure, or overheating after liquid contact',
        'Charging port moisture warning persisting after drying'
      ],
      inspectionSteps: [
        'Immediate battery disconnection and internal moisture removal',
        'Microscopic corrosion inspection across motherboard and flex connectors',
        'Component cleaning and short-circuit diagnostic evaluation',
        'Honest feasibility and cost-effectiveness assessment'
      ],
      repairOptions: [
        'Internal corrosion cleaning and board drying treatment',
        'Replacement of corroded modular parts (screen, battery, or port) if board is stable',
        'Transparent advice if corrosion is too severe for reliable repair'
      ],
      customerNotes: 'SAFETY ADVICE: If your phone gets wet, power it off immediately if safe to do so and DO NOT connect a charger. Bring it for inspection as soon as possible. Recovery is never guaranteed with liquid damage.',
      image: 'assets/images/diagnostics/water-damage-board-inspection.jpg',
      secondaryImage: 'assets/images/diagnostics/internal-circuit-diagnostics.jpg',
      pageLink: 'water-damage-inspection.html',
      pricingRef: 'From $35 Inspection Fee (Illustrative)',
      relatedIds: ['diagnostics', 'screen-repair', 'charging-port-repair']
    },
    {
      id: 'diagnostics',
      name: 'General Phone Diagnostics',
      category: 'System & Diagnostics',
      shortDesc: 'Comprehensive multi-point hardware and software diagnostic inspection when the exact fault is unclear.',
      detailedDesc: 'Multiple phone problems can share identical symptoms—for example, a device that will not turn on could have a depleted battery, a damaged charging port, a faulty power button flex, or a display failure. Our structured diagnostic service isolates the true root cause before you commit to any repair.',
      commonIssue: 'Unknown power failure, overheating, intermittent restarts, or multiple simultaneous symptoms.',
      symptoms: [
        'Phone is completely unresponsive and cause is unknown',
        'Intermittent restarts or random freezing during daily use',
        'Device dropped heavily with potential internal and external damage',
        'Second-hand device needing a complete condition check'
      ],
      inspectionSteps: [
        'External chassis, display, button, and port physical examination',
        'USB power draw and battery voltage diagnostic measurement',
        'Display, touch, camera, speaker, microphone, and sensor verification',
        'Clear diagnostic report and itemized repair estimate'
      ],
      repairOptions: [
        'Itemized repair estimate tailored to confirmed hardware or software findings',
        'Modular component replacement upon customer approval',
        'No-obligation return if you choose not to proceed with repair'
      ],
      customerNotes: 'Every repair at FIXORA starts with proper verification so you only approve work that addresses the actual issue.',
      image: 'assets/images/diagnostics/mobile-diagnostics-workbench.jpg',
      secondaryImage: 'assets/images/technicians/technician-phone-repair.jpg',
      pageLink: 'diagnostics.html',
      pricingRef: 'From $20 – $35 (Illustrative)',
      relatedIds: ['screen-repair', 'battery-replacement', 'software-troubleshooting']
    },
    {
      id: 'microphone-repair',
      name: 'Microphone Repair',
      category: 'Optics & Audio',
      shortDesc: 'Dedicated inspection and replacement for primary voice call microphones and secondary recording microphones.',
      detailedDesc: 'Modern smartphones utilize multiple MEMS microphones for voice calls, speakerphone, voice notes, and video noise cancellation. When one microphone fails or becomes blocked, callers may hear silence or static. We isolate which microphone channel is affected and inspect the sub-board assembly.',
      commonIssue: 'Voice calls silent on the other end, muffled voice notes, or failed voice assistant input.',
      symptoms: [
        'Callers cannot hear you during standard voice calls',
        'Voice notes or camera video recordings have missing or faint audio',
        'Heavy static or crackling noise transmitted during calls'
      ],
      inspectionSteps: [
        'Bottom microphone port and top noise-cancelling mic port inspection',
        'Audio recording channel isolation test',
        'Sub-board flex cable inspection'
      ],
      repairOptions: [
        'Microphone acoustic port clearing',
        'Daughterboard or microphone flex assembly replacement'
      ],
      customerNotes: 'Model compatibility and parts availability are verified during initial check-in.',
      image: 'assets/images/speaker-repair/audio-component-inspection.jpg',
      secondaryImage: 'assets/images/speaker-repair/phone-speaker-repair.jpg',
      pageLink: 'speaker-microphone-repair.html',
      pricingRef: 'From $29 – $75 (Illustrative)',
      relatedIds: ['speaker-microphone-repair', 'charging-port-repair', 'diagnostics']
    },
    {
      id: 'button-connector-repair',
      name: 'Button and Connector Repair',
      category: 'Hardware & Controls',
      shortDesc: 'Inspection and repair for stuck power buttons, unresponsive volume keys, and internal flex connectors.',
      detailedDesc: 'Physical side buttons—including power/lock keys and volume rockers—rely on tactile dome switches and internal flex cables. After drops or prolonged use, buttons can become dented, stuck, or unresponsive. Where parts are supported for your device model, we inspect and service the button mechanism or flex cable.',
      commonIssue: 'Stuck power button, broken volume up/down controls, or loose internal board connectors.',
      symptoms: [
        'Power button requires excessive force or does not click',
        'Volume buttons stuck or failing to adjust audio levels',
        'Frame dent pressing permanently against side button switch'
      ],
      inspectionSteps: [
        'Side frame and button cap mechanical clearance check',
        'Internal tactile switch and flex cable continuity inspection',
        'Part availability check for the specific smartphone model'
      ],
      repairOptions: [
        'Power or volume flex cable replacement where parts are available',
        'Button cap alignment and chassis clearance adjustment'
      ],
      customerNotes: 'Button and internal flex repair availability varies by smartphone brand and model.',
      image: 'assets/images/smartphones/button-connector-components.jpg',
      secondaryImage: 'assets/images/workshop/precision-repair-bench.jpg',
      pageLink: 'service-details.html?service=button-connector-repair',
      pricingRef: 'From $30 – $75 (Illustrative)',
      relatedIds: ['diagnostics', 'screen-repair', 'charging-port-repair']
    }
  ];

  // Render Services Grid on pages/services.html
  function initServicesListing() {
    const grid = document.getElementById('services-listing-grid');
    if (!grid) return;

    const searchInput = document.getElementById('service-search-input');
    const filterButtons = document.querySelectorAll('[data-service-filter]');
    const countLabel = document.getElementById('service-count-label');
    const assetPrefix = getAssetPrefix();
    const pagePrefix = getPagePrefix();

    let activeCategory = 'all';
    let searchQuery = '';

    function renderGrid() {
      const filtered = SERVICES_DATA.filter((s) => {
        const matchesCat = activeCategory === 'all' || s.category.toLowerCase() === activeCategory.toLowerCase();
        const matchesSearch =
          !searchQuery ||
          s.name.toLowerCase().includes(searchQuery) ||
          s.shortDesc.toLowerCase().includes(searchQuery) ||
          s.commonIssue.toLowerCase().includes(searchQuery);
        return matchesCat && matchesSearch;
      });

      if (countLabel) {
        countLabel.textContent = `Showing ${filtered.length} of ${SERVICES_DATA.length} repair services`;
      }

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div class="col-span-full bg-theme-surface border border-theme rounded-2xl p-10 text-center">
            <p class="font-heading text-lg font-bold text-theme-primary mb-2">No matching repair services found</p>
            <p class="text-theme-secondary text-sm mb-6">Try clearing your search filter or request a general phone diagnostic inspection.</p>
            <a href="${pagePrefix}repair-request.html?service=diagnostics" class="btn-accent">Request Diagnostic Enquiry</a>
          </div>
        `;
        return;
      }

      grid.innerHTML = filtered
        .map((s) => {
          const detailHref = s.pageLink.includes('.html') ? `${pagePrefix}${s.pageLink}` : `${pagePrefix}service-details.html?service=${s.id}`;
          return `
            <article class="fixora-card">
              <div class="aspect-service">
                <img src="${assetPrefix}${s.image}" alt="${s.name}" loading="lazy" />
                <span class="absolute top-3 inset-inline-start-3 tech-badge">${s.category}</span>
              </div>
              <div class="fixora-card-body">
                <h3 class="font-heading text-xl font-bold text-theme-primary mb-2">${s.name}</h3>
                <p class="text-theme-secondary text-sm mb-4">${s.shortDesc}</p>
                <div class="bg-theme-muted rounded-xl p-3 mb-4 border border-theme">
                  <span class="block font-mono-tech text-xs text-theme-accent font-bold uppercase mb-1">Common Issue Addressed</span>
                  <p class="text-xs text-theme-primary m-0">${s.commonIssue}</p>
                </div>
                <div class="fixora-card-footer flex flex-wrap items-center justify-between gap-3 border-t border-theme">
                  <a href="${detailHref}" class="text-sm font-heading font-semibold text-theme-accent hover:underline inline-flex items-center gap-1">
                    View Details <span aria-hidden="true" class="rtl-flip">&rarr;</span>
                  </a>
                  <a href="${pagePrefix}repair-request.html?service=${encodeURIComponent(s.id)}" class="btn-accent !py-2 !px-4 !text-xs">
                    Repair Enquiry
                  </a>
                </div>
              </div>
            </article>
          `;
        })
        .join('');
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        renderGrid();
      });
    }

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        activeCategory = btn.getAttribute('data-service-filter') || 'all';
        filterButtons.forEach((b) => {
          b.classList.remove('btn-accent');
          b.classList.add('btn-outline');
        });
        btn.classList.remove('btn-outline');
        btn.classList.add('btn-accent');
        renderGrid();
      });
    });

    renderGrid();
  }

  // Dynamic Service Details Loader on pages/service-details.html
  function initServiceDetailsPage() {
    const container = document.getElementById('service-detail-dynamic-root');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const serviceId = params.get('service') || 'screen-repair';
    const service = SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];
    const assetPrefix = getAssetPrefix();
    const pagePrefix = getPagePrefix();

    // Populate Selector Tabs
    const tabContainer = document.getElementById('service-selector-tabs');
    if (tabContainer) {
      tabContainer.innerHTML = SERVICES_DATA.map((s) => {
        const isActive = s.id === service.id;
        return `
          <a href="${pagePrefix}service-details.html?service=${s.id}"
             class="${isActive ? 'btn-accent' : 'btn-outline'} !py-2 !px-3.5 !text-xs">
            ${s.name}
          </a>
        `;
      }).join('');
    }

    // Update DOM Elements
    const elTitle = document.getElementById('sd-title');
    const elBadge = document.getElementById('sd-category');
    const elIntro = document.getElementById('sd-intro');
    const elImage = document.getElementById('sd-hero-image');
    const elPricing = document.getElementById('sd-pricing-ref');
    const elNotes = document.getElementById('sd-customer-notes');
    const elSymptoms = document.getElementById('sd-symptoms-list');
    const elInspection = document.getElementById('sd-inspection-list');
    const elOptions = document.getElementById('sd-options-list');
    const elBookBtn = document.getElementById('sd-book-cta');
    const elRelatedGrid = document.getElementById('sd-related-grid');

    if (elTitle) elTitle.textContent = service.name;
    if (elBadge) elBadge.textContent = service.category;
    if (elIntro) elIntro.textContent = service.detailedDesc;
    if (elImage) {
      elImage.src = `${assetPrefix}${service.image}`;
      elImage.alt = service.name;
    }
    if (elPricing) elPricing.textContent = service.pricingRef;
    if (elNotes) elNotes.textContent = service.customerNotes;
    if (elBookBtn) elBookBtn.href = `${pagePrefix}repair-request.html?service=${encodeURIComponent(service.id)}`;

    if (elSymptoms) {
      elSymptoms.innerHTML = service.symptoms
        .map(
          (item) => `
          <li class="flex items-start gap-3 bg-theme-surface p-3.5 rounded-xl border border-theme">
            <span class="w-2 h-2 rounded-full bg-[#20B8C4] mt-2 shrink-0"></span>
            <span class="text-sm text-theme-primary">${item}</span>
          </li>`
        )
        .join('');
    }

    if (elInspection) {
      elInspection.innerHTML = service.inspectionSteps
        .map(
          (step, idx) => `
          <li class="flex items-start gap-3 bg-theme-surface p-4 rounded-xl border border-theme">
            <span class="font-mono-tech text-xs font-bold px-2.5 py-1 rounded bg-theme-accent-soft text-theme-accent shrink-0">0${idx + 1}</span>
            <span class="text-sm text-theme-primary">${step}</span>
          </li>`
        )
        .join('');
    }

    if (elOptions) {
      elOptions.innerHTML = service.repairOptions
        .map(
          (opt) => `
          <li class="flex items-start gap-3">
            <span class="text-theme-accent font-bold">&#10003;</span>
            <span class="text-sm text-theme-secondary">${opt}</span>
          </li>`
        )
        .join('');
    }

    if (elRelatedGrid) {
      const related = SERVICES_DATA.filter((s) => service.relatedIds.includes(s.id));
      elRelatedGrid.innerHTML = related
        .map(
          (r) => `
          <article class="fixora-card">
            <div class="aspect-service">
              <img src="${assetPrefix}${r.image}" alt="${r.name}" loading="lazy" />
            </div>
            <div class="fixora-card-body">
              <span class="tech-badge self-start mb-2">${r.category}</span>
              <h3 class="font-heading text-lg font-bold text-theme-primary mb-2">${r.name}</h3>
              <p class="text-sm text-theme-secondary mb-4">${r.shortDesc}</p>
              <div class="fixora-card-footer flex items-center justify-between gap-2 border-t border-theme">
                <a href="${pagePrefix}${r.pageLink}" class="text-sm font-heading font-semibold text-theme-accent hover:underline">View Service &rarr;</a>
                <a href="${pagePrefix}repair-request.html?service=${r.id}" class="btn-outline !py-1.5 !px-3 !text-xs">Enquire</a>
              </div>
            </div>
          </article>`
        )
        .join('');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initServicesListing();
    initServiceDetailsPage();
  });

  window.FixoraServices = { SERVICES_DATA };
})();

