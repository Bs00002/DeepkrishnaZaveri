/**
 * DEEPKRISHNA ZAVERI — LUXURY JEWELLERY INTERACTION & MEDIA ENGINE
 * A Legacy Since 1952 • Flagship Showroom 2026 • Gandhinagar
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation Bar
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // 2. Mobile Nav Drawer Toggle
  const hamburger = document.querySelector('.nav-hamburger');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.mobile-overlay');
  const closeBtn = document.querySelector('.mobile-close-btn');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

  function openDrawer() {
    drawer?.classList.add('open');
    overlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer?.classList.remove('open');
    overlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);
  mobileLinks.forEach(link => link.addEventListener('click', closeDrawer));

  // 3. Featured Reel Player Controls
  const featVideo = document.getElementById('featured-reel-video');
  const featPlayBtn = document.getElementById('feat-play-btn');
  const featSoundBtn = document.getElementById('feat-sound-btn');
  const featFsBtn = document.getElementById('feat-fs-btn');

  if (featVideo && featPlayBtn) {
    function toggleFeatPlay() {
      if (featVideo.paused) {
        // Pause all other videos
        document.querySelectorAll('video').forEach(v => {
          if (v !== featVideo) v.pause();
        });
        featVideo.play().then(() => {
          featPlayBtn.innerHTML = '<i class="las la-pause"></i>';
        }).catch(err => console.log('Autoplay deferred:', err));
      } else {
        featVideo.pause();
        featPlayBtn.innerHTML = '<i class="las la-play"></i>';
      }
    }

    featPlayBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFeatPlay();
    });

    featVideo.addEventListener('click', toggleFeatPlay);

    featSoundBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      featVideo.muted = !featVideo.muted;
      featSoundBtn.innerHTML = featVideo.muted 
        ? '<i class="las la-volume-mute"></i>' 
        : '<i class="las la-volume-up"></i>';
    });

    featFsBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!document.fullscreenElement) {
        if (featVideo.requestFullscreen) {
          featVideo.requestFullscreen();
        } else if (featVideo.webkitRequestFullscreen) {
          featVideo.webkitRequestFullscreen();
        }
      } else {
        document.exitFullscreen();
      }
    });

    featVideo.addEventListener('ended', () => {
      featPlayBtn.innerHTML = '<i class="las la-play"></i>';
    });
  }

  // 4. Mini Reel Cards & Carousel Controls
  const miniCards = document.querySelectorAll('.reel-mini-card');
  miniCards.forEach(card => {
    const video = card.querySelector('.reel-mini-video');
    const playBadge = card.querySelector('.reel-play-icon-badge');

    card.addEventListener('click', () => {
      if (!video) return;
      if (video.paused) {
        // Pause all other videos
        document.querySelectorAll('video').forEach(v => {
          if (v !== video) {
            v.pause();
            const badge = v.closest('.reel-mini-card')?.querySelector('.reel-play-icon-badge');
            if (badge) badge.innerHTML = '<i class="las la-play"></i>';
          }
        });
        if (featVideo) {
          featVideo.pause();
          if (featPlayBtn) featPlayBtn.innerHTML = '<i class="las la-play"></i>';
        }
        video.play().then(() => {
          if (playBadge) playBadge.innerHTML = '<i class="las la-pause"></i>';
        });
      } else {
        video.pause();
        if (playBadge) playBadge.innerHTML = '<i class="las la-play"></i>';
      }
    });

    if (video) {
      video.addEventListener('ended', () => {
        if (playBadge) playBadge.innerHTML = '<i class="las la-play"></i>';
      });
    }
  });

  // Carousel Arrow Controls
  const reelsTrack = document.getElementById('reels-track');
  const prevReelBtn = document.getElementById('reels-prev-btn');
  const nextReelBtn = document.getElementById('reels-next-btn');

  if (reelsTrack && prevReelBtn && nextReelBtn) {
    prevReelBtn.addEventListener('click', () => {
      reelsTrack.scrollBy({ left: -260, behavior: 'smooth' });
    });
    nextReelBtn.addEventListener('click', () => {
      reelsTrack.scrollBy({ left: 260, behavior: 'smooth' });
    });
  }

  // 5. Auto-pause videos when leaving viewport
  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const vid = entry.target;
        if (!entry.isIntersecting && !vid.paused) {
          vid.pause();
          if (vid === featVideo && featPlayBtn) {
            featPlayBtn.innerHTML = '<i class="las la-play"></i>';
          }
          const badge = vid.closest('.reel-mini-card')?.querySelector('.reel-play-icon-badge');
          if (badge) badge.innerHTML = '<i class="las la-play"></i>';
        }
      });
    }, { threshold: 0.35 });

    document.querySelectorAll('video').forEach(v => videoObserver.observe(v));
  }

  // 6. Photo Gallery Tabs & Filtering
  const tabBtns = document.querySelectorAll('.gallery-tab-btn');
  const galleryTiles = document.querySelectorAll('.gallery-tile');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const targetCat = btn.getAttribute('data-tab');

      galleryTiles.forEach(tile => {
        const tileCat = tile.getAttribute('data-cat') || '';
        if (targetCat === 'all' || tileCat.includes(targetCat)) {
          tile.style.display = 'block';
        } else {
          tile.style.display = 'none';
        }
      });
    });
  });

  // 7. Lightbox Modal with Full Navigation & Touch Gestures
  const lightbox = document.getElementById('gallery-lightbox');
  const lbImg = document.getElementById('lightbox-image');
  const lbCat = document.getElementById('lightbox-category');
  const lbTitle = document.getElementById('lightbox-title');
  const lbClose = document.getElementById('lightbox-close');
  const lbPrev = document.getElementById('lightbox-prev');
  const lbNext = document.getElementById('lightbox-next');

  let currentGalleryIndex = 0;
  let activeVisibleTiles = [];

  function getVisibleTiles() {
    return Array.from(galleryTiles).filter(t => t.style.display !== 'none');
  }

  function updateLightbox(index) {
    activeVisibleTiles = getVisibleTiles();
    if (activeVisibleTiles.length === 0) return;
    
    if (index < 0) index = activeVisibleTiles.length - 1;
    if (index >= activeVisibleTiles.length) index = 0;
    currentGalleryIndex = index;

    const tile = activeVisibleTiles[currentGalleryIndex];
    const fullSrc = tile.getAttribute('data-full') || tile.querySelector('img')?.src;
    const cat = tile.getAttribute('data-cat-label') || tile.getAttribute('data-cat') || 'Deepkrishna Zaveri';
    const title = tile.getAttribute('data-title') || tile.querySelector('.gallery-tile-title')?.innerText || '';

    if (lbImg) {
      lbImg.src = fullSrc;
      lbImg.classList.remove('zoomed');
    }
    if (lbCat) lbCat.textContent = cat;
    if (lbTitle) lbTitle.textContent = title;
  }

  galleryTiles.forEach((tile) => {
    tile.addEventListener('click', () => {
      activeVisibleTiles = getVisibleTiles();
      const idx = activeVisibleTiles.indexOf(tile);
      if (idx !== -1) {
        updateLightbox(idx);
        lightbox?.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeLightbox() {
    lightbox?.classList.remove('active');
    document.body.style.overflow = '';
    if (lbImg) lbImg.classList.remove('zoomed');
  }

  lbClose?.addEventListener('click', closeLightbox);
  lbPrev?.addEventListener('click', (e) => {
    e.stopPropagation();
    updateLightbox(currentGalleryIndex - 1);
  });
  lbNext?.addEventListener('click', (e) => {
    e.stopPropagation();
    updateLightbox(currentGalleryIndex + 1);
  });

  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-inner')) {
      closeLightbox();
    }
  });

  // Zoom on click
  lbImg?.addEventListener('click', (e) => {
    e.stopPropagation();
    lbImg.classList.toggle('zoomed');
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!lightbox?.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') updateLightbox(currentGalleryIndex - 1);
    if (e.key === 'ArrowRight') updateLightbox(currentGalleryIndex + 1);
  });

  // Mobile touch swipe gestures
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox?.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox?.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        updateLightbox(currentGalleryIndex - 1); // Swipe Right -> Prev
      } else {
        updateLightbox(currentGalleryIndex + 1); // Swipe Left -> Next
      }
    }
  }, { passive: true });

  // 8. Toast Notifications
  function showToast(message) {
    let toast = document.querySelector('.toast-msg');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast-msg';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  // 9. Forms handler
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you for contacting Deepkrishna Zaveri. Our showroom team will connect with you shortly.');
      form.reset();
    });
  });
});
