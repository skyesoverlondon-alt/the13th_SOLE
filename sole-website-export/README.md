# SOLE Website Export - Complete Package

Complete export of SOLE website with gate, pages, and all assets.

## 📁 Structure

```
sole-website-export/
├── index.html              # SOLE Key Gateway (entry point)
├── pages/                  # All pages
│   ├── SOLEHomepage.html
│   ├── store-hub.html
│   ├── sole-opportunity.html
│   ├── Kaixu.html
│   ├── Kee-Care.html
│   └── SAP_Logistiocs.html
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet with background
│   ├── js/
│   │   ├── app.js          # Main app logic
│   │   ├── firebase.js     # Firebase configuration
│   │   └── layout.js       # Header/footer loader
│   └── images/             # All images
└── partials/
    ├── header.html         # Site header
    └── footer.html         # Site footer
```

## 🔑 Gate Configuration

**Access Key:** `444666`

To change the key, edit `index.html` line ~470:
```javascript
const CORRECT_KEY = "444666";
```

**Redirect After Unlock:** `/pages/SOLEHomepage.html`

## 🎨 Background & Styling

Your background image and all styles are served from `/assets/css/style.css`. The modular structure is preserved - all pages load:
- Header from `/partials/header.html`
- Footer from `/partials/footer.html`
- CSS from `/assets/css/style.css`
- Scripts from `/assets/js/`

## 🔥 Firebase Setup

Firebase is already configured in `/assets/js/firebase.js` with your credentials:
- Project: `solenterprises-58215`
- API Key: Already included
- Auth, Firestore: Pre-configured

## 🚀 Deployment Options

### Option 1: Firebase Hosting
```bash
firebase deploy --only hosting
```

### Option 2: Any Static Host
Upload the entire `sole-website-export` folder to:
- Netlify
- Vercel
- GitHub Pages
- Any web server

### Option 3: Local Testing
```bash
# Python
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

## 📄 Pages Included

1. **SOLEHomepage.html** - Main homepage
2. **store-hub.html** - Store hub
3. **sole-opportunity.html** - Opportunity page
4. **Kaixu.html** - AI chat interface (centered layout)
5. **Kee-Care.html** - Kee-Care services
6. **SAP_Logistiocs.html** - SAP Logistics

## 🔧 Customization

### Change Background
Edit `/assets/css/style.css` - look for `background-image` properties

### Modify Header/Footer
Edit `/partials/header.html` and `/partials/footer.html`

### Add New Pages
1. Copy any page as template
2. Place in `/pages/` folder
3. Ensure it loads `/assets/css/style.css`

## ⚙️ How It Works

1. **Gate (index.html):** User enters key → Validates → Stores session → Redirects to homepage
2. **Layout.js:** Loads header/footer partials into each page
3. **Firebase.js:** Manages authentication across all pages
4. **Style.css:** Provides consistent styling and background

## 🌐 File Paths

All paths are **absolute from root**:
- CSS: `/assets/css/style.css`
- JS: `/assets/js/app.js`
- Images: `/assets/images/`
- Partials: `/partials/header.html`

This ensures everything works whether at root or in subdirectory.

## 📝 Notes

- **Session Storage:** Gate uses `sessionStorage` (per tab)
- **Firebase Auth:** Integrated across all pages
- **Responsive:** All pages are mobile-friendly
- **Modular:** Header/footer load dynamically

---

**Created:** December 27, 2025  
**Project:** SOLEnterprises.org  
**Firebase:** solenterprises-58215
