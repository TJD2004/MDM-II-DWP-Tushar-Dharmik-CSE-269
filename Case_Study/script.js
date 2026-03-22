/* ═══════════════════════════════════════════════════
   PRODUCT DATA
   (Real watch images from Unsplash)
═══════════════════════════════════════════════════ */
const products = [
  {
    id: 1, rank: 1, spon: true,
    img: "https://images.unsplash.com/photo-1617625802912-cde586faf331?w=300&h=300&fit=crop&auto=format",
    brand: "Garmin",
    name: "Garmin Venu® 4, 45mm, Advanced Health and Fitness GPS Smartwatch, Bright Colorful Display, Built-in Flashlight, 12 Days of Battery Life, Slate with Black Silicone and Brown Leather Band - 2 Bands",
    rating: 4.6, reviews: 853,
    bought: "100+ bought in past month",
    price: 55090, was: null, disc: 0,
    prime: false, inStock: true, year: 2024,
    deliv: "Mon, Apr 13", delivCost: 922,
    match: "Matching: smart", infl: null,
    ctaType: "cart"
  },
  {
    id: 2, rank: 2, spon: true,
    img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=300&fit=crop&auto=format",
    brand: "Generic",
    name: "Smart Watches for Men/Women (2 Bands), 1.27\" Round Smartwatch Fitness Tracker with Bluetooth Calls (Make/Answer), Heart Rate/SpO2/Sleep Monitor, 12 Days Battery, IP68 Waterproof",
    rating: 4.3, reviews: 291,
    bought: "100+ bought in past month",
    price: 1499, was: 3999, disc: 63,
    prime: true, inStock: true, year: 2024,
    deliv: "Mon, Apr 13", delivCost: 0,
    match: null, infl: "Featured by Amazon influencers",
    ctaType: "options"
  },
  {
    id: 3, rank: 3, spon: false,
    img: "https://images.unsplash.com/photo-1523275343-26d06a954c82?w=300&h=300&fit=crop&auto=format",
    brand: "Samsung",
    name: "Samsung Galaxy Watch 7 40mm Bluetooth AI Smartwatch w/Energy Score, Wellness Tips, Heart Rate Tracking, Sleep Monitor, Fitness Tracker, 2024, Cream [US Version, 1Yr Manufacturer Warranty]",
    rating: 4.5, reviews: 6900,
    bought: "2K+ bought in past month",
    price: 18270, was: 23422, disc: 22,
    prime: false, inStock: true, year: 2024,
    deliv: "Mon, Apr 13", delivCost: 922,
    match: null, infl: null,
    ctaType: "cart",
    moreBuying: "INR 13,102.97 (19+ used & new offers)"
  },
  {
    id: 4, rank: 4, spon: false,
    img: "https://images.unsplash.com/photo-1579586337278-3befd9ece3de?w=300&h=300&fit=crop&auto=format",
    brand: "Apple",
    name: "Apple Watch Series 10 [GPS 42mm] Smartwatch with Jet Black Aluminium Case, ECG App, Always-On Retina Display, Emergency SOS, Crash Detection",
    rating: 4.8, reviews: 14200,
    bought: "500+ bought in past month",
    price: 41900, was: 44900, disc: 7,
    prime: true, inStock: true, year: 2024,
    deliv: "Tomorrow", delivCost: 0,
    match: null, infl: null,
    ctaType: "cart"
  },
  {
    id: 5, rank: 5, spon: false,
    img: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300&h=300&fit=crop&auto=format",
    brand: "Noise",
    name: "Noise ColorFit Pro 5 Max Smart Watch with 1.85\" TFT Display, Bluetooth Calling, 100 Sports Modes, Heart Rate, SpO2 Monitor, Sleep Tracker, IP68 Water Resistant",
    rating: 4.1, reviews: 45230,
    bought: "1K+ bought in past month",
    price: 3499, was: 7999, disc: 56,
    prime: true, inStock: true, year: 2023,
    deliv: "Mon, Apr 13", delivCost: 0,
    match: null, infl: null,
    ctaType: "cart"
  },
  {
    id: 6, rank: 6, spon: false,
    img: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=300&h=300&fit=crop&auto=format",
    brand: "Fitbit",
    name: "Fitbit Versa 4 Fitness Smartwatch with Daily Readiness, GPS, 24/7 Heart Rate, 40+ Exercise Modes, Sleep Tracking, Compatible with Android & iOS",
    rating: 4.3, reviews: 8920,
    bought: "200+ bought in past month",
    price: 18999, was: 22999, disc: 17,
    prime: false, inStock: true, year: 2023,
    deliv: "Mon, Apr 13", delivCost: 922,
    match: null, infl: null,
    ctaType: "cart"
  },
  {
    id: 7, rank: 7, spon: false,
    img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=300&h=300&fit=crop&auto=format",
    brand: "Garmin",
    name: "Garmin Fenix 7 Solar Multisport GPS Watch, Built-in Flashlight, Solar Charging, Music Storage, Advanced Training and Recovery Features",
    rating: 4.7, reviews: 5640,
    bought: "50+ bought in past month",
    price: 74990, was: 84990, disc: 12,
    prime: true, inStock: true, year: 2024,
    deliv: "Mon, Apr 14", delivCost: 0,
    match: null, infl: null,
    ctaType: "cart"
  },
  {
    id: 8, rank: 8, spon: false,
    img: "https://images.unsplash.com/photo-1510017803434-a899851a1082?w=300&h=300&fit=crop&auto=format",
    brand: "Amazfit",
    name: "Amazfit GTS 4 Mini Smart Watch, Alexa Built-in, GPS, 24H Heart Rate, Blood Oxygen, 120+ Sports Modes, 15 Day Battery Life",
    rating: 4.2, reviews: 15600,
    bought: "300+ bought in past month",
    price: 6999, was: 9999, disc: 30,
    prime: true, inStock: true, year: 2024,
    deliv: "Tomorrow", delivCost: 0,
    match: null, infl: null,
    ctaType: "cart"
  },
  {
    id: 9, rank: 9, spon: false,
    img: "https://images.unsplash.com/photo-1617625802912-cde586faf331?w=300&h=300&fit=crop&auto=format&sat=-80",
    brand: "Samsung",
    name: "Samsung Galaxy Watch 6 Classic 47mm Bluetooth Smart Watch, Rotating Bezel, Advanced Sleep Coaching, ECG, Black",
    rating: 4.4, reviews: 12870,
    bought: "800+ bought in past month",
    price: 28999, was: 39999, disc: 27,
    prime: true, inStock: true, year: 2024,
    deliv: "Tomorrow", delivCost: 0,
    match: null, infl: null,
    ctaType: "cart"
  },
  {
    id: 10, rank: 10, spon: false,
    img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=300&fit=crop&auto=format&hue=200",
    brand: "boAt",
    name: "boAt Wave Sigma Smart Watch with 1.69\" HD Display, Bluetooth Calling, Multiple Watch Faces, Heart Rate Monitor, SpO2 Tracker",
    rating: 3.9, reviews: 28700,
    bought: "2K+ bought in past month",
    price: 1299, was: 3490, disc: 63,
    prime: true, inStock: true, year: 2023,
    deliv: "Mon, Apr 13", delivCost: 0,
    match: null, infl: null,
    ctaType: "cart"
  },
  {
    id: 11, rank: 11, spon: false,
    img: "https://images.unsplash.com/photo-1579586337278-3befd9ece3de?w=300&h=300&fit=crop&auto=format&hue=30",
    brand: "Apple",
    name: "Apple Watch SE (2nd Gen) [GPS 40mm] Smartwatch with Midnight Aluminium Case, Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor",
    rating: 4.6, reviews: 14200,
    bought: "600+ bought in past month",
    price: 29900, was: 32900, disc: 9,
    prime: true, inStock: true, year: 2023,
    deliv: "Tomorrow", delivCost: 0,
    match: null, infl: null,
    ctaType: "cart"
  },
  {
    id: 12, rank: 12, spon: false,
    img: "https://images.unsplash.com/photo-1523275343-26d06a954c82?w=300&h=300&fit=crop&auto=format&hue=60",
    brand: "Noise",
    name: "Noise Twist Round Dial Smart Watch with 1.38\" AMOLED Display, Bluetooth Calling, 100+ Watch Faces, AI Voice Assistant, SpO2 & Stress Monitor",
    rating: 4.0, reviews: 32100,
    bought: "1.5K+ bought in past month",
    price: 2199, was: 4999, disc: 56,
    prime: false, inStock: true, year: 2024,
    deliv: "Mon, Apr 13", delivCost: 0,
    match: null, infl: null,
    ctaType: "cart"
  }
];

