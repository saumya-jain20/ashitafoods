// Config
const WHATSAPP_NUMBER = "917869595395";
const STORAGE_KEY = 'ashita_cart_v6';
let currentLanguage = 'en';

// Products with concise, clearer descriptions and explicit per‑kg by pack
// Note: rates keys are packaging options; values are per‑kg prices.
const PRODUCTS = [
  {
    id: 'p1',
    name: 'Moong Papad - PREMIUM',
    nameHi: 'मूंग पापड़ - प्रीमियम',
    category: 'moong',
    img: 'assets/papad.jpg',
    rates: { '200g': 232, '500g': 227 },
    desc: 'Rich moong dal, ultra‑crisp bite, premium spice balance. Great as an everyday luxury.',
    descHi: 'समृद्ध मूंग दाल, अल्ट्रा-कुरकुरा स्वाद, प्रीमियम मसाला संतुलन। रोजमर्रा की विलासिता के लिए बेहतरीन।'
  },
  {
    id: 'p2',
    name: 'Moong Papad - SHAHI',
    nameHi: 'मूंग पापड़ - शाही',
    category: 'moong',
    img: 'assets/papad.jpg',
    rates: { '200g': 221, '500g': 216 },
    desc: 'Royal, rounded flavor with gentle heat; pairs well with mains and snacks.',
    descHi: 'शाही, गोल स्वाद हल्की तीखापन के साथ; मुख्य भोजन और स्नैक्स के साथ अच्छी तरह जुड़ता है।'
  },
  {
    id: 'p3',
    name: 'Moong Papad - SHAHI JAIN',
    nameHi: 'मूंग पापड़ - शाही जैन',
    category: 'moong',
    img: 'assets/papad.jpg',
    rates: { '200g': 209, '500g': 204 },
    desc: 'Jain‑friendly (no onion/garlic), light seasoning, clean moong taste.',
    descHi: 'जैन-अनुकूल (बिना प्याज/लहसुन), हल्का मसाला, साफ मूंग स्वाद।'
  },
  {
    id: 'p4',
    name: 'Punjabi Masala Papad',
    nameHi: 'पंजाबी मसाला पापड़',
    category: 'moong',
    img: 'assets/papad.jpg',
    rates: { '200g': 176, '500g': 171 },
    desc: 'Bold masala profile with a lively kick; great for toppings and chaat.',
    descHi: 'जीवंत किक के साथ बोल्ड मसाला प्रोफाइल; टॉपिंग और चाट के लिए बेहतरीन।'
  },
  {
    id: 'p5',
    name: 'Moong Papad - SPECIAL',
    nameHi: 'मूंग पापड़ - स्पेशल',
    category: 'moong',
    img: 'assets/papad.jpg',
    rates: { '200g': 160, '500g': 155 },
    desc: 'Daily‑use classic: balanced spice, even roasting, dependable crunch.',
    descHi: 'दैनिक उपयोग क्लासिक: संतुलित मसाला, समान भूनना, विश्वसनीय कुरकुरापन।'
  },
  {
    id: 'p6',
    name: 'RAJA Punjabi - Tej Masala',
    nameHi: 'राजा पंजाबी - तेज मसाला',
    category: 'moong',
    img: 'assets/papad.jpg',
    rates: { '200g': 146, '500g': 141 },
    desc: 'Spice‑forward tej masala for heat lovers; bold yet crisp.',
    descHi: 'तीखापन प्रेमियों के लिए मसाला-फॉरवर्ड तेज मसाला; बोल्ड लेकिन कुरकुरा।'
  },
  {
    id: 'p7',
    name: 'Moong Papad - No.1',
    nameHi: 'मूंग पापड़ - नंबर 1',
    category: 'moong',
    img: 'assets/papad.jpg',
    rates: { '200g': 131, '500g': 126 },
    desc: 'Best‑seller balance of taste and texture; versatile with any meal.',
    descHi: 'स्वाद और बनावट का बेस्ट-सेलर संतुलन; किसी भी भोजन के साथ बहुमुखी।'
  },
  {
    id: 'p8',
    name: 'Chana Papad - SHAHI',
    nameHi: 'चना पापड़ - शाही',
    category: 'chana',
    img: 'assets/papad.jpg',
    rates: { '200g': 188, '500g': 183 },
    desc: 'Thicker chana body, robust crunch, full‑bodied, traditional flavor.',
    descHi: 'मोटा चना शरीर, मजबूत कुरकुरापन, फुल-बॉडीड, पारंपरिक स्वाद।'
  },
  {
    id: 'p9',
    name: 'Chana SPECIAL Garlic',
    nameHi: 'चना स्पेशल लहसुन',
    category: 'chana',
    img: 'assets/papad.jpg',
    rates: { '200g': 165, '500g': 160 },
    desc: 'Aromatic garlic lift on nutty chana base; snack‑worthy aroma.',
    descHi: 'नट्टी चना बेस पर सुगंधित लहसुन लिफ्ट; स्नैक-योग्य सुगंध।'
  },
  {
    id: 'p10',
    name: 'Chana - SPECIAL',
    nameHi: 'चना - स्पेशल',
    category: 'chana',
    img: 'assets/papad.jpg',
    rates: { '200g': 153, '500g': 148 },
    desc: 'Classic chana notes, mild spice, satisfying crisp for daily plates.',
    descHi: 'क्लासिक चना स्वाद, हल्का मसाला, दैनिक प्लेटों के लिए संतोषजनक कुरकुरापन।'
  },
  {
    id: 'p11',
    name: 'Chana Papad - No.1',
    nameHi: 'चना पापड़ - नंबर 1',
    category: 'chana',
    img: 'assets/papad.jpg',
    rates: { '200g': 148, '500g': 143 },
    desc: 'Clean chana taste with comforting aroma; dependable crispness.',
    descHi: 'आरामदायक सुगंध के साथ साफ चना स्वाद; विश्वसनीय कुरकुरापन।'
  },
  {
    id: 'p12',
    name: 'Moong Katran - SPECIAL',
    nameHi: 'मूंग कतरन - स्पेशल',
    category: 'other',
    img: 'assets/papad.jpg',
    rates: { '1kg': 135 },
    desc: 'Moong flakes for deep‑fry or mix‑ins; crunchy base for snacks.',
    descHi: 'डीप-फ्राई या मिक्स-इन के लिए मूंग फ्लेक्स; स्नैक्स के लिए क्रंची बेस।'
  },
  {
    id: 'p13',
    name: 'Disco - SPECIAL',
    nameHi: 'डिस्को - स्पेशल',
    category: 'other',
    img: 'assets/papad.jpg',
    rates: { '1kg': 158 },
    desc: 'Mini round papads; party‑friendly, kid‑approved, crisp and fun.',
    descHi: 'मिनी गोल पापड़; पार्टी-फ्रेंडली, बच्चों द्वारा अनुमोदित, कुरकुरा और मजेदार।'
  },
  {
    id: 'p14',
    name: 'Dollar Moong',
    nameHi: 'डॉलर मूंग',
    category: 'moong',
    img: 'assets/papad.jpg',
    rates: { '1kg': 137 },
    desc: 'Uniform "dollar" shape; neat presentation with rich moong flavor.',
    descHi: 'एकसमान "डॉलर" आकार; समृद्ध मूंग स्वाद के साथ साफ प्रस्तुति।'
  },
  {
    id: 'p15',
    name: 'Dollar Chana',
    nameHi: 'डॉलर चना',
    category: 'chana',
    img: 'assets/papad.jpg',
    rates: { '1kg': 147 },
    desc: 'Round chana discs; bold taste, golden crisp for special servings.',
    descHi: 'गोल चना डिस्क; बोल्ड स्वाद, विशेष सर्विंग के लिए गोल्डन क्रिस्प।'
  },
  {
    id: 'p16',
    name: 'Moong Papad (E)',
    nameHi: 'मूंग पापड़ (ई)',
    category: 'moong',
    img: 'assets/papad.jpg',
    rates: { '200g': 162, '500g': 157 },
    desc: 'Value choice with authentic moong taste for everyday use.',
    descHi: 'रोजमर्रा के उपयोग के लिए प्रामाणिक मूंग स्वाद के साथ मूल्य विकल्प।'
  }
];

