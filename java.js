const navToggle = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const menuIcon = navToggle.querySelector("i");

menuIcon.addEventListener("click", function() {
    navbar.classList.toggle("open");

    const isOpen = navbar.classList.contains("open")
    menuIcon.setAttribute("class", isOpen ? "bx bx-x" : "bx bx-menu");
});

navbar.addEventListener("click", function() {
    this.classList.remove("open");
    menuIcon.setAttribute("class", "bx bx-menu");
})


const navLinks = navbar.querySelectorAll("a")
navLinks.forEach(navbar => {
    navbar.addEventListener("click", function() {
        navLinks.forEach(a => a.classList.remove("active"));
        this.classList.add("active");
    });
});



const typed = new Typed("#text-animation", {
    strings: ["Backend Developer", "Web Designer", "Language Enthusiast"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 500,
    loop: true,
});



const progressBar = document.querySelectorAll(".about-progressbar");

Array.from(progressBar).forEach((bar) => {
    const progress = bar.dataset.progress;
    bar.querySelector("span").style.width = progress + "%";
});


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: "1000",
};

ScrollReveal().reveal(".about img", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about-content", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".about-progress", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".timeline-item", {
    ...scrollRevealOption,
    interval: 700,
});

ScrollReveal().reveal(".services-card", {
    ...scrollRevealOption,
    interval: 700,
});

ScrollReveal().reveal(".contact-container", {
    ...scrollRevealOption,
    delay: 1000,
});