/* ═══════════════════════════════════════════════════
   APP STATE
═══════════════════════════════════════════════════ */
let state = {
  sort:       "featured",   // current sort key
  brands:     [],           // selected brand checkboxes
  rating:     null,         // minimum star rating (1–4)
  disc:       null,         // minimum discount %
  priceRange: null,         // { min, max }
  prime:      false         // prime filter toggle
};

let activeRatEl = null;     // currently highlighted star row element

/* ═══════════════════════════════════════════════════
   HELPER FUNCTIONS
═══════════════════════════════════════════════════ */

/**
 * Build star HTML string from a numeric rating (e.g. 4.6)
 */
function buildStars(rating) {
  const full  = Math.floor(rating);
  const half  = (rating - full >= 0.4) ? 1 : 0;
  const empty = 5 - full - half;

  let html = `<span class="rs">${"★".repeat(full)}</span>`;
  if (half)  html += `<span class="rs" style="font-size:10px">½</span>`;
  html += `<span style="color:#ddd;font-size:14px;letter-spacing:1px">${"★".repeat(empty)}</span>`;
  return html;
}

/**
 * Format a number as Indian Rupee string (e.g. ₹18,270)
 */
function inr(amount) {
  return "₹" + amount.toLocaleString("en-IN");
}

/* ═══════════════════════════════════════════════════
   BUILD A PRODUCT CARD (HTML string)
═══════════════════════════════════════════════════ */
function buildCard(product, index) {

  /* Animation delay — stagger cards on render */
  const delay = `animation-delay:${index * 45}ms`;

  /* Sponsored tag */
  const sponsoredTag = product.spon
    ? `<div class="spon-tag"></div>`
    : "";

  /* Was-price / discount line */
  const wasLine = product.was
    ? `<div class="pwas">
         List: <s>${inr(product.was)}</s>
         <span class="poff">(${product.disc}% off)</span>
       </div>`
    : "";

  /* Delivery line */
  const delivLine = product.delivCost === 0
    ? `<div class="pdeliv">
         <span style="color:#00a8e0;font-weight:700">FREE</span>
         delivery <strong>${product.deliv}</strong>
       </div>`
    : `<div class="pdeliv">
         INR ${product.delivCost.toLocaleString()} delivery
         <strong>${product.deliv}</strong>
       </div>`;

  /* Optional labels */
  const primeTag   = product.prime      ? `<div class="pprime">✔ Prime</div>` : "";
  const matchTag   = product.match      ? `<div class="pmatch">${product.match}</div>` : "";
  const inflTag    = product.infl       ? `<div class="pinfl">${product.infl}</div>` : "";
  const moreBuyTag = product.moreBuying
    ? `<div class="pmore">More Buying Choices<br><a>${product.moreBuying}</a></div>`
    : "";

  /* CTA button */
  const ctaBtn = product.ctaType === "options"
    ? `<button class="btn-opts">See options</button>`
    : `<button class="btn-cart"
         onclick="event.stopPropagation();
                  this.textContent='✔ Added!';
                  setTimeout(()=>this.textContent='Add to cart', 1500)">
         Add to cart
       </button>`;

  /* Fallback if image fails to load */
  const imgFallback=""
//   const imgFallback = `
//     this.outerHTML='<div style=\\"font-size:70px;line-height:185px;text-align:center;width:100%\\"></div>'
//   `;

  return `
    <div class="pcard" style="${delay}">

      <!-- IMAGE -->
      <div class="pimg">
        <img
          src="${product.img}"
          alt="${product.brand} smartwatch"
          loading="lazy"
          onerror="${imgFallback}"
        />
        ${sponsoredTag}
      </div>

      <!-- BODY -->
      <div class="pbody">
        <div class="ptitle">${product.name}</div>
        <div class="pbought">${product.bought}</div>

        <div class="rrow">
          ${buildStars(product.rating)}
          <span class="rn">${product.rating}</span>
          <span class="rc">(${product.reviews.toLocaleString("en-IN")})</span>
        </div>

        <div class="priceblock">
          <div class="pmain">
            <sup>INR</sup>${inr(product.price).replace("₹", "")}
          </div>
          ${wasLine}
        </div>

        ${delivLine}
        <div class="pships">Ships to India</div>
        ${primeTag}
        ${matchTag}
        ${inflTag}
        ${moreBuyTag}
      </div>

      <!-- CTA -->
      <div class="pcta">${ctaBtn}</div>

    </div>`;
}