// DOM
const grid = document.getElementById('product-grid');
const filters = document.querySelectorAll('.filter');
const searchInput = document.getElementById('search');
const cartToggle = document.getElementById('cart-toggle');
const cartPanel = document.getElementById('cart-panel');
const cartCountEl = document.getElementById('cart-count');
const cartItemsEl = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const cartEmptyEl = document.getElementById('cart-empty');
const clearCartBtn = document.getElementById('clear-cart');
const checkoutBtn = document.getElementById('checkout');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mainNav = document.getElementById('main-nav');
const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
const navActions = document.querySelector('.nav-actions');
const backToTopBtn = document.getElementById('back-to-top');
const whatsappBtns = [
  document.getElementById('whatsapp-btn'),
  document.getElementById('hero-whatsapp'),
  document.getElementById('contact-wa'),
  document.getElementById('footer-whatsapp')
].filter(Boolean);
const langButtons = document.querySelectorAll('.lang-btn');

let cart = [];
let currentFilter = 'all';
let currentSearch = '';

// Utils
function rup(n){ return '₹' + Number(n).toLocaleString('en-IN', { maximumFractionDigits: 0 }); }
function loadCart(){ try{ const raw=localStorage.getItem(STORAGE_KEY); if(raw) cart=JSON.parse(raw);}catch(e){ cart=[]; } }
function saveCart(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); }

