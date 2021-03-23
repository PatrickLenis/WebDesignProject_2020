
//Navigation Bar
function nav_bar() {

  var navbar = document.getElementById("navbar");
  
  if (window.pageYOffset >= 936){
    navbar.classList.add("sticky");
  }
  else{
    navbar.classList.remove("sticky");
  }

}


//MultyLayer Parallax
function parallax(element, distance, speed)
{
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}

function parallax_elements(){
    parallax('.background_parallax', window.scrollY, 1);
    parallax('.made_by_parallax', window.scrollY, 0.9);
    parallax('.title_parallax', window.scrollY, 0.7);
    parallax('.foreground_parallax', window.scrollY, 0.25);
}


//Scroll Events
window.addEventListener('scroll', parallax_elements);
window.onscroll = function() {nav_bar()};


//Image SlideShow
var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

showSlides(slideIndex);