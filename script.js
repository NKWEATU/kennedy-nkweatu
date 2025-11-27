// ======================================================
// DARK MODE
// ======================================================
const toggleBtn = document.getElementById("dark-mode-toggle");

// Restore theme from localStorage
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Update button icon
    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});


// ======================================================
// FORM SUCCESS MESSAGE
// ======================================================
const form = document.getElementById("contact-form");
const successMsg = document.getElementById("form-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    successMsg.style.display = "block";
    successMsg.style.opacity = "1";

    form.reset();

    // Hide message after 3 seconds
    setTimeout(() => {
        successMsg.style.opacity = "0";
        setTimeout(() => {
            successMsg.style.display = "none";
        }, 500);
    }, 3000);
});


// ======================================================
// SCROLL ANIMATION (fade in sections/cards)
// ======================================================
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.2 }
);

document.querySelectorAll("section, .project-card").forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});


// ======================================================
// DARK MODE EXTRA STYLES
// ======================================================
const darkStyles = `
    body.dark {
        background: #111;
        color: white;
    }

    body.dark header {
        background: #222;
    }

    body.dark nav a {
        color: white;
    }

    body.dark .project-card {
        background: #222;
        color: white;
        border: 1px solid #444;
    }

    body.dark form input,
    body.dark form textarea {
        background: #222;
        color: white;
        border: 1px solid #555;
    }

    body.dark .email-section {
        background: #000;
    }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = darkStyles;
document.head.appendChild(styleSheet);
