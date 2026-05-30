// js/main.js
import { initScrollAnimations, initParallax } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize animations
  initScrollAnimations();
  initParallax();

  // --- Navbar Logic ---
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuIcon = document.getElementById('mobile-menu-icon');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');

  // SVG Icons for Menu and Close (Lucide-react equivalents)
  const iconMenu = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
  const iconClose = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;

  let isMobileMenuOpen = false;

  // Handle Scroll to update Navbar style
  const updateScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('glass', 'py-4');
      navbar.classList.remove('bg-transparent', 'py-6');
    } else {
      navbar.classList.add('bg-transparent', 'py-6');
      navbar.classList.remove('glass', 'py-4');
    }
  };

  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll(); // Initial check

  // Mobile Menu Toggle
  const toggleMobileMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
    
    if (isMobileMenuOpen) {
      mobileMenu.style.height = mobileMenu.scrollHeight + 'px';
      mobileMenu.style.opacity = '1';
      mobileMenuIcon.innerHTML = iconClose;
      
      // Animate children
      const children = mobileMenu.querySelectorAll('.mobile-menu-item');
      children.forEach((child, index) => {
        setTimeout(() => {
          child.classList.add('translate-x-0', 'opacity-100');
          child.classList.remove('-translate-x-5', 'opacity-0');
        }, index * 100);
      });
    } else {
      mobileMenu.style.height = '0px';
      mobileMenu.style.opacity = '0';
      mobileMenuIcon.innerHTML = iconMenu;
      
      // Reset children
      const children = mobileMenu.querySelectorAll('.mobile-menu-item');
      children.forEach((child) => {
        child.classList.remove('translate-x-0', 'opacity-100');
        child.classList.add('-translate-x-5', 'opacity-0');
      });
    }
  };

  mobileMenuBtn.addEventListener('click', toggleMobileMenu);

  // Close mobile menu on link click
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMobileMenuOpen) toggleMobileMenu();
    });
  });
});
