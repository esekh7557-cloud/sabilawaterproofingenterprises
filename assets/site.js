const navItems = [
  { href: "index.html", label: "Home" },
  { href: "services.html", label: "Services" },
  { href: "projects.html", label: "Projects" },
  { href: "about.html", label: "About" },
  { href: "contact.html", label: "Contact" }
];

function getCurrentPage() {
  const page = document.body.dataset.page;
  if (page) return page;

  const path = window.location.pathname.split("/").pop();
  return path || "index.html";
}

function renderHeader() {
  const header = document.querySelector("[data-site-header]");
  if (!header) return;

  const currentPage = getCurrentPage();
  const desktopLinks = navItems
    .map(({ href, label }) => {
      const active = href === currentPage;
      const classes = active
        ? "text-blue-900 border-b-2 border-yellow-500 pb-1"
        : "text-slate-600 hover:text-blue-900 transition-colors";

      return `<a class="font-headline font-semibold tracking-tight ${classes}" href="${href}">${label}</a>`;
    })
    .join("");

  const mobileLinks = navItems
    .map(({ href, label }) => {
      const active = href === currentPage;
      const classes = active
        ? "bg-slate-100 text-blue-900"
        : "text-slate-600 hover:bg-slate-100 hover:text-blue-900";

      return `<a class="rounded-lg px-4 py-3 font-headline font-semibold tracking-tight transition-colors ${classes}" href="${href}">${label}</a>`;
    })
    .join("");

  header.innerHTML = `
    <nav class="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-xl shadow-sm">
      <div class="mx-auto max-w-7xl px-5 sm:px-8">
        <div class="flex items-center justify-between gap-4 py-4">
          <a class="flex shrink-0 items-center gap-3" href="index.html" aria-label="SWE Construction home">
            <span class="grid h-11 w-11 place-items-center rounded-xl bg-primary text-secondary-container shadow-sm">
              <span class="font-headline text-lg font-black tracking-tight">S</span>
            </span>
            <div>
              <span class="block font-headline text-2xl font-black tracking-tighter text-blue-900">SWE</span>
              <span class="block text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Construction</span>
            </div>
          </a>
          <div class="hidden items-center gap-8 md:flex">
            ${desktopLinks}
          </div>
          <div class="hidden md:block">
            <a class="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 font-headline font-semibold text-on-primary shadow-sm transition-opacity hover:opacity-90" href="contact.html">Request a Quote</a>
          </div>
          <button
            class="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-primary shadow-sm transition-colors hover:bg-slate-100 md:hidden"
            type="button"
            aria-expanded="false"
            aria-controls="mobile-menu"
            data-menu-toggle
          >
            <span class="material-symbols-outlined" aria-hidden="true">menu</span>
            <span class="sr-only">Toggle navigation</span>
          </button>
        </div>
        <div class="hidden border-t border-slate-200 pb-4 md:hidden" id="mobile-menu" data-mobile-menu>
          <div class="flex flex-col gap-2 pt-4">
            ${mobileLinks}
            <a class="mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-headline font-semibold text-on-primary shadow-sm transition-opacity hover:opacity-90" href="contact.html">Request a Quote</a>
          </div>
        </div>
      </div>
    </nav>
  `;

  const toggle = header.querySelector("[data-menu-toggle]");
  const mobileMenu = header.querySelector("[data-mobile-menu]");
  const icon = toggle?.querySelector(".material-symbols-outlined");
  const mobileLinksList = mobileMenu?.querySelectorAll("a") ?? [];

  const closeMenu = () => {
    if (!toggle || !mobileMenu || !icon) return;
    toggle.setAttribute("aria-expanded", "false");
    mobileMenu.classList.add("hidden");
    icon.textContent = "menu";
    document.body.classList.remove("overflow-hidden");
  };

  toggle?.addEventListener("click", () => {
    if (!mobileMenu || !icon) return;
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.classList.toggle("hidden", isOpen);
    icon.textContent = isOpen ? "menu" : "close";
    document.body.classList.toggle("overflow-hidden", !isOpen);
  });

  mobileLinksList.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) closeMenu();
  });
}

