/* ------------------------------------------------
   ✅ TYPING TAGLINE ANIMATION
-------------------------------------------------*/
const taglines = [
  "Innovating. Leading. Transforming.",
  "Building the Future.",
  "Empowering Growth.",
  "Driving Digital Excellence."
];

let taglineIndex = 0;
let charIndex = 0;
let currentText = "";

function type() {
  const typedText = document.getElementById("typed-text");
  if (!typedText) return;
  
  if (charIndex < taglines[taglineIndex].length) {
    currentText += taglines[taglineIndex].charAt(charIndex);
    typedText.textContent = currentText;
    charIndex++;
    setTimeout(type, 90);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  const typedText = document.getElementById("typed-text");
  if (!typedText) return;
  
  if (charIndex > 0) {
    currentText = currentText.slice(0, -1);
    typedText.textContent = currentText;
    charIndex--;
    setTimeout(erase, 50);
  } else {
    taglineIndex = (taglineIndex + 1) % taglines.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1000);
});

/* ------------------------------------------------
   ✅ SCROLL FADE-IN ANIMATION
-------------------------------------------------*/
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

/* ------------------------------------------------
   ✅ BACK TO TOP BUTTON
-------------------------------------------------*/
const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


/* ✅ DARK MODE */
const themeToggle = document.getElementById("themeToggle");
let dark = false;

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  dark = !dark;
  themeToggle.textContent = dark ? "☀️" : "🌙";
});

/* ✅ Auto-scroll sliders */
function autoScroll() {
  const sliders = document.querySelectorAll(".journey-slider-horizontal");

  sliders.forEach(slider => {
    slider.scrollBy({ left: slider.clientWidth, behavior: "smooth" });

    // If reached end — go back
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5) {
      setTimeout(() => {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      }, 2000);
    }
  });
}

// Set auto run
setInterval(autoScroll, 5000);

/* ✅ Fade-in animation */
const options = { threshold: 0.25 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }
  });
}, options);

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const heroSection = document.querySelector(".hero");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  heroSection.classList.toggle("menu-open");
});