/* ═══════════════════════════════════════════════════
   FILTER LOGIC
   All conditions are AND — every active filter
   must return true for a product to be shown.
═══════════════════════════════════════════════════ */
function filterProducts() {
  return products.filter(function(p) {

    /* 1. Brand filter */
    if (state.brands.length > 0 && !state.brands.includes(p.brand)) {
      return false;
    }

    /* 2. Minimum rating filter */
    if (state.rating !== null && p.rating < state.rating) {
      return false;
    }

    /* 3. Minimum discount filter */
    if (state.disc !== null && p.disc < state.disc) {
      return false;
    }

    /* 4. Price range filter */
    if (state.priceRange !== null) {
      if (p.price < state.priceRange.min || p.price > state.priceRange.max) {
        return false;
      }
    }

    /* 5. Prime filter */
    if (state.prime && !p.prime) {
      return false;
    }

    return true; // passes all filters
  });
}

/* ═══════════════════════════════════════════════════
   SORT LOGIC
   Uses a comparator function based on state.sort
═══════════════════════════════════════════════════ */
const SORTERS = {
  "featured":    function(a, b) { return a.rank   - b.rank;   },
  "price-asc":   function(a, b) { return a.price  - b.price;  },
  "price-desc":  function(a, b) { return b.price  - a.price;  },
  "rating":      function(a, b) { return b.rating - a.rating; },
  "newest":      function(a, b) { return b.year   - a.year;   }
};

