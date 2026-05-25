// ================= LOADER =================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }

});


// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


// ================= CLOSE MENU AFTER CLICK =================

const navLinksAll = document.querySelectorAll(".nav-links a");

navLinksAll.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ================= TYPING EFFECT =================

if (document.querySelector(".typing")) {

    new Typed(".typing", {

        strings: [
            "Full Stack Developer",
            "Python Developer",
            "Django Developer"
        ],

        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    });

}


// ================= AOS ANIMATION =================

AOS.init({
    duration: 1000,
    once: true
});


// ================= DARK MODE =================

const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {

    toggleBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

    });

}


// ================= CONTACT FORM ALERT =================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function() {

        Swal.fire({

            title: "Success!",
            text: "Message Sent Successfully",
            icon: "success"

        });

    });

}


// ================= ACTIVE NAVBAR =================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinksAll.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ================= SCROLL TOP BUTTON =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}


// ================= PARTICLES BACKGROUND =================

if (document.getElementById("particles-js")) {

    particlesJS("particles-js", {

        particles: {

            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },

            color: {
                value: "#3b82f6"
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.5
            },

            size: {
                value: 3
            },

            line_linked: {
                enable: true,
                distance: 150,
                color: "#3b82f6",
                opacity: 0.4,
                width: 1
            },

            move: {
                enable: true,
                speed: 3
            }

        },

        interactivity: {

            detect_on: "canvas",

            events: {

                onhover: {
                    enable: true,
                    mode: "repulse"
                }

            }

        },

        retina_detect: true

    });

}


// ================= CV POPUP =================

const openPopup = document.getElementById("openPopup");
const cvPopup = document.getElementById("cvPopup");
const closePopup = document.getElementById("closePopup");

if (openPopup && cvPopup && closePopup) {

    // OPEN POPUP
    openPopup.addEventListener("click", () => {

        cvPopup.style.display = "flex";

    });

    // CLOSE POPUP
    closePopup.addEventListener("click", () => {

        cvPopup.style.display = "none";

    });

    // CLOSE WHEN CLICK OUTSIDE
    window.addEventListener("click", (e) => {

        if (e.target === cvPopup) {

            cvPopup.style.display = "none";

        }

    });

}


// ================= CV FORM DOWNLOAD =================

const cvForm = document.getElementById("cvForm");

if (cvForm) {

    cvForm.addEventListener("submit", function(e) {

        e.preventDefault();

        // GET EMAIL
        const formData = new FormData(cvForm);

        // SEND DATA TO WEB3FORMS
        fetch("https://api.web3forms.com/submit", {

            method: "POST",
            body: formData

        })

        .then(response => response.json())

        .then(data => {

            if (data.success) {

                // CLOSE POPUP
                document.getElementById("cvPopup").style.display = "none";

                // SUCCESS MESSAGE
                Swal.fire({

                    title: "Success!",
                    text: "CV Download Started",
                    icon: "success"

                });

                // DOWNLOAD CV
                const link = document.createElement("a");

                link.href = "resume.pdf";

                link.download = "Pramod_Resume.pdf";

                document.body.appendChild(link);

                link.click();

                document.body.removeChild(link);

            }

        })

        .catch(error => {

            Swal.fire({

                title: "Error!",
                text: "Something went wrong",
                icon: "error"

            });

        });

    });

}

// ANIMATED COUNTER

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});