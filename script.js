const progressBar = document.getElementById('progressBar');
const revealElements = document.querySelectorAll('.reveal');
const openCatalogBtn = document.getElementById('openCatalog');

function updateProgress() {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.12,
  },
);

revealElements.forEach((item) => revealObserver.observe(item));
window.addEventListener('scroll', updateProgress);
window.addEventListener('load', updateProgress);

openCatalogBtn.addEventListener('click', () => {
  document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
});
