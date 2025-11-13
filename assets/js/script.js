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
});
