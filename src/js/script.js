const menuToggle = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');


menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('open');
});

document.addEventListener('click', (event) => {
  const isClickInside = menu.contains(event.target) || menuToggle.contains(event.target);
  
  if (!isClickInside && menu.classList.contains('open')) {
    menu.classList.remove('open');
  }
});