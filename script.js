// Config
const WHATSAPP_NUMBER = "917869595395";
let currentLanguage = 'en';

const PRODUCTS = [
  {
    id: 'p1',
    name: 'Moong Papad - SHAHI',
    nameHi: 'मूंग पापड़ - शाही',
    category: 'moong',
    img: 'assets/Moong Papad - SHAHI.jpeg',
    desc: 'Royal quality with premium chawa saji and aromatic hing.',
    descHi: 'प्रीमियम चावा साजी और सुगंधित हिंग के साथ शाही गुणवत्ता।'
  },
  {
    id: 'p2',
    name: 'Moong Papad - SPECIAL',
    nameHi: 'मूंग पापड़ - स्पेशल',
    category: 'moong',
    img: 'assets/Moong Papad - SPECIAL.jpeg',
    desc: 'Special blend with enhanced hing flavor for distinctive taste.',
    descHi: 'विशिष्ट स्वाद के लिए बढ़े हुए हिंग स्वाद के साथ विशेष मिश्रण।'
  },
  {
    id: 'p3',
    name: 'Moong Punjabi Masala',
    nameHi: 'मूंग पंजाबी मसाला',
    category: 'moong',
    img: 'assets/Moong Punjabi Masala.jpeg',
    desc: 'Robust Punjabi masala flavor with aromatic hing notes.',
    descHi: 'सुगंधित हिंग स्वाद के साथ मजबूत पंजाबी मसाला स्वाद।'
  },
  {
    id: 'p4',
    name: 'Moong Papad - No.1',
    nameHi: 'मूंग पापड़ - नंबर 1',
    category: 'moong',
    img: 'assets/Moong Papad - No.1.jpeg',
    desc: 'Classic everyday papad with balanced flavor and perfect crispness.',
    descHi: 'संतुलित स्वाद और परफेक्ट कुरकुरेपन के साथ क्लासिक रोजमर्रा का पापड़।'
  },
  {
    id: 'p5',
    name: 'Moong Papad - SHAHI JAIN',
    nameHi: 'मूंग पापड़ - शाही जैन',
    category: 'moong',
    img: 'assets/Moong Papad - SHAHI JAIN.jpeg',
    desc: 'Jain-friendly royal papad with rich hing flavor, no onion/garlic.',
    descHi: 'समृद्ध हिंग स्वाद के साथ जैन-अनुकूल शाही पापड़, बिना प्याज/लहसुन।'
  },
  {
    id: 'p6',
    name: 'Moong Papad - PREMIUM',
    nameHi: 'मूंग पापड़ - प्रीमियम',
    category: 'moong',
    img: 'assets/Moong Papad - SHAHI JAIN.jpeg',
    desc: 'Ultra-premium with extra chawa saji for superior taste and texture.',
    descHi: 'श्रेष्ठ स्वाद और बनावट के लिए अतिरिक्त चावा साजी के साथ अल्ट्रा-प्रीमियम।'
  },
  {
    id: 'p7',
    name: 'RAJA Punjabi - Tej Masala',
    nameHi: 'राजा पंजाबी - तेज मसाला',
    category: 'moong',
    img: 'assets/RAJA Punjabi - Tej Masala.jpeg',
    desc: 'Spicy tej masala variant for those who love extra heat.',
    descHi: 'उन लोगों के लिए मसालेदार तेज मसाला वेरिएंट जो अतिरिक्त तीखापन पसंद करते हैं।'
  },
  {
    id: 'p8',
    name: 'DISCO SPECIAL',
    nameHi: 'डिस्को स्पेशल',
    category: 'other',
    img: 'assets/DISCO SPECIAL.jpeg',
    desc: 'Fun mini round papads perfect for parties and kids.',
    descHi: 'पार्टियों और बच्चों के लिए बिल्कुल सही मजेदार मिनी गोल पापड़।'
  },
  {
    id: 'p9',
    name: 'Moong Katran - SPECIAL',
    nameHi: 'मूंग कतरन - स्पेशल',
    category: 'other',
    img: 'assets/Moong Katran - SPECIAL.jpeg',
    desc: 'Crunchy moong flakes ideal for frying or adding to snacks.',
    descHi: 'तलने या स्नैक्स में मिलाने के लिए आदर्श कुरकुरे मूंग फ्लेक्स।'
  },
  {
    id: 'p10',
    name: 'Chana Papad - No.1',
    nameHi: 'चना पापड़ - नंबर 1',
    category: 'chana',
    img: 'assets/Chana Papad - No.1.jpeg',
    desc: 'Classic chana papad with traditional taste and perfect crisp.',
    descHi: 'पारंपरिक स्वाद और परफेक्ट कुरकुरेपन के साथ क्लासिक चना पापड़।'
  },
  {
    id: 'p11',
    name: 'Chana Papad - SHAHI',
    nameHi: 'चना पापड़ - शाही',
    category: 'chana',
    img: 'assets/Chana Papad - SHAHI.jpeg',
    desc: 'Royal chana papad with khar and hing for authentic flavor.',
    descHi: 'ऑथेंटिक स्वाद के लिए खार और हिंग के साथ शाही चना पापड़।'
  },
  {
    id: 'p12',
    name: 'Chana Papad - SPECIAL',
    nameHi: 'चना पापड़ - स्पेशल',
    category: 'chana',
    img: 'assets/Chana Papad - SPL.jpeg',
    desc: 'Special sweet variant with khar for unique taste profile.',
    descHi: 'अनोखे स्वाद प्रोफाइल के लिए खार के साथ विशेष मीठा वेरिएंट।'
  },
  {
    id: 'p13',
    name: 'Chana-SPECIAL Garlic',
    nameHi: 'चना-स्पेशल लहसुन',
    category: 'chana',
    img: 'assets/Chana-SPECIAL Garlic.jpeg',
    desc: 'Garlic infused chana papad with aromatic garlic flavor.',
    descHi: 'सुगंधित लहसुन स्वाद के साथ लहसुन युक्त चना पापड़।'
  },
  {
    id: 'p14',
    name: 'Moong-Shahi Garlic',
    nameHi: 'मूंग-शाही लहसुन',
    category: 'moong',
    img: 'assets/Moong-Shahi Garlic.jpeg',
    desc: 'Premium moong papad with generous garlic infusion.',
    descHi: 'उदार लहसुन इन्फ्यूजन के साथ प्रीमियम मूंग पापड़।'
  },
  {
    id: 'p15',
    name: 'Dollar Moong',
    nameHi: 'डॉलर मूंग',
    category: 'other',
    img: 'assets/Dollar Moong.jpg',
    desc: 'Uniform dollar-shaped moong papads for elegant presentation.',
    descHi: 'स्टाइलिश प्रस्तुति के लिए एकसमान डॉलर के आकार के मूंग पापड़।'
  },
  {
    id: 'p16',
    name: 'Dollar Chana',
    nameHi: 'डॉलर चना',
    category: 'other',
    img: 'assets/Dollar Chana.jpeg',
    desc: 'Round chana discs with bold taste and golden crispness.',
    descHi: 'बोल्ड स्वाद और गोल्डन कुरकुरेपन के साथ गोल चना डिस्क।'
  }
];