// Language switching
function switchLanguage(lang) {
  currentLanguage = lang;
  
  // Update language buttons
  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  // Update all elements with data attributes
  document.querySelectorAll('[data-en]').forEach(element => {
    if (element.dataset[lang]) {
      if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
        element.placeholder = element.dataset[`${lang}Placeholder`] || element.dataset[lang];
      } else {
        element.textContent = element.dataset[lang];
      }
    }
  });
  
  // Update notifications language
  window.notificationLanguage = lang;
}

// Filtering
function filterProducts(){
  let list = PRODUCTS;
  if(currentFilter !== 'all'){ list = list.filter(p => p.category === currentFilter); }
  if(currentSearch){
    const q = currentSearch.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }
  return list;
}

// Render products: with improved packaging and quantity input
function renderProducts(){
  const items = filterProducts();
  grid.innerHTML = '';
  if(items.length === 0){
    grid.innerHTML = `
      <div class="no-products">
        <i class="fas fa-search"></i>
        <h3>${currentLanguage === 'en' ? 'No products found' : 'कोई उत्पाद नहीं मिला'}</h3>
        <p>${currentLanguage === 'en' ? 'Try adjusting your search or filter' : 'अपनी खोज या फ़िल्टर समायोजित करने का प्रयास करें'}</p>
      </div>`;
    return;
  }

  items.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.id = p.id;

    const packOptions = Object.keys(p.rates)
      .map(s => `<option value="${s}">${s}</option>`).join('');

    const priceDisplay = Object.entries(p.rates)
      .map(([k,v]) => `${k}: ${rup(v)}/kg`)
      .join(' • ');

    // Use bilingual names and descriptions
    const productName = currentLanguage === 'hi' ? (p.nameHi || p.name) : p.name;
    const productDesc = currentLanguage === 'hi' ? (p.descHi || p.desc) : p.desc;

    card.innerHTML = `
      <img src="${p.img}" alt="${productName}" loading="lazy" onerror="this.src='assets/placeholder.jpg'">
      <h3>${productName}</h3>
      <p class="desc">${productDesc}</p>
      <div class="price-small">
        <i class="fas fa-tag"></i> ${priceDisplay}
      </div>
      <div class="actions">
        <div class="packaging-quantity-container">
          <div class="packaging-row">
            <span class="packaging-label">${currentLanguage === 'en' ? 'Packaging Size:' : 'पैकेजिंग आकार:'}</span>
            <select class="pack-select" aria-label="${currentLanguage === 'en' ? 'Select packaging type' : 'पैकेजिंग प्रकार चुनें'}">${packOptions}</select>
          </div>
          <div class="quantity-row">
            <span class="quantity-label">${currentLanguage === 'en' ? 'Quantity (kg):' : 'मात्रा (किलो):'}</span>
            <input type="number" class="qty-input" min="0.1" step="0.1" placeholder="${currentLanguage === 'en' ? 'Enter kg' : 'किलो दर्ज करें'}" value="">
          </div>
        </div>
        <button class="add-btn" aria-label="${currentLanguage === 'en' ? 'Add to cart' : 'कार्ट में जोड़ें'}">
          <i class="fas fa-cart-plus"></i> ${currentLanguage === 'en' ? 'Add to Cart' : 'कार्ट में जोड़ें'}
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Cart render
function renderCart(){
  cartItemsEl.innerHTML = '';
  if(cart.length === 0){
    cartEmptyEl.style.display = 'block';
    cartItemsEl.style.display = 'none';
  } else {
    cartEmptyEl.style.display = 'none';
    cartItemsEl.style.display = 'block';
    cart.forEach((item, index) => {
      const li = document.createElement('li');
      const productName = currentLanguage === 'hi' 
        ? (PRODUCTS.find(p => p.id === item.id)?.nameHi || item.name)
        : item.name;
      li.innerHTML = `
        <div class="cart-item-info">
          <h4>${productName}</h4>
          <p>${item.pack} • ${item.qty}kg × ${rup(item.rate)}/kg</p>
          <strong>${rup(item.rate * item.qty)}</strong>
        </div>
        <button data-index="${index}" class="remove-btn" aria-label="${currentLanguage === 'en' ? 'Remove item' : 'आइटम हटाएं'}">
          <i class="fas fa-times"></i>
        </button>
      `;
      cartItemsEl.appendChild(li);
    });
  }
  const total = cart.reduce((s, it) => s + (it.rate * it.qty), 0);
  cartTotalEl.textContent = rup(total);
  const totalQty = cart.reduce((s, it) => s + it.qty, 0);
  cartCountEl.textContent = totalQty;
  // Also update mobile cart count
  const mobileCartCount = document.getElementById('cart-count');
  if(mobileCartCount) mobileCartCount.textContent = totalQty;
}

// Cart ops
function addToCart(product, pack, qtyKg){
  const qty = Number(qtyKg);
  if(qty <= 0){ 
    showNotification(
      currentLanguage === 'en' ? 'Please enter a valid quantity' : 'कृपया एक वैध मात्रा दर्ज करें', 
      'error'
    ); 
    return; 
  }
  const key = `${product.id}__${pack}`;
  const rate = product.rates[pack];
  const existing = cart.find(it => it.key === key);
  if(existing){ existing.qty += qty; }
  else {
    cart.push({ key, id:product.id, name:product.name, pack, qty, rate });
  }
  saveCart(); renderCart(); openCartPanel();
  showNotification(
    `${product.name} (${pack}) - ${qty}kg ${currentLanguage === 'en' ? 'added!' : 'जोड़ा गया!'}`, 
    'success'
  );
}

// Panel control
function openCartPanel(){
  cartPanel.classList.add('active');
  mobileNavOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  cartToggle.setAttribute('aria-expanded','true');
  cartPanel.setAttribute('aria-hidden','false');
}
function closeCartPanel(){
  cartPanel.classList.remove('active');
  mobileNavOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
  cartToggle.setAttribute('aria-expanded','false');
  cartPanel.setAttribute('aria-hidden','true');
}

// Mobile menu toggle
function toggleMobileMenu(){
  const isActive = mainNav.classList.toggle('active');
  mobileMenuToggle.classList.toggle('active');
  mobileNavOverlay.classList.toggle('active');
  navActions.classList.toggle('mobile-visible', isActive);
  mobileMenuToggle.setAttribute('aria-expanded', String(isActive));
  const spans = mobileMenuToggle.querySelectorAll('span');
  if(isActive){
    spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    document.body.style.overflow = 'hidden';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Notifications
function showNotification(message, type='success'){
  document.querySelectorAll('.notification').forEach(n => n.remove());
  const el = document.createElement('div');
  el.className = `notification notification-${type}`;
  el.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-${type==='success'?'check-circle': type==='error'?'exclamation-circle':'info-circle'}"></i>
      <span>${message}</span>
    </div>
  `;
  document.body.appendChild(el);
  setTimeout(()=>{ el.style.transform = window.innerWidth<=480 ? 'translateY(0)' : 'translateX(0)'; }, 80);
  setTimeout(()=>{
    el.style.transform = window.innerWidth<=480 ? 'translateY(-100px)' : 'translateX(400px)';
    setTimeout(()=>{ el.remove(); }, 280);
  }, 2800);
}

