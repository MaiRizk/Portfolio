function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

const menuIcon = document.getElementById('img');
const closebtn = document.getElementById('closebtn');
const menuLinks = document.getElementById('overlay-content');

menuIcon.addEventListener('click', openNav);
closebtn.addEventListener('click', closeNav);
menuLinks.addEventListener('click', closeNav);
