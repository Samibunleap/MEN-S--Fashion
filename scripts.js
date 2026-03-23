  /* ══════════════════════════════════════════
    MEN'S FASHION — Shared JavaScript
  ══════════════════════════════════════════ */

  /* ─── PRODUCTS DATA ──────────────────────── */
  
  const products = [
    { id:1,  name:"Leather Biker Jacket",    price:89, cat:"Clothing",    tag:"clothing", img:"./image/Leather Biker Jacket.png",     desc:"A sleek black leather biker jacket with an asymmetric zip and snap lapels. The definitive edge piece — worn here with a white tee and black trousers." },
    { id:2,  name:"Smart Casual Blazer",     price:120, cat:"Clothing",    tag:"clothing", img:"./image/Smart Casual Blazer.png",     desc:"Impeccably tailored in a khaki mid-weight fabric. Works equally well with dark denim and brogues or tailored trousers." },
    { id:3,  name:"Technical Field Parka",   price:89, cat:"Clothing",    tag:"clothing", img:"./image/Technical Field Parka.png",     desc:"An olive wax-coated field jacket with zip-out hood and bellowed cargo pockets. Weather-resistant without sacrificing style." },
    { id:4,  name:"Half-Zip Knit Sweater",   price:50, cat:"Clothing",    tag:"clothing", img:"./image/Half-Zip Knit Sweater.jpg",       desc:"A ribbed camel half-zip in extra-fine merino wool. The smart-casual cornerstone — wear over a collar or with cream chinos." },
    { id:5,  name:"Three-Piece Tweed Suit",  price:120, cat:"Clothing",    tag:"clothing", img:"./image/Three-Piece Tweed Suit.png",       desc:"A blue windowpane three-piece in heritage tweed, precision-cut with a fitted waistcoat and striped tie. A commanding formal look." },
    { id:6,  name:"Street Sweatshirt",       price:35, cat:"Clothing",    tag:"clothing", img:"./image/Street Sweatshirt.png",  desc:"A relaxed French terry crew in dusty rose. Minimal branding, oversized silhouette — pairs perfectly with distressed denim and low-tops." },
    { id:7,  name:"Slim Chino Trouser",      price:35,  cat:"Clothing",    tag:"clothing", img:"./image/Slim Chino Trouser.png",        desc:"A grey slim-cut chino in brushed cotton twill. Clean tapered lines make it the go-to trouser for polished casual dressing." },
    { id:8,  name:"Oxford Dress Shirt",      price:45,  cat:"Clothing",    tag:"clothing", img:"./image/Oxford Dress Shirt.png",     desc:"A classic Oxford cloth button-down in a subtle print, cut for a modern fit. Shown here under a khaki blazer — wear tucked or untucked." },
    { id:9,  name:"Monochrome Sneaker",      price:30, cat:"Footwear",    tag:"footwear", img:"./image/Monochrome Sneaker.png",       desc:"A sage-green tonal low-top with deconstructed panelling and textured overlays. Statement footwear built on a cupsole for all-day comfort." },
    { id:10, name:"White Leather Sneaker",   price:25, cat:"Footwear",    tag:"footwear", img:"./image/White Leather Sneaker.png",        desc:"A clean white cup-sole sneaker with a premium leather upper and red heel tab detail. The everyday sneaker, elevated to a wardrobe staple." },
    { id:11, name:"Brogue Derby Shoe",       price:29, cat:"Footwear",    tag:"footwear", img:"./image/Brogue Derby Shoe.png",     desc:"A dark tan leather brogue with cap-toe stitching and medallion broguing. Hand-lasted on a classic English last — shown here with jeans and a blazer." },
    { id:12, name:"Chelsea Boot",            price:25, cat:"Footwear",    tag:"footwear", img:"./image/Chelsea Boot.png",     desc:"A sleek Chelsea boot in smooth calfskin with elastic side panels and a square toe. As practical as it is elegant." },
    { id:13, name:"Chronograph Watch",       price:25, cat:"Accessories", tag:"watches",  img:"./image/Chronograph Watch.png",     desc:"A diver-inspired chronograph with a vivid blue dial, black ceramic bezel, and brushed stainless bracelet. Three sub-dials and a date aperture." },
    { id:14, name:"Minimalist Mesh Watch",   price:15, cat:"Accessories", tag:"watches",  img:"./image/Minimalist Mesh Watch.png",        desc:"A slim 38mm stainless case on a fine mesh bracelet. Minimalist white dial with precision quartz movement — the everyday dress watch." },
    { id:15, name:"Woven Leather Belt",      price:25,  cat:"Accessories", tag:"belts",    img:"./image/Woven Leather Belt.png",     desc:"A hand-woven full-grain leather belt with a brushed gunmetal buckle. Available in tan and black — the finishing touch to any outfit." },
    { id:16, name:"Leather Bifold Wallet",   price:15,  cat:"Accessories", tag:"wallets",  img:"./image/Leather Bifold Wallet.png",     desc:"A slim bifold in full-grain vegetable-tanned leather with six card slots. Develops a rich patina over time." },
    { id:17, name:"Merino Wool Scarf",       price:10,  cat:"Accessories", tag:"scarves",  img:"./image/Merino Wool Scarf.png",       desc:"An extra-fine merino scarf in a herringbone weave. Lightweight, incredibly warm, and endlessly versatile across seasons." },
    { id:18, name:"Canvas Tote Bag",         price:110, cat:"Accessories", tag:"bags",     img:"./image/Canvas Tote Bag.png",  desc:"A waxed canvas tote with leather handles and contrast stitching. Structured enough for the office, relaxed enough for the weekend." },
    { id:19, name:"Sport Brand",             price:10, cat:"sport", tag:"sport",     img:"./image/product1.png",  desc:"Sport playing , relaxed enough for the weekend." },
    { id:20, name:"Cute Sweater",            price:10, cat:"sport", tag:"sport",     img:"./image/product2.png",  desc:" Shop chic and cute apparel, including classy and cute clothing for the season." },
    { id:21, name:"Adidas outfit",           price:45, cat:"sport", tag:"sport",     img:"./image/product3.png",  desc:" Shop chic and cute apparel, including classy and cute clothing for the season." },
    { id:22, name:"Running jacket - schwarz",         price:45, cat:"sport", tag:"sport",     img:"./image/product4.png",  desc:"Sport playing , relaxed enough for the weekend." },
    { id:23, name:"The North Face",                   price:80, cat:"sport", tag:"sport",     img:"./image/product5.png",  desc:"Sport playing , relaxed enough for the weekend. " },
    { id:24, name:"Mens Nike Black Heritage",         price:30, cat:"Accessories", tag:"bags",     img:"./image/product6.png",  desc:"Sport playing , relaxed enough for the weekend." },
    
  ]

  /* ─── CART STATE ─────────────────────────── */
  let cart = JSON.parse(localStorage.getItem('mens-cart') || '[]');
  let currentModalProductsport

  function saveCart() { localStorage.setItem('mens-cart', JSON.stringify(cart)); }

  /* ─── PRODUCT CARD ───────────────────────── */
  function productCard(p) {
    return `
      <div class="product" onclick="openProductModal(${p.id})">
        <div class="product-img-wrap">
          <img src="${p.img}" alt="${p.name}" loading="lazy">
          <div class="product-overlay">
            <button class="btn-add" onclick="event.stopPropagation();addToCart(${p.id})">+ Add to Bag</button>
          </div>
        </div>
        <div class="product-info">
          <h3>${p.name}</h3>
          <p class="product-price">$${p.price}</p>
        </div> 
      </div>`;
  }

  /* ─── SEARCH ─────────────────────────────── */
  function openSearch() {}
  function closeSearch() { closeSearchDropdown(); }

  /* Called on every keystroke — shows live dropdown */
  function handleSearch(val) {
    const dropdown = getOrCreateDropdown();
    const q = (val || '').trim().toLowerCase();

    if (!q) { dropdown.style.display = 'none'; return; }

    const results = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.cat.toLowerCase().includes(q) ||
      p.tag.toLowerCase().includes(q)
    );

    if (results.length === 0) {
      dropdown.innerHTML = `
        <div class="sd-not-found">
          <i class="fas fa-search"></i>
          <p>No results for <strong>"${escHtml(val.trim())}"</strong></p>
          <span>Try: Biker Jacket, Tweed Suit, Sneakers…</span>
        </div>`;
    } else {
      dropdown.innerHTML = results.map(p => `
        <div class="sd-item" onclick="openProductModal(${p.id});closeSearchDropdown();">
          <img src="${p.img}" alt="${p.name}">
          <div class="sd-info">
            <div class="sd-name">${highlightMatch(p.name, q)}</div>
            <div class="sd-meta">${p.cat} &nbsp;·&nbsp; $${p.price}</div>
          </div>
          <i class="fas fa-chevron-right"></i>
        </div>`).join('');
    }
    dropdown.style.display = 'block';
  }

  /* Called on Enter key or icon click — same as live but focuses first result */
  function submitSearch() {
    const val = (document.getElementById('searchInput')?.value || '').trim();
    if (!val) return;
    const results = products.filter(p =>
      p.name.toLowerCase().includes(val.toLowerCase()) ||
      p.cat.toLowerCase().includes(val.toLowerCase()) ||
      p.tag.toLowerCase().includes(val.toLowerCase())
    );
    if (results.length > 0) {
      openProductModal(results[0].id);
      closeSearchDropdown();
    } else {
      handleSearch(val); // show not-found dropdown
    }
  }

  function closeSearchDropdown() {
    const d = document.getElementById('searchDropdown');
    if (d) d.style.display = 'none';
  }

  function getOrCreateDropdown() {
    let d = document.getElementById('searchDropdown');
    if (!d) {
      d = document.createElement('div');
      d.id = 'searchDropdown';
      d.className = 'search-dropdown';
      const bar = document.querySelector('.header-search-bar');
      if (bar) bar.appendChild(d);
    }
    return d;
  }

  function highlightMatch(text, q) {
    const idx = text.toLowerCase().indexOf(q);
    if (idx === -1) return escHtml(text);
    return escHtml(text.slice(0, idx))
      + '<mark>' + escHtml(text.slice(idx, idx + q.length)) + '</mark>'
      + escHtml(text.slice(idx + q.length));
  }

  function escHtml(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  /* Close dropdown when clicking outside */
  document.addEventListener('click', e => {
    const bar = document.querySelector('.header-search-bar');
    if (bar && !bar.contains(e.target)) closeSearchDropdown();
  });

  /* ─── CART ───────────────────────────────── */
  function openCart() {
    document.getElementById('cartOverlay').classList.add('open');
    document.getElementById('cartDrawer').classList.add('open');
  }
  function closeCart(e) {
    if (!e || e.target === document.getElementById('cartOverlay')) {
      document.getElementById('cartOverlay').classList.remove('open');
      document.getElementById('cartDrawer').classList.remove('open');
    }
  }
  function addToCart(id, size) {
    const p = products.find(x => x.id === id); if (!p) return;
    const sz = size || 'M';
    const ex = cart.find(i => i.id === id && i.size === sz);
    if (ex) ex.qty++; else cart.push({ ...p, qty:1, size:sz });
    saveCart(); updateCartUI(); showToast(`${p.name} added to bag`);
  }
  function removeFromCart(id, size) { cart = cart.filter(i => !(i.id===id && i.size===size)); saveCart(); updateCartUI(); }
  function changeQty(id, size, delta) {
    const item = cart.find(i => i.id===id && i.size===size); if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(i => !(i.id===id && i.size===size));
    saveCart(); updateCartUI();
  }
  function updateCartUI() {
    const total = cart.reduce((s,i) => s+i.price*i.qty, 0);
    const count = cart.reduce((s,i) => s+i.qty, 0);
    document.querySelectorAll('.cart-badge').forEach(b => b.textContent = count);
    const itemsEl = document.getElementById('cartItems');
    const footerEl = document.getElementById('cartFooter');
    if (!itemsEl) return;
    if (cart.length === 0) {
      itemsEl.innerHTML = `<div class="cart-empty"><i class="fas fa-shopping-bag"></i><p>Your bag is empty</p></div>`;
      if (footerEl) footerEl.style.display = 'none';
    } else {
      itemsEl.innerHTML = cart.map(i => `
        <div class="cart-item">
          <img class="cart-item-img" src="${i.img}" alt="${i.name}">
          <div class="cart-item-info">
            <h4>${i.name}</h4>
            <div class="cart-item-price">$${i.price} &middot; Size ${i.size}</div>
            <div class="cart-item-qty">
              <button class="qty-btn" onclick="changeQty(${i.id},'${i.size}',-1)">&#8722;</button>
              <span class="qty-num">${i.qty}</span>
              <button class="qty-btn" onclick="changeQty(${i.id},'${i.size}',1)">+</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${i.id},'${i.size}')">&#10005;</button>
        </div>`).join('');
      if (footerEl) { footerEl.style.display='block'; document.getElementById('cartTotal').textContent='$'+total.toFixed(0); }
    }
  }

  /* ─── SIZE MODAL ─────────────────────────── */
  function openSizeModal() { document.getElementById('sizeModal').classList.add('open'); }
  function closeSizeModal(e) { if (!e || e.target===document.getElementById('sizeModal')) document.getElementById('sizeModal').classList.remove('open'); }
  function switchSizeTab(btn, tab) {
    document.querySelectorAll('.size-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    ['sizeTabTops','sizeTabBottoms','sizeTabShoes'].forEach(id => { const el=document.getElementById(id); if(el) el.style.display='none'; });
    const map = {tops:'sizeTabTops',bottoms:'sizeTabBottoms',shoes:'sizeTabShoes'};
    const el = document.getElementById(map[tab]); if(el) el.style.display='block';
  }

  /* ─── PRODUCT MODAL ──────────────────────── */
  function openProductModal(id) {
    const p = products.find(x => x.id===id); if (!p) return;
    currentModalProduct = p;
    document.getElementById('modalImg').src  = p.img;
    document.getElementById('modalImg').alt  = p.name;
    document.getElementById('modalCat').textContent   = p.cat;
    document.getElementById('modalName').textContent  = p.name;
    document.getElementById('modalPrice').textContent = '$'+p.price;
    document.getElementById('modalDesc').textContent  = p.desc;
    document.querySelectorAll('.size-opt').forEach((b,i) => b.classList.toggle('selected', i===2));
    document.getElementById('productModal').classList.add('open');
  }
  function closeProductModal(e) {
    if (!e || e.target===document.getElementById('productModal')) {
      document.getElementById('productModal').classList.remove('open');
      currentModalProduct = null;
    }
  }
  function selectSize(btn) { document.querySelectorAll('.size-opt').forEach(b=>b.classList.remove('selected')); btn.classList.add('selected'); }
  function addToCartFromModal() {
    if (!currentModalProduct) return;
    addToCart(currentModalProduct.id, document.querySelector('.size-opt.selected')?.textContent || 'M');
    closeProductModal();
  }

  /* ─── NEWSLETTER ─────────────────────────── */
  function subscribeNewsletter() {
    const input = document.getElementById('newsletterEmail'); if (!input) return;
    if (!input.value || !input.value.includes('@')) { showToast('Please enter a valid email'); return; }
    input.value = ''; showToast('Welcome to the inner circle!');
  }

  /* ─── TOAST ──────────────────────────────── */
  function showToast(msg) {
    const t = document.getElementById('toast'); if (!t) return;
    document.getElementById('toastMsg').textContent = msg;
    t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 3000);
  }

  /* ─── ESC KEY ────────────────────────────── */
  document.addEventListener('keydown', e => { if(e.key==='Escape'){closeCart();closeSizeModal();closeProductModal();} });

  /* ─── HEADER SCROLL (shadow on scroll) ──── */
  function initHeaderScroll() {
    const wrap = document.getElementById('siteHeaderWrap');
    if (!wrap) return;
    window.addEventListener('scroll', () => {
      wrap.classList.toggle('elevated', window.scrollY > 20);
    });
  }

  /* ─── INIT ───────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => { updateCartUI(); initHeaderScroll(); });
