showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("home-landing-top-container-hide");
  slides[0].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}