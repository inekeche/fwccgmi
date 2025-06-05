function validateForm(event) {
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    if (!email.value || !message.value) {
      alert("Please fill out all fields.");
      event.preventDefault();
    }
  }

  /*
  let slideIndex = 0;
  function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    if (index >= totalSlides) slideIndex = 0;
    else if (index < 0) slideIndex = totalSlides - 1;
    else slideIndex = index;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  }
  function nextSlide() {
    showSlide(slideIndex + 1);
  }
  function prevSlide() {
    showSlide(slideIndex - 1);
  }
  document.addEventListener("DOMContentLoaded", () => {
    showSlide(slideIndex);
    document.getElementById("nextBtn")?.addEventListener("click", nextSlide);
    document.getElementById("prevBtn")?.addEventListener("click", prevSlide);
  });


*/

let currentIndex = 0;
const slider = document.getElementById("slider");
const totalSlides = slider.children.length;
const slideWidth = 800;

function showSlide(index) {
  const offset = -index * slideWidth;
  slider.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Change every 3 seconds


