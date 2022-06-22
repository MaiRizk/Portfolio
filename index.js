function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

let menuIcon = document.getElementById('img');
let closebtn = document.getElementById('closebtn');
let menuLinks = document.getElementById('overlay-content');

menuIcon.addEventListener('click', openNav);
closebtn.addEventListener('click', closeNav);
menuLinks.addEventListener('click', closeNav);
