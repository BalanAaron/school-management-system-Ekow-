/**
 * ============================================
 * DREAMMOV – Real Estate App
 * app.js – Main Application Logic
 * ============================================
 */

'use strict';

/* ============================================================
   DATA STORE
   ============================================================ */
const AppData = {

  propertyTypes: [
    { id: 'houses', icon: '🏠', name: 'Houses', count: 48 },
    { id: 'apartments', icon: '🏢', name: 'Apartments', count: 75 },
    { id: 'office', icon: '🏗️', name: 'Office Spaces', count: 22 },
    { id: 'land', icon: '🌿', name: 'Land', count: 30 },
    { id: 'single', icon: '🛏️', name: 'Single Rooms', count: 41 },
    { id: 'townhouse', icon: '🏘️', name: 'Townhouse', count: 14 },
    { id: 'villa', icon: '🏡', name: 'Villa', count: 9 },
    { id: 'hostel', icon: '🏨', name: 'Hostels', count: 18 },
  ],

  properties: [
    {
      id: 1,
      title: '2-Bedroom Self-Contained Apartment',
      price: 'GHS 1,800',
      period: '/ month',
      location: 'East Legon, Accra',
      type: 'rent',
      beds: 2, baths: 2, sqft: 900,
      image: 'images/property_apartment.png',
      category: 'Apartments',
      featured: true,
    },
    {
      id: 2,
      title: 'Hostel For Sale at Boadi',
      price: 'GHS 450,000',
      period: '',
      location: 'Boadi, Kumasi',
      type: 'sale',
      beds: 12, baths: 6, sqft: 3200,
      image: 'images/property_hostel.png',
      category: 'Hostels',
      featured: true,
    },
    {
      id: 3,
      title: 'Premium Office Space – Airport City',
      price: 'GHS 5,500',
      period: '/ month',
      location: 'Airport City, Accra',
      type: 'rent',
      beds: 0, baths: 2, sqft: 1800,
      image: 'images/property_office.png',
      category: 'Office Spaces',
      featured: true,
    },
    {
      id: 4,
      title: 'Modern Family House with Pool',
      price: 'GHS 850,000',
      period: '',
      location: 'Trasacco, Accra',
      type: 'sale',
      beds: 5, baths: 4, sqft: 4200,
      image: 'images/property_house.png',
      category: 'Houses',
      featured: true,
    },
    {
      id: 5,
      title: 'Prime Land – 1 Plot Kumasi',
      price: 'GHS 75,000',
      period: '',
      location: 'Ahodwo, Kumasi',
      type: 'sale',
      beds: 0, baths: 0, sqft: 7000,
      image: 'images/property_land.png',
      category: 'Land',
      featured: false,
    },
    {
      id: 6,
      title: 'Cozy Short-Stay Apartment',
      price: 'GHS 250',
      period: '/ night',
      location: 'Labone, Accra',
      type: 'short-stay',
      beds: 1, baths: 1, sqft: 500,
      image: 'images/property_apartment.png',
      category: 'Apartments',
      featured: false,
    },
  ],

  cities: [
    { name: 'Accra', count: 85, image: 'images/city_accra.png' },
    { name: 'Kumasi', count: 62, image: 'images/city_kumasi.png' },
    { name: 'Takoradi', count: 21, image: 'images/city_accra.png' },
    { name: 'Tamale', count: 18, image: 'images/city_kumasi.png' },
    { name: 'Sunyani', count: 12, image: 'images/city_accra.png' },
  ],

  howItWorks: [
    {
      number: '01',
      icon: 'fas fa-search',
      title: 'Buy a property',
      desc: 'Maximize your property\'s visibility and get high-quality tenants or buyers with AI-powered insights. Find your dream home instantly.',
    },
    {
      number: '02',
      icon: 'fas fa-tag',
      title: 'Sell a property',
      desc: 'Showcase your properties to the right audience effortlessly. Connect with interested buyers and investors through intelligent targeting.',
    },
    {
      number: '03',
      icon: 'fas fa-home',
      title: 'Rent a property',
      desc: 'Find your perfect home with AI-driven recommendations. Browse verified listings and secure great deals with ease.',
    },
    {
      number: '04',
      icon: 'fas fa-handshake',
      title: 'Close the Deal',
      desc: 'Our expert agents guide you through paperwork, negotiations and final closing so every transaction is smooth and secure.',
    },
  ],

  whyChooseUs: [
    {
      icon: 'fas fa-robot',
      title: 'AI-Powered Search',
      desc: 'Smart recommendations based on your lifestyle and budget.',
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Verified Listings',
      desc: 'Every property is verified by our expert team for accuracy.',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Market Insights',
      desc: 'Real-time market data to help you make informed decisions.',
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 Support',
      desc: 'Our dedicated team is always here to assist you anytime.',
    },
  ],

  blogPosts: [
    {
      id: 1,
      category: 'Architecture',
      title: 'Professor John Owusu Addo Receives Doctorate for Shaping Ghana\'s Architectural Future',
      date: 'February 18, 2025',
      image: 'images/city_accra.png',
    },
    {
      id: 2,
      category: 'Development',
      title: 'New Luxury High-Rise in Kumasi: Kensington Heights Construction Begins',
      date: 'February 10, 2025',
      image: 'images/city_kumasi.png',
    },
    {
      id: 3,
      category: 'Lifestyle',
      title: 'The Cinnamon at Airport City Kumasi: Redefining Urban Luxury and Business',
      date: 'January 30, 2025',
      image: 'images/property_office.png',
    },
  ],

  contactInfo: [
    { icon: 'fas fa-map-marker-alt', title: 'Our Location', text: 'Kumasi, Ghana, West Africa' },
    { icon: 'fas fa-phone', title: 'Phone Number', text: '+233 200 118 372' },
    { icon: 'fas fa-envelope', title: 'Email Address', text: 'info@dreammov.com' },
    { icon: 'fas fa-clock', title: 'Working Hours', text: 'Mon – Sat: 8am – 6pm' },
  ],
};

