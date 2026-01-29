const movingTexts = document.querySelectorAll('.moving-text');
const fadeInElements = document.querySelectorAll('.fade-in-element');
const coloredTexts = document.querySelectorAll('.colored-text');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.01 });

movingTexts.forEach(element => {
  observer.observe(element);
});

fadeInElements.forEach(element => {
  observer.observe(element);
});

coloredTexts.forEach(element => {
  observer.observe(element);
});