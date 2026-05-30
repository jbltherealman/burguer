// js/utils.js

/**
 * Initializes IntersectionObserver to add a class when elements enter the viewport.
 * Replaces framer-motion `useInView` functionality.
 */
export function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px', // -100px margin as in framer-motion `margin: "-100px"`
    threshold: 0
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the 'visible' class to trigger CSS transitions
        entry.target.classList.add('visible');
        
        // If it's meant to trigger only once (framer-motion once: true)
        if (entry.target.dataset.once !== 'false') {
          observer.unobserve(entry.target);
        }
      }
    });
  }, observerOptions);

  // Select all elements with animation classes
  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right, .zoom-in');
  
  animatedElements.forEach(el => observer.observe(el));
}

/**
 * Simple Parallax effect on scroll
 */
export function initParallax() {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  if (parallaxElements.length === 0) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach(el => {
      const speed = el.dataset.speed || 0.1;
      const yPos = -(scrollY * speed);
      el.style.transform = `translateY(${yPos}px)`;
    });
  }, { passive: true });
}