// Scroll effects
function setupScrollEffects(){
  const header = document.getElementById('site-header');
  if(header){
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100){ header.classList.add('scrolled'); } else { header.classList.remove('scrolled'); }
      if(backToTopBtn){
        if(window.scrollY > 500){ backToTopBtn.classList.add('visible'); } else { backToTopBtn.classList.remove('visible'); }
      }
    });
  }
  const revealEls = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    revealEls.forEach(el => {
      const rectTop = el.getBoundingClientRect().top;
      if(rectTop < window.innerHeight - 120){ el.classList.add('visible'); }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
}

// Resize behavior
function handleResize(){
  if(window.innerWidth > 768){
    if(mainNav.classList.contains('active')) toggleMobileMenu();
  }
}

// Footer filter links
function setupFooterFilterLinks(){
  document.querySelectorAll('[data-filter-link]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const f = a.getAttribute('data-filter-link');
      currentFilter = f;
      document.querySelectorAll('.filter').forEach(b => {
        b.classList.toggle('active', b.dataset.filter === f || (f==='all' && b.dataset.filter==='all'));
        b.setAttribute('aria-selected', String(b.classList.contains('active')));
      });
      renderProducts();
      window.scrollTo({ top: document.getElementById('products').offsetTop - 80, behavior: 'smooth' });
    });
  });
}

