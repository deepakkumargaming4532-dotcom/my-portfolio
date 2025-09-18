
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