
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
            description: "A short description of Project One.",
            image: "savedStudents.png",
            liveDemo: "http://localhost:8080/students/new",
            github: "https://github.com/NKWEATU/Web-based-student-management-system-project"
        },
        {
            title: "Login Registeration Portal",
            description: "A short description of Project Two.",
            image: "savedStudents.png",
            liveDemo: "http://localhost:8080/login",
            github: "https://github.com/NKWEATU/Web-Based-Login-Registration-System"
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