function renderFooter() {
  const footer = document.querySelector("[data-site-footer]");
  if (!footer) return;

  const year = new Date().getFullYear();
  const navigation = navItems
    .map(({ href, label }) => `<li><a class="font-body text-sm text-slate-500 transition-colors hover:text-yellow-600" href="${href}">${label}</a></li>`)
    .join("");

  footer.innerHTML = `
    <div class="w-full border-t border-slate-200 bg-slate-100 py-12">
      <div class="mx-auto max-w-7xl px-5 sm:px-8">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <span class="grid h-10 w-10 place-items-center rounded-xl bg-primary text-secondary-container shadow-sm">
                <span class="font-headline text-base font-black tracking-tight">S</span>
              </span>
              <div>
                <span class="block font-headline text-xl font-black tracking-tighter text-blue-900">SWE</span>
                <span class="block text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Construction</span>
              </div>
            </div>
            <p class="max-w-xs font-body text-sm leading-relaxed text-slate-500">
              Construction and home service specialists delivering architecture-led builds, renovations, and property care.
            </p>
          </div>
          <div>
            <h4 class="mb-4 font-headline text-sm font-bold uppercase tracking-widest text-primary">Navigation</h4>
            <ul class="space-y-2">
              ${navigation}
            </ul>
          </div>
          <div>
            <h4 class="mb-4 font-headline text-sm font-bold uppercase tracking-widest text-primary">Services</h4>
            <ul class="space-y-2">
              <li><a class="font-body text-sm text-slate-500 transition-colors hover:text-yellow-600" href="services.html">Construction</a></li>
              <li><a class="font-body text-sm text-slate-500 transition-colors hover:text-yellow-600" href="services.html">Renovation</a></li>
              <li><a class="font-body text-sm text-slate-500 transition-colors hover:text-yellow-600" href="services.html">Maintenance</a></li>
              <li><a class="font-body text-sm text-slate-500 transition-colors hover:text-yellow-600" href="contact.html">Request a Quote</a></li>
            </ul>
          </div>
          <div>
            <h4 class="mb-4 font-headline text-sm font-bold uppercase tracking-widest text-primary">Contact</h4>
            <ul class="space-y-2">
              <li><a class="font-body text-sm text-slate-500 transition-colors hover:text-yellow-600" href="tel:+15551234567">(555) 123-4567</a></li>
              <li><a class="font-body text-sm text-slate-500 transition-colors hover:text-yellow-600" href="mailto:hello@sweconstruction.com">hello@sweconstruction.com</a></li>
              <li class="font-body text-sm text-slate-500">1234 Industrial Parkway, Suite 100</li>
              <li class="font-body text-sm text-slate-500">Construct City, ST 56789</li>
            </ul>
          </div>
        </div>
        <div class="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 md:flex-row md:items-center">
          <p class="font-body">&copy; ${year} SWE Construction &amp; Home Services. All rights reserved.</p>
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-slate-400" aria-hidden="true">verified</span>
            <span class="font-label text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">Licensed &amp; Insured</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function setupFaqs() {
  const items = document.querySelectorAll("[data-faq-item]");
  if (!items.length) return;

  items.forEach((item, index) => {
    const trigger = item.querySelector("[data-faq-trigger]");
    const panel = item.querySelector("[data-faq-panel]");
    const icon = item.querySelector("[data-faq-icon]");
    if (!trigger || !panel || !icon) return;

    const setState = (open) => {
      trigger.setAttribute("aria-expanded", String(open));
      panel.classList.toggle("hidden", !open);
      icon.textContent = open ? "remove" : "add";
    };

    setState(index === 0);
    trigger.addEventListener("click", () => {
      const isOpen = trigger.getAttribute("aria-expanded") === "true";
      setState(!isOpen);
    });
  });
}

function setupProjectFilters() {
  const buttons = Array.from(document.querySelectorAll("[data-filter-button]"));
  const cards = Array.from(document.querySelectorAll("[data-project-card]"));
  if (!buttons.length || !cards.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filterButton;
      buttons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("bg-primary", active);
        item.classList.toggle("text-white", active);
        item.classList.toggle("shadow-md", active);
        item.classList.toggle("bg-surface-container-high", !active);
        item.classList.toggle("text-on-surface-variant", !active);
      });

      cards.forEach((card) => {
        const matches = filter === "all" || card.dataset.projectCard === filter;
        card.classList.toggle("hidden", !matches);
      });
    });
  });
}

function setupContactForm() {
  const form = document.querySelector("[data-contact-form]");
  const successMessage = document.querySelector("[data-contact-success]");
  if (!form || !successMessage) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    successMessage.classList.remove("hidden");
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  setupFaqs();
  setupProjectFilters();
  setupContactForm();
});
