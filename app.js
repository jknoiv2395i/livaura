/**
 * LIVAURA (livaura.furniture) - Luxury Architectural Furniture Web Application
 * Core Interactive Logic & State Management
 * Bespoke Studio Edition (30+ Years Heritage • Kirti Nagar, New Delhi)
 */

// Indian Rupee currency formatter (fallback utility)
function formatINR(amount) {
  if (amount === undefined || amount === null) return 'Price on Request';
  const num = Math.round(Number(amount));
  return '₹' + num.toLocaleString('en-IN');
}

// 1. PRODUCTS DATA (BESPOKE CURATION - ALL PRICES ON REQUEST)
const PRODUCTS = [
  {
    id: 1,
    name: "Aura Fluted Walnut Sideboard & Credenza",
    category: "living",
    rating: 4.9,
    reviewsCount: 114,
    badge: "Artisan Handcrafted",
    description: "Masterpiece curved console credenza featuring premium hand-polished walnut with continuous vertical fluted accents, curved corner doors, and seamless soft-closing cabinetry.",
    dimensions: "68\"W x 20\"D x 34\"H (Custom dimensions available)",
    materials: "Solid Hardwood Frame, Fluted American Walnut Veneer, High-Luster Mirror Lacquer Finish",
    leadTime: "Crafted in Kirti Nagar Studio - Available to Order",
    tags: ["sideboard", "credenza", "buffet", "console", "walnut", "fluted", "storage", "living room"],
    images: [
      "images/product-1.jpg",
      "images/product-3.jpg",
      "images/product-2.jpg"
    ],
    colors: [
      { name: "Polished Walnut", hex: "#633c22", bgImage: "images/product-1.jpg" },
      { name: "Fluted Cream", hex: "#e7e0d3", bgImage: "images/product-2.jpg" }
    ]
  },
  {
    id: 2,
    name: "Celeste Fluted Dresser & Vanity Console",
    category: "bedroom",
    rating: 4.8,
    reviewsCount: 68,
    badge: "Workshop Exclusive",
    description: "Architectural fluted storage console with curved tambour side cupboards, three flush undermount central drawers, and satin brushed champagne gold perimeter trims.",
    dimensions: "58\"W x 19\"D x 32\"H (Custom sizing available)",
    materials: "Engineered Hardwood Core, Italian Polyurethane Matte Lacquer, Brushed Brass Inlay",
    leadTime: "Artisan Crafted - Custom Made to Order",
    tags: ["dresser", "vanity", "console", "bedroom", "drawers", "fluted", "storage", "wardrobe companion"],
    images: [
      "images/product-2.jpg",
      "images/product-3.jpg",
      "images/product-4.jpg"
    ],
    colors: [
      { name: "Cashmere Cream", hex: "#e5ded4", bgImage: "images/product-2.jpg" },
      { name: "Honed Walnut", hex: "#5c3d28", bgImage: "images/product-1.jpg" }
    ]
  },
  {
    id: 3,
    name: "Palais Fluted Calacatta Marble Buffet",
    category: "living",
    rating: 5.0,
    reviewsCount: 92,
    badge: "Best Seller",
    description: "Luxury curved credenza featuring an authentic honed white Calacatta marble slab, fine fluted ribbing across four doors, and bespoke cylindrical solid brass handles and legs.",
    dimensions: "72\"W x 18\"D x 33\"H (Custom sizing available)",
    materials: "Honed Calacatta Marble Slab, Fluted Ash Timber, Solid Brushed Satin Brass Hardware",
    leadTime: "Studio Handcrafted in Kirti Nagar",
    tags: ["marble", "buffet", "credenza", "dining", "sideboard", "calacatta", "brass", "living room"],
    images: [
      "images/product-3.jpg",
      "images/product-4.jpg",
      "images/product-1.jpg"
    ],
    colors: [
      { name: "Calacatta Sage White", hex: "#eceae5", bgImage: "images/product-3.jpg" },
      { name: "Rich Walnut", hex: "#5c3d28", bgImage: "images/product-1.jpg" }
    ]
  },
  {
    id: 4,
    name: "Sereno Curved Marble-Top Nightstand",
    category: "bedroom",
    rating: 4.9,
    reviewsCount: 83,
    badge: "Trending",
    description: "Curved bedside table crowned with natural charcoal-veined marble. Includes dual silent soft-closing storage drawers with brushed antique brass bar hardware.",
    dimensions: "22\"W x 18\"D x 24\"H",
    materials: "Honed Natural Grey Marble, Lacquered Birchwood, Brushed Brass Hardware",
    leadTime: "Studio Handcrafted in Kirti Nagar",
    tags: ["nightstand", "bedside table", "bedroom", "marble", "curved", "side table", "bed companion"],
    images: [
      "images/product-4.jpg",
      "images/product-3.jpg",
      "images/product-2.jpg"
    ],
    colors: [
      { name: "Warm Alabaster", hex: "#f0ece1", bgImage: "images/product-4.jpg" },
      { name: "Smoked Oak", hex: "#4a3b32", bgImage: "images/product-1.jpg" }
    ]
  },
  {
    id: 5,
    name: "Terra Curved Bouclé Loveseat",
    category: "living",
    rating: 4.9,
    reviewsCount: 145,
    badge: "Signature Design",
    description: "Cocooning organic curves and tactile rust-terracotta textured bouclé fabric. Accompanied by trio of bespoke contrast velvet and linen throw pillows.",
    dimensions: "74\"W x 38\"D x 31\"H (Custom length available)",
    materials: "Italian Textured Terracotta Bouclé, Kiln-Dried Hardwood Frame, Down-Feel Core",
    leadTime: "Custom Made to Order in 2-3 Weeks",
    tags: ["sofa", "curved sofa", "loveseat", "bouclé", "living room", "terracotta", "lounge"],
    images: [
      "images/product-5.jpg",
      "images/product-6.jpg",
      "images/product-8.jpg"
    ],
    colors: [
      { name: "Rust Terracotta", hex: "#b25838", bgImage: "images/product-5.jpg" },
      { name: "Heather Grey", hex: "#a4a8ad", bgImage: "images/product-7.jpg" }
    ]
  },
  {
    id: 6,
    name: "Terra Modular 2-Seater Architectural Sofa",
    category: "living",
    rating: 4.8,
    reviewsCount: 77,
    badge: "Studio Collection",
    description: "Sculptured modern two-piece split seating sofa featuring continuous low-profile back contours, plush deep cushions, and tailored designer pillows.",
    dimensions: "78\"W x 40\"D x 31\"H",
    materials: "Heavyweight Rust Bouclé, High-Resilience High-Density Reflex Foam, Sinuous Spring Suspension",
    leadTime: "Bespoke Workshop Production",
    tags: ["sofa", "modular sofa", "curved sofa", "living room", "boucle", "seating"],
    images: [
      "images/product-6.jpg",
      "images/product-5.jpg",
      "images/product-8.jpg"
    ],
    colors: [
      { name: "Rust Terracotta", hex: "#b25838", bgImage: "images/product-6.jpg" },
      { name: "Ivory Bouclé", hex: "#f3f0e8", bgImage: "images/product-7.jpg" }
    ]
  },
  {
    id: 7,
    name: "Grand Lounge Modular Sectional Suite",
    category: "living",
    rating: 5.0,
    reviewsCount: 52,
    badge: "Curated Suite",
    description: "Expansive architect-designed modular sectional configuration with generous depth, plush back bolsters, integrated low-profile divider tray, and complimentary cocktail tables.",
    dimensions: "142\"W x 112\"D x 30\"H (Configurable modules)",
    materials: "Commercial-Grade Heather Grey Performance Weave, Kiln-Dried Teak Internal Framing, High-Density Down Core",
    leadTime: "Custom Built in Kirti Nagar Studio",
    tags: ["sofa", "sectional", "modular", "lounge", "living room", "curved sofa", "suite"],
    images: [
      "images/product-7.jpg",
      "images/product-8.jpg",
      "images/product-6.jpg"
    ],
    colors: [
      { name: "Heather Grey", hex: "#a8adb5", bgImage: "images/product-7.jpg" },
      { name: "Terracotta Rust", hex: "#b25838", bgImage: "images/product-5.jpg" }
    ]
  },
  {
    id: 8,
    name: "Elysian Curated Salon Living Ensemble",
    category: "living",
    rating: 4.9,
    reviewsCount: 39,
    badge: "Architectural",
    description: "A masterfully balanced salon arrangement including twin curved terracotta bouclé sofas, high-back ergonomic lounge armchairs, and minimalist timber accent tables.",
    dimensions: "Tailored layout for spaces 18'x14' and larger",
    materials: "Italian Bouclé, Linen-Cotton Blends, Solid Walnut Accent Legs, High-Resiliency Foam",
    leadTime: "Made to Order in Studio",
    tags: ["ensemble", "living room", "salon", "sofa", "armchair", "curved sofa", "curated suite"],
    images: [
      "images/product-8.jpg",
      "images/product-7.jpg",
      "images/product-5.jpg"
    ],
    colors: [
      { name: "Terracotta & Slate", hex: "#a3563b", bgImage: "images/product-8.jpg" }
    ]
  },
  {
    id: 9,
    name: "Royale Tufted Chesterfield Wingback Chair",
    category: "living",
    rating: 4.9,
    reviewsCount: 118,
    badge: "Workshop Handcrafted",
    description: "Authentic workshop-crafted high-back wing chair featuring painstaking deep diamond button tufting, rolled scroll arms, thick box-edge spring cushion, and hand-carved cabriole walnut legs.",
    dimensions: "34\"W x 35\"D x 44\"H",
    materials: "Hand-Dyed Slate Teal Cotton-Linen Weave, Handcrafted Solid Walnut Frame, Coil-Spring Foundation",
    leadTime: "Master Handcrafted in Kirti Nagar",
    tags: ["chair", "artisan chair", "wingback", "chesterfield", "armchair", "tufted", "accent chair"],
    images: [
      "images/product-9.jpg",
      "images/product-1.jpg",
      "images/product-4.jpg"
    ],
    colors: [
      { name: "Slate Teal Linen", hex: "#5b7782", bgImage: "images/product-9.jpg" },
      { name: "Terracotta Bouclé", hex: "#b25838", bgImage: "images/product-5.jpg" }
    ]
  },
  {
    id: 10,
    name: "Atelier Solid Espresso Storage Coffee Table",
    category: "living",
    rating: 4.8,
    reviewsCount: 64,
    badge: "Master Joinery",
    description: "Monolithic low-profile coffee table in deep espresso finish, featuring dual open under-shelf display cubbies for art books and decorative bowls.",
    dimensions: "48\"W x 26\"D x 16\"H",
    materials: "Solid American Oak, Deep Espresso Protective Matte Stain, Concealed Glides",
    leadTime: "Crafted in Kirti Nagar Workshop",
    tags: ["coffee table", "table", "center table", "living room", "oak", "espresso"],
    images: [
      "images/product-7.jpg",
      "images/product-8.jpg",
      "images/product-1.jpg"
    ],
    colors: [
      { name: "Espresso Oak", hex: "#2b211b", bgImage: "images/product-7.jpg" }
    ]
  },
  {
    id: 11,
    name: "Aura Cantilever Teak Drink Tables (Pair)",
    category: "decor",
    rating: 4.9,
    reviewsCount: 86,
    badge: "Set of 2",
    description: "Pair of organic guitar-pick shaped side tables with solid teak hardwood tops, matte black steel stems, and heavy stable pedestal bases designed to tuck under sofa edges.",
    dimensions: "16\"W x 14\"D x 23\"H each",
    materials: "Solid Teak Top with Clear Protective Oil, Powder-Coated Steel Pedestal",
    leadTime: "Crafted in Kirti Nagar Workshop",
    tags: ["side table", "drink table", "teak", "accent table", "living room", "pedestal"],
    images: [
      "images/product-7.jpg",
      "images/product-8.jpg",
      "images/product-4.jpg"
    ],
    colors: [
      { name: "Warm Teak & Black", hex: "#8c542a", bgImage: "images/product-7.jpg" }
    ]
  },
  // NEW PRODUCTS (Using Real Photos Provided by Client & Rich Search Tags)
  {
    id: 12,
    name: "Royal Curved Fluted Round Velvet Bed",
    category: "bedroom",
    rating: 5.0,
    reviewsCount: 47,
    badge: "Signature Commission",
    description: "A monumental centerpiece round luxury bed featuring a circular upholstered platform foundation, an enveloping curved wall-height vertical fluted velvet headboard panel, and architectural arched display niches.",
    dimensions: "84\" Diameter Round Base x 7'H Headboard (Bespoke Sizing)",
    materials: "Kiln-Dried Hardwood Core, Premium Burgundy Velvet Upholstery, High-Density Reflex Core, Acoustic Wall Panelling",
    leadTime: "Bespoke Made to Order in Kirti Nagar Studio",
    tags: ["bed", "round bed", "luxury bed", "bedroom", "velvet bed", "fluted headboard", "platform bed"],
    images: [
      "images/real-round-bed.jpg",
      "images/real-bedroom-bed.jpg"
    ],
    colors: [
      { name: "Burgundy Velvet", hex: "#6d1d24", bgImage: "images/real-round-bed.jpg" },
      { name: "Champagne Cream", hex: "#e5ded4", bgImage: "images/real-bedroom-bed.jpg" }
    ]
  },
  {
    id: 13,
    name: "Grand Haven Master Bed & Chaise Suite",
    category: "bedroom",
    rating: 4.9,
    reviewsCount: 63,
    badge: "Masterpiece Suite",
    description: "Complete architectural master bedroom sanctuary featuring an upholstered king-size platform bed with fluted brass-inlay wall cladding, twin integrated soft-closing nightstands, and a sculptural curved cream lounge chaise.",
    dimensions: "King Bed (78\"W x 84\"L) with 11' Extended Acoustic Panelling",
    materials: "Solid Teak Internal Framing, Italian Cashmere Velvet & Bouclé, Brushed Champagne Gold Inlays",
    leadTime: "Custom Site-Measured & Built in Studio",
    tags: ["bed", "master bed", "bedroom suite", "king bed", "headboard", "chaise lounge", "bedroom"],
    images: [
      "images/real-bedroom-bed.jpg",
      "images/real-round-bed.jpg"
    ],
    colors: [
      { name: "Cashmere Cream & Olive", hex: "#5a594f", bgImage: "images/real-bedroom-bed.jpg" }
    ]
  },
  {
    id: 14,
    name: "Bespoke Architectural Wardrobe & Console Suite",
    category: "bedroom",
    rating: 5.0,
    reviewsCount: 88,
    badge: "Custom Built-In",
    description: "Full-height floor-to-ceiling bespoke modular wardrobe crafted with flush soft-closing doors, custom elongated brushed stainless steel bar handles, central recessed TV media console nook, and 6 soft-close deep drawers.",
    dimensions: "12'W x 9'H x 24\"D (Tailored to your exact room height & width)",
    materials: "Marine-Grade HDHMR Core, Scratch-Resistant Warm Taupe Acrylic Laminate, Natural Oak Woodgrain Inlay, Blum/Hettich Soft-Close Hardware",
    leadTime: "Custom Manufactured & Installed by Studio Artisans",
    tags: ["wardrobe", "almirah", "closet", "cupboard", "bedroom storage", "tv unit", "bedroom", "drawers"],
    images: [
      "images/real-wardrobe.jpg",
      "images/real-tv-console.jpg"
    ],
    colors: [
      { name: "Warm Taupe & Natural Oak", hex: "#9b8d82", bgImage: "images/real-wardrobe.jpg" }
    ]
  },
  {
    id: 15,
    name: "Aura Fluted Wall Media & TV Console Unit",
    category: "living",
    rating: 4.9,
    reviewsCount: 71,
    badge: "Media Architecture",
    description: "Architectural wall-mounted floating TV entertainment console finished in satin white lacquer and marble-look countertop, complemented by vertical fluted back wall panelling and integrated subwoofer/amplifier compartments.",
    dimensions: "8'W x 18\"D x 18\"H with 8' Fluted Back Cladding",
    materials: "High-Density Core, Italian Polyurethane Satin Lacquer, Calacatta Composite Stone, Acoustic Fluting",
    leadTime: "Studio Handcrafted & Custom Installed",
    tags: ["tv console", "tv unit", "media console", "entertainment unit", "living room", "credenza", "fluted"],
    images: [
      "images/real-tv-console.jpg",
      "images/product-3.jpg"
    ],
    colors: [
      { name: "Satin White & Cream Fluting", hex: "#f5f3ee", bgImage: "images/real-tv-console.jpg" }
    ]
  },
  {
    id: 16,
    name: "Sacred Sanctum Handcrafted Teak Mandir / Pooja Unit",
    category: "decor",
    rating: 5.0,
    reviewsCount: 96,
    badge: "Handcrafted Sacred",
    description: "Contemporary architectural Pooja mandir crafted in solid teak wood with delicate brass lattice jali, hanging brass temple bells, pull-out brass prayer tray, drawer storage for sacred articles, and warm concealed ambient lighting.",
    dimensions: "42\"W x 20\"D x 68\"H (Custom sizing available)",
    materials: "Grade-A Natural Kiln-Dried Teak Wood, Solid Brass Inlays & Hardware, Concealed 3000K Warm LED",
    leadTime: "Handcrafted with Reverence in Kirti Nagar Studio",
    tags: ["pooja unit", "mandir", "temple", "pooja mandir", "pooja cabinet", "prayer unit", "sacred", "decor"],
    images: [
      "images/product-1.jpg",
      "images/product-3.jpg"
    ],
    colors: [
      { name: "Sacred Teak & Brass", hex: "#633c22", bgImage: "images/product-1.jpg" }
    ]
  },
  {
    id: 17,
    name: "Curved Artisan Lounge Chaise Chair",
    category: "decor",
    rating: 4.9,
    reviewsCount: 54,
    badge: "Artisan Handcrafted",
    description: "Sculptural organic curved chaise lounge chair in cashmere cream upholstery. Built with sweeping ergonomic contours for cozy reading and relaxed bedroom or living room styling.",
    dimensions: "64\"W x 34\"D x 28\"H",
    materials: "Curved Solid Hardwood Shell, Cashmere Cream Performance Fabric, High-Density Reflex Core",
    leadTime: "Master Handcrafted in Kirti Nagar",
    tags: ["artisan chair", "chair", "chaise lounge", "curved chair", "accent chair", "lounge", "bedroom"],
    images: [
      "images/real-bedroom-bed.jpg",
      "images/product-9.jpg"
    ],
    colors: [
      { name: "Cashmere Cream", hex: "#f0ece3", bgImage: "images/real-bedroom-bed.jpg" }
    ]
  }
];

