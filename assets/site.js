const navItems = [
  { href: "index.html", label: "Home" },
  { href: "services.html", label: "Services" },
  { href: "projects.html", label: "Projects" },
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
        <div class="flex items-center justify-between gap-4 py-2">
          <a class="flex shrink-0 items-center gap-3" href="index.html" aria-label="SABILA WATERPROOFING ENTERPRISES home">
            <img class="h-12 w-12 rounded-xl bg-white object-contain p-1 shadow-sm" src="web%20images/logo/logo%20sabila%20waterproofing.jpeg" alt="SABILA WATERPROOFING ENTERPRISES logo"/>
            <span class="block max-w-[190px] font-sans text-base font-black leading-tight tracking-tight text-blue-900 sm:max-w-none sm:text-xl">
              SABILA WATERPROOFING ENTERPRISES
            </span>
          </a>
          <div class="hidden items-center gap-8 md:flex">
            ${desktopLinks}
          </div>
          <div class="hidden items-center gap-3 md:flex">
            <a class="inline-flex items-center justify-center rounded-lg bg-[#25D366] p-3 font-headline font-semibold text-white shadow-sm transition-opacity hover:opacity-90" href="https://wa.me/919766629998" target="_blank" rel="noreferrer" aria-label="Chat with SABILA WATERPROOFING ENTERPRISES on WhatsApp"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.14 6.43 2.14 11.88c0 1.74.46 3.44 1.32 4.94L2 22l5.31-1.39a9.87 9.87 0 0 0 4.73 1.2h.01c5.45 0 9.89-4.43 9.89-9.88C21.94 6.45 17.5 2 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.15.83.84-3.07-.2-.32a8.18 8.18 0 0 1-1.25-4.37c0-4.53 3.7-8.21 8.25-8.21 2.2 0 4.27.86 5.82 2.42a8.16 8.16 0 0 1 2.41 5.84c0 4.52-3.69 8.2-8.23 8.2Zm4.52-6.15c-.25-.12-1.47-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.17-.29.18-.54.06-.25-.12-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.02 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.16-.48-.29Z"/></svg></a>
            <a class="inline-flex items-center justify-center rounded-lg bg-primary p-3 font-headline font-semibold text-on-primary shadow-sm transition-opacity hover:opacity-90" href="https://www.instagram.com/sabila_waterproofing_ent/" target="_blank" rel="noreferrer" aria-label="Follow SABILA WATERPROOFING ENTERPRISES on Instagram"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.3A4.7 4.7 0 1 1 12 16.7a4.7 4.7 0 0 1 0-9.4Zm0 2A2.7 2.7 0 1 0 12 14.7a2.7 2.7 0 0 0 0-5.4Zm5.05-2.55a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"/></svg></a>
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
            <a class="mt-2 inline-flex items-center justify-center rounded-lg bg-[#25D366] p-3 font-headline font-semibold text-white shadow-sm transition-opacity hover:opacity-90" href="https://wa.me/919766629998" target="_blank" rel="noreferrer" aria-label="Chat with SABILA WATERPROOFING ENTERPRISES on WhatsApp"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.14 6.43 2.14 11.88c0 1.74.46 3.44 1.32 4.94L2 22l5.31-1.39a9.87 9.87 0 0 0 4.73 1.2h.01c5.45 0 9.89-4.43 9.89-9.88C21.94 6.45 17.5 2 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.15.83.84-3.07-.2-.32a8.18 8.18 0 0 1-1.25-4.37c0-4.53 3.7-8.21 8.25-8.21 2.2 0 4.27.86 5.82 2.42a8.16 8.16 0 0 1 2.41 5.84c0 4.52-3.69 8.2-8.23 8.2Zm4.52-6.15c-.25-.12-1.47-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.17-.29.18-.54.06-.25-.12-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.02 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.16-.48-.29Z"/></svg></a>
            <a class="inline-flex items-center justify-center rounded-lg bg-primary p-3 font-headline font-semibold text-on-primary shadow-sm transition-opacity hover:opacity-90" href="https://www.instagram.com/sabila_waterproofing_ent/" target="_blank" rel="noreferrer" aria-label="Follow SABILA WATERPROOFING ENTERPRISES on Instagram"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.3A4.7 4.7 0 1 1 12 16.7a4.7 4.7 0 0 1 0-9.4Zm0 2A2.7 2.7 0 1 0 12 14.7a2.7 2.7 0 0 0 0-5.4Zm5.05-2.55a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"/></svg></a>
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
              <img class="h-12 w-12 rounded-xl bg-white object-contain p-1 shadow-sm" src="web%20images/logo/logo%20sabila%20waterproofing.jpeg" alt="SABILA WATERPROOFING ENTERPRISES logo"/>
              <span class="block font-sans text-lg font-black leading-tight tracking-tight text-blue-900">
                SABILA WATERPROOFING ENTERPRISES
              </span>
            </div>
            <p class="max-w-xs font-body text-sm leading-relaxed text-slate-500">
              Waterproofing specialists delivering terrace, roof, basement, crack filling, grouting, and protective coating solutions.
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
              <li><a class="font-body text-sm text-slate-500 transition-colors hover:text-yellow-600" href="services.html">Waterproofing</a></li>
              <li><a class="font-body text-sm text-slate-500 transition-colors hover:text-yellow-600" href="services.html">Grouting</a></li>
              <li><a class="font-body text-sm text-slate-500 transition-colors hover:text-yellow-600" href="services.html">Epoxy Coating</a></li>
              <li><a class="font-body text-sm text-slate-500 transition-colors hover:text-yellow-600" href="contact.html">Request a Quote</a></li>
            </ul>
          </div>
          <div>
            <h4 class="mb-4 font-headline text-sm font-bold uppercase tracking-widest text-primary">Contact</h4>
            <ul class="space-y-2">
              <li><a class="font-body text-sm text-slate-500 transition-colors hover:text-yellow-600" href="tel:+919766629998">9766629998</a> <span class="text-slate-400">/</span> <a class="font-body text-sm text-slate-500 transition-colors hover:text-yellow-600" href="tel:+919096922786">9096922786</a></li>
              <li><a class="font-body text-sm text-slate-500 transition-colors hover:text-yellow-600 break-all" href="mailto:sabila.waterproofing.enterprises@gmail.com">sabila.waterproofing.enterprises@gmail.com</a></li>
              <li class="font-body text-sm text-slate-500">B/300/SF2 Aasra Heights</li>
              <li class="font-body text-sm text-slate-500">Reis Magos, Betim Bardez, North Goa 403521</li>
            </ul>
          </div>
        </div>
        <div class="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 md:flex-row md:items-center">
          <p class="font-body">&copy; ${year} SABILA WATERPROOFING ENTERPRISES. All rights reserved.</p>
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

    item.classList.add("cursor-pointer");
    panel.classList.add("cursor-auto");

    const setState = (open) => {
      trigger.setAttribute("aria-expanded", String(open));
      panel.classList.toggle("hidden", !open);
      icon.textContent = open ? "remove" : "add";
    };

    const toggleItem = () => {
      const isOpen = trigger.getAttribute("aria-expanded") === "true";
      setState(!isOpen);
    };

    setState(index === 0);

    trigger.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleItem();
    });

    item.addEventListener("click", (event) => {
      if (event.target.closest("[data-faq-panel]")) return;
      toggleItem();
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
  const errorMessage = document.querySelector("[data-contact-error]");
  const submitButton = form?.querySelector("[data-contact-submit]");
  if (!form || !successMessage || !errorMessage || !submitButton) return;

  const setLoading = (loading) => {
    submitButton.disabled = loading;
    submitButton.dataset.originalText ??= submitButton.textContent.trim();
    if (loading) {
      submitButton.textContent = "Sending...";
      return;
    }
    submitButton.innerHTML = `${submitButton.dataset.originalText} <span class="material-symbols-outlined" data-icon="send">send</span>`;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    successMessage.classList.add("hidden");
    errorMessage.classList.add("hidden");

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const payload = {
      name,
      email,
      phone: phone || "Not provided",
      message,
      _subject: `New inquiry from ${name || "website visitor"}`,
      _replyto: email,
      _template: "table",
    };

    setLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/sabila.waterproofing.enterprises@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === "false") {
        throw new Error(result.message || "Inquiry could not be sent.");
      }

      successMessage.classList.remove("hidden");
      form.reset();
    } catch (error) {
      errorMessage.textContent = error.message || "Something went wrong. Please call 9766629998 or try again.";
      errorMessage.classList.remove("hidden");
    } finally {
      setLoading(false);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  setupFaqs();
  setupProjectFilters();
  setupContactForm();
});