/* ============================================================
   UTILITIES
   ============================================================ */
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function showToast(message, duration = 3500) {
  const toast = $('#toast');
  const msg = $('#toast-message');
  if (!toast || !msg) return;
  msg.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

function animateCounter(el, target, duration = 2000) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { start = target; clearInterval(timer); }
    el.textContent = Math.floor(start).toLocaleString();
  }, 16);
}

/* ============================================================
   PRELOADER
   ============================================================ */
function initPreloader() {
  const preloader = $('#preloader');
  if (!preloader) return;
  window.addEventListener('load', () => {
    setTimeout(() => preloader.classList.add('hidden'), 2200);
  });
}

/* ============================================================
   NAVBAR
   ============================================================ */
function initNavbar() {
  const navbar = $('#navbar');
  const hamburger = $('#hamburger');
  const navLinks = $('#nav-links');

  // Scroll effect
  const onScroll = () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // Active link highlight
  const sections = $$('section[id]');
  const updateActiveLink = () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    $$('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };
  window.addEventListener('scroll', updateActiveLink, { passive: true });

  // Hamburger toggle
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    // Close on nav-link click
    $$('.nav-link', navLinks).forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // Back to top
  const btn = $('#back-to-top');
  if (btn) {
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
}

/* ============================================================
   AUTH MODAL
   ============================================================ */
function initAuthModal() {
  const modal = $('#auth-modal');
  const btnLogin = $('#btn-login');
  const modalClose = $('#modal-close');
  const tabSignin = $('#tab-signin');
  const tabReg = $('#tab-register');
  const signinForm = $('#signin-form');
  const regForm = $('#register-form');

  if (!modal) return;

  const openModal = () => modal.classList.add('active');
  const closeModal = () => modal.classList.remove('active');

  btnLogin?.addEventListener('click', openModal);
  modalClose?.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

  const switchTab = (tab) => {
    $$('.modal-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    if (tab.dataset.tab === 'signin') {
      signinForm?.classList.remove('hidden');
      regForm?.classList.add('hidden');
    } else {
      regForm?.classList.remove('hidden');
      signinForm?.classList.add('hidden');
    }
  };

  tabSignin?.addEventListener('click', () => switchTab(tabSignin));
  tabReg?.addEventListener('click', () => switchTab(tabReg));

  $('#signin-btn')?.addEventListener('click', () => {
    const email = $('#signin-email')?.value.trim();
    const pass = $('#signin-password')?.value.trim();
    if (!email || !pass) { showToast('Please fill in all fields'); return; }
    showToast('Welcome back! Signed in successfully 🎉');
    closeModal();
  });

  $('#register-btn')?.addEventListener('click', () => {
    const name = $('#reg-name')?.value.trim();
    const email = $('#reg-email')?.value.trim();
    const pass = $('#reg-password')?.value.trim();
    if (!name || !email || !pass) { showToast('Please fill in all fields'); return; }
    showToast('Account created! Welcome to Dreammov 🏠');
    closeModal();
  });

  $('#forgot-link')?.addEventListener('click', e => {
    e.preventDefault();
    showToast('Password reset link sent to your email!');
  });
}

/* ============================================================
   RENDER PROPERTY TYPES
   ============================================================ */
function renderPropertyTypes() {
  const grid = $('#types-grid');
  if (!grid) return;

  grid.innerHTML = AppData.propertyTypes.map(type => `
    <div class="type-card reveal" data-type="${type.id}" role="button" tabindex="0" aria-label="Browse ${type.name}">
      <div class="type-icon">${type.icon}</div>
      <div class="type-name">${type.name}</div>
      <div class="type-count">${type.count} Properties</div>
    </div>
  `).join('');

  $$('.type-card', grid).forEach(card => {
    card.addEventListener('click', () => {
      showToast(`Browsing ${card.querySelector('.type-name').textContent} listings...`);
      document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth' });
    });
    card.addEventListener('keydown', e => { if (e.key === 'Enter') card.click(); });
  });
}

/* ============================================================
   RENDER PROPERTY CARD HTML
   ============================================================ */
function buildPropertyCard(prop) {
  const badgeClass = prop.type === 'sale' ? 'badge-sale' : prop.type === 'rent' ? 'badge-rent' : 'badge-stay';
  const badgeLabel = prop.type === 'sale' ? 'For Sale' : prop.type === 'rent' ? 'For Rent' : 'Short Stay';

  const features = [];
  if (prop.beds > 0) features.push(`<span class="card-feature"><i class="fas fa-bed"></i> ${prop.beds} Beds</span>`);
  if (prop.baths > 0) features.push(`<span class="card-feature"><i class="fas fa-bath"></i> ${prop.baths} Baths</span>`);
  if (prop.sqft > 0) features.push(`<span class="card-feature"><i class="fas fa-ruler-combined"></i> ${prop.sqft.toLocaleString()} sqft</span>`);

  return `
    <div class="property-card reveal" data-type="${prop.type}" data-id="${prop.id}">
      <div class="card-image">
        <img src="${prop.image}" alt="${prop.title}" loading="lazy"/>
        <span class="card-badge ${badgeClass}">${badgeLabel}</span>
        <button class="card-wishlist" data-id="${prop.id}" aria-label="Save to wishlist">
          <i class="far fa-heart"></i>
        </button>
      </div>
      <div class="card-body">
        <div class="card-price">${prop.price}<span>${prop.period}</span></div>
        <h3 class="card-title">${prop.title}</h3>
        <p class="card-location"><i class="fas fa-map-marker-alt"></i> ${prop.location}</p>
        <div class="card-features">${features.join('')}</div>
      </div>
    </div>
  `;
}

/* ============================================================
   RENDER FEATURED LISTINGS
   ============================================================ */
function renderListings(filter = 'all') {
  const grid = $('#listings-grid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? AppData.properties
    : AppData.properties.filter(p => p.type === filter);

  grid.innerHTML = filtered.map(buildPropertyCard).join('');
  initWishlistButtons('#listings-grid');
  initRevealObserver();
}

/* ============================================================
   RENDER POPULAR PROPERTIES
   ============================================================ */
function renderPopular(filter = 'sale') {
  const grid = $('#popular-grid');
  if (!grid) return;

  const filtered = AppData.properties.filter(p => p.type === filter);
  grid.innerHTML = filtered.map(buildPropertyCard).join('');
  initWishlistButtons('#popular-grid');
  initRevealObserver();
}

/* ============================================================
   WISHLIST TOGGLE
   ============================================================ */
function initWishlistButtons(containerSelector) {
  $$(`.card-wishlist`, $(containerSelector) || document).forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      btn.classList.toggle('active');
      const icon = btn.querySelector('i');
      if (btn.classList.contains('active')) {
        icon.className = 'fas fa-heart';
        showToast('Added to your wishlist ❤️');
      } else {
        icon.className = 'far fa-heart';
        showToast('Removed from wishlist');
      }
    });
  });
}

