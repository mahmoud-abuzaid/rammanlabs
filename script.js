document.addEventListener("DOMContentLoaded", () => {
    // 1. Intersection Observer for scroll animations (fade-in-up)
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".fade-in-up");
    animatedElements.forEach(el => observer.observe(el));

    // 2. Theme Toggle Logic
    const themeToggleBtn = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;

    // Check local storage for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme) {
        // Apply saved theme
        htmlElement.setAttribute("data-theme", savedTheme);
    } else {
        // If no saved theme, default to dark (since site was originally dark)
        // Alternatively, we could check system preferences:
        // const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        htmlElement.setAttribute("data-theme", "dark");
    }

    // Toggle theme on button click
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const currentTheme = htmlElement.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            
            htmlElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
        });
    }
});
