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


        if (
            document.body.classList.contains("dark-mode")
        ) {

            darkModeToggle.textContent = "☀️";

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            darkModeToggle.textContent = "🌙";

            localStorage.setItem(
                "theme",
                "light"
            );

        }

    });


    /* Restore previous theme */

    const savedTheme =
        localStorage.getItem("theme");


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

            typeText(
                line2,
                text2,
                30
            );

        }
    );

}


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contact-form");

const formMessage =
    document.getElementById("form-message");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            formMessage.style.display = "block";


            contactForm.reset();


            setTimeout(() => {

                formMessage.style.display = "none";

            }, 5000);

        }
    );

}


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".project-card, .gallery-item, .about-highlight, .contact-form"
    );


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

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