function sortProducts(list) {
  const comparator = SORTERS[state.sort] || SORTERS["featured"];
  return [...list].sort(comparator); // copy array before sorting (non-destructive)
}

/* ═══════════════════════════════════════════════════
   RENDER ACTIVE FILTER CHIPS
═══════════════════════════════════════════════════ */
function renderChips() {
  const bar = document.getElementById("chipsBar");
  bar.innerHTML = "";

  const chipData = [];

  /* Price range chip */
  if (state.priceRange) {
    const maxLabel = state.priceRange.max >= 99999
      ? "+"
      : "–₹" + state.priceRange.max.toLocaleString("en-IN");
    const label = "₹" + state.priceRange.min.toLocaleString("en-IN") + maxLabel;

    chipData.push({
      label: label,
      cls:   "chip-price",
      remove: function() {
        state.priceRange = null;
        document.querySelectorAll("input[name=price]").forEach(r => r.checked = false);
        document.getElementById("pMin").value = "";
        document.getElementById("pMax").value = "";
        render();
      }
    });
  }

  /* Brand chips */
  state.brands.forEach(function(brand) {
    chipData.push({
      label: brand,
      cls:   "",
      remove: function() {
        const cb = document.querySelector(`input[data-brand="${brand}"]`);
        if (cb) cb.checked = false;
        state.brands = state.brands.filter(function(b) { return b !== brand; });
        render();
      }
    });
  });

  /* Rating chip */
  if (state.rating !== null) {
    chipData.push({
      label: state.rating + "★ & Up",
      cls:   "",
      remove: function() {
        state.rating = null;
        if (activeRatEl) { activeRatEl.style.fontWeight = ""; activeRatEl = null; }
        render();
      }
    });
  }

  /* Discount chip */
  if (state.disc !== null) {
    chipData.push({
      label: state.disc + "% + Off",
      cls:   "",
      remove: function() {
        const checked = document.querySelector("input[name=disc]:checked");
        if (checked) checked.checked = false;
        state.disc = null;
        render();
      }
    });
  }

  /* Prime chip */
  if (state.prime) {
    chipData.push({
      label: "🔵 Prime",
      cls:   "",
      remove: function() {
        const cb = document.querySelector("input[data-special=prime]");
        if (cb) cb.checked = false;
        state.prime = false;
        render();
      }
    });
  }

  /* Build DOM for each chip */
  chipData.forEach(function(c) {
    const el = document.createElement("span");
    el.className = "chip " + (c.cls || "");
    el.innerHTML = c.label + ' <span class="cx">✕</span>';
    el.addEventListener("click", c.remove);
    bar.appendChild(el);
  });

  /* "Clear All" chip — only if more than 1 filter active */
  if (chipData.length > 1) {
    const clearEl = document.createElement("span");
    clearEl.className = "chip chip-clear";
    clearEl.innerHTML = "Clear All ✕";
    clearEl.addEventListener("click", clearAll);
    bar.appendChild(clearEl);
  }
}

