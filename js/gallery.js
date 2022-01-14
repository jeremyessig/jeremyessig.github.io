var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n, captationId) {
  showSlides(slideIndex = n);
  setCaptation(captationId);
}

function setCaptation(captationId){
  var captations = document.getElementsByClassName('project-captation')
  for(const captation of captations){
    if(captationId == captation.id){
      captation.setAttribute('class', "project-captation project-active");
    }else{
      captation.setAttribute('class', "project-captation");
    }
  }
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  // var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  var captationId = slides[slideIndex-1].className.split(' ');
  setCaptation(captationId[1]);
  // console.log(slides[slideIndex-1].className);
}