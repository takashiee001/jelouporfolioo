/*sa more details nga button*/
const container = document.querySelector(".info-box");
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
  container.classList.toggle("active"); 
});

function vibrate() {
  navigator.vibrate(6);
}

// zoom in effect sa social media part
const socialMediaLinks = document.querySelectorAll(".social-media div");

// ON SCROLL REVEAL SMALL CARDS
ScrollReveal().reveal(socialMediaLinks, {
  duration: 1000,
  opacity: 0,
  distance: "30%",
  origin: "bottom",
  scale: 0.9,
});

// on load name effect 
setTimeout(() => document.querySelector('.name').classList.add('loaded'), 500);
