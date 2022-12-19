window.onscroll = function() {verifyPage()};

var pesq = document.getElementById("head");
var ready = true;
// pesq.classList.add("nonedisplay");

var home = document.getElementById("home");
var aboutme = document.getElementById("aboutme");
var projects = document.getElementById("projects");
var head = document.getElementById("head");

function verifyPage() {
  console.log(window.scrollY);
  if (window.scrollY >= 0 && window.scrollY < 900){
    head.classList.add("nav-list")
    head.classList.remove("black-nav-list")

    home.classList.add("activex")
    aboutme.classList.remove("activex")
    projects.classList.remove("activex")
  } else if (window.scrollY >= 900 && window.scrollY < 1700) {
    home.classList.remove("activex")
    aboutme.classList.add("activex")
    projects.classList.remove("activex")
  } else {
    head.classList.add("black-nav-list")
    head.classList.remove("nav-list")

    home.classList.remove("activex")
    aboutme.classList.remove("activex")
    projects.classList.add("activex")
  }
}

function returnTop() {
  if (window.scrollY >= 900){
    Animate(pesq, 'up-header')
  }
}

function Animate(element, animation) {
  element.style.animation
    ? (element.style.animation = "")
    : (element.style.animation =`${animation} 0.6s ease`);
}

function typeWrite(elemento){
  elemento.innerHTML != 'programming a dream'
    ? elemento.innerHTML = 'programming a dream'
    : ''
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ' ';
  textoArray.forEach(function(letra, i){   
    setTimeout(function(){
      elemento.innerHTML += letra;
  }, 75 * i)

});
}
const titulo = document.querySelector('.text-effect');
function animarTexto(){
  setInterval(() => typeWrite(titulo), 3000);
}

animarTexto()