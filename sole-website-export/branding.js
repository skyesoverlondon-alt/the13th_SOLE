// WHITE LABEL BRANDING CONFIG
// Edit these values to rebrand the entire site for a new client

window.BRAND = {
  // Company Info
  companyName: "SOLEnterprises",
  companyYear: "2025",
  
  // Colors (CSS custom properties)
  primaryColor: "#d6b24a",
  accentColor: "#7c3aed",
  
  // Contact
  email: "contact@solenterprises.com",
  phone: "+1 (555) 000-0000",
  
  // Footer Links
  privacyUrl: "/pages/privacy.html",
  termsUrl: "/pages/terms.html"
};

// Apply branding on load
document.addEventListener('DOMContentLoaded', () => {
  // Update footer copyright
  const copyright = document.querySelector('.site-footer .small');
  if (copyright) {
    copyright.textContent = `© ${window.BRAND.companyYear} ${window.BRAND.companyName}. All rights reserved.`;
  }
  
  // Apply custom colors
  document.documentElement.style.setProperty('--brand-primary', window.BRAND.primaryColor);
  document.documentElement.style.setProperty('--brand-accent', window.BRAND.accentColor);
});
