const WHATSAPP_NUMBER = "917869595395";
const STORAGE_KEY = 'ashita_cart_v2';

const PRODUCTS = [
  { 
    id: 'p1', 
    name: 'Moong Papad - PREMIUM', 
    category: 'moong', 
    img: 'assets/papad.jpg', 
    rates: { '200g': 232, '500g': 227 }, 
    desc: 'Crispy golden papad made from premium moong dal with rich taste & perfect crunch. Ideal for daily consumption and special occasions.' 
  },
  { 
    id: 'p2', 
    name: 'Moong Papad - SHAHI', 
    category: 'moong', 
    img: 'assets/papad.jpg', 
    rates: { '200g': 221, '500g': 216 }, 
    desc: 'Royal blend of moong dal and mild spices, crafted with a homely touch for authentic traditional flavor.' 
  },
  { 
    id: 'p3', 
    name: 'Moong Papad - SHAHI JAIN', 
    category: 'moong', 
    img: 'assets/papad.jpg', 
    rates: { '200g': 209, '500g': 204 }, 
    desc: 'Jain-friendly papad without garlic/onion — light, perfectly roasted with traditional taste.' 
  },
  { 
    id: 'p4', 
    name: 'Punjabi Masala Papad', 
    category: 'moong', 
    img: 'assets/papad.jpg', 
    rates: { '200g': 176, '500g': 171 }, 
    desc: 'Zesty Punjabi-style papad with bold masala flavors that complement any meal perfectly.' 
  },
  { 
    id: 'p5', 
    name: 'Moong Papad - SPECIAL', 
    category: 'moong', 
    img: 'assets/papad.jpg', 
    rates: { '200g': 160, '500g': 155 }, 
    desc: 'Daily-use moong papad — perfectly crunchy, tasty, and light with balanced seasoning.' 
  },
  { 
    id: 'p6', 
    name: 'RAJA Punjabi - Tej Masala', 
    category: 'moong', 
    img: 'assets/papad.jpg', 
    rates: { '200g': 146, '500g': 141 }, 
    desc: 'Strong tej masala punch — specially crafted for spice lovers who enjoy bold flavors.' 
  },
  { 
    id: 'p7', 
    name: 'Moong Papad - No.1', 
    category: 'moong', 
    img: 'assets/papad.jpg', 
    rates: { '200g': 131, '500g': 126 }, 
    desc: 'Perfectly balanced taste and crispness — our top seller with consistent quality.' 
  },
  { 
    id: 'p8', 
    name: 'Chana Papad - SHAHI', 
    category: 'chana', 
    img: 'assets/papad.jpg', 
    rates: { '200g': 188, '500g': 183 }, 
    desc: 'Rich chana dal papad — thick, crunchy and full-bodied with authentic traditional taste.' 
  },
  { 
    id: 'p9', 
    name: 'Chana SPECIAL Garlic', 
    category: 'chana', 
    img: 'assets/papad.jpg', 
    rates: { '200g': 165, '500g': 160 }, 
    desc: 'Garlic-infused chana papad with irresistible aroma and robust flavor profile.' 
  },
  { 
    id: 'p10', 
    name: 'Chana - SPECIAL', 
    category: 'chana', 
    img: 'assets/papad.jpg', 
    rates: { '200g': 153, '500g': 148 }, 
    desc: 'Traditional chana dal papad, mildly spiced with nutty undertones and perfect crispness.' 
  },
  { 
    id: 'p11', 
    name: 'Chana Papad - No.1', 
    category: 'chana', 
    img: 'assets/papad.jpg', 
    rates: { '200g': 148, '500g': 143 }, 
    desc: 'Crisp and classic — perfectly balanced taste & aroma for everyday consumption.' 
  },
  { 
    id: 'p12', 
    name: 'Moong Katran - SPECIAL', 
    category: 'other', 
    img: 'assets/papad.jpg', 
    rates: { '1kg': 135 }, 
    desc: 'Moong dal flakes — ideal for deep-frying or as a snack base with versatile usage.' 
  },
  { 
    id: 'p13', 
    name: 'Disco - SPECIAL', 
    category: 'other', 
    img: 'assets/papad.jpg', 
    rates: { '1kg': 158 }, 
    desc: 'Mini round Disco papad — perfect for parties, snacks & kids with fun shape and great taste.' 
  },
  { 
    id: 'p14', 
    name: 'Dollar Moong', 
    category: 'moong', 
    img: 'assets/papad.jpg', 
    rates: { '1kg': 137 }, 
    desc: 'Dollar-shaped moong papad — uniform texture & rich taste with unique presentation.' 
  },
  { 
    id: 'p15', 
    name: 'Dollar Chana', 
    category: 'chana', 
    img: 'assets/papad.jpg', 
    rates: { '1kg': 147 }, 
    desc: 'Round chana papad with bold taste and golden crisp — perfect for special occasions.' 
  },
  { 
    id: 'p16', 
    name: 'Moong Papad (E)', 
    category: 'moong', 
    img: 'assets/papad.jpg', 
    rates: { '200g': 162, '500g': 157 }, 
    desc: 'Economical moong papad — value-packed with authentic flavor for everyday use.' 
  }
];