// 2. APP STATE
let state = {
  cart: JSON.parse(localStorage.getItem('livaura_cart') || localStorage.getItem('lumen_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('livaura_wishlist') || localStorage.getItem('lumen_wishlist') || '[]'),
  currentCategory: 'all',
  currentSort: 'popular',
  searchQuery: '',
  quickViewProduct: null,
  quickViewSelectedColor: null,
  quickViewQty: 1
};

// 3. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  updateWishlistCount();
  setupEventListeners();
  setupCustomizerInteractive();
  lucide.createIcons();
  initAutoInquiryPopup(6000);
});

// Helper for Search Modal Popular Chips
window.setSearchFilter = function(term) {
  state.searchQuery = term.toLowerCase().trim();
  const searchModal = document.getElementById('search-modal');
  if (searchModal) searchModal.classList.add('hidden');
  
  const searchInputs = document.querySelectorAll('.search-input-field');
  searchInputs.forEach(i => i.value = term);

  renderProducts();
  const coll = document.getElementById('collection');
  if (coll) coll.scrollIntoView({ behavior: 'smooth' });
};

// 4. EVENT LISTENERS
function setupEventListeners() {
  // Category tabs
  document.querySelectorAll('.cat-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.cat-filter-btn').forEach(b => {
        b.classList.remove('bg-stone-900', 'text-white', 'shadow-md');
        b.classList.add('bg-stone-100', 'text-stone-700', 'hover:bg-stone-200');
      });
      btn.classList.add('bg-stone-900', 'text-white', 'shadow-md');
      btn.classList.remove('bg-stone-100', 'text-stone-700', 'hover:bg-stone-200');
      
      state.currentCategory = btn.dataset.category;
      renderProducts();
    });
  });

  // Sort dropdown
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.currentSort = e.target.value;
      renderProducts();
    });
  }

  // Search Input in Navbar and Modal
  const searchInputs = document.querySelectorAll('.search-input-field');
  searchInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      renderProducts();
    });
  });

  // Cart Drawer open/close
  const cartToggleBtns = document.querySelectorAll('.cart-toggle-btn');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartCloseBtn = document.getElementById('cart-close-btn');

  const openCart = () => {
    cartDrawer.classList.remove('translate-x-full');
    cartOverlay.classList.remove('opacity-0', 'pointer-events-none');
    document.body.classList.add('overflow-hidden');
  };

  const closeCart = () => {
    cartDrawer.classList.add('translate-x-full');
    cartOverlay.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('overflow-hidden');
  };

  cartToggleBtns.forEach(b => b.addEventListener('click', openCart));
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  // Search Modal
  const searchModal = document.getElementById('search-modal');
  const searchOpenBtns = document.querySelectorAll('.search-toggle-btn');
  const searchCloseBtn = document.getElementById('search-close-btn');

  const openSearch = () => {
    searchModal.classList.remove('hidden');
    setTimeout(() => {
      const inp = document.getElementById('modal-search-input');
      if (inp) inp.focus();
    }, 50);
  };

  searchOpenBtns.forEach(btn => btn.addEventListener('click', openSearch));

  if (searchCloseBtn) {
    searchCloseBtn.addEventListener('click', () => {
      searchModal.classList.add('hidden');
    });
  }

  // Ctrl+K / Cmd+K search shortcut
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearch();
    }
  });

  // Dynamic Header Scroll Transition
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 25) {
        header.classList.add('nav-scrolled');
      } else {
        header.classList.remove('nav-scrolled');
      }
    }, { passive: true });
  }

  // Quick View Modal Close
  const qvModal = document.getElementById('quick-view-modal');
  const qvCloseBtn = document.getElementById('quick-view-close');
  if (qvCloseBtn) {
    qvCloseBtn.addEventListener('click', () => {
      qvModal.classList.add('hidden');
    });
  }
  if (qvModal) {
    qvModal.addEventListener('click', (e) => {
      if (e.target === qvModal) qvModal.classList.add('hidden');
    });
  }

  // Checkout / Quotation Modal
  const checkoutModal = document.getElementById('checkout-modal');
  const checkoutBtn = document.getElementById('checkout-proceed-btn');
  const checkoutCloseBtn = document.getElementById('checkout-close-btn');

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast("Your selection list is empty!", "info");
        return;
      }
      closeCart();
      populateCheckoutSummary();
      checkoutModal.classList.remove('hidden');
    });
  }

  if (checkoutCloseBtn) {
    checkoutCloseBtn.addEventListener('click', () => {
      checkoutModal.classList.add('hidden');
    });
  }

  // Checkout Form Submit
  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      checkoutModal.classList.add('hidden');
      showOrderSuccessModal();
      // Clear cart
      state.cart = [];
      saveCart();
      updateCartUI();
    });
  }

  // Mobile slide-over drawer toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
  const mobileNavCloseBtn = document.getElementById('mobile-nav-close-btn');

  const openMobileNav = () => {
    if (mobileNav && mobileNavOverlay) {
      mobileNav.classList.remove('-translate-x-full');
      mobileNavOverlay.classList.remove('opacity-0', 'pointer-events-none');
      document.body.classList.add('overflow-hidden');
    }
  };

  window.closeMobileNav = () => {
    if (mobileNav && mobileNavOverlay) {
      mobileNav.classList.add('-translate-x-full');
      mobileNavOverlay.classList.add('opacity-0', 'pointer-events-none');
      document.body.classList.remove('overflow-hidden');
    }
  };

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileNav);
  if (mobileNavCloseBtn) mobileNavCloseBtn.addEventListener('click', window.closeMobileNav);
  if (mobileNavOverlay) mobileNavOverlay.addEventListener('click', window.closeMobileNav);

  // Newsletter form
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        showToast("Thank you for joining The Livaura Studio Circle! We will be in touch shortly.", "success");
        emailInput.value = '';
      }
    });
  }

  // Inquiry Modal Backdrop and Form
  const inquiryModal = document.getElementById('inquiry-modal');
  if (inquiryModal) {
    inquiryModal.addEventListener('click', (e) => {
      if (e.target === inquiryModal) closeInquiryModal();
    });
  }

  const inquiryForm = document.getElementById('inquiry-form');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('inquiry-name')?.value || 'Client';
      const refId = `INQ-${Math.floor(10000 + Math.random() * 90000)}`;

      closeInquiryModal();
      showToast(`Thank you, ${name}! Your inquiry (${refId}) has been received. Our Kirti Nagar studio team will contact you shortly.`, "success");
      inquiryForm.reset();
    });
  }
}

