const links = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

function navigate(hash) {
  const target = hash.replace('#', '') || 'home';
  pages.forEach(p => p.classList.toggle('active', p.id === target));
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + target));
}

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const hash = link.getAttribute('href');
    history.pushState(null, '', hash);
    navigate(hash);
  });
});

window.addEventListener('popstate', () => navigate(location.hash));

navigate(location.hash);