/* ============================================================
   FILTER TABS (Featured + Popular)
   ============================================================ */
function initFilterTabs() {
  // Featured listings filter
  $$('.filter-tab', $('#listing-filter-tabs') || document).forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.filter-tab', $('#listing-filter-tabs')).forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderListings(tab.dataset.filter);
    });
  });

  // Popular filter
  $$('.filter-tab', $('#popular-filter-tabs') || document).forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.filter-tab', $('#popular-filter-tabs')).forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderPopular(tab.dataset.filter);
    });
  });
}

/* ============================================================
   LOAD MORE
   ============================================================ */
function initLoadMore() {
  const btn = $('#load-more-btn');
  if (!btn) return;
  let loaded = false;
  btn.addEventListener('click', () => {
    if (!loaded) {
      loaded = true;
      showToast('All properties are currently displayed. More coming soon!');
      btn.textContent = 'No more properties';
      btn.disabled = true;
      btn.style.opacity = '0.5';
    }
  });
}

/* ============================================================
   SEARCH FUNCTIONALITY
   ============================================================ */
function initSearch() {
  const searchTabs = $$('.search-tab');
  searchTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      searchTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  $('#btn-search')?.addEventListener('click', handleSearch);
  $('#search-location')?.addEventListener('keydown', e => { if (e.key === 'Enter') handleSearch(); });
}

