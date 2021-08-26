const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

// slide navigation
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

// event listeners
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
});
prevBtn.addEventListener("click", function () {
  counter--;
});

function carousel() {
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
