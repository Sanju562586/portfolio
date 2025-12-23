'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------
        HELPER
  ------------------------------ */
  const elementToggleFunc = elem => elem && elem.classList.toggle("active");

  /* ------------------------------
        SIDEBAR
  ------------------------------ */
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");
  if (sidebarBtn && sidebar) sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));

  /* ------------------------------
        TESTIMONIALS MODAL
  ------------------------------ */
  const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");
  const modalContainer = document.querySelector("[data-modal-container]");
  const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
  const overlay = document.querySelector("[data-overlay]");

  const modalImg = document.querySelector("[data-modal-img]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalText = document.querySelector("[data-modal-text]");

  const testimonialsModalFunc = () => {
    if (!modalContainer || !overlay) return;
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  };

  if (testimonialsItems && testimonialsItems.length && modalContainer && modalCloseBtn && overlay) {
    testimonialsItems.forEach(item => {
      item.addEventListener("click", function (e) {
        // If the click target is inside a project image area, skip so image viewer handles it
        if (e.target.closest('.project-img') || e.target.closest('.project-item-icon-box') || e.target.tagName === 'IMG') return;

        const img = this.querySelector("[data-testimonials-avatar]");
        const title = this.querySelector("[data-testimonials-title]");
        const text = this.querySelector("[data-testimonials-text]");

        if (img && modalImg) modalImg.src = img.src;
        if (img && modalImg) modalImg.alt = img.alt || '';
        if (title && modalTitle) modalTitle.innerHTML = title.innerHTML;
        if (text && modalText) modalText.innerHTML = text.innerHTML;

        testimonialsModalFunc();
      });
    });

    modalCloseBtn.addEventListener("click", testimonialsModalFunc);
    overlay.addEventListener("click", testimonialsModalFunc);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") testimonialsModalFunc(); });
  }

  /* ------------------------------
        FULLSCREEN IMAGE VIEWER
  ------------------------------ */
  const imageModal = document.getElementById("imageModal");
  const imageModalOverlay = document.getElementById("imageModalOverlay");
  const imageModalClose = document.getElementById("imageModalClose");
  const fullImage = document.getElementById("fullImage");

  const openImageModal = (src, alt = '') => {
    if (!imageModal || !fullImage) return;
    fullImage.src = src;
    fullImage.alt = alt;
    imageModal.classList.add("active");
  };

  const closeImageModal = () => {
    if (!imageModal) return;
    imageModal.classList.remove("active");
    // clear src if you want (optional)
    // fullImage.src = '';
  };

  // Attach click handlers to:
  // - the actual image element
  // - the eye icon container (.project-item-icon-box)
  // - the whole project item link (to be safe)
  document.querySelectorAll(".project-item").forEach(projectItem => {

    // image inside project
    const img = projectItem.querySelector(".project-img img");
    const eye = projectItem.querySelector(".project-item-icon-box");
    const link = projectItem.querySelector("a");

    const handler = (e) => {
      e.preventDefault();
      // find the img again (robust)
      const imageEl = projectItem.querySelector(".project-img img");
      if (!imageEl) return;
      openImageModal(imageEl.src, imageEl.alt || '');
    };

    if (img) img.addEventListener("click", handler);
    if (eye) eye.addEventListener("click", handler);
    // If link exists, stop its default and open modal (so clicking whole card works)
    if (link) {
      link.addEventListener("click", function (e) {
        // if click came from anywhere inside the figure/icon/image -> open modal
        if (e.target.closest('.project-img') || e.target.closest('.project-item-icon-box') || e.target.tagName === 'IMG') {
          e.preventDefault();
          handler(e);
        }
        // otherwise, if you want links to navigate you can allow it. Currently we prevent navigation.
        else {
          e.preventDefault();
          handler(e);
        }
      });
    }
  });

  if (imageModalClose) imageModalClose.addEventListener("click", closeImageModal);
  if (imageModalOverlay) imageModalOverlay.addEventListener("click", closeImageModal);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeImageModal(); });

  /* ------------------------------
        CUSTOM SELECT + FILTER
  ------------------------------ */
  const select = document.querySelector("[data-select]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const selectValue = document.querySelector("[data-select-value]");
  const filterBtn = document.querySelectorAll("[data-filter-btn]");
  const filterItems = document.querySelectorAll("[data-filter-item]");

  if (select) select.addEventListener("click", function () { elementToggleFunc(this); });

  const filterFunc = (selectedValue) => {
    filterItems.forEach(item => {
      if (selectedValue === "all" || item.dataset.category === selectedValue) item.classList.add("active");
      else item.classList.remove("active");
    });
  };

  selectItems.forEach(item => {
    item.addEventListener("click", function () {
      const selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  });

  // desktop filter buttons
  let lastClickedBtn = filterBtn[0];
  filterBtn.forEach(btn => {
    btn.addEventListener("click", function () {
      const selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      filterFunc(selectedValue);
      if (lastClickedBtn) lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  });

  /* ------------------------------
        CONTACT FORM VALIDATION
  ------------------------------ */
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  if (form && formInputs.length && formBtn) {
    formInputs.forEach(input => {
      input.addEventListener("input", function () {
        formBtn.disabled = !form.checkValidity();
      });
    });
  }

  /* ------------------------------
        PAGE NAVIGATION
  ------------------------------ */
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  navigationLinks.forEach(link => {
    link.addEventListener("click", function () {
      const pageName = this.innerText.toLowerCase();
      pages.forEach(page => {
        if (page.dataset.page === pageName) page.classList.add("active");
        else page.classList.remove("active");
      });
      navigationLinks.forEach(n => n.classList.remove("active"));
      this.classList.add("active");
      window.scrollTo(0, 0);
    });
  });

}); // DOMContentLoaded end

  /* ------------------------------
        BACKEND CONNECTION
  ------------------------------ */
  document.querySelector("#contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullname = document.querySelector("input[name='fullname']").value;
  const email = document.querySelector("input[name='email']").value;
  const message = document.querySelector("textarea[name='message']").value;

  const res = await fetch("http://localhost:5000/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ fullname, email, message })
  });

  const data = await res.json();

  if (data.success) {
    alert("Message Sent Successfully!");
    e.target.reset();
  } else {
    alert("Error sending message!");
  }
});
