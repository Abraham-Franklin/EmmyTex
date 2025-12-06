// =========================
// MOBILE NAV TOGGLE
// =========================
const menuBtn = document.querySelector(".mobile-menu-icon");
const mobileNav = document.querySelector(".mobile-nav-list");
const body = document.body;

menuBtn.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("openNav");
    menuBtn.classList.toggle("openNav");

    // Prevent body scroll when menu is open
    body.style.overflow = isOpen ? "hidden" : "auto";
});

// Close mobile menu when clicking a link
document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
        mobileNav.classList.remove("openNav");
        menuBtn.classList.remove("openNav");
        body.style.overflow = "auto";
    });
});


// =========================
// NAV SHRINK ON SCROLL
// =========================
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});


// =========================
// FAQ ACCORDION
// =========================
const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const parent = btn.parentElement;
        parent.classList.toggle("open");

        // Close others
        faqButtons.forEach(other => {
            if (other !== btn) {
                other.parentElement.classList.remove("open");
            }
        });
    });
});


// =========================
// SMOOTH SCROLLING
// =========================
document.querySelectorAll("nav a, .mobile-nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const targetID = this.getAttribute("href");

        if (targetID.startsWith("#")) {
            e.preventDefault();
            document.querySelector(targetID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// =========================
// STAGGERED REVEAL ANIMATIONS
// =========================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

// Apply animations to sections
document.querySelectorAll(".reveal").forEach(section => {
    observer.observe(section);
});


// FAQ accordion
const faqQuestions = document.querySelectorAll('.collapse-div');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isVisible = answer.style.display === 'block';

        // Close all answers
        document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');

        // Toggle current
        answer.style.display = isVisible ? 'none' : 'block';
    });
});