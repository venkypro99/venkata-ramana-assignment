document.addEventListener('DOMContentLoaded', function () {

  /* ───────────────────────────────────────────
     Mobile Navigation Toggle
  _____________________________________________*/
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileOverlay = document.querySelector('.mobile-overlay');

  function openMenu() {
    mobileMenu.classList.add('open');
    mobileOverlay.classList.add('open');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    mobileOverlay.classList.remove('open');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', openMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMenu);

  // Close menu when a mobile nav link is clicked
  document.querySelectorAll('.mobile-nav-link').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });


  /* ───────────────────────────────────────────
     FAQ Accordion
  _____________________________________________*/
  document.querySelectorAll('.faq-item').forEach(function (item) {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', function () {
      const isExpanded = item.classList.contains('expanded');

      // Collapse all
      document.querySelectorAll('.faq-item').forEach(function (el) {
        el.classList.remove('expanded');
        const iconWrapper = el.querySelector('.faq-icon-wrapper');
        if (iconWrapper) iconWrapper.classList.remove('expanded-bg');
        const answer = el.querySelector('.faq-answer');
        if (answer) answer.style.display = 'none';
      });

      // Expand clicked (if it wasn't already open)
      if (!isExpanded) {
        item.classList.add('expanded');
        const iconWrapper = item.querySelector('.faq-icon-wrapper');
        if (iconWrapper) iconWrapper.classList.add('expanded-bg');
        const answer = item.querySelector('.faq-answer');
        if (answer) answer.style.display = 'block';
      }
    });

    // Init: hide answers except expanded
    const answer = item.querySelector('.faq-answer');
    if (answer) {
      answer.style.display = item.classList.contains('expanded') ? 'block' : 'none';
    }
  });


  /* ───────────────────────────────────────────
     Process Steps Tab Switcher
  _____________________________________________*/
  const stepItems = document.querySelectorAll('.step-item');
  stepItems.forEach(function (step, index) {
    step.addEventListener('click', function () {
      stepItems.forEach(function (s) { s.classList.remove('active'); });
      step.classList.add('active');
    });
  });


  /* ───────────────────────────────────────────
     Industries Carousel (prev / next arrows)
  _____________________________________________*/
  const industriesCards = document.querySelector('.industries-cards');
  const prevArrow = document.querySelectorAll('.nav-arrows .arrow-btn-sm')[0];
  const nextArrow = document.querySelectorAll('.nav-arrows .arrow-btn-sm')[1];
  const SCROLL_AMOUNT = 440;

  if (industriesCards) {
    if (prevArrow) {
      prevArrow.addEventListener('click', function () {
        industriesCards.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
      });
    }
    if (nextArrow) {
      nextArrow.addEventListener('click', function () {
        industriesCards.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
      });
    }
  }


  /* ───────────────────────────────────────────
     Hero Thumbnail Active State
  _____________________________________________*/
  document.querySelectorAll('.thumb').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      document.querySelectorAll('.thumb').forEach(function (t) { t.classList.remove('active'); });
      thumb.classList.add('active');
    });
  });

});