// DOM Elements
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
  document.getElementById('contact-wa')
].filter(Boolean);

let cart = [];
let currentFilter = 'all';
let currentSearch = '';

// Utility Functions
function rup(n) { 
  return '₹' + Number(n).toLocaleString('en-IN', { maximumFractionDigits: 0 }); 
}

function loadCart() {
  try { 
    const raw = localStorage.getItem(STORAGE_KEY); 
    if (raw) cart = JSON.parse(raw); 
  } catch(e) { 
    cart = []; 
  }
}

function saveCart() { 
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); 
}

// Filter Products Function
function filterProducts() {
  let filteredProducts = PRODUCTS;
  
  // Apply category filter
  if (currentFilter !== 'all') {
    filteredProducts = filteredProducts.filter(product => product.category === currentFilter);
  }
  
  // Apply search filter
  if (currentSearch) {
    const searchTerm = currentSearch.toLowerCase();
    filteredProducts = filteredProducts.filter(product => 
      product.name.toLowerCase().includes(searchTerm) || 
      product.desc.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    );
  }
  
  return filteredProducts;
}

// Render Products
function renderProducts() {
  const productsToShow = filterProducts();
  grid.innerHTML = '';
  
  if (productsToShow.length === 0) {
    grid.innerHTML = `
      <div class="no-products" style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; color: var(--text-light);">
        <i class="fas fa-search" style="font-size: 4rem; color: var(--border); margin-bottom: 1.5rem;"></i>
        <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--text-light);">No products found</h3>
        <p>Try adjusting your search or filter criteria</p>
      </div>
    `;
    return;
  }
  
  productsToShow.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.id = p.id;
    
    const packOptions = Object.keys(p.rates)
      .map(s => `<option value="${s}">${s}</option>`)
      .join('');
    
    const priceDisplay = Object.entries(p.rates)
      .map(([k, v]) => `${k}: ${rup(v)}/kg`)
      .join(' • ');
    
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='assets/placeholder.jpg'">
      <h3>${p.name}</h3>
      <p class="desc">${p.desc}</p>
      <div class="price-small">
        <i class="fas fa-tag"></i> ${priceDisplay}
      </div>
      <div class="actions">
        <select class="pack-select">${packOptions}</select>
        <input type="number" class="kg-input" placeholder="Qty in kg" min="0.1" step="0.1" value="1">
        <button class="add-btn">
          <i class="fas fa-cart-plus"></i> Add
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Initialize
function init() {
  loadCart();
  renderProducts();
  renderCart();
  setupEventListeners();
  setupScrollEffects();
  
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
}

// Setup Event Listeners
function setupEventListeners() {
  // Filters - Fixed event listeners
  filters.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active class from all filters
      filters.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked filter
      btn.classList.add('active');
      
      // Update current filter
      currentFilter = btn.dataset.filter;
      
      // Re-render products with new filter
      renderProducts();
    });
  });

  // Search - Fixed event listener
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.trim();
    renderProducts();
  });

  // Add to Cart
  grid.addEventListener('click', e => {
    const card = e.target.closest('.card'); 
    if (!card) return;
    
    const productId = card.dataset.id;
    const product = PRODUCTS.find(x => x.id === productId);
    
    if (e.target.classList.contains('add-btn') || e.target.closest('.add-btn')) {
      const packSelect = card.querySelector('.pack-select');
      const kgInput = card.querySelector('.kg-input');
      const pack = packSelect.value;
      const qty = kgInput.value;

      if (isNaN(qty) || qty <= 0) {
        alert('Please enter a valid quantity');
        return;
      }
      
      addToCart(product, pack, qty);
    }
  });

  // Cart Management
  cartToggle.addEventListener('click', openCartPanel);
  document.getElementById('cart-close').addEventListener('click', closeCartPanel);

  clearCartBtn.addEventListener('click', () => { 
    if (cart.length === 0) return;
    if (confirm('Are you sure you want to clear your cart?')) {
      cart = []; 
      saveCart(); 
      renderCart(); 
    }
  });

  // Remove item from cart
  cartItemsEl.addEventListener('click', e => {
    if (e.target.classList.contains('remove-btn') || e.target.closest('.remove-btn')) {
      const button = e.target.classList.contains('remove-btn') ? e.target : e.target.closest('.remove-btn');
      const index = parseInt(button.dataset.index);
      cart.splice(index, 1);
      saveCart();
      renderCart();
    }
  });

  // Checkout
  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return showNotification('Your cart is empty!', 'error');
    
    let message = "Hello Ashita Foods! I'd like to place an order:\n\n";
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} | ${item.pack} • ${item.qty}kg = ${rup(item.rate * item.qty)}\n`;
    });
    message += `\n*Total Amount:* ${rup(cart.reduce((sum, item) => sum + (item.rate * item.qty), 0))}`;
    message += `\n\n*Delivery Address:* [Please provide your complete address]`;
    message += `\n*Contact Number:* [Your contact number]`;
    
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  });

  // Mobile Menu
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  }
  
  if (mobileNavOverlay) {
    mobileNavOverlay.addEventListener('click', toggleMobileMenu);
  }

  if (mainNav) {
    mainNav.addEventListener('click', (e) => {
      if (e.target.classList.contains('nav-link') && window.innerWidth <= 768) {
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

  // Back to Top
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Close cart when clicking outside
  document.addEventListener('click', (e) => {
    if (cartPanel.classList.contains('active') && 
        !cartPanel.contains(e.target) && 
        e.target !== cartToggle &&
        !e.target.closest('.btn-cart')) {
      closeCartPanel();
    }
  });

  // Close cart on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cartPanel.classList.contains('active')) {
      closeCartPanel();
    }
  });
}

// Setup Scroll Effects
function setupScrollEffects() {
  const header = document.getElementById('site-header');
  
  if (header) {
    // Header scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      // Back to top button
      if (backToTopBtn) {
        if (window.scrollY > 500) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      }
    });
  }

  // Scroll reveal
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        el.classList.add('visible');
      }
    });
  };
  
  window.addEventListener('scroll', revealOnScroll);
  // Initial check
  revealOnScroll();
}

// Add to Cart Function
function addToCart(product, pack, qty) {
  qty = Number(qty);
  if (qty <= 0) {
    showNotification('Please enter a valid quantity', 'error');
    return;
  }
  
  const key = `${product.id}__${pack}`;
  const rate = product.rates[pack];
  const existingItem = cart.find(item => item.key === key);
  
  if (existingItem) {
    existingItem.qty += qty;
  } else {
    cart.push({ 
      key, 
      id: product.id, 
      name: product.name, 
      pack, 
      qty, 
      rate 
    });
  }
  
  saveCart(); 
  renderCart(); 
  openCartPanel();
  showNotification(`${product.name} added to cart!`, 'success');
}

// Render Cart
function renderCart() {
  cartItemsEl.innerHTML = '';
  
  if (cart.length === 0) {
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
  
  const total = cart.reduce((sum, item) => sum + (item.rate * item.qty), 0);
  cartTotalEl.textContent = rup(total);
  cartCountEl.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

// Cart Panel Functions
function openCartPanel() { 
  cartPanel.classList.add('active');
  mobileNavOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartPanel() { 
  cartPanel.classList.remove('active');
  mobileNavOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const isActive = mainNav.classList.toggle('active');
  mobileMenuToggle.classList.toggle('active');
  mobileNavOverlay.classList.toggle('active');
  navActions.classList.toggle('mobile-visible', isActive);
  
  const spans = mobileMenuToggle.querySelectorAll('span');
  if (isActive) {
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

// Notification System
function showNotification(message, type = 'success') {
  // Remove existing notifications
  document.querySelectorAll('.notification').forEach(notif => notif.remove());
  
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
      <span>${message}</span>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = window.innerWidth <= 480 ? 'translateY(0)' : 'translateX(0)';
  }, 100);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = window.innerWidth <= 480 ? 'translateY(-100px)' : 'translateX(400px)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Handle window resize
function handleResize() {
  if (window.innerWidth > 768) {
    // Close mobile menu if open
    if (mainNav.classList.contains('active')) {
      toggleMobileMenu();
    }
  }
  
  // Adjust button text visibility
  const btnTexts = document.querySelectorAll('.btn-text');
  if (window.innerWidth <= 768) {
    btnTexts.forEach(text => {
      if (!text.classList.contains('keep-text')) {
        text.style.display = 'none';
      }
    });
  } else {
    btnTexts.forEach(text => {
      text.style.display = 'inline';
    });
  }
}

window.addEventListener('resize', handleResize);

// Initialize button text on load
document.addEventListener('DOMContentLoaded', () => {
  handleResize();
});

// Debug function to check if filters are working
function debugFilters() {
  console.log('Available categories in PRODUCTS:');
  const categories = [...new Set(PRODUCTS.map(p => p.category))];
  console.log(categories);
  
  console.log('Current filter:', currentFilter);
  console.log('Filtered products:', filterProducts());
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Export for debugging
window.debugFilters = debugFilters;