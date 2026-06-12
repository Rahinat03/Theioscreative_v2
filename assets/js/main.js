// ── Theios Creative – Global JS ─────────────────────────────

document.addEventListener('DOMContentLoaded', () => {

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // Mobile nav toggle with improved accessibility and iOS scroll lock
  const toggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (toggle && mobileMenu) {
    let scrollPosition = 0;

    const openMenu = () => {
      // Save scroll position
      scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      // Lock body scroll (works on iOS)
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = '100%';

      // Update classes and ARIA
      toggle.classList.add('open');
      mobileMenu.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');

      // Focus first menu item
      const firstLink = mobileMenu.querySelector('a');
      if (firstLink) {
        setTimeout(() => firstLink.focus(), 100);
      }
    };

    const closeMenu = () => {
      // Unlock body scroll
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('position');
      document.body.style.removeProperty('top');
      document.body.style.removeProperty('width');

      // Restore scroll position
      window.scrollTo(0, scrollPosition);

      // Update classes and ARIA
      toggle.classList.remove('open');
      mobileMenu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');

      // Return focus to toggle button
      toggle.focus();
    };

    // Toggle button click
    toggle.addEventListener('click', () => {
      const isOpen = toggle.classList.contains('open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu when clicking links
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.classList.contains('open')) {
        closeMenu();
      }
    });

    // Trap focus within mobile menu when open
    const focusableElements = mobileMenu.querySelectorAll('a, button');
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    mobileMenu.addEventListener('keydown', (e) => {
      if (e.key === 'Tab' && toggle.classList.contains('open')) {
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    });
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => revealObserver.observe(el));

  // Active nav link (desktop and mobile)
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Set active class for desktop nav links
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Set active class for mobile menu links (exclude buttons)
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    // Skip if this is a button
    if (link.classList.contains('btn')) return;

    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

});
