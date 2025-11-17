// ----------------------
// DARK MODE TOGGLE
// ----------------------
const toggleBtn = document.getElementById("dark-mode-toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// ----------------------
// SCROLL ANIMATIONS
// (Fade-in effect on sections)
// ----------------------
const sections = document.querySelectorAll("section");

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
    });
}, appearOptions);

sections.forEach(section => {
    section.classList.add("fade-before");
    appearOnScroll.observe(section);
});

// ----------------------
// TYPING EFFECT ON HERO TEXT
// TYPING EFFECT (improved) + keep floating after finish
const typingTextEl = document.querySelector(".hero-text p");
const fullText = "A Software & Machine Learning Engineer building intelligent mobile, web, and desktop applications.";
let i = 0;
let typingSpeed = 25;

function typeAndFloat() {
  if (i <= fullText.length) {
    typingTextEl.textContent = fullText.substring(0, i);
    i++;
    setTimeout(typeAndFloat, typingSpeed);
  } else {
    // typing finished: mark element as 'typed' so CSS removes cursor animation
    typingTextEl.classList.add('typed');
    // ensure the floating animation remains: already applied in CSS
  }
}
// start typing after short delay
setTimeout(typeAndFloat, 700);


// ----------------------
// PROJECT CARD HOVER LIFT (extra animation)
// ----------------------
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
        card.style.boxShadow = "0 15px 25px rgba(0,0,0,0.20)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px)";
        card.style.boxShadow = "0 8px 15px rgba(0,0,0,0.10)";
    });
});

// ----------------------
// SMOOTH SCROLL FOR NAV LINKS
// ----------------------
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
