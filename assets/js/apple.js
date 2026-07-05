// Apple-style interactions: scroll reveal + active nav highlighting.
(function () {
  'use strict';

  // --- Scroll reveal via IntersectionObserver -------------------------------
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    // Stagger siblings a touch for a nicer cascade.
    revealEls.forEach(function (el) {
      var i = 0, sib = el.previousElementSibling;
      while (sib && sib.classList && sib.classList.contains('reveal')) { i++; sib = sib.previousElementSibling; }
      el.style.transitionDelay = Math.min(i, 6) * 60 + 'ms';
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  // --- Active section highlighting in the nav -------------------------------
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav__links a[href^="#"]'));
  if (navLinks.length && 'IntersectionObserver' in window) {
    var map = {};
    navLinks.forEach(function (a) {
      var id = a.getAttribute('href').slice(1);
      var sec = document.getElementById(id);
      if (sec) map[id] = a;
    });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (a) { a.style.opacity = ''; });
          var active = map[entry.target.id];
          if (active) active.style.opacity = '1';
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(map).forEach(function (id) { spy.observe(document.getElementById(id)); });
  }
})();
