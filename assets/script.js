const navItems = [
  { href: "index.html", label: "Home", id: "home" },
  { href: "services.html", label: "Services", id: "services" },
  { href: "projects.html", label: "Projects", id: "projects" },
  { href: "about.html", label: "About", id: "about" },
  { href: "contact.html", label: "Contact", id: "contact" }
];

function renderHeader() {
  const header = document.querySelector("[data-site-header]");
  if (!header) return;
  const page = document.body.dataset.page;
  const navLinks = navItems
    .map((item) => {
      const current = item.id === page ? ' aria-current="page"' : "";
      return `<a href="${item.href}"${current}>${item.label}</a>`;
    })
    .join("");

  header.className = "site-header";
  header.innerHTML = `
    <div class="container nav-shell">
      <a class="brand" href="index.html" aria-label="SWE Construction home">
        <span class="brand-mark" aria-hidden="true"></span>
        <span>
          <span class="brand-name">SWE Construction</span>
          <span class="brand-sub">Home Services</span>
        </span>
      </a>
      <nav class="nav-links" aria-label="Primary navigation">${navLinks}</nav>
      <a class="nav-cta" href="contact.html">Request a Quote</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-label="Open site menu">
        <span></span>
      </button>
    </div>
    <div class="container mobile-panel">
      <nav class="mobile-links" aria-label="Mobile navigation">${navLinks}</nav>
      <a class="nav-cta" href="contact.html">Request a Quote</a>
    </div>
  `;

  const toggle = header.querySelector(".menu-toggle");
  toggle?.addEventListener("click", () => {
    const open = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

function renderFooter() {
  const footer = document.querySelector("[data-site-footer]");
  if (!footer) return;
  const year = new Date().getFullYear();

  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column">
          <a class="brand" href="index.html" aria-label="SWE Construction home">
            <span class="brand-mark" aria-hidden="true"></span>
            <span>
              <span class="brand-name">SWE Construction</span>
              <span class="brand-sub">Structural precision for homes and commercial spaces</span>
            </span>
          </a>
          <p style="margin-top: 1rem;">Built from the supplied text-file layouts into a complete multi-page static website.</p>
        </div>
        <div class="footer-column">
          <h4>Navigation</h4>
          <ul>${navItems.map((item) => `<li><a href="${item.href}">${item.label}</a></li>`).join("")}</ul>
        </div>
        <div class="footer-column">
          <h4>Services</h4>
          <ul>
            <li><a href="services.html">Residential Construction</a></li>
            <li><a href="services.html">Renovation & Interiors</a></li>
            <li><a href="services.html">Property Maintenance</a></li>
            <li><a href="services.html">Plumbing & Electrical</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+15551234567">(555) 123-4567</a></li>
            <li><a href="mailto:hello@sweconstruction.com">hello@sweconstruction.com</a></li>
            <li>1234 Industrial Parkway, Suite 100</li>
            <li>Construct City, ST 56789</li>
          </ul>
        </div>
      </div>
      <div class="footer-base">
        <span>&copy; ${year} SWE Construction & Home Services. All rights reserved.</span>
        <span>Licensed, insured, and responsive across devices.</span>
      </div>
    </div>
  `;
}

function setupFaq() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const trigger = item.querySelector(".faq-trigger");
    const panel = item.querySelector(".faq-panel");
    if (!trigger || !panel) return;
    trigger.addEventListener("click", () => {
      const open = item.classList.toggle("is-open");
      trigger.setAttribute("aria-expanded", String(open));
      panel.style.maxHeight = open ? `${panel.scrollHeight}px` : "0px";
    });
  });
}

function setupProjectFilters() {
  const buttons = [...document.querySelectorAll("[data-filter-button]")];
  const cards = [...document.querySelectorAll("[data-project-card]")];
  if (!buttons.length || !cards.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filterButton;
      buttons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      cards.forEach((card) => {
        const matches = filter === "all" || card.dataset.category === filter || card.dataset.category === "all";
        card.classList.toggle("is-hidden", !matches);
      });
    });
  });
}

function setupContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.classList.add("is-submitted");
    form.reset();
  });
}

function setupReveals() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach((item) => observer.observe(item));
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  setupFaq();
  setupProjectFilters();
  setupContactForm();
  setupReveals();
});
