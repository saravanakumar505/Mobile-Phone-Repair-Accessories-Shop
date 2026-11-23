/**
 * FIXORA — Mobile Accessories Catalogue Data & Filtering Engine (accessories.js)
 * All prices are configurable / illustrative sample prices until confirmed by the shop owner.
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

  const ACCESSORIES_DATA = [
    {
      id: 'acc-graphite-bumper-case',
      name: 'Graphite Shock-Absorbing Protective Case',
      category: 'Phone Cases and Covers',
      price: 22,
      priceDisplay: '$22.00',
      image: 'assets/images/cases-covers/premium-phone-case.jpg',
      gallery: [
        'assets/images/cases-covers/premium-phone-case.jpg',
        'assets/images/cases-covers/protective-cover-collection.jpg'
      ],
      shortDesc: 'Raised-bezel protective smartphone cover engineered to help guard corners and camera housing against everyday drops.',
      detailedDesc: 'Designed for comfortable daily grip and practical drop protection, this protective phone case features raised perimeter edges around the display and rear camera lens bump, tactile button covers, and precise bottom cutouts for charging cables.',
      compatibility: 'Available for select smartphone models (confirm exact device brand and model via enquiry).',
      features: [
        'Shock-dispersing corner bumper architecture',
        'Raised lip around display and camera module',
        'Matte anti-fingerprint outer surface texture',
        'Tactile side button protection'
      ],
      variations: ['Graphite Black', 'Slate Navy', 'Clear Frost (Model Dependent)']
    },
    {
      id: 'acc-textured-folio-cover',
      name: 'Slim Everyday Protective Cover Collection',
      category: 'Phone Cases and Covers',
      price: 18,
      priceDisplay: '$18.00',
      image: 'assets/images/cases-covers/protective-cover-collection.jpg',
      gallery: [
        'assets/images/cases-covers/protective-cover-collection.jpg',
        'assets/images/cases-covers/premium-phone-case.jpg'
      ],
      shortDesc: 'Lightweight tailored protective back cover with scratch-resistant finish for everyday pocket carry.',
      detailedDesc: 'A slim, pocket-friendly protective cover that guards the rear glass and aluminum frame of your phone from keys, desk scratches, and minor impacts without adding unnecessary bulk.',
      compatibility: 'Model availability varies by device generation. Please specify your phone model when enquiring.',
      features: [
        'Slim profile for comfortable single-hand use',
        'Accurate port and speaker cutouts',
        'Non-slip textured grip surface',
        'Easy snap-on installation'
      ],
      variations: ['Charcoal Matte', 'Soft Silver', 'Deep Slate']
    },
    {
      id: 'acc-tempered-glass-hd',
      name: 'Clear Tempered Glass Screen Protector',
      category: 'Screen Protectors',
      price: 15,
      priceDisplay: '$15.00',
      image: 'assets/images/screen-protectors/tempered-glass-protector.jpg',
      gallery: [
        'assets/images/screen-protectors/tempered-glass-protector.jpg',
        'assets/images/screen-protectors/matte-display-protector.jpg'
      ],
      shortDesc: 'High-clarity protective display film and tempered glass shield designed to absorb surface scratches.',
      detailedDesc: 'Keep your smartphone display free from micro-scratches and everyday wear. This transparent protective screen shield preserves touchscreen responsiveness and optical display clarity while adding a sacrificial protective layer over your front glass.',
      compatibility: 'Sized per specific phone model. In-store fitting check available upon request.',
      features: [
        'High optical transparency for clear viewing',
        'Oleophobic coating to help reduce smudge buildup',
        'Smooth rounded edge finish',
        'Case-friendly perimeter clearance'
      ],
      variations: ['HD Clear Glass', 'Full-Coverage Black Border (Model Dependent)']
    },
    {
      id: 'acc-matte-anti-glare-film',
      name: 'Matte Anti-Glare Screen Protector Film',
      category: 'Screen Protectors',
      price: 16,
      priceDisplay: '$16.00',
      image: 'assets/images/screen-protectors/matte-display-protector.jpg',
      gallery: [
        'assets/images/screen-protectors/matte-display-protector.jpg',
        'assets/images/screen-protectors/tempered-glass-protector.jpg'
      ],
      shortDesc: 'Anti-reflection matte surface screen protector that diffuses harsh overhead glare and reduces fingerprints.',
      detailedDesc: 'Ideal for outdoor visibility and smooth finger gliding, our matte screen protector diffuses bright ambient light reflections while resisting oil smudges during daily browsing and typing.',
      compatibility: 'Confirm model size availability in store or via accessory enquiry.',
      features: [
        'Matte anti-glare light diffusion surface',
        'Silky touch response with reduced fingerprint marks',
        'Scratch-resistant protective layer',
        'Clean adhesive removal without residue'
      ],
      variations: ['Matte Finish']
    },
    {
      id: 'acc-gan-30w-usb-c-charger',
      name: 'Compact 30W USB-C Power Delivery Wall Charger',
      category: 'Chargers and Adapters',
      price: 28,
      priceDisplay: '$28.00',
      image: 'assets/images/chargers-cables/fast-charging-adapter.jpg',
      gallery: [
        'assets/images/chargers-cables/fast-charging-adapter.jpg',
        'assets/images/chargers-cables/usb-wall-charger-20w.jpg'
      ],
      shortDesc: 'Compact USB-C wall power adapter supporting regulated fast charging for compatible smartphones and tablets.',
      detailedDesc: 'Engineered for stable voltage regulation and compact travel portability, this USB-C wall charger delivers efficient power output for modern USB-C chargeable smartphones, earbuds, and portable accessories.',
      compatibility: 'Compatible with USB-C charging cables and PD-enabled mobile devices.',
      features: [
        'Single USB-C output port with regulated voltage negotiation',
        'Compact footprint for power strips and travel bags',
        'Built-in over-current and temperature regulation circuitry',
        'Durable flame-retardant polycarbonate housing'
      ],
      variations: ['White / Graphite Trim']
    },
    {
      id: 'acc-20w-usb-wall-adapter',
      name: '20W Dual-Protocol USB Fast Wall Adapter',
      category: 'Chargers and Adapters',
      price: 20,
      priceDisplay: '$20.00',
      image: 'assets/images/chargers-cables/usb-wall-charger-20w.jpg',
      gallery: [
        'assets/images/chargers-cables/usb-wall-charger-20w.jpg',
        'assets/images/chargers-cables/fast-charging-adapter.jpg'
      ],
      shortDesc: 'Everyday 20W wall charging adapter built for reliable bedside and desk smartphone charging.',
      detailedDesc: 'A dependable everyday wall adapter offering regulated 20W output for daily smartphone top-ups. Pairs with your existing USB charging cable to provide steady power delivery.',
      compatibility: 'Works with standard USB charging cables for compatible mobile phones.',
      features: [
        '20W regulated power output',
        'Lightweight everyday carry design',
        'Short-circuit and over-voltage safeguard',
        'Sturdy plug prongs'
      ],
      variations: ['Classic Black', 'Ice White']
    },
    {
      id: 'acc-braided-usb-c-cable',
      name: 'Nylon Braided USB Charging & Sync Cable',
      category: 'USB and Charging Cables',
      price: 14,
      priceDisplay: '$14.00',
      image: 'assets/images/chargers-cables/braided-usb-c-cables.jpg',
      gallery: [
        'assets/images/chargers-cables/braided-usb-c-cables.jpg',
        'assets/images/chargers-cables/usb-c-to-a-cable.jpg'
      ],
      shortDesc: 'Reinforced braided jacket USB charging cable designed to resist fraying at the connector neck.',
      detailedDesc: 'Standard plastic cables often split near the strain relief collar. Our woven nylon-braided USB cables feature reinforced connector collars and flexible braiding that resists tangling in bags, cars, and desk setups.',
      compatibility: 'Available in USB-C to USB-C or USB-A to USB-C configurations (confirm availability).',
      features: [
        'Woven nylon outer braid for enhanced flex life',
        'Reinforced strain-relief connector joints',
        'Supports everyday charging and USB data transfer',
        'Tangle-resistant flexibility'
      ],
      variations: ['1.0m Graphite', '1.5m Silver Weave']
    },
    {
      id: 'acc-usb-a-to-c-everyday-cord',
      name: 'Flexible Everyday USB-A to USB-C Cable',
      category: 'USB and Charging Cables',
      price: 12,
      priceDisplay: '$12.00',
      image: 'assets/images/chargers-cables/usb-c-to-a-cable.jpg',
      gallery: [
        'assets/images/chargers-cables/usb-c-to-a-cable.jpg',
        'assets/images/chargers-cables/braided-usb-c-cables.jpg'
      ],
      shortDesc: 'Convenient USB-A to USB-C cord for connecting modern smartphones to legacy wall chargers, laptops, and car ports.',
      detailedDesc: 'Bridge your USB-C smartphone with traditional USB-A power adapters, desktop computer ports, power banks, and in-car USB sockets.',
      compatibility: 'Devices with a standard USB Type-C charging port.',
      features: [
        'Reversible USB-C device connector',
        'Standard USB-A host connector',
        'Supple outer jacket for easy coiling',
        'Reliable contact shielding'
      ],
      variations: ['1.0m Standard']
    },
    {
      id: 'acc-activesound-tws-earbuds',
      name: 'True Wireless Stereo Earbuds with Charging Case',
      category: 'Wireless Earbuds',
      price: 45,
      priceDisplay: '$45.00',
      image: 'assets/images/audio-accessories/wireless-earbuds.jpg',
      gallery: [
        'assets/images/audio-accessories/wireless-earbuds.jpg',
        'assets/images/audio-accessories/tws-earbuds-case.jpg'
      ],
      shortDesc: 'Compact Bluetooth wireless earbuds with pocket charging case for hands-free calls and daily audio.',
      detailedDesc: 'Enjoy cord-free audio for commutes, workouts, and voice calls. These ergonomic in-ear wireless earbuds pair seamlessly with Bluetooth-enabled smartphones and store neatly inside their magnetic pocket charging case.',
      compatibility: 'Compatible with iOS and Android smartphones supporting standard Bluetooth audio.',
      features: [
        'Ergonomic in-ear fit with replaceable silicone tips',
        'Pocket-sized magnetic charging and storage case',
        'Integrated microphone for hands-free phone calls',
        'On-ear touch or button media controls'
      ],
      variations: ['Matte Black', 'Midnight Slate']
    },
    {
      id: 'acc-ergonomic-wired-earphones',
      name: 'In-Ear Wired Stereo Earphones with Inline Mic',
      category: 'Wired Earphones',
      price: 16,
      priceDisplay: '$16.00',
      image: 'assets/images/audio-accessories/wired-earphones.jpg',
      gallery: [
        'assets/images/audio-accessories/wired-earphones.jpg'
      ],
      shortDesc: 'Zero-latency wired earphones for dependable voice calls, podcasts, and battery-free listening.',
      detailedDesc: 'No batteries to charge and zero Bluetooth pairing delay. These lightweight wired in-ear earphones deliver crisp vocal clarity for phone calls, online meetings, and everyday music playback.',
      compatibility: 'Available for 3.5mm audio jack or USB-C audio connector (check device port type).',
      features: [
        'Plug-and-play wired reliability with no charging needed',
        'Lightweight acoustic chambers for extended comfort',
        'Inline microphone for clear voice calls',
        'Durable Y-split cable design'
      ],
      variations: ['3.5mm Plug', 'USB-C Plug (Subject to Stock)']
    },
    {
      id: 'acc-portable-usb-c-powerbank',
      name: 'Slim Portable USB-C Power Bank Battery Pack',
      category: 'Power Banks',
      price: 36,
      priceDisplay: '$36.00',
      image: 'assets/images/accessories/portable-power-bank.jpg',
      gallery: [
        'assets/images/accessories/portable-power-bank.jpg'
      ],
      shortDesc: 'Portable backup battery pack for keeping your smartphone charged during travel, commutes, and emergencies.',
      detailedDesc: 'Never get stranded with a dead battery while away from a wall outlet. This slim portable power bank slips easily into a jacket pocket or backpack and provides dependable backup charging via USB output.',
      compatibility: 'Charges smartphones, wireless earbuds, and USB-powered mobile devices.',
      features: [
        'Slim travel-ready chassis',
        'USB-C and USB-A charging compatibility',
        'LED remaining power indicator',
        'Over-discharge and thermal protection circuit'
      ],
      variations: ['Graphite Matte']
    },
    {
      id: 'acc-desktop-phone-stand',
      name: 'Angled Desktop Smartphone & Tablet Stand',
      category: 'Phone Stands and Holders',
      price: 15,
      priceDisplay: '$15.00',
      image: 'assets/images/accessories/desk-phone-stand.jpg',
      gallery: [
        'assets/images/accessories/desk-phone-stand.jpg',
        'assets/images/accessories/tripod-phone-mount.jpg'
      ],
      shortDesc: 'Sturdy desktop cradle holding your smartphone at a comfortable viewing angle for video calls and notifications.',
      detailedDesc: 'Keep your workspace organized and your smartphone screen visible at eye level. Designed for stability on office desks and nightstands, with clearance for routing a charging cable while docked.',
      compatibility: 'Universal fit for most smartphones with or without a protective case.',
      features: [
        'Ergonomic viewing angle for video calls and desk use',
        'Stable base with anti-scratch surface pads',
        'Cable pass-through clearance for charging while docked',
        'Durable, easy-to-clean construction'
      ],
      variations: ['Clear / Frosted', 'Graphite']
    },
    {
      id: 'acc-universal-car-phone-holder',
      name: 'Universal Car Dashboard & Windshield Phone Mount',
      category: 'Car Phone Holders',
      price: 24,
      priceDisplay: '$24.00',
      image: 'assets/images/accessories/car-phone-holder.jpg',
      gallery: [
        'assets/images/accessories/car-phone-holder.jpg'
      ],
      shortDesc: 'Adjustable clamp vehicle phone holder for safe hands-free GPS navigation visibility while driving.',
      detailedDesc: 'Secure your smartphone within comfortable sightlines while driving. Features padded adjustable side grips, a rotating ball-joint head for portrait or landscape orientation, and a firm mounting base.',
      compatibility: 'Universal adjustable clamp fits most standard and large-screen smartphones.',
      features: [
        'Adjustable padded side arms to hold phone securely',
        '360-degree swivel ball joint for portrait or landscape GPS view',
        'Bottom foot clearance for car charger cable connection',
        'Quick-release side mechanism'
      ],
      variations: ['Matte Black']
    },
    {
      id: 'acc-mini-tripod-phone-grip',
      name: 'Compact Tabletop Tripod & Phone Grip Holder',
      category: 'Other Mobile Accessories',
      price: 19,
      priceDisplay: '$19.00',
      image: 'assets/images/accessories/tripod-phone-mount.jpg',
      gallery: [
        'assets/images/accessories/tripod-phone-mount.jpg',
        'assets/images/accessories/desk-phone-stand.jpg'
      ],
      shortDesc: 'Foldable mini tabletop tripod with spring-loaded smartphone clamp for steady video calls and photography.',
      detailedDesc: 'Capture shake-free photos, timelapse videos, or hands-free video calls from any table surface. Folds together into a compact handheld stabilizer grip when on the move.',
      compatibility: 'Spring clamp fits most modern smartphones.',
      features: [
        'Dual-purpose tabletop tripod and handheld grip',
        'Rubberized phone clamp pads prevent frame scratches',
        'Adjustable tilt angle head',
        'Compact foldable legs for pocket or bag storage'
      ],
      variations: ['Black / Charcoal']
    }
  ];

  // Render Accessories Catalogue on pages/accessories.html
  function initAccessoriesCatalogue() {
    const grid = document.getElementById('accessories-catalogue-grid');
    if (!grid) return;

    const searchInput = document.getElementById('acc-search-input');
    const categorySelect = document.getElementById('acc-category-select');
    const priceSelect = document.getElementById('acc-price-select');
    const sortSelect = document.getElementById('acc-sort-select');
    const countEl = document.getElementById('acc-product-count');
    const categoryPills = document.querySelectorAll('[data-acc-cat-pill]');

    const assetPrefix = getAssetPrefix();
    const pagePrefix = getPagePrefix();

    // Check URL query param for initial category filter
    const urlParams = new URLSearchParams(window.location.search);
    const initialCat = urlParams.get('category') || 'all';
    if (categorySelect && initialCat !== 'all') {
      categorySelect.value = initialCat;
    }

    function filterAndRender() {
      const q = searchInput ? searchInput.value.trim().toLowerCase() : '';
      const cat = categorySelect ? categorySelect.value : 'all';
      const priceBand = priceSelect ? priceSelect.value : 'all';
      const sortBy = sortSelect ? sortSelect.value : 'featured';

      // Sync category pills state
      categoryPills.forEach((pill) => {
        const pillCat = pill.getAttribute('data-acc-cat-pill') || 'all';
        if (pillCat.toLowerCase() === cat.toLowerCase()) {
          pill.classList.remove('btn-outline');
          pill.classList.add('btn-accent');
        } else {
          pill.classList.remove('btn-accent');
          pill.classList.add('btn-outline');
        }
      });

      let list = ACCESSORIES_DATA.filter((item) => {
        const matchQ =
          !q ||
          item.name.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.shortDesc.toLowerCase().includes(q);
        const matchCat = cat === 'all' || item.category.toLowerCase() === cat.toLowerCase();
        let matchPrice = true;
        if (priceBand === 'under-20') matchPrice = item.price < 20;
        else if (priceBand === '20-30') matchPrice = item.price >= 20 && item.price <= 30;
        else if (priceBand === 'over-30') matchPrice = item.price > 30;
        return matchQ && matchCat && matchPrice;
      });

      if (sortBy === 'price-asc') {
        list.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'price-desc') {
        list.sort((a, b) => b.price - a.price);
      } else if (sortBy === 'name-asc') {
        list.sort((a, b) => a.name.localeCompare(b.name));
      }

      if (countEl) {
        countEl.textContent = `Showing ${list.length} of ${ACCESSORIES_DATA.length} accessories (Illustrative sample catalogue)`;
      }

      if (list.length === 0) {
        grid.innerHTML = `
          <div class="col-span-full bg-theme-surface border border-theme rounded-2xl p-10 text-center">
            <h3 class="font-heading text-lg font-bold text-theme-primary mb-2">No accessories match your current filters</h3>
            <p class="text-sm text-theme-secondary mb-6">Try resetting your search terms or contact us to enquire about specific mobile accessories.</p>
            <button type="button" id="acc-reset-filters-btn" class="btn-accent">Reset Filters</button>
          </div>
        `;
        const resetBtn = document.getElementById('acc-reset-filters-btn');
        if (resetBtn) {
          resetBtn.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            if (categorySelect) categorySelect.value = 'all';
            if (priceSelect) priceSelect.value = 'all';
            if (sortSelect) sortSelect.value = 'featured';
            filterAndRender();
          });
        }
        return;
      }

      grid.innerHTML = list
        .map(
          (item) => `
          <article class="fixora-card">
            <div class="aspect-accessory">
              <img src="${assetPrefix}${item.image}" alt="${item.name}" loading="lazy" />
              <span class="absolute top-3 inset-inline-start-3 tech-badge">${item.category}</span>
            </div>
            <div class="fixora-card-body">
              <h3 class="font-heading text-lg font-bold text-theme-primary mb-1.5 min-h-[3.25rem]">${item.name}</h3>
              <p class="text-sm text-theme-secondary mb-4 flex-1">${item.shortDesc}</p>
              <div class="fixora-card-footer border-t border-theme">
                <div class="flex items-baseline justify-between mb-3">
                  <div>
                    <span class="font-heading text-xl font-extrabold text-theme-primary">${item.priceDisplay}</span>
                    <span class="block font-mono-tech text-[11px] text-theme-muted">Illustrative Price</span>
                  </div>
                  <a href="${pagePrefix}accessory-details.html?id=${encodeURIComponent(item.id)}" class="text-xs font-heading font-semibold text-theme-accent hover:underline">
                    Product Details &rarr;
                  </a>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <a href="${pagePrefix}accessory-details.html?id=${encodeURIComponent(item.id)}" class="btn-outline !py-2 !px-3 !text-xs">
                    View Specs
                  </a>
                  <a href="${pagePrefix}contact.html?enquiry=Accessories+Enquiry&product=${encodeURIComponent(item.name)}" class="btn-accent !py-2 !px-3 !text-xs">
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </article>`
        )
        .join('');
    }

    if (searchInput) searchInput.addEventListener('input', filterAndRender);
    if (categorySelect) categorySelect.addEventListener('change', filterAndRender);
    if (priceSelect) priceSelect.addEventListener('change', filterAndRender);
    if (sortSelect) sortSelect.addEventListener('change', filterAndRender);

    categoryPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        const selectedCat = pill.getAttribute('data-acc-cat-pill') || 'all';
        if (categorySelect) categorySelect.value = selectedCat;
        filterAndRender();
      });
    });

    filterAndRender();
  }

  // Dynamic Accessory Details Loader on pages/accessory-details.html
  function initAccessoryDetailsPage() {
    const root = document.getElementById('accessory-detail-dynamic-root');
    if (!root) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || ACCESSORIES_DATA[0].id;
    const item = ACCESSORIES_DATA.find((a) => a.id === id) || ACCESSORIES_DATA[0];
    const assetPrefix = getAssetPrefix();
    const pagePrefix = getPagePrefix();

    const mainImg = document.getElementById('ad-main-image');
    const thumbRow = document.getElementById('ad-thumbs');
    const titleEl = document.getElementById('ad-title');
    const catEl = document.getElementById('ad-category');
    const priceEl = document.getElementById('ad-price');
    const descEl = document.getElementById('ad-description');
    const compatEl = document.getElementById('ad-compatibility');
    const featuresEl = document.getElementById('ad-features');
    const variationsEl = document.getElementById('ad-variations');
    const enquireBtn = document.getElementById('ad-enquire-cta');
    const relatedGrid = document.getElementById('ad-related-grid');

    if (mainImg) {
      mainImg.src = `${assetPrefix}${item.image}`;
      mainImg.alt = item.name;
    }

    if (thumbRow && item.gallery) {
      thumbRow.innerHTML = item.gallery
        .map(
          (imgPath, idx) => `
          <button type="button" data-thumb-src="${assetPrefix}${imgPath}"
                  class="w-20 h-20 rounded-xl overflow-hidden border-2 ${idx === 0 ? 'border-[#20B8C4]' : 'border-theme'} focus:outline-none">
            <img src="${assetPrefix}${imgPath}" alt="${item.name} view ${idx + 1}" class="w-full h-full object-cover" />
          </button>`
        )
        .join('');

      thumbRow.querySelectorAll('[data-thumb-src]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const src = btn.getAttribute('data-thumb-src');
          if (mainImg && src) mainImg.src = src;
          thumbRow.querySelectorAll('[data-thumb-src]').forEach((b) => b.classList.replace('border-[#20B8C4]', 'border-theme'));
          btn.classList.replace('border-theme', 'border-[#20B8C4]');
        });
      });
    }

    if (titleEl) titleEl.textContent = item.name;
    if (catEl) catEl.textContent = item.category;
    if (priceEl) priceEl.textContent = item.priceDisplay;
    if (descEl) descEl.textContent = item.detailedDesc;
    if (compatEl) compatEl.textContent = item.compatibility;
    if (enquireBtn) {
      enquireBtn.href = `${pagePrefix}contact.html?enquiry=Accessories+Enquiry&product=${encodeURIComponent(item.name)}`;
    }

    if (featuresEl) {
      featuresEl.innerHTML = item.features
        .map(
          (f) => `
          <li class="flex items-start gap-2.5">
            <span class="text-theme-accent font-bold">&#10003;</span>
            <span class="text-sm text-theme-secondary">${f}</span>
          </li>`
        )
        .join('');
    }

    if (variationsEl) {
      variationsEl.innerHTML = item.variations
        .map(
          (v) => `
          <span class="px-3 py-1.5 rounded-lg bg-theme-muted border border-theme text-xs font-medium text-theme-primary">${v}</span>`
        )
        .join('');
    }

    if (relatedGrid) {
      const related = ACCESSORIES_DATA.filter((a) => a.id !== item.id).slice(0, 4);
      relatedGrid.innerHTML = related
        .map(
          (r) => `
          <article class="fixora-card">
            <div class="aspect-accessory">
              <img src="${assetPrefix}${r.image}" alt="${r.name}" loading="lazy" />
              <span class="absolute top-3 inset-inline-start-3 tech-badge">${r.category}</span>
            </div>
            <div class="fixora-card-body">
              <h3 class="font-heading text-base font-bold text-theme-primary mb-1.5">${r.name}</h3>
              <p class="text-xs text-theme-secondary mb-4">${r.shortDesc}</p>
              <div class="fixora-card-footer flex items-center justify-between border-t border-theme">
                <span class="font-heading font-bold text-theme-primary">${r.priceDisplay}</span>
                <a href="${pagePrefix}accessory-details.html?id=${encodeURIComponent(r.id)}" class="btn-outline !py-1.5 !px-3 !text-xs">View Item</a>
              </div>
            </div>
          </article>`
        )
        .join('');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initAccessoriesCatalogue();
    initAccessoryDetailsPage();
  });

  window.FixoraAccessories = { ACCESSORIES_DATA };
})();