function handleSearch() {
  const location = $('#search-location')?.value.trim() || '';
  const type = $('#search-type')?.value || '';
  const price = $('#search-price')?.value || '';
  const activeTab = $('.search-tab.active')?.dataset.filter || 'all';

  if (!location && !type && !price) {
    showToast('Please enter a location or select a property type');
    return;
  }

  showToast(`Searching "${location || type || 'all'}" properties...`);
  document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth' });

  // Filter listings
  const grid = $('#listings-grid');
  if (!grid) return;

  const filtered = AppData.properties.filter(p => {
    const matchFilter = activeTab === 'all' || p.type === activeTab;
    const matchLoc = !location || p.location.toLowerCase().includes(location.toLowerCase());
    const matchType = !type || p.category.toLowerCase().includes(type.toLowerCase());
    return matchFilter && matchLoc && matchType;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-light)">
        <i class="fas fa-search" style="font-size:3rem;margin-bottom:1rem;display:block;opacity:0.3"></i>
        <p>No properties found matching your criteria. Try a different search.</p>
      </div>
    `;
  } else {
    grid.innerHTML = filtered.map(buildPropertyCard).join('');
    initWishlistButtons('#listings-grid');
    initRevealObserver();
  }
}

/* ============================================================
   RENDER HOW IT WORKS
   ============================================================ */
function renderHowItWorks() {
  const grid = $('#how-grid');
  if (!grid) return;

  grid.innerHTML = AppData.howItWorks.map(step => `
    <div class="how-card reveal">
      <div class="how-number">${step.number}</div>
      <div class="how-icon"><i class="${step.icon}"></i></div>
      <h3>${step.title}</h3>
      <p>${step.desc}</p>
    </div>
  `).join('');
}

/* ============================================================
   RENDER CITIES
   ============================================================ */
function renderCities() {
  const grid = $('#cities-grid');
  if (!grid) return;

  grid.innerHTML = AppData.cities.map(city => `
    <div class="city-card reveal" role="button" tabindex="0" aria-label="Explore properties in ${city.name}">
      <img src="${city.image}" alt="${city.name}" loading="lazy"/>
      <div class="city-overlay"></div>
      <div class="city-info">
        <div class="city-name">${city.name}</div>
        <div class="city-count">${city.count} Properties</div>
      </div>
    </div>
  `).join('');

  $$('.city-card', grid).forEach(card => {
    card.addEventListener('click', () => {
      const city = card.querySelector('.city-name').textContent;
      showToast(`Browsing properties in ${city}...`);
      document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ============================================================
   RENDER WHY CHOOSE US
   ============================================================ */
function renderWhyChooseUs() {
  const list = $('#why-list');
  const stack = $('#why-card-stack');

  if (list) {
    list.innerHTML = AppData.whyChooseUs.map(item => `
      <li class="why-item reveal">
        <div class="why-item-icon"><i class="${item.icon}"></i></div>
        <div class="why-item-text">
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </div>
      </li>
    `).join('');
  }

  if (stack) {
    const props = AppData.properties.filter(p => p.featured).slice(0, 2);
    stack.innerHTML = props.map(p => `
      <div class="why-prop-card">
        <img src="${p.image}" alt="${p.title}" loading="lazy"/>
        <div class="why-prop-card-body">
          <div class="why-prop-title">${p.title}</div>
          <div class="why-prop-price">${p.price}${p.period}</div>
        </div>
      </div>
    `).join('');
  }
}

/* ============================================================
   RENDER BLOG
   ============================================================ */
function renderBlog() {
  const grid = $('#blog-grid');
  if (!grid) return;

  grid.innerHTML = AppData.blogPosts.map(post => `
    <article class="blog-card reveal" data-post="${post.id}" role="button" tabindex="0" aria-label="Read: ${post.title}">
      <img src="${post.image}" alt="${post.title}" loading="lazy"/>
      <div class="blog-body">
        <span class="blog-category">${post.category}</span>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-meta"><i class="fas fa-calendar-alt"></i> ${post.date}</p>
      </div>
    </article>
  `).join('');

  $$('.blog-card', grid).forEach(card => {
    card.addEventListener('click', () => showToast('Full blog post coming soon!'));
  });
}

/* ============================================================
   RENDER CONTACT INFO
   ============================================================ */
function renderContactInfo() {
  const container = $('#contact-info');
  if (!container) return;

  container.innerHTML = AppData.contactInfo.map(info => `
    <div class="contact-info-card reveal">
      <div class="contact-info-icon"><i class="${info.icon}"></i></div>
      <div class="contact-info-text">
        <h4>${info.title}</h4>
        <p>${info.text}</p>
      </div>
    </div>
  `).join('');
}

/* ============================================================
   FORMS
   ============================================================ */
function initForms() {
  // Submit property form
  $('#submit-property-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const title = $('#prop-title')?.value.trim();
    if (!title) { showToast('Please fill in the property title'); return; }
    showToast('Property submitted! Our team will review and list it shortly 🏠');
    e.target.reset();
  });

  // Contact form
  $('#contact-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const name = $('#contact-name')?.value.trim();
    if (!name) { showToast('Please fill in your name'); return; }
    showToast('Message sent! We\'ll get back to you within 24 hours 📩');
    e.target.reset();
  });
}

/* ============================================================
   HERO STATS COUNTER
   ============================================================ */
function initStatsCounter() {
  const statsSection = $('.hero-stats');
  if (!statsSection) return;

  let triggered = false;
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !triggered) {
      triggered = true;
      $$('.stat-num').forEach(el => {
        const target = parseInt(el.dataset.target || '0', 10);
        animateCounter(el, target);
      });
    }
  }, { threshold: 0.5 });

  observer.observe(statsSection);
}

/* ============================================================
   SCROLL REVEAL ANIMATION
   ============================================================ */
function initRevealObserver() {
  const reveals = $$('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
}

/* ============================================================
   SMOOTH SCROLL (internal anchor links)
   ============================================================ */
function initSmoothScroll() {
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

/* ============================================================
   SEARCH TAB SYNC with HERO TABS
   ============================================================ */
function syncSearchAndListing() {
  // Hero search tabs → featured listing filter
  $$('.search-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.dataset.filter;
      if (filter === 'all') renderListings('all');
      else renderListings(filter);
    });
  });
}

/* ============================================================
   INIT APP
   ============================================================ */
function initApp() {
  initPreloader();
  initNavbar();
  initAuthModal();
  initSearch();
  initFilterTabs();
  initLoadMore();
  initForms();
  initSmoothScroll();
  syncSearchAndListing();

  // Render all dynamic sections
  renderPropertyTypes();
  renderListings('all');
  renderHowItWorks();
  renderCities();
  renderPopular('sale');
  renderWhyChooseUs();
  renderBlog();
  renderContactInfo();

  // Reveal & counters
  initRevealObserver();
  initStatsCounter();

  // AI Chat Widget
  initAIChat();

  console.log('%c🏠 Dreammov App Loaded', 'color:#1a6b4a;font-weight:bold;font-size:1.2rem');
}

/* ============================================================
   AI CHAT WIDGET — Brain & Controller
   ============================================================ */
function initAIChat() {

  /* ---- DOM refs ---- */
  const launcher = $('#ai-chat-launcher');
  const window_ = $('#ai-chat-window');
  const closeBtn = $('#ai-close-btn');
  const clearBtn = $('#ai-clear-btn');
  const messages = $('#ai-chat-messages');
  const input = $('#ai-chat-input');
  const sendBtn = $('#ai-send-btn');
  const badge = $('#ai-chat-badge');
  const chips = $$('.ai-suggestion-chip');

  if (!launcher || !window_ || !messages) return;

  /* ---- State ---- */
  let isOpen = false;
  let isTyping = false;
  let messageCount = 0;

  /* ==============================================================
     KNOWLEDGE BASE – Pattern → Response mappings
     ============================================================== */
  const KB = [
    // ---- Greetings ----
    {
      patterns: [/^(hi|hello|hey|good morning|good afternoon|good evening|greetings)/i],
      response() {
        return `Hello there! 👋 Welcome to **Dreammov** – Ghana's #1 AI-powered real estate platform.

I can help you:
• 🏠 Find properties to buy or rent
• 📍 Explore listings by city (Accra, Kumasi…)
• 💰 Get price estimates
• ➕ List your property

What would you like help with today?`;
      },
    },

    // ---- Properties for RENT ----
    {
      patterns: [/rent|for rent|renting|lease/i],
      response() {
        const rentals = AppData.properties.filter(p => p.type === 'rent');
        return {
          text: `🏠 Here are our **${rentals.length} properties available for rent**:`,
          properties: rentals,
        };
      },
    },

    // ---- Properties for SALE ----
    {
      patterns: [/sale|for sale|buy|purchase|buying/i],
      response() {
        const sales = AppData.properties.filter(p => p.type === 'sale');
        return {
          text: `🏷️ Here are our **${sales.length} properties available for sale**:`,
          properties: sales,
        };
      },
    },

    // ---- Short Stay ----
    {
      patterns: [/short stay|short-stay|airbnb|nightly|per night|vacation/i],
      response() {
        const stays = AppData.properties.filter(p => p.type === 'short-stay');
        return {
          text: `🌙 We have **${stays.length} short-stay options** for you:`,
          properties: stays,
        };
      },
    },

    // ---- Cheapest / Budget ----
    {
      patterns: [/cheap|cheapest|budget|affordable|low.?cost|lowest price/i],
      response() {
        const sorted = [...AppData.properties]
          .filter(p => p.price)
          .sort((a, b) => {
            const numA = parseInt(a.price.replace(/[^\d]/g, ''), 10) || 0;
            const numB = parseInt(b.price.replace(/[^\d]/g, ''), 10) || 0;
            return numA - numB;
          });
        return {
          text: `💰 Our **most affordable listings** are:`,
          properties: sorted.slice(0, 3),
        };
      },
    },

    // ---- Accra ----
    {
      patterns: [/accra/i],
      response() {
        const accra = AppData.properties.filter(p => p.location.toLowerCase().includes('accra'));
        return accra.length
          ? { text: `📍 Found **${accra.length} properties in Accra**:`, properties: accra }
          : `I don't have listings in Accra at the moment, but new ones are added weekly! Check back soon or leave your contact and we'll notify you.`;
      },
    },

    // ---- Kumasi ----
    {
      patterns: [/kumasi/i],
      response() {
        const kumasi = AppData.properties.filter(p => p.location.toLowerCase().includes('kumasi'));
        return kumasi.length
          ? { text: `📍 Found **${kumasi.length} properties in Kumasi**:`, properties: kumasi }
          : `No current listings in Kumasi, but we're expanding! Contact us at +233 200 118 372 to be notified.`;
      },
    },

    // ---- Apartments ----
    {
      patterns: [/apartment|flat/i],
      response() {
        const apts = AppData.properties.filter(p => p.category === 'Apartments');
        return { text: `🏢 Here are our **${apts.length} apartment listings**:`, properties: apts };
      },
    },

    // ---- Office ----
    {
      patterns: [/office|commercial|workspace|co.?work/i],
      response() {
        const offices = AppData.properties.filter(p => p.category === 'Office Spaces');
        return offices.length
          ? { text: `🏗️ **${offices.length} office space(s) available**:`, properties: offices }
          : `We have limited office listings right now. Contact us at **info@dreammov.com** for bespoke commercial space sourcing.`;
      },
    },

    // ---- Land ----
    {
      patterns: [/land|plot|acre/i],
      response() {
        const lands = AppData.properties.filter(p => p.category === 'Land');
        return lands.length
          ? { text: `🌿 **${lands.length} land listing(s)** on Dreammov:`, properties: lands }
          : `We're adding more land listings soon! Send us your requirements at **info@dreammov.com**.`;
      },
    },

    // ---- How to list / add property ----
    {
      patterns: [/list|add property|submit|post.*property|how.*list|sell.*property/i],
      response() {
        return `🏠 **How to List Your Property on Dreammov:**

1️⃣ Click **"Add Property"** in the top navbar
2️⃣ Fill in property details (title, type, price, location)
3️⃣ Add your WhatsApp contact number
4️⃣ Submit – our team reviews within 24 hours!

✅ It's **free** to list!
📞 Need help? Call **+233 200 118 372**`;
      },
    },

    // ---- Price / cost ----
    {
      patterns: [/price|cost|how much|ghs|rates?/i],
      response() {
        return `💰 **Dreammov Property Price Ranges (Ghana):**

| Type | Range |
|------|-------|
| Single Rooms | GHS 200 – 600/mo |
| Apartments | GHS 800 – 5,000/mo |
| Houses (Rent) | GHS 1,500 – 8,000/mo |
| Houses (Sale) | GHS 120,000 – 2M+ |
| Office Spaces | GHS 2,000 – 10,000/mo |
| Land | GHS 30,000 – 500,000+ |

Want me to find properties in a specific range? Just ask! 😊`;
      },
    },

    // ---- Contact ----
    {
      patterns: [/contact|phone|call|whatsapp|reach|email/i],
      response() {
        return `📞 **Contact Dreammov:**

📱 WhatsApp / Phone: **+233 200 118 372**
📧 Email: **info@dreammov.com**
📍 Location: Kumasi, Ghana
🕐 Hours: Mon – Sat, 8am – 6pm

Or scroll down to our **Contact Section** on this page!`;
      },
    },

    // ---- Cities / locations ----
    {
      patterns: [/cities|city|location|where|area|region|takoradi|tamale|sunyani/i],
      response() {
        return `📍 **Dreammov covers these cities in Ghana:**

🏙️ **Accra** – 85 properties
🌿 **Kumasi** – 62 properties
⚓ **Takoradi** – 21 properties
🌾 **Tamale** – 18 properties
🌳 **Sunyani** – 12 properties

Tell me a city and I'll show you the listings!`;
      },
    },

    // ---- AI / About Dreammov ----
    {
      patterns: [/dreammov|about|what.*you|who.*you|platform/i],
      response() {
        return `🤖 **About Dreammov:**

Dreammov is **Ghana's #1 AI-powered real estate platform**, connecting buyers, renters, and sellers seamlessly.

✨ **Key Features:**
• 200+ verified property listings
• AI-powered search & recommendations
• Properties in 8+ cities across Ghana
• Free property listing for sellers
• 24/7 AI assistant (that's me! 😄)

We're powered by **Basil Technologies** and dedicated to making your real estate journey stress-free.`;
      },
    },

    // ---- Bedrooms ----
    {
      patterns: [/(\d+).?bed|bedroom/i],
      response(msg) {
        const match = msg.match(/(\d+)/);
        const beds = match ? parseInt(match[1], 10) : 2;
        const found = AppData.properties.filter(p => p.beds === beds);
        return found.length
          ? { text: `🛏️ Found **${found.length} properties with ${beds} bedroom(s)**:`, properties: found }
          : `I couldn't find any ${beds}-bedroom properties right now, but new listings are added regularly! Call **+233 200 118 372** for a custom search.`;
      },
    },

    // ---- Thank you ----
    {
      patterns: [/thank|thanks|thank you|appreciate/i],
      response() {
        return `You're very welcome! 😊 It's my pleasure to help.

If you have any more questions about properties in Ghana, feel free to ask anytime. Happy house hunting! 🏡`;
      },
    },

    // ---- Goodbye ----
    {
      patterns: [/bye|goodbye|see you|later|ciao/i],
      response() {
        return `Goodbye! 👋 Thanks for visiting Dreammov. Come back anytime – your dream home awaits! 🏠✨`;
      },
    },
  ];

  /* ---- Fallback responses ---- */
  const fallbacks = [
    `I'm not sure I understood that. Could you rephrase? You can ask me about:\n• 🏠 Properties for rent or sale\n• 📍 Listings in Accra, Kumasi, etc.\n• 💰 Prices and budgets\n• ➕ How to list your property`,
    `Hmm, let me think… I can help with property searches, pricing, city listings, or how to list your property. What are you looking for?`,
    `I didn't quite catch that! Try asking something like: *"Show me apartments for rent"* or *"Properties in Accra under GHS 2000"*`,
  ];
  let fallbackIndex = 0;

  /* ---- Helpers ---- */
  function now() {
    return new Date().toLocaleTimeString('en-GH', { hour: '2-digit', minute: '2-digit' });
  }

  function formatMarkdown(text) {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/\n\n/g, '<br/><br/>')
      .replace(/\n/g, '<br/>')
      .replace(/• /g, '&bull; ');
  }

  function scrollToBottom() {
    messages.scrollTop = messages.scrollHeight;
  }

  /* ---- Render a message bubble ---- */
  function appendMessage(role, content, props = []) {
    messageCount++;

    const wrap = document.createElement('div');
    wrap.className = `ai-msg ${role}`;

    // Avatar (bot only)
    if (role === 'bot') {
      const av = document.createElement('div');
      av.className = 'ai-msg-avatar';
      av.innerHTML = '<i class="fas fa-robot"></i>';
      wrap.appendChild(av);
    }

    // Bubble
    const bubble = document.createElement('div');
    bubble.className = 'ai-bubble';
    bubble.innerHTML = formatMarkdown(content);
    wrap.appendChild(bubble);

    messages.appendChild(wrap);

    // Property result cards
    if (props && props.length) {
      props.slice(0, 3).forEach(prop => {
        const card = document.createElement('div');
        card.className = role === 'bot' ? 'ai-prop-result' : '';
        card.innerHTML = `
          <img src="${prop.image}" alt="${prop.title}" loading="lazy"/>
          <div class="ai-prop-result-body">
            <div class="ai-prop-result-price">${prop.price}${prop.period ? ' ' + prop.period : ''}</div>
            <div class="ai-prop-result-title">${prop.title}</div>
            <div class="ai-prop-result-loc"><i class="fas fa-map-marker-alt"></i> ${prop.location}</div>
          </div>
        `;
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
          showToast(`Viewing: ${prop.title}`);
          document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth' });
          closeChat();
        });
        messages.appendChild(card);
      });
    }

    // Timestamp every 3 messages
    if (messageCount % 3 === 0) {
      const ts = document.createElement('div');
      ts.className = 'ai-timestamp';
      ts.textContent = now();
      messages.appendChild(ts);
    }

    scrollToBottom();
  }

  /* ---- Show typing indicator ---- */
  function showTyping() {
    const el = document.createElement('div');
    el.className = 'ai-typing';
    el.id = 'ai-typing-indicator';
    el.innerHTML = `
      <div class="ai-msg-avatar"><i class="fas fa-robot"></i></div>
      <div class="ai-typing-dots"><span></span><span></span><span></span></div>
    `;
    messages.appendChild(el);
    scrollToBottom();
  }

  function hideTyping() {
    $('#ai-typing-indicator')?.remove();
  }

  /* ---- AI response logic ---- */
  function getAIResponse(userMsg) {
    const msg = userMsg.trim().toLowerCase();

    for (const entry of KB) {
      if (entry.patterns.some(rx => rx.test(msg))) {
        const result = entry.response(msg);
        if (typeof result === 'string') {
          return { text: result, properties: [] };
        }
        return { text: result.text || '', properties: result.properties || [] };
      }
    }

    // Fallback
    const fallback = fallbacks[fallbackIndex % fallbacks.length];
    fallbackIndex++;
    return { text: fallback, properties: [] };
  }

  /* ---- Send a message ---- */
  function sendMessage(text) {
    const msg = (text || input.value).trim();
    if (!msg || isTyping) return;

    // User bubble
    appendMessage('user', msg);
    if (!text) input.value = '';

    // Hide badge
    if (badge) badge.classList.add('hidden');

    // Typing delay
    isTyping = true;
    const delay = 800 + Math.random() * 600;
    showTyping();

    setTimeout(() => {
      hideTyping();
      isTyping = false;

      const { text: responseText, properties } = getAIResponse(msg);
      appendMessage('bot', responseText, properties);
    }, delay);
  }

  /* ---- Open / Close ---- */
  function openChat() {
    isOpen = true;
    window_.classList.add('open');
    if (badge) badge.classList.add('hidden');
    launcher.querySelector('.open-icon').classList.add('hidden');
    launcher.querySelector('.close-icon').classList.remove('hidden');
    input.focus();
  }

  function closeChat() {
    isOpen = false;
    window_.classList.remove('open');
    launcher.querySelector('.open-icon').classList.remove('hidden');
    launcher.querySelector('.close-icon').classList.add('hidden');
  }

  /* ---- Clear chat ---- */
  function clearChat() {
    messages.innerHTML = '';
    messageCount = 0;
    // Re-show welcome message
    setTimeout(() => appendBotWelcome(), 300);
  }

  /* ---- Initial welcome message ---- */
  function appendBotWelcome() {
    appendMessage('bot',
      `👋 Hi there! I'm **Dreammov AI**, your smart property assistant.

I can help you find the perfect home, office, or land across Ghana 🇬🇭.

Ask me anything about properties, prices, locations, or how to list your space!`
    );
  }

  /* ---- Event listeners ---- */
  launcher.addEventListener('click', () => {
    isOpen ? closeChat() : openChat();
  });

  closeBtn?.addEventListener('click', closeChat);
  clearBtn?.addEventListener('click', clearChat);

  sendBtn?.addEventListener('click', () => sendMessage());
  input?.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // Suggestion chips
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      if (!isOpen) openChat();
      sendMessage(chip.dataset.msg);
    });
  });

  /* ---- Initial welcome and open toggle ---- */
  let welcomed = false;
  launcher.addEventListener('click', () => {
    if (isOpen) {
      closeChat();
    } else {
      openChat();
      if (!welcomed) {
        welcomed = true;
        setTimeout(appendBotWelcome, 350);
      }
    }
  });

  // Auto-show badge after 4 seconds to draw attention
  setTimeout(() => {
    if (!isOpen && badge) {
      badge.classList.remove('hidden');
      badge.textContent = '1';
    }
  }, 4000);
}

// Boot
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

