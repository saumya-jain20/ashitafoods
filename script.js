// Config
const WHATSAPP_NUMBER = "917869595395";
const STORAGE_KEY = 'ashita_cart_v5';

// Products with concise, clearer descriptions and explicit per‑kg by pack
// Note: rates keys are packaging options; values are per‑kg prices.
const PRODUCTS = [
  {
    id: 'p1',
    name: 'Moong Papad - PREMIUM',
    category: 'moong',
    img: 'assets/papad.jpg',
    rates: { '200g': 232, '500g': 227 },
    desc: 'Rich moong dal, ultra‑crisp bite, premium spice balance. Great as an everyday luxury.'
  },
  {
    id: 'p2',
    name: 'Moong Papad - SHAHI',
    category: 'moong',
    img: 'assets/papad.jpg',
    rates: { '200g': 221, '500g': 216 },
    desc: 'Royal, rounded flavor with gentle heat; pairs well with mains and snacks.'
  },
  {
    id: 'p3',
    name: 'Moong Papad - SHAHI JAIN',
    category: 'moong',
    img: 'assets/papad.jpg',
    rates: { '200g': 209, '500g': 204 },
    desc: 'Jain‑friendly (no onion/garlic), light seasoning, clean moong taste.'
  },
  {
    id: 'p4',
    name: 'Punjabi Masala Papad',
    category: 'moong',
    img: 'assets/papad.jpg',
    rates: { '200g': 176, '500g': 171 },
    desc: 'Bold masala profile with a lively kick; great for toppings and chaat.'
  },
  {
    id: 'p5',
    name: 'Moong Papad - SPECIAL',
    category: 'moong',
    img: 'assets/papad.jpg',
    rates: { '200g': 160, '500g': 155 },
    desc: 'Daily‑use classic: balanced spice, even roasting, dependable crunch.'
  },
  {
    id: 'p6',
    name: 'RAJA Punjabi - Tej Masala',
    category: 'moong',
    img: 'assets/papad.jpg',
    rates: { '200g': 146, '500g': 141 },
    desc: 'Spice‑forward tej masala for heat lovers; bold yet crisp.'
  },
  {
    id: 'p7',
    name: 'Moong Papad - No.1',
    category: 'moong',
    img: 'assets/papad.jpg',
    rates: { '200g': 131, '500g': 126 },
    desc: 'Best‑seller balance of taste and texture; versatile with any meal.'
  },
  {
    id: 'p8',
    name: 'Chana Papad - SHAHI',
    category: 'chana',
    img: 'assets/papad.jpg',
    rates: { '200g': 188, '500g': 183 },
    desc: 'Thicker chana body, robust crunch, full‑bodied, traditional flavor.'
  },
  {
    id: 'p9',
    name: 'Chana SPECIAL Garlic',
    category: 'chana',
    img: 'assets/papad.jpg',
    rates: { '200g': 165, '500g': 160 },
    desc: 'Aromatic garlic lift on nutty chana base; snack‑worthy aroma.'
  },
  {
    id: 'p10',
    name: 'Chana - SPECIAL',
    category: 'chana',
    img: 'assets/papad.jpg',
    rates: { '200g': 153, '500g': 148 },
    desc: 'Classic chana notes, mild spice, satisfying crisp for daily plates.'
  },
  {
    id: 'p11',
    name: 'Chana Papad - No.1',
    category: 'chana',
    img: 'assets/papad.jpg',
    rates: { '200g': 148, '500g': 143 },
    desc: 'Clean chana taste with comforting aroma; dependable crispness.'
  },
  {
    id: 'p12',
    name: 'Moong Katran - SPECIAL',
    category: 'other',
    img: 'assets/papad.jpg',
    rates: { '1kg': 135 },
    desc: 'Moong flakes for deep‑fry or mix‑ins; crunchy base for snacks.'
  },
  {
    id: 'p13',
    name: 'Disco - SPECIAL',
    category: 'other',
    img: 'assets/papad.jpg',
    rates: { '1kg': 158 },
    desc: 'Mini round papads; party‑friendly, kid‑approved, crisp and fun.'
  },
  {
    id: 'p14',
    name: 'Dollar Moong',
    category: 'moong',
    img: 'assets/papad.jpg',
    rates: { '1kg': 137 },
    desc: 'Uniform "dollar" shape; neat presentation with rich moong flavor.'
  },
  {
    id: 'p15',
    name: 'Dollar Chana',
    category: 'chana',
    img: 'assets/papad.jpg',
    rates: { '1kg': 147 },
    desc: 'Round chana discs; bold taste, golden crisp for special servings.'
  },
  {
    id: 'p16',
    name: 'Moong Papad (E)',
    category: 'moong',
    img: 'assets/papad.jpg',
    rates: { '200g': 162, '500g': 157 },
    desc: 'Value choice with authentic moong taste for everyday use.'
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

let cart = [];
let currentFilter = 'all';
let currentSearch = '';

// Utils
function rup(n){ return '₹' + Number(n).toLocaleString('en-IN', { maximumFractionDigits: 0 }); }
function loadCart(){ try{ const raw=localStorage.getItem(STORAGE_KEY); if(raw) cart=JSON.parse(raw);}catch(e){ cart=[]; } }
function saveCart(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); }

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

// Render products: with packaging and quantity input in single line
function renderProducts(){
  const items = filterProducts();
  grid.innerHTML = '';
  if(items.length === 0){
    grid.innerHTML = `
      <div class="no-products">
        <i class="fas fa-search"></i>
        <h3>No products found</h3>
        <p>Try adjusting your search or filter</p>
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

    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='assets/placeholder.jpg'">
      <h3>${p.name}</h3>
      <p class="desc">${p.desc}</p>
      <div class="price-small">
        <i class="fas fa-tag"></i> ${priceDisplay}
      </div>
      <div class="actions">
        <div class="packaging-quantity-row">
          <span class="packaging-label">Packaging Size:</span>
          <select class="pack-select" aria-label="Select packaging type">${packOptions}</select>
        </div>
        <div class="packaging-quantity-row">
          <span class="quantity-label">Quantity (kg):</span>
          <input type="number" class="qty-input" min="0.1" step="0.1" placeholder="Enter kg" value="">
        </div>
        <button class="add-btn" aria-label="Add to cart">
          <i class="fas fa-cart-plus"></i> Add to Cart
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
      li.innerHTML = `
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>${item.pack} • ${item.qty}kg × ${rup(item.rate)}/kg</p>
          <strong>${rup(item.rate * item.qty)}</strong>
        </div>
        <button data-index="${index}" class="remove-btn" aria-label="Remove item">
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
}

// Cart ops
function addToCart(product, pack, qtyKg){
  const qty = Number(qtyKg);
  if(qty <= 0){ showNotification('Please enter a valid quantity', 'error'); return; }
  const key = `${product.id}__${pack}`;
  const rate = product.rates[pack];
  const existing = cart.find(it => it.key === key);
  if(existing){ existing.qty += qty; }
  else {
    cart.push({ key, id:product.id, name:product.name, pack, qty, rate });
  }
  saveCart(); renderCart(); openCartPanel();
  showNotification(`${product.name} (${pack}) - ${qty}kg added!`, 'success');
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
        showNotification('Please enter a valid quantity', 'error');
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
    if(confirm('Clear your cart?')){
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
    if(cart.length === 0) return showNotification('Your cart is empty!', 'error');
    let message = "Hello Ashita Foods! I'd like to place an order:\n\n";
    cart.forEach((item, idx) => {
      message += `${idx+1}. ${item.name} | ${item.pack} • ${item.qty}kg = ${rup(item.rate * item.qty)}\n`;
    });
    message += `\nTotal Amount: ${rup(cart.reduce((s, it) => s + (it.rate * it.qty), 0))}`;
    message += `\n\nDelivery Address: [Please provide your complete address]`;
    message += `\nContact Number: [Your contact number]`;
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
      const message = "Hello Ashita Foods! I'm interested in your papad products and would like to know more.";
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