
/* =========================================================
   EMAILJS CONFIGURATION
========================================================= */

// Replace these placeholders with your existing EmailJS keys.
const EMAILJS_PUBLIC_KEY = "krz8bAdNl6MKHtxeI";
const EMAILJS_SERVICE_ID = "service_1pncd8t";
const EMAILJS_TEMPLATE_ID = "template_0lqppph";

// Initialize EmailJS only when the library is loaded.
if (typeof emailjs !== "undefined") {
    emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY
    });
}


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("active");
    });

    document.querySelectorAll("#main-nav a").forEach(link => {

        link.addEventListener("click", () => {
            mainNav.classList.remove("active");
        });

    });

}


/* =========================================================
   DARK MODE
========================================================= */

const darkModeToggle =
    document.getElementById("dark-mode-toggle");

if (darkModeToggle) {

    darkModeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            darkModeToggle.textContent = "☀️";

            localStorage.setItem("theme", "dark");

        } else {

            darkModeToggle.textContent = "🌙";

            localStorage.setItem("theme", "light");

        }

    });

    // Restore previous theme.
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️";

    }

}


/* =========================================================
   HERO TYPING EFFECT
========================================================= */

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");

const text1 =
    "I build Mobile Apps, Desktop Apps, and Web Apps.";

const text2 =
    "I integrate Artificial Intelligence to create practical, innovative digital solutions.";

function typeText(element, text, speed, callback) {

    if (!element) return;

    let index = 0;

    function type() {

        if (index < text.length) {

            element.textContent += text.charAt(index);

            index++;

            setTimeout(type, speed);

        } else if (callback) {

            callback();

        }

    }

    type();

}

if (line1 && line2) {

    typeText(
        line1,
        text1,
        35,
        () => {
            typeText(line2, text2, 30);
        }
    );

}


/* =========================================================
   CONTACT FORM - EMAILJS INTEGRATION
========================================================= */

const contactForm =
    document.getElementById("contact-form");

const formMessage =
    document.getElementById("form-message");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        // Prevent the browser from reloading the page.
        event.preventDefault();

        if (!formMessage) {
            console.error("The form-message element was not found.");
            return;
        }

        // Check that the EmailJS library is available.
        if (typeof emailjs === "undefined") {

            formMessage.style.display = "block";
            formMessage.textContent =
                "Email service is unavailable. Please refresh and try again.";

            return;
        }

        // Find the submit button.
        const submitButton =
            contactForm.querySelector('[type="submit"]');

        // Prevent repeated submissions while sending.
        const originalButtonText = submitButton
            ? submitButton.textContent
            : "";

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
        }

        formMessage.style.display = "block";
        formMessage.textContent = "Sending your message...";

        try {

            // Send the form to your email through EmailJS.
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                contactForm
            );

            // Display success only after EmailJS confirms.
            formMessage.textContent =
                "Thank you! Your message has been sent successfully.";

            contactForm.reset();

            // Hide the success message after five seconds.
            setTimeout(() => {
                formMessage.style.display = "none";
            }, 5000);

        } catch (error) {

            console.error("EmailJS error:", error);

            formMessage.textContent =
                "Sorry, your message could not be sent. Please try again.";

        } finally {

            // Allow the user to submit again.
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }

        }

    });

}


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".project-card, .gallery-item, .about-highlight, .contact-form"
    );

if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

} else {

    // Keep content visible in older browsers.
    revealElements.forEach(element => {
        element.classList.add("visible");
    });

}