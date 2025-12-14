document.addEventListener('DOMContentLoaded', () => {
  // ===== Header + Nav =====
  const header = document.getElementById('site-header');
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuLinks = header.querySelectorAll('nav a:not([href="#booking"]), nav button');
  const bookBtn = header.querySelector('a[href="#booking"]'); // Book Now button
  
  let lastScrollTop = 0;

  // ===== Scroll: Hide/Show Header + Dynamic Nav Color =====
  window.addEventListener('scroll', () => {
    const st = window.scrollY;

    // 1️⃣ Hide / Show Header
    if (st > lastScrollTop && st > 100) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    lastScrollTop = st <= 0 ? 0 : st;

    // 2️⃣ Dynamic nav color based on hero visibility
    const hero = document.getElementById('home');
    if (hero) {
      const heroRect = hero.getBoundingClientRect();

      // Nav links
      if (heroRect.bottom > 0) {
        menuLinks.forEach(link => link.classList.remove('text-brand-700'));
        menuLinks.forEach(link => link.classList.add('text-brand-50'));
      } else {
        menuLinks.forEach(link => link.classList.remove('text-brand-50'));
        menuLinks.forEach(link => link.classList.add('text-brand-700'));
      }

      // Book Now button text (always dark blue)
      if (bookBtn) {
        bookBtn.classList.remove('text-brand-50', 'text-brand-700');
        bookBtn.classList.add('text-brand-700');
      }
    }
  });

  // ===== Mobile Menu Toggle =====
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
  });

  // Close mobile menu when clicking a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  });

  // ===== Alpine.js Calendar (Optional) =====
  document.addEventListener('alpine:init', () => {
    Alpine.data('calendar', () => ({
      selectedDay: new Date().getDate()
    }));
  });
});