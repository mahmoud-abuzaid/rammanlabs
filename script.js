document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Initial fade-in animation
    setTimeout(() => {
        document.querySelectorAll(".fade-in-up").forEach(el => {
            el.classList.add("visible");
        });
    }, 100);


    // 2. Theme Toggle Logic
    const themeToggleBtn = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme) {
        htmlElement.setAttribute("data-theme", savedTheme);
    } else {
        htmlElement.setAttribute("data-theme", "dark");
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const currentTheme = htmlElement.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            htmlElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
        });
    }

    // 3. Rotating Typewriter Text Logic (Indirect Projects Hinting)
    const words = [
        "قطاع التجارة والتعاقدات",
        "قطاع المقاولات والبناء",
        "سلاسل الإمداد اللوجستية",
        "تتبع الأصول وإدارتها",
        "دمج ذوي الاحتياجات الخاصة"
    ];
    
    let i = 0; // Current word index
    let timer;
    const dynamicText = document.getElementById("dynamic-text");
    
    function typingEffect() {
        let fullWord = words[i];
        let currentLen = 0;
        
        var loopTyping = function() {
            if (currentLen < fullWord.length) {
                currentLen++;
                dynamicText.innerHTML = fullWord.substring(0, currentLen) + "<span class='cursor'>|</span>";
                
                // Realistic typing speed: random between 40ms and 120ms
                let typingSpeed = 40 + Math.random() * 80;
                
                // Occasional human pause
                if (Math.random() < 0.1) typingSpeed += 150; 

                timer = setTimeout(loopTyping, typingSpeed);
            } else {
                dynamicText.innerHTML = fullWord + "<span class='cursor'>|</span>";
                setTimeout(deletingEffect, 2500); // Wait before deleting
            }
        };
        loopTyping();
    }

    function deletingEffect() {
        let fullWord = words[i];
        let currentLen = fullWord.length;
        
        var loopDeleting = function() {
            if (currentLen > 0) {
                currentLen--;
                dynamicText.innerHTML = fullWord.substring(0, currentLen) + "<span class='cursor'>|</span>";
                
                // Faster deleting speed but still slightly randomized
                let deletingSpeed = 20 + Math.random() * 30;
                
                timer = setTimeout(loopDeleting, deletingSpeed);
            } else {
                dynamicText.innerHTML = "<span class='cursor'>|</span>";
                i = (i + 1) % words.length;
                setTimeout(typingEffect, 800); // Wait before typing next
            }
        };
        loopDeleting();
    }

    // Set initial cursor state
    dynamicText.innerHTML = "<span class='cursor'>|</span>";
    
    // Start typing effect
    setTimeout(typingEffect, 1200);
});
