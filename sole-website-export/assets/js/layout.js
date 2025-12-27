async function loadPartial(targetId, url) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const res = await fetch(url, { cache: "no-store" });
  el.innerHTML = await res.text();
}

/**
 * Wire Universe dropdown after header injection.
 * (Scripts inside injected header.html won't run reliably.)
 */
function wireUniverseDropdown() {
  const nav = document.querySelector(".universe-nav");
  const btn = nav ? nav.querySelector(".universe-btn") : null;

  if (!nav || !btn) return;

  // Prevent double-wiring if layout.js runs again
  if (nav.dataset.wired === "1") return;
  nav.dataset.wired = "1";

  function open() {
    nav.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
  }
  function close() {
    nav.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  }
  function toggle() {
    if (nav.classList.contains("open")) close();
    else open();
  }

  // Click button toggles
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggle();
  });

  // Click inside dropdown should NOT close it
  nav.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Click outside closes
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target)) close();
  });

  // Escape closes
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

(async () => {
  await loadPartial("site-header", "/partials/header.html");
  await loadPartial("site-footer", "/partials/footer.html");

  // Wire logout button (actual logout logic is in app.js)
  const logoutLink = document.getElementById("nav-logout");
  if (logoutLink) {
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault();
      if (window.SOLE && typeof window.SOLE.logout === "function") {
        window.SOLE.logout();
      }
    });
  }

  // ✅ Wire Universe dropdown AFTER header is injected
  wireUniverseDropdown();
})();
