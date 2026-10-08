
const WA = "https://wa.me/message/M6CZQNXBJP5SE1";
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if(menuToggle){
  menuToggle.addEventListener('click',()=>navLinks.classList.toggle('open'));
}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>navLinks?.classList.remove('open')));