// 5. PRODUCT RENDERING & FILTERING (NO PRICES SHOWN)
function renderProducts() {
  const grid = document.getElementById('products-grid');
  const countBadge = document.getElementById('product-count-badge');
  if (!grid) return;

  const q = state.searchQuery;
  let filtered = PRODUCTS.filter(p => {
    const matchesCat = state.currentCategory === 'all' || p.category === state.currentCategory;
    const matchesSearch = !q || 
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.materials.toLowerCase().includes(q) ||
      (p.tags && p.tags.some(t => t.toLowerCase().includes(q)));
    return matchesCat && matchesSearch;
  });

  // Sorting
  if (state.currentSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (state.currentSort === 'alpha') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    // popular (default)
    filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
  }

  if (countBadge) {
    countBadge.textContent = `${filtered.length} piece${filtered.length === 1 ? '' : 's'} available`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <i data-lucide="package-search" class="w-16 h-16 mx-auto text-stone-300 stroke-[1.2] mb-4"></i>
        <h3 class="text-xl font-serif text-stone-800 font-medium">No matching furniture pieces</h3>
        <p class="text-stone-500 text-sm mt-1">Try keywords like 'wardrobe', 'bed', 'pooja unit', 'curved sofa', or 'credenza'.</p>
        <button onclick="resetFilters()" class="mt-4 px-5 py-2.5 bg-stone-900 text-white text-xs uppercase tracking-widest rounded-full hover:bg-stone-800 transition">
          Clear Filters
        </button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const isWishlisted = state.wishlist.includes(product.id);

    return `
      <div class="group flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 relative" data-product-id="${product.id}">
        
        <!-- Image & Badges Container -->
        <div class="relative w-full aspect-[4/3] bg-stone-100 overflow-hidden cursor-pointer" onclick="openQuickView(${product.id})">
          <img 
            src="${product.images[0]}" 
            alt="${product.name}" 
            id="product-card-img-${product.id}"
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />

          <!-- Badges -->
          <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
            ${product.badge ? `
              <span class="px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase bg-stone-900/90 text-white backdrop-blur-md rounded-md shadow-sm">
                ${product.badge}
              </span>
            ` : ''}
          </div>

          <!-- Quick Action Buttons -->
          <div class="absolute top-3 right-3 flex flex-col gap-2 z-10">
            <!-- Wishlist Button -->
            <button 
              onclick="event.stopPropagation(); toggleWishlist(${product.id})"
              class="w-9 h-9 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-md text-stone-700 hover:text-rose-600 hover:bg-white shadow-sm transition"
              title="Add to Wishlist"
            >
              <i data-lucide="heart" class="w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}"></i>
            </button>

            <!-- Quick View Icon -->
            <button 
              onclick="event.stopPropagation(); openQuickView(${product.id})"
              class="w-9 h-9 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-md text-stone-700 hover:text-stone-900 hover:bg-white shadow-sm transition opacity-0 group-hover:opacity-100 duration-200"
              title="Quick View"
            >
              <i data-lucide="eye" class="w-4 h-4"></i>
            </button>
          </div>

          <!-- Quick Inquire / Add Hover Overlay -->
          <div class="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex gap-2">
            <button 
              onclick="event.stopPropagation(); openInquiryModal('${product.name}')"
              class="flex-1 py-2 px-3 bg-stone-900/95 hover:bg-black text-white text-[11px] font-medium tracking-wider uppercase rounded-xl backdrop-blur-md shadow-lg flex items-center justify-center gap-1.5 transition"
            >
              <i data-lucide="message-square" class="w-3.5 h-3.5 text-amber-400"></i>
              Inquire
            </button>
            <button 
              onclick="event.stopPropagation(); quickAddToCart(${product.id})"
              class="py-2 px-3 bg-white/95 hover:bg-white text-stone-900 text-[11px] font-medium tracking-wider uppercase rounded-xl backdrop-blur-md shadow-lg flex items-center justify-center gap-1 transition"
              title="Add to selection list"
            >
              <i data-lucide="plus" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>

        <!-- Details Container -->
        <div class="p-3 sm:p-5 flex flex-col flex-grow justify-between">
          <div>
            <!-- Category and Rating -->
            <div class="flex items-center justify-between text-xs text-stone-500 mb-1 sm:mb-1.5">
              <span class="uppercase tracking-widest text-[9px] sm:text-[10px] font-semibold text-stone-400">${product.category}</span>
              <div class="flex items-center gap-1 text-amber-500 font-medium">
                <i data-lucide="star" class="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400"></i>
                <span class="text-stone-700 text-[11px] sm:text-xs">${product.rating}</span>
                <span class="text-stone-400 text-[10px] sm:text-[11px] hidden sm:inline">(${product.reviewsCount})</span>
              </div>
            </div>

            <!-- Title -->
            <h3 
              onclick="openQuickView(${product.id})" 
              class="font-serif text-xs sm:text-base font-semibold text-stone-900 hover:text-stone-600 transition cursor-pointer line-clamp-1"
            >
              ${product.name}
            </h3>

            <!-- Short Specs -->
            <p class="text-[10px] sm:text-xs text-stone-500 mt-0.5 line-clamp-1">${product.materials}</p>
          </div>

          <!-- Swatches & Price on Request Bottom -->
          <div class="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-stone-100 flex items-center justify-between gap-1.5">
            <!-- Swatches -->
            <div class="flex items-center gap-1 sm:gap-1.5">
              ${product.colors.map((c, idx) => `
                <button 
                  onclick="switchCardColor(${product.id}, '${c.bgImage}', this)"
                  class="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-stone-300 ring-offset-1 hover:ring-1 hover:ring-stone-400 transition ${idx === 0 ? 'ring-2 ring-stone-800' : ''}" 
                  style="background-color: ${c.hex};"
                  title="${c.name}"
                ></button>
              `).join('')}
            </div>

            <!-- Price on Request & Inquire Action (NO NUMERICAL PRICES) -->
            <div class="flex items-center gap-1.5">
              <span class="text-[10px] sm:text-[11px] font-semibold text-stone-700 bg-stone-100 px-2 py-0.5 rounded border border-stone-200">Price on Request</span>
              <button 
                onclick="event.stopPropagation(); openInquiryModal('${product.name}')"
                class="px-2.5 py-1 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider transition"
                title="Inquire about ${product.name}"
              >
                Inquire
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function switchCardColor(productId, imgUrl, buttonEl) {
  const img = document.getElementById(`product-card-img-${productId}`);
  if (img && imgUrl) {
    img.src = imgUrl;
  }
  const parent = buttonEl.parentElement;
  parent.querySelectorAll('button').forEach(b => b.classList.remove('ring-2', 'ring-stone-800'));
  buttonEl.classList.add('ring-2', 'ring-stone-800');
}

function resetFilters() {
  state.currentCategory = 'all';
  state.searchQuery = '';
  const searchInputs = document.querySelectorAll('.search-input-field');
  searchInputs.forEach(i => i.value = '');

  document.querySelectorAll('.cat-filter-btn').forEach(b => {
    b.classList.remove('bg-stone-900', 'text-white', 'shadow-md');
    b.classList.add('bg-stone-100', 'text-stone-700', 'hover:bg-stone-200');
    if (b.dataset.category === 'all') {
      b.classList.add('bg-stone-900', 'text-white', 'shadow-md');
      b.classList.remove('bg-stone-100', 'text-stone-700');
    }
  });
  renderProducts();
}

// 6. QUICK VIEW MODAL (NO PRICES SHOWN)
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  state.quickViewProduct = product;
  state.quickViewSelectedColor = product.colors[0];
  state.quickViewQty = 1;

  const modal = document.getElementById('quick-view-modal');
  const container = document.getElementById('quick-view-content');

  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <!-- Media Gallery -->
      <div class="space-y-4">
        <div class="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-inner">
          <img id="qv-main-image" src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-cover transition duration-300" />
        </div>
        <!-- Thumbnails -->
        <div class="flex gap-3 overflow-x-auto pb-1">
          ${product.images.map((img, idx) => `
            <button 
              onclick="document.getElementById('qv-main-image').src = '${img}'; this.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('ring-2', 'ring-stone-900')); this.classList.add('ring-2', 'ring-stone-900')"
              class="w-16 h-16 rounded-xl overflow-hidden border border-stone-200 flex-shrink-0 ${idx === 0 ? 'ring-2 ring-stone-900' : ''}"
            >
              <img src="${img}" class="w-full h-full object-cover" />
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Product Information -->
      <div class="flex flex-col space-y-5">
        <div>
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-xs uppercase tracking-widest text-stone-400 font-semibold">${product.category}</span>
            <div class="flex items-center gap-1 text-amber-500 text-xs font-semibold">
              <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400"></i>
              <span>${product.rating}</span>
              <span class="text-stone-400 font-normal">(${product.reviewsCount} reviews)</span>
            </div>
          </div>
          <h2 class="font-serif text-2xl lg:text-3xl font-bold text-stone-900">${product.name}</h2>
          
          <div class="mt-3 flex items-center gap-3">
            <span class="text-base font-semibold text-stone-900 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200">Price on Request</span>
            <span class="text-xs text-stone-500">Custom Dimensions & Finishes Available</span>
          </div>
        </div>

        <p class="text-stone-600 text-sm leading-relaxed">${product.description}</p>

        <!-- Specifications Pill Box -->
        <div class="bg-stone-50 rounded-xl p-3.5 space-y-2 border border-stone-200/60 text-xs">
          <div class="flex justify-between"><span class="text-stone-400">Dimensions:</span> <span class="font-medium text-stone-800">${product.dimensions}</span></div>
          <div class="flex justify-between"><span class="text-stone-400">Materials:</span> <span class="font-medium text-stone-800">${product.materials}</span></div>
          <div class="flex justify-between"><span class="text-stone-400">Production:</span> <span class="font-medium text-emerald-700 flex items-center gap-1"><i data-lucide="check" class="w-3 h-3"></i> ${product.leadTime}</span></div>
        </div>

        <!-- Color Selection -->
        <div>
          <label class="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-2">
            Finish / Upholstery: <span id="qv-color-name" class="font-normal text-stone-500">${product.colors[0].name}</span>
          </label>
          <div class="flex gap-2.5">
            ${product.colors.map((c, i) => `
              <button 
                onclick="selectQvColor(${i})"
                class="w-7 h-7 rounded-full border border-stone-300 ring-offset-2 transition ${i === 0 ? 'ring-2 ring-stone-900 scale-110' : 'hover:scale-105'}"
                style="background-color: ${c.hex};"
                title="${c.name}"
                id="qv-color-swatch-${i}"
              ></button>
            `).join('')}
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
          <!-- Request Price Button -->
          <button 
            onclick="openInquiryModal('${product.name}'); document.getElementById('quick-view-modal').classList.add('hidden');"
            class="flex-1 py-3 px-6 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 shadow-lg transition"
          >
            <i data-lucide="message-square" class="w-4 h-4 text-amber-400"></i>
            Request Price & Consultation
          </button>

          <!-- Add to Selection List -->
          <button 
            onclick="addQvToCart()"
            class="py-3 px-5 bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300 rounded-xl text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition"
          >
            <i data-lucide="plus" class="w-4 h-4"></i>
            Add to Selection
          </button>
        </div>

        <!-- Studio Pillars -->
        <div class="grid grid-cols-3 gap-2 pt-2 border-t border-stone-100 text-[11px] text-stone-500 text-center">
          <div class="flex flex-col items-center gap-1">
            <i data-lucide="award" class="w-4 h-4 text-amber-700"></i>
            <span>30+ Years Trust</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <i data-lucide="sparkles" class="w-4 h-4 text-stone-700"></i>
            <span>Bespoke Sizing</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <i data-lucide="map-pin" class="w-4 h-4 text-stone-700"></i>
            <span>Kirti Nagar Studio</span>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  lucide.createIcons();
}

function selectQvColor(index) {
  if (!state.quickViewProduct) return;
  const col = state.quickViewProduct.colors[index];
  state.quickViewSelectedColor = col;
  
  const nameEl = document.getElementById('qv-color-name');
  if (nameEl) nameEl.textContent = col.name;

  const mainImg = document.getElementById('qv-main-image');
  if (mainImg && col.bgImage) mainImg.src = col.bgImage;

  state.quickViewProduct.colors.forEach((_, i) => {
    const sw = document.getElementById(`qv-color-swatch-${i}`);
    if (sw) {
      if (i === index) {
        sw.classList.add('ring-2', 'ring-stone-900', 'scale-110');
      } else {
        sw.classList.remove('ring-2', 'ring-stone-900', 'scale-110');
      }
    }
  });
}

function addQvToCart() {
  if (!state.quickViewProduct) return;
  addToCart(
    state.quickViewProduct.id, 
    state.quickViewSelectedColor ? state.quickViewSelectedColor.name : state.quickViewProduct.colors[0].name,
    1
  );
  document.getElementById('quick-view-modal').classList.add('hidden');
}

// 7. SELECTION / INQUIRY BAG MANAGEMENT
function quickAddToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const defaultColor = product.colors[0].name;
  addToCart(productId, defaultColor, 1);
}

