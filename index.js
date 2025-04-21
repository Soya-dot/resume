
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav__list');


if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
}
