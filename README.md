# LIVAURA (livaura.furniture) — Luxury Architectural Furniture Web App

A modern, responsive e-commerce website for Scandinavian & luxury minimalist furniture with curated photography, interactive 3D/fabric customizer, room hotspot visualizer, shopping cart drawer, wishlist, concierge inquiry popup, and simulated checkout.

---

## 🌟 Key Features

1. **Curated Product Catalog**:
   - Filter by space: **Living Room**, **Bedroom**, **Dining**, **Lighting**, **Accents & Rugs**.
   - Live real-time search with instant results.
   - Sort by: Most Popular, Rating, Price (Low to High), Price (High to Low).
   - Dynamic color swatches that switch product preview images live.
   - Quick Add to Bag overlay on hover.
   - Interactive **Quick View Modal** with photo gallery thumbnails, material specifications, dimensions, color selection, and quantity stepper.

2. **Interactive Room Visualizer ("Shop the Look")**:
   - Styled architectural living room scene with pulsing interactive pins.
   - Click pins to inspect the piece, check pricing, and add directly to your bag.

3. **Bespoke Material Customizer Studio**:
   - Interactive armchair visualizer.
   - Switch between upholstery materials (*Warm Bouclé*, *Cognac Saddle Leather*, *Olive Velvet*, *Charcoal Wool*).
   - Switch wood base finishes (*Natural White Oak*, *Smoked Walnut*, *Ebonized Ash*).
   - Add custom configured pieces directly to your order.

4. **Slide-Over Shopping Bag Drawer**:
   - Dynamic item quantity adjustment (`+` / `-`) and item removal.
   - **Free White-Glove Delivery progress bar** (unlocks at $1,500).
   - Promo code discounts (use code `LIVAURA15` or `AURA15` for 15% off).
   - Persistent bag storage via browser `localStorage`.

5. **Wishlist**:
   - Save favorite furniture items with heart toggles.
   - Dedicated wishlist modal with quick "Move to Cart" action.

7. **Bespoke Design Concierge & Inquiry Popup**:
   - Floating "Inquire & Concierge" action button with live indicator.
   - Accessible from the main navigation bar and mobile menu.
   - Integrated inside the **Quick View modal** to auto-populate the item name for custom sizing or fabric questions.
   - Comprehensive inquiry form with purpose selection (Custom Dimensions, Swatch Kits, Trade Programs, Delivery questions).
   - Generates simulated reference ticket IDs (`INQ-XXXXX`) with instant toast feedback.

8. **Limited Archive Flash Sale**:
   - Live dynamic countdown timer (hours, minutes, seconds).

---

## 🚀 How to Run the Website

### Option 1: Direct Browser Open (No installation required)
Simply double-click [`index.html`](file:///c:/Users/ramya/Desktop/furniture%20website/index.html) in Windows File Explorer or open it with your browser:
```powershell
Start-Process "index.html"
```

### Option 2: Local Node.js Server
From the project folder, run:
```powershell
node server.js
```
Then visit **`http://localhost:3000`** in your browser.

---

## 📁 File Structure

- [`index.html`](file:///c:/Users/ramya/Desktop/furniture%20website/index.html) — Main application markup, layout, modals, drawers, and sections
- [`styles.css`](file:///c:/Users/ramya/Desktop/furniture%20website/styles.css) — Custom luxury typography, glassmorphism, keyframe animations, and scrollbar
- [`app.js`](file:///c:/Users/ramya/Desktop/furniture%20website/app.js) — Product database, cart, wishlist, filters, sorting, modals, and customizer logic
- [`server.js`](file:///c:/Users/ramya/Desktop/furniture%20website/server.js) — Native zero-dependency Node static web server
- [`package.json`](file:///c:/Users/ramya/Desktop/furniture%20website/package.json) — NPM script definitions
