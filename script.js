(() => {
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');

  const updateHeader = () => {
    if (!header || header.classList.contains('solid')) return;
    header.classList.toggle('scrolled', window.scrollY > 36);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (menuButton && nav) {
    const closeMenu = () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      document.body.style.overflow = '';
    };

    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    window.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  document.querySelectorAll('[data-year]').forEach(node => {
    node.textContent = new Date().getFullYear();
  });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const heroVideo = document.querySelector('[data-hero-video]');
  if (heroVideo) {
    if (reducedMotion) {
      heroVideo.pause();
      heroVideo.removeAttribute('autoplay');
    } else {
      const attemptPlay = heroVideo.play();
      if (attemptPlay && typeof attemptPlay.catch === 'function') {
        attemptPlay.catch(() => heroVideo.classList.add('autoplay-blocked'));
      }
    }
  }

  const reveals = document.querySelectorAll('.reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(item => item.classList.add('visible'));
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
    reveals.forEach(item => observer.observe(item));
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      const form = new FormData(contactForm);
      const name = String(form.get('name') || '').trim();
      const email = String(form.get('email') || '').trim();
      const company = String(form.get('company') || '').trim();
      const projectType = String(form.get('projectType') || '').trim();
      const message = String(form.get('message') || '').trim();
      const subject = encodeURIComponent(`Oblix Studio enquiry — ${projectType}`);
      const body = encodeURIComponent([
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || 'Not provided'}`,
        `Project type: ${projectType}`,
        '',
        message
      ].join('\n'));
      window.location.href = `mailto:hello@oblixstudio.com?subject=${subject}&body=${body}`;
    });
  }
})();