// DOM
const grid = document.getElementById('product-grid');
const filters = document.querySelectorAll('.filter');
const searchInput = document.getElementById('search');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mainNav = document.getElementById('main-nav');
const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
const navActions = document.querySelector('.nav-actions');
const backToTopBtn = document.getElementById('back-to-top');
const whatsappBtns = [
  document.getElementById('whatsapp-btn'),
  document.getElementById('whatsapp-btn-mobile'),
  document.getElementById('hero-whatsapp'),
  document.getElementById('contact-wa'),
  document.getElementById('footer-whatsapp')
].filter(Boolean);
const langButtons = document.querySelectorAll('.lang-btn');

let currentFilter = 'all';
let currentSearch = '';

// Utils
function rup(n){ return '₹' + Number(n).toLocaleString('en-IN', { maximumFractionDigits: 0 }); }

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

// Render products
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

    // Use bilingual names and descriptions
    const productName = currentLanguage === 'hi' ? (p.nameHi || p.name) : p.name;
    const productDesc = currentLanguage === 'hi' ? (p.descHi || p.desc) : p.desc;

    card.innerHTML = `
      <img src="${p.img}" alt="${productName}" loading="lazy" onerror="this.onerror=null; this.src='assets/papad.jpg';">
      <h3>${productName}</h3>
      <p class="desc">${productDesc}</p>
      
      <div class="order-info">
        <small style="color: var(--text-light); font-style: italic;">
          <i class="fas fa-info-circle"></i> 
          ${currentLanguage === 'en' 
            ? 'Minimum order quantity: 35kg • Contact for pricing' 
            : 'न्यूनतम ऑर्डर मात्रा: 35 किलो • मूल्य के लिए संपर्क करें'}
        </small>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Mobile menu toggle
function toggleMobileMenu(){
  const isActive = mainNav.classList.toggle('active');
  mobileMenuToggle.classList.toggle('active');
  mobileNavOverlay.classList.toggle('active');
  navActions.classList.toggle('mobile-visible', isActive);
  
  // Update aria attributes
  mobileMenuToggle.setAttribute('aria-expanded', String(isActive));
  
  if(isActive){
    document.body.style.overflow = 'hidden';
    mobileMenuToggle.querySelectorAll('span')[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
    mobileMenuToggle.querySelectorAll('span')[1].style.opacity = '0';
    mobileMenuToggle.querySelectorAll('span')[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    setTimeout(() => {
      const firstNavLink = mainNav.querySelector('.nav-link');
      if(firstNavLink) firstNavLink.focus();
    }, 100);
  } else {
    document.body.style.overflow = 'auto';
    mobileMenuToggle.querySelectorAll('span')[0].style.transform = 'none';
    mobileMenuToggle.querySelectorAll('span')[1].style.opacity = '1';
    mobileMenuToggle.querySelectorAll('span')[2].style.transform = 'none';
    mobileMenuToggle.focus();
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
  renderProducts();
  setupScrollEffects();
  setupFooterFilterLinks();
  document.getElementById('year').textContent = new Date().getFullYear();

  // Language switcher
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchLanguage(btn.dataset.lang);
      renderProducts();
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

  // Mobile menu + overlay close
  if(mobileMenuToggle){ mobileMenuToggle.addEventListener('click', toggleMobileMenu); }
  if(mobileNavOverlay){
    mobileNavOverlay.addEventListener('click', () => {
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
        ? "Hello Ashita Foods! I'm interested in your papad products and would like to know more about pricing and availability."
        : "नमस्ते अशिता फूड्स! मुझे आपके पापड़ उत्पादों में रुचि है और मैं मूल्य और उपलब्धता के बारे में और जानना चाहता/चाहती हूं।";
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    });
  });

  // Back to top
  backToTopBtn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

  // ESC to close mobile menu
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      if(mainNav.classList.contains('active')) toggleMobileMenu();
    }
  });

  handleResize();
  window.addEventListener('resize', handleResize);
}

// Start
document.addEventListener('DOMContentLoaded', init);