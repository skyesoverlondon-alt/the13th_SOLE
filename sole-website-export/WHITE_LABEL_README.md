# White Label Setup

This site is ready to rebrand and sell to clients.

## Quick Setup (5 minutes)

1. **Edit `branding.js`** - Change company name, colors, contact info
2. **Update page titles** - Find/replace "SOLEnterprises" in HTML files
3. **Replace logo** - Add client logo to `/assets/images/`
4. **Deploy** - Upload to client's hosting

## What to Customize

### branding.js (Main Config)
```javascript
companyName: "SOLEnterprises"  // ← Change this
companyYear: "2025"             // ← Update year
primaryColor: "#d6b24a"         // ← Client brand color
email: "contact@..."            // ← Client email
phone: "+1 (555) 000-0000"      // ← Client phone
```

### Navigation (partials/header.html)
- Keep structure, update emojis/labels if needed
- Universe menu sections can be added/removed

### Footer (partials/footer.html)  
- Automatically uses branding.js values
- Links update based on config

### Pages
- Each page title has "SOLEnterprises" - find/replace with client name
- Page content is fully customizable

## Selling This

- **Price**: $1500-5000+ per client
- **Setup Time**: 30-60 minutes
- **Maintenance**: Single codebase, easy updates
- **Scalability**: Unlimited clients

## File Structure
```
/branding.js          ← Edit this first!
/index.html           ← Homepage
/pages/               ← All pages
/assets/css/          ← Styling
/assets/images/       ← Add client logo here
/partials/            ← Header/footer
```

## No Code Needed
Just edit the branding.js file and you're 90% done!
