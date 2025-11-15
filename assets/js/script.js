/**
 * Iglesia Evangelica Maranata - JavaScript
 * Handles mobile navigation and active section highlighting
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

  // ============================================
  // Mobile Navigation Toggle
  // ============================================
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle menu on hamburger click
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }

  // Close menu when a link is clicked (mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth < 768) {
        navMenu.classList.remove('active');
      }
    });
  });

  // Close menu when clicking outside (mobile)
  document.addEventListener('click', function(event) {
    const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
    if (!isClickInsideNav && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  });

  // ============================================
  // Active Section Highlighting
  // ============================================
  const sections = document.querySelectorAll('.section');

  function updateActiveLink() {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      // Check if we're in this section (with offset for navbar)
      if (window.pageYOffset >= sectionTop - 100) {
        currentSection = section.getAttribute('id');
      }
    });

    // Update active class on nav links
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  }

  // Update on scroll
  window.addEventListener('scroll', updateActiveLink);

  // Update on load
  updateActiveLink();

  // ============================================
  // Ambientes de Trabajo Toggle
  // ============================================
  const ambientesToggle = document.querySelector('.ambientes-toggle');
  const ambientesList = document.querySelector('.ministerio-ambientes');

  if (ambientesToggle && ambientesList) {
    ambientesToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';

      // Toggle aria-expanded
      this.setAttribute('aria-expanded', !isExpanded);

      // Toggle active class on list
      ambientesList.classList.toggle('active');
    });
  }

  // ============================================
  // Carousel Gallery
  // ============================================
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const nextButton = document.querySelector('.carousel-btn-next');
  const prevButton = document.querySelector('.carousel-btn-prev');
  const indicatorsContainer = document.querySelector('.carousel-indicators');

  if (track && slides.length > 0) {
    let currentIndex = 0;

    // Create indicators dynamically
    slides.forEach((_, index) => {
      const indicator = document.createElement('button');
      indicator.classList.add('carousel-indicator');
      indicator.setAttribute('aria-label', `Ir a imagen ${index + 1}`);
      if (index === 0) {
        indicator.classList.add('active');
      }
      indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
      });
      indicatorsContainer.appendChild(indicator);
    });

    const indicators = Array.from(document.querySelectorAll('.carousel-indicator'));

    // Update carousel position and indicators
    function updateCarousel() {
      const slideWidth = slides[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

      // Update active indicator
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
      });
    }

    // Next button
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
      });
    }

    // Previous button
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
      });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        prevButton?.click();
      } else if (e.key === 'ArrowRight') {
        nextButton?.click();
      }
    });

    // Update on window resize
    window.addEventListener('resize', updateCarousel);

    // Auto-play carousel (optional - uncomment to enable)
    // setInterval(() => {
    //   currentIndex = (currentIndex + 1) % slides.length;
    //   updateCarousel();
    // }, 5000); // Change image every 5 seconds
  }
});
