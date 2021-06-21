//----- typing animation ------
const textArray = ["Great","Innovative","Impactful"];
const typingDelay = 100;
const erasingDlay =60;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function getElement(element){
  return document.querySelector(element);
}
let a = getElement(".typing");
console.log(a)



// ---------------- carousel ------
let slideIndex = 1;
let slides = document.getElementsByClassName('portfolio__content');
let dots = document.getElementsByClassName("dot");
function showSlide(n) {
  if (n >slides.length){slideIndex = 1} 
    else if (n < 1) {slideIndex = slides.length} else {slideIndex = n }
  for (let slide of slides) {
    slide.style.display = 'none';
  }
  slides[slideIndex-1].style.display = 'block';

  for (dot of dots) {
      dot.className = dot.className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
showSlide(1);
function moveToNextSlide() {
   showSlide(slideIndex-1);
}

function moveToPrevSlide() {
  showSlide(slideIndex+1)
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}