// Init
function init(){
  loadCart();
  renderProducts();
  renderCart();
  setupScrollEffects();
  setupFooterFilterLinks();
  document.getElementById('year').textContent = new Date().getFullYear();

  // Language switcher
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchLanguage(btn.dataset.lang);
      renderProducts();
      renderCart();
    });
  });

  // Filters
  filters.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      filters.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
      btn.classList.add('active'); btn.setAttribute('aria-selected','true');
      currentFilter = btn.dataset.filter;
      renderProducts();
    });
  });

  // Search
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.trim();
    renderProducts();
  });

  // Add to cart with custom quantity
  grid.addEventListener('click', e => {
    const card = e.target.closest('.card');
    if(!card) return;
    const productId = card.dataset.id;
    const product = PRODUCTS.find(x => x.id === productId);
    if(!product) return;

    if(e.target.classList.contains('add-btn') || e.target.closest('.add-btn')){
      const packSelect = card.querySelector('.pack-select');
      const qtyInput = card.querySelector('.qty-input');
      const pack = packSelect.value;
      const qty = parseFloat(qtyInput.value);
      
      if(isNaN(qty) || qty <= 0) {
        showNotification(
          currentLanguage === 'en' ? 'Please enter a valid quantity' : 'कृपया एक वैध मात्रा दर्ज करें', 
          'error'
        );
        qtyInput.focus();
        return;
      }
      
      addToCart(product, pack, qty);
      qtyInput.value = ""; // Reset to empty after adding
    }
  });

  // Cart controls
  cartToggle.addEventListener('click', openCartPanel);
  document.getElementById('cart-close').addEventListener('click', closeCartPanel);
  clearCartBtn.addEventListener('click', () => {
    if(cart.length === 0) return;
    if(confirm(currentLanguage === 'en' ? 'Clear your cart?' : 'अपनी कार्ट साफ करें?')){
      cart = []; saveCart(); renderCart();
    }
  });
  cartItemsEl.addEventListener('click', e => {
    if(e.target.classList.contains('remove-btn') || e.target.closest('.remove-btn')){
      const btn = e.target.classList.contains('remove-btn') ? e.target : e.target.closest('.remove-btn');
      const index = parseInt(btn.dataset.index, 10);
      cart.splice(index, 1); saveCart(); renderCart();
    }
  });

  // Checkout -> WhatsApp
  checkoutBtn.addEventListener('click', () => {
    if(cart.length === 0) return showNotification(
      currentLanguage === 'en' ? 'Your cart is empty!' : 'आपकी कार्ट खाली है!', 
      'error'
    );
    let message = currentLanguage === 'en' 
      ? "Hello Ashita Foods! I'd like to place an order:\n\n"
      : "नमस्ते अशिता फूड्स! मैं एक ऑर्डर देना चाहता/चाहती हूं:\n\n";
    
    cart.forEach((item, idx) => {
      message += `${idx+1}. ${item.name} | ${item.pack} • ${item.qty}kg = ${rup(item.rate * item.qty)}\n`;
    });
    message += `\n${currentLanguage === 'en' ? 'Total Amount:' : 'कुल राशि:'} ${rup(cart.reduce((s, it) => s + (it.rate * it.qty), 0))}`;
    message += `\n\n${currentLanguage === 'en' ? 'Delivery Address:' : 'डिलीवरी पता:'} [${currentLanguage === 'en' ? 'Please provide your complete address' : 'कृपया अपना पूरा पता प्रदान करें'}]`;
    message += `\n${currentLanguage === 'en' ? 'Contact Number:' : 'संपर्क नंबर:'} [${currentLanguage === 'en' ? 'Your contact number' : 'आपका संपर्क नंबर'}]`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  });

  // Mobile menu + overlay close
  if(mobileMenuToggle){ mobileMenuToggle.addEventListener('click', toggleMobileMenu); }
  if(mobileNavOverlay){
    mobileNavOverlay.addEventListener('click', () => {
      if(cartPanel.classList.contains('active')) closeCartPanel();
      if(mainNav.classList.contains('active')) toggleMobileMenu();
    });
  }
  if(mainNav){
    mainNav.addEventListener('click', (e) => {
      if(e.target.classList.contains('nav-link') && window.innerWidth <= 768){
        toggleMobileMenu();
      }
    });
  }

  // WhatsApp Buttons
  whatsappBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const message = currentLanguage === 'en'
        ? "Hello Ashita Foods! I'm interested in your papad products and would like to know more."
        : "नमस्ते अशिता फूड्स! मुझे आपके पापड़ उत्पादों में रुचि है और मैं और जानना चाहता/चाहती हूं।";
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    });
  });

  // Back to top
  backToTopBtn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

  // Global clicks to close cart if clicked outside
  document.addEventListener('click', (e) => {
    if(cartPanel.classList.contains('active') &&
       !cartPanel.contains(e.target) &&
       e.target !== cartToggle &&
       !e.target.closest('.btn-cart')){
      closeCartPanel();
    }
  });

  // ESC to close cart
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      if(cartPanel.classList.contains('active')) closeCartPanel();
      if(mainNav.classList.contains('active')) toggleMobileMenu();
    }
  });

  handleResize();
  window.addEventListener('resize', handleResize);
}

// Start
document.addEventListener('DOMContentLoaded', init);