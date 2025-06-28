
    // Dark Mode Toggle
    document.getElementById("dark-mode-toggle").addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact Form Submission
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("form-message").style.display = "block";
        setTimeout(() => {
            document.getElementById("form-message").style.display = "none";
        }, 3000);
        this.reset();
    });

    // Showcase Projects Dynamically
    const projects = [
        {
            title: "School Application Portal",
            description: "This is a simple student web application that allows the registeration of new students into a database (mysql).",
                    
            image: "studentApplicationPortal.png",
            liveDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7315305093745037312/",
            github: "https://github.com/NKWEATU/Web-based-student-management-system-project"
        },
        {
            title: "Hotel Management System",
            description: "This is a software that allows the daily tracking of the activities in a hotel.",
            image: "savedStudents.png",
            liveDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7315353445169790977/",
            github: "https://github.com/NKWEATU/Complete-Hotel-Management-System-project.-Using-Java-and-mysql"
        },
         {
            title: "Quiz App",
            description: "This is a simple online quiz app.",
            image: "",
            liveDemo: "http://localhost:63342/Quiz_APP/index.html?_ijt=a3tk9fh9av6lgf2fp6e9cuiaf8&_ij_reload=RELOAD_ON_SAVE",
            github: "https://github.com/NKWEATU/Quiz_App"
        }
    ];

    const projectsContainer = document.getElementById("projects-container");

    projects.forEach(proj => {
        let projectHTML = `
            <div class="project">
                <img src="${proj.image}" alt="${proj.title}">
                <h3>${proj.title}</h3>
                <p>${proj.description}</p>
                <a href="${proj.liveDemo}" target="_blank">Live Demo</a> |
                <a href="${proj.github}" target="_blank">GitHub</a>
            </div>
        `;
        projectsContainer.innerHTML += projectHTML;
    });
