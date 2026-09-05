/* ============================================
   CAROLINE PORTFOLIO — Main JavaScript
   Navigation, Scroll Animations, Accordion
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollAnimations();
  initAccordion();
  initSmoothScroll();
  initLazyLoading();
});

/* ============================================
   1. Sticky Navigation & Active State
   ============================================ */
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileOverlay = document.getElementById('mobile-menu-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-menu .nav-link, .mobile-menu .nav-cta');

  // Scroll – update active link
  function updateActiveNav() {
    const scrollY = window.scrollY + 150;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
        // Also update mobile links
        mobileLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();

  // Navbar background opacity on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      toggleMobileMenu();
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', () => {
      closeMobileMenu();
    });
  }

  // Close mobile menu on link click
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.contains('show');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  function openMobileMenu() {
    mobileMenu.style.display = 'block';
    mobileOverlay.style.display = 'block';
    // Trigger animation
    requestAnimationFrame(() => {
      mobileMenu.classList.add('show');
      mobileOverlay.classList.add('show');
    });
    document.body.style.overflow = 'hidden';
    navToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('show');
    mobileOverlay.classList.remove('show');
    document.body.style.overflow = '';
    navToggle.setAttribute('aria-expanded', 'false');
    setTimeout(() => {
      mobileMenu.style.display = 'none';
      mobileOverlay.style.display = 'none';
    }, 400);
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('show')) {
      closeMobileMenu();
    }
  });
}

/* ============================================
   2. Smooth Scroll
   ============================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offset = 100;
        const targetPosition = targetElement.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ============================================
   3. Scroll Animations (Intersection Observer)
   ============================================ */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
      observer.observe(el);
    });
  } else {
    // Fallback for older browsers
    animatedElements.forEach(el => {
      el.classList.add('animate-in');
    });
  }
}

/* ============================================
   4. Accordion (Experience Cards)
   ============================================ */
function initAccordion() {
  const expCards = document.querySelectorAll('.exp-card[data-accordion]');

  expCards.forEach(card => {
    const header = card.querySelector('.exp-card-header');

    header.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');

      // Close all others (optional — remove this block for multi-open)
      expCards.forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.classList.remove('open');
        }
      });

      card.classList.toggle('open');
    });

    // Keyboard accessibility
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });

    header.setAttribute('tabindex', '0');
    header.setAttribute('role', 'button');
    header.setAttribute('aria-expanded', 'false');
  });
}

/* ============================================
   5. Lazy Loading Images
   ============================================ */
function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img[data-src]');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    }, {
      threshold: 0.01,
      rootMargin: '200px 0px'
    });

    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }
}
