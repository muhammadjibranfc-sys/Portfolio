// Smooth scrolling for navbar links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});




const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `rotateX(${ -rotateX }deg) rotateY(${ rotateY }deg) scale(1.05)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  });
});

// ScrollReveal settings
ScrollReveal().reveal('#about', { origin: 'bottom', distance: '50px', duration: 1000, reset: true });
ScrollReveal().reveal('#skills', { origin: 'left', distance: '50px', duration: 1000, reset: true });
ScrollReveal().reveal('#projects', { origin: 'right', distance: '50px', duration: 1000, reset: true, interval: 200 });
ScrollReveal().reveal('#contact', { origin: 'bottom', distance: '50px', duration: 1000, reset: true });


tsParticles.load("particles-js", {
  fpsLimit: 60,
  particles: {
    number: { value: 80 },
    color: { value: ["#0ff", "#f0f", "#fff"] },
    shape: { type: "circle" },
    opacity: { value: 0.7 },
    size: { value: { min: 1, max: 4 } },
    move: { enable: true, speed: 1, direction: "none", outModes: "bounce" },
    links: { enable: true, distance: 150, color: "#0ff", opacity: 0.4, width: 1 },
  },
  interactivity: {
    events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
    modes: { repulse: { distance: 100 }, push: { quantity: 4 } },
  },
  detectRetina: true,
});
