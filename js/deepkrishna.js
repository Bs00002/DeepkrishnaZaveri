/**
 * DEEPKRISHNA ZAVERI - SINCE 1952
 * Core Animation & Interaction Engine
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Sticky Header Scroll Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 2. Mobile Nav Drawer Toggle
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileOverlay = document.querySelector('.mobile-nav-overlay');
  const mobileClose = document.querySelector('.mobile-nav-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

  function openMobileNav() {
    mobileDrawer?.classList.add('open');
    mobileOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileDrawer?.classList.remove('open');
    mobileOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', openMobileNav);
  mobileClose?.addEventListener('click', closeMobileNav);
  mobileOverlay?.addEventListener('click', closeMobileNav);
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // 3. Hero Subtle Shimmer Particles
  const particlesContainer = document.querySelector('.particles-container');
  if (particlesContainer) {
    const particleCount = 28;
    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement('div');
      const size = Math.random() * 3 + 1.5;
      p.style.position = 'absolute';
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.backgroundColor = Math.random() > 0.3 ? '#D4AF37' : '#F7E5A9';
      p.style.borderRadius = '50%';
      p.style.opacity = (Math.random() * 0.45 + 0.15).toString();
      p.style.top = `${Math.random() * 100}%`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.boxShadow = `0 0 8px #D4AF37`;
      p.style.animation = `floatParticle ${Math.random() * 6 + 4}s ease-in-out infinite alternate`;
      particlesContainer.appendChild(p);
    }

    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes floatParticle {
        0% { transform: translateY(0) translateX(0); opacity: 0.2; }
        50% { opacity: 0.65; transform: translateY(-20px) translateX(12px); }
        100% { transform: translateY(-40px) translateX(-8px); opacity: 0.15; }
      }
    `;
    document.head.appendChild(style);
  }

  // 4. Horizontal Bridal Edit Carousel
  const bridalCarousel = document.querySelector('.bridal-carousel-container');
  const prevBtn = document.querySelector('.bridal-nav-btn.prev');
  const nextBtn = document.querySelector('.bridal-nav-btn.next');

  if (bridalCarousel && prevBtn && nextBtn) {
    const scrollAmount = 360;
    prevBtn.addEventListener('click', () => {
      bridalCarousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      bridalCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    // Touch / Drag Scroll Support
    let isDown = false;
    let startX;
    let scrollLeft;

    bridalCarousel.addEventListener('mousedown', (e) => {
      isDown = true;
      bridalCarousel.classList.add('active');
      startX = e.pageX - bridalCarousel.offsetLeft;
      scrollLeft = bridalCarousel.scrollLeft;
    });

    bridalCarousel.addEventListener('mouseleave', () => {
      isDown = false;
    });

    bridalCarousel.addEventListener('mouseup', () => {
      isDown = false;
    });

    bridalCarousel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - bridalCarousel.offsetLeft;
      const walk = (x - startX) * 1.5;
      bridalCarousel.scrollLeft = scrollLeft - walk;
    });
  }

  // 5. Gallery Filter Tabs
  const filterTabs = document.querySelectorAll('.gallery-tab');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', function () {
      filterTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      const filter = this.getAttribute('data-filter');
      galleryItems.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.style.display = 'block';
          item.classList.add('visible');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 6. Lightbox Modal
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalImg = document.querySelector('.lightbox-img-wrap img');
  const modalTitle = document.querySelector('.lightbox-title');
  const modalClose = document.querySelector('.modal-close-btn');

  function openLightbox(src, title) {
    if (!modalOverlay || !modalImg) return;
    modalImg.src = src;
    if (modalTitle) modalTitle.textContent = title || 'Deepkrishna Zaveri Heirloom';
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.gallery-item, .bridal-look-card').forEach(card => {
    card.addEventListener('click', function () {
      const img = this.querySelector('img');
      const title = this.querySelector('.gallery-overlay-title, .bridal-look-name')?.textContent;
      if (img) openLightbox(img.src, title);
    });
  });

  modalClose?.addEventListener('click', closeLightbox);
  modalOverlay?.addEventListener('click', function (e) {
    if (e.target === modalOverlay) closeLightbox();
  });

  // 7. Scroll Reveal Observer
  const revealElements = document.querySelectorAll('.fade-in-up');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // 8. Demo Toast & Form Handler
  const toast = document.querySelector('.demo-toast');
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  const form = document.querySelector('.consultation-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      showToast('Thank you. Your consultation request for Deepkrishna Zaveri has been noted.');
      form.reset();
    });
  }

  // Handle WhatsApp Placeholder Click
  const whatsappBox = document.querySelector('.whatsapp-placeholder-box');
  if (whatsappBox) {
    whatsappBox.addEventListener('click', function() {
      showToast('Official WhatsApp number to be connected.');
    });
  }
});