function addToCart(productId, colorName, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = state.cart.findIndex(
    item => item.id === productId && item.selectedColor === colorName
  );

  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += quantity;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      image: product.images[0],
      selectedColor: colorName,
      quantity: quantity
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added "${product.name}" to your selection!`, "success");

  // Animate cart button
  document.querySelectorAll('.cart-toggle-btn').forEach(b => {
    b.classList.add('scale-125');
    setTimeout(() => b.classList.remove('scale-125'), 200);
  });
}

function updateCartQuantity(index, delta) {
  if (!state.cart[index]) return;
  state.cart[index].quantity += delta;
  if (state.cart[index].quantity <= 0) {
    state.cart.splice(index, 1);
  }
  saveCart();
  updateCartUI();
}

function removeCartItem(index) {
  if (!state.cart[index]) return;
  const removedName = state.cart[index].name;
  state.cart.splice(index, 1);
  saveCart();
  updateCartUI();
  showToast(`Removed "${removedName}" from selection`, "info");
}

function saveCart() {
  localStorage.setItem('livaura_cart', JSON.stringify(state.cart));
}

function updateCartUI() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartBadgeEls = document.querySelectorAll('.cart-badge');
  cartBadgeEls.forEach(el => {
    el.textContent = totalCount;
    if (totalCount > 0) {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  });

  const cartList = document.getElementById('cart-items-container');
  const cartFooter = document.getElementById('cart-footer');
  const emptyCartState = document.getElementById('cart-empty-state');
  const piecesCountEl = document.getElementById('co-pieces-count');

  if (piecesCountEl) {
    piecesCountEl.textContent = `${totalCount} piece${totalCount === 1 ? '' : 's'}`;
  }

  if (!cartList) return;

  if (state.cart.length === 0) {
    cartList.innerHTML = '';
    if (emptyCartState) emptyCartState.classList.remove('hidden');
    if (cartFooter) cartFooter.classList.add('hidden');
    return;
  }

  if (emptyCartState) emptyCartState.classList.add('hidden');
  if (cartFooter) cartFooter.classList.remove('hidden');

  cartList.innerHTML = state.cart.map((item, index) => {
    return `
      <div class="flex items-center gap-4 py-4 border-b border-stone-100 last:border-none">
        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-xl object-cover bg-stone-100 flex-shrink-0 border border-stone-200/80" />
        <div class="flex-1 min-w-0">
          <h4 class="font-medium text-stone-900 text-sm truncate">${item.name}</h4>
          <p class="text-xs text-stone-500 mt-0.5">Finish: <span class="text-stone-700">${item.selectedColor}</span></p>
          <div class="flex items-center justify-between mt-2">
            <div class="flex items-center border border-stone-200 rounded-lg bg-stone-50">
              <button onclick="updateCartQuantity(${index}, -1)" class="px-2 py-0.5 text-stone-600 hover:text-stone-900 text-xs">-</button>
              <span class="px-2 text-xs font-semibold">${item.quantity}</span>
              <button onclick="updateCartQuantity(${index}, 1)" class="px-2 py-0.5 text-stone-600 hover:text-stone-900 text-xs">+</button>
            </div>
            <span class="text-[11px] font-semibold text-stone-700 bg-stone-100 px-2 py-0.5 rounded border border-stone-200">Price on Request</span>
          </div>
        </div>
        <button onclick="removeCartItem(${index})" class="text-stone-400 hover:text-rose-500 p-1 transition" title="Remove item">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// 8. WISHLIST MANAGEMENT
function toggleWishlist(productId) {
  const index = state.wishlist.indexOf(productId);
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast(`Removed "${product.name}" from wishlist`, "info");
  } else {
    state.wishlist.push(productId);
    showToast(`Added "${product.name}" to wishlist!`, "success");
  }

  localStorage.setItem('livaura_wishlist', JSON.stringify(state.wishlist));
  updateWishlistCount();
  renderProducts();
}