/* ═══════════════════════════════════════════════════
   MAIN RENDER FUNCTION
   Called whenever filters or sort changes.
═══════════════════════════════════════════════════ */
function render() {
  const filtered = filterProducts();
  const sorted   = sortProducts(filtered);

  const list  = document.getElementById("plist");
  const empty = document.getElementById("emptyEl");

  if (sorted.length === 0) {
    list.innerHTML       = "";
    empty.style.display  = "block";
  } else {
    empty.style.display  = "none";
    list.innerHTML       = sorted.map(function(p, i) { return buildCard(p, i); }).join("");
  }

  /* Update result count bar */
  const shown = Math.min(16, sorted.length);
  const total = sorted.length < 16 ? sorted.length : "40,000";
  document.getElementById("rbarText").innerHTML =
    `1–${shown} of over <em>${total}</em> results for <em>"smart watch"</em>`;

  /* Update chips */
  renderChips();
}

/* ═══════════════════════════════════════════════════
   EVENT HANDLERS
═══════════════════════════════════════════════════ */

/**
 * Called when the Sort dropdown changes
 * @param {string} value - sort key from <option> value
 */
function setSort(value) {
  state.sort = value;
  render();
}

/**
 * Called when a star-rating row is clicked
 * @param {number} rating - minimum star rating (1–4)
 * @param {HTMLElement} el - the clicked star row element
 */
function setRating(rating, el) {
  /* Toggle off if same rating clicked again */
  if (state.rating === rating) {
    state.rating = null;
    if (activeRatEl) { activeRatEl.style.fontWeight = ""; activeRatEl = null; }
  } else {
    if (activeRatEl) activeRatEl.style.fontWeight = "";
    state.rating = rating;
    el.style.fontWeight = "700";
    activeRatEl = el;
  }
  render();
}

/**
 * Called whenever any sidebar filter changes (checkbox / radio)
 */
function applyFilters() {

  /* Collect selected brands */
  state.brands = [];
  document.querySelectorAll("input[data-brand]:checked").forEach(function(input) {
    state.brands.push(input.dataset.brand);
  });

  /* Discount radio */
  const discChecked = document.querySelector("input[name=disc]:checked");
  state.disc = discChecked ? parseInt(discChecked.value, 10) : null;

  /* Price radio */
  const priceChecked = document.querySelector("input[name=price]:checked");
  if (priceChecked) {
    const parts = priceChecked.value.split("-").map(Number);
    state.priceRange = { min: parts[0], max: parts[1] };
  }

  /* Prime checkbox */
  const primeCb = document.querySelector("input[data-special=prime]");
  state.prime = primeCb && primeCb.checked;

  render();
}

/**
 * Apply a custom price range typed by the user
 */
function applyCustomPrice() {
  const minVal = parseFloat(document.getElementById("pMin").value) || 0;
  const maxVal = parseFloat(document.getElementById("pMax").value) || Infinity;

  /* Clear any selected price radio */
  document.querySelectorAll("input[name=price]").forEach(function(r) {
    r.checked = false;
  });

  state.priceRange = { min: minVal, max: maxVal };
  render();
}

/**
 * Clear ALL filters and reset state
 */
function clearAll() {
  /* Uncheck / reset every input in the sidebar */
  document.querySelectorAll(".sb input").forEach(function(input) {
    if (input.type === "checkbox" || input.type === "radio") {
      input.checked = false;
    }
    if (input.type === "number") {
      input.value = "";
    }
  });

  /* Reset highlighted star row */
  if (activeRatEl) {
    activeRatEl.style.fontWeight = "";
    activeRatEl = null;
  }

  /* Reset state (preserve sort) */
  state = {
    sort:       state.sort,
    brands:     [],
    rating:     null,
    disc:       null,
    priceRange: null,
    prime:      false
  };

  render();
}

/* ═══════════════════════════════════════════════════
   INIT — render on page load
═══════════════════════════════════════════════════ */
render();