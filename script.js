
// Scroll animations
document.addEventListener("scroll", function () {
  const animElems = document.querySelectorAll(".fade-in, .slide-left, .slide-right, .profile-photo");
  animElems.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
const text = [
  "💻 Frontend Developer",
  "📚 Web Designer",
  "🏋️ Fitness Enthusiast"
];
let index = 0;
const typing = document.getElementById("typing");

function changeText() {
    typing.textContent = text[index];
    index = (index + 1) % text.length;
}

changeText();
setInterval(changeText, 2000);
const slides = document.querySelectorAll(".slide");

let current = 0;

setInterval(() => {

    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");

},3000);