function updateWishlistCount() {
  const count = state.wishlist.length;
  document.querySelectorAll('.wishlist-badge').forEach(el => {
    el.textContent = count;
    if (count > 0) {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  });
}

function openWishlistModal() {
  const modal = document.getElementById('wishlist-modal');
  const container = document.getElementById('wishlist-items-container');
  if (!modal || !container) return;

  const wishlistedProducts = PRODUCTS.filter(p => state.wishlist.includes(p.id));

  if (wishlistedProducts.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center">
        <i data-lucide="heart" class="w-12 h-12 mx-auto text-stone-300 stroke-[1.5] mb-3"></i>
        <h4 class="font-serif text-lg text-stone-800">Your wishlist is empty</h4>
        <p class="text-xs text-stone-500 mt-1">Tap the heart icon on any piece you love to save it here.</p>
      </div>
    `;
  } else {
    container.innerHTML = wishlistedProducts.map(p => `
      <div class="flex items-center justify-between gap-4 py-3 border-b border-stone-100 last:border-none">
        <div class="flex items-center gap-3">
          <img src="${p.images[0]}" class="w-14 h-14 object-cover rounded-lg bg-stone-100" />
          <div>
            <h5 class="text-sm font-semibold text-stone-900">${p.name}</h5>
            <span class="text-xs font-semibold text-stone-600">Price on Request</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="addToCart(${p.id}, '${p.colors[0].name}'); toggleWishlist(${p.id}); openWishlistModal();" class="px-3 py-1.5 bg-stone-900 text-white rounded-lg text-xs font-medium hover:bg-stone-800 transition">
            Add to Selection
          </button>
          <button onclick="toggleWishlist(${p.id}); openWishlistModal();" class="p-1.5 text-stone-400 hover:text-rose-500 transition">
            <i data-lucide="x" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    `).join('');
  }

  modal.classList.remove('hidden');
  lucide.createIcons();
}

function closeWishlistModal() {
  const modal = document.getElementById('wishlist-modal');
  if (modal) modal.classList.add('hidden');
}

// 8.5. BESPOKE INQUIRY & DESIGN CONCIERGE MODAL
let autoInquiryTimer = null;

function initAutoInquiryPopup(delayMs = 6000) {
  autoInquiryTimer = setTimeout(() => {
    const inquiryModal = document.getElementById('inquiry-modal');
    const qvModal = document.getElementById('quick-view-modal');
    const checkoutModal = document.getElementById('checkout-modal');

    const isAnotherModalOpen = 
      (qvModal && !qvModal.classList.contains('hidden')) ||
      (checkoutModal && !checkoutModal.classList.contains('hidden'));

    if (inquiryModal && inquiryModal.classList.contains('hidden') && !isAnotherModalOpen) {
      openInquiryModal();
    }
  }, delayMs);
}

function openInquiryModal(productName = '') {
  if (autoInquiryTimer) {
    clearTimeout(autoInquiryTimer);
    autoInquiryTimer = null;
  }
  const modal = document.getElementById('inquiry-modal');
  if (!modal) return;
  
  const productInput = document.getElementById('inquiry-product');
  if (productInput) {
    productInput.value = productName;
  }

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  lucide.createIcons();

  setTimeout(() => {
    if (window.innerWidth >= 768) {
      const nameInp = document.getElementById('inquiry-name');
      if (nameInp) nameInp.focus();
    }
  }, 100);
}

function closeInquiryModal() {
  if (autoInquiryTimer) {
    clearTimeout(autoInquiryTimer);
    autoInquiryTimer = null;
  }
  const modal = document.getElementById('inquiry-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

// 9. CHECKOUT SUMMARY & ORDER FLOW
function populateCheckoutSummary() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const piecesCountEl = document.getElementById('co-pieces-count');
  if (piecesCountEl) {
    piecesCountEl.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;
  }
}

function showOrderSuccessModal() {
  const modal = document.getElementById('order-success-modal');
  const orderNumber = `LA-${Math.floor(100000 + Math.random() * 900000)}`;
  const orderNumEl = document.getElementById('order-number-display');
  if (orderNumEl) orderNumEl.textContent = orderNumber;
  if (modal) modal.classList.remove('hidden');

  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

function closeSuccessModal() {
  const modal = document.getElementById('order-success-modal');
  if (modal) modal.classList.add('hidden');
}

// 10. INTERACTIVE MATERIAL CUSTOMIZER
const CUSTOMIZER_DATA = {
  fabrics: {
    boucle: {
      name: "Rust Terracotta Bouclé",
      image: "images/product-5.jpg",
      description: "Textured Italian nubby yarn with cozy architectural tactile warmth and soil-resistant treatment."
    },
    cognac: {
      name: "Polished Walnut Veneer",
      image: "images/product-1.jpg",
      description: "Master-polished American walnut with mirror lacquer finish and fluted architectural ribbing."
    },
    forest: {
      name: "Slate Teal Chesterfield Linen",
      image: "images/product-9.jpg",
      description: "Hand-dyed organic slate teal woven linen with traditional deep diamond button tufting."
    },
    charcoal: {
      name: "Heather Grey Modular Weave",
      image: "images/product-7.jpg",
      description: "Heavyweight commercial-grade Heather Grey weave tailored for modular lounge seating."
    }
  },
  woodBases: {
    oak: { name: "Hand-Turned Walnut", hex: "#4d3a2b" },
    walnut: { name: "Brushed Champagne Brass", hex: "#c5a059" },
    black: { name: "Matte Ebonized Ash", hex: "#1c1c1c" }
  }
};

let customizerState = {
  fabric: 'boucle',
  wood: 'oak'
};

function setupCustomizerInteractive() {
  const fabricBtns = document.querySelectorAll('.customizer-fabric-btn');
  const woodBtns = document.querySelectorAll('.customizer-wood-btn');
  const previewImg = document.getElementById('customizer-preview-img');
  const fabricTitle = document.getElementById('customizer-fabric-title');
  const fabricDesc = document.getElementById('customizer-fabric-desc');
  const woodTitle = document.getElementById('customizer-wood-title');

  fabricBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      fabricBtns.forEach(b => b.classList.remove('ring-2', 'ring-stone-900', 'scale-105'));
      btn.classList.add('ring-2', 'ring-stone-900', 'scale-105');
      
      const fabricKey = btn.dataset.fabric;
      customizerState.fabric = fabricKey;
      const data = CUSTOMIZER_DATA.fabrics[fabricKey];

      if (previewImg) {
        previewImg.style.opacity = '0.4';
        setTimeout(() => {
          previewImg.src = data.image;
          previewImg.style.opacity = '1';
        }, 180);
      }
      if (fabricTitle) fabricTitle.textContent = data.name;
      if (fabricDesc) fabricDesc.textContent = data.description;
    });
  });

  woodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      woodBtns.forEach(b => b.classList.remove('ring-2', 'ring-stone-900', 'scale-110'));
      btn.classList.add('ring-2', 'ring-stone-900', 'scale-110');

      const woodKey = btn.dataset.wood;
      customizerState.wood = woodKey;
      const data = CUSTOMIZER_DATA.woodBases[woodKey];
      if (woodTitle) woodTitle.textContent = data.name;
    });
  });
}

function addCustomizedItemToCart() {
  const fabricInfo = CUSTOMIZER_DATA.fabrics[customizerState.fabric];
  const woodInfo = CUSTOMIZER_DATA.woodBases[customizerState.wood];
  
  state.cart.push({
    id: 999,
    name: "Aura Bespoke Studio Armchair",
    image: fabricInfo.image,
    selectedColor: `${fabricInfo.name} / ${woodInfo.name} Base`,
    quantity: 1
  });

  saveCart();
  updateCartUI();
  showToast("Bespoke Armchair added to your selection!", "success");

  // Open cart drawer
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-overlay');
  if (cartDrawer && cartOverlay) {
    cartDrawer.classList.remove('translate-x-full');
    cartOverlay.classList.remove('opacity-0', 'pointer-events-none');
    document.body.classList.add('overflow-hidden');
  }
}

// 11. TOAST NOTIFICATIONS
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed top-5 right-5 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl text-xs font-medium text-white transition-all transform duration-300 translate-y-3 opacity-0 backdrop-blur-md pointer-events-auto ${
    type === 'success' ? 'bg-stone-900/95 border border-emerald-500/40' :
    type === 'error' ? 'bg-rose-900/95 border border-rose-500/40' :
    'bg-stone-900/95 border border-stone-700'
  }`;

  const iconName = type === 'success' ? 'check-circle' : type === 'error' ? 'alert-circle' : 'info';

  toast.innerHTML = `
    <i data-lucide="${iconName}" class="w-4 h-4 ${type === 'success' ? 'text-emerald-400' : type === 'error' ? 'text-rose-400' : 'text-stone-300'}"></i>
    <span class="flex-1">${message}</span>
  `;

  container.appendChild(toast);
  lucide.createIcons({ targets: [toast] });

  // Animate in
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-3', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  // Remove after 3.2s
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
