document.addEventListener("DOMContentLoaded", () => {
    // 1. Cinematic Intro Sequence
    const introContainer = document.getElementById("cinematic-intro");
    const introText = document.getElementById("intro-text");
    const mainHeroElements = document.querySelectorAll(".fade-in-up");
    
    // Pool of punchy, cinematic phrases
    const allPhrases = [
        "أمان مطلق.",
        "تطور مستمر.",
        "دعم لا محدود.",
        "رؤية لا تتوقف.",
        "خصوصية تامة.",
        "حلول ذكية.",
        "أداء استثنائي.",
        "ثقة وموثوقية.",
        "أفكار جريئة.",
        "ابتكار بلا حدود.",
        "جودة بلا مساومة.",
        "سرعة ودقة.",
        "مستقبل رقمي."
    ];

    // Shuffle array and pick 4 random phrases
    const shuffled = allPhrases.sort(() => 0.5 - Math.random());
    const flashWords = shuffled.slice(0, 4);
    
    // Add the final brand reveal
    flashWords.push(`<span style="color: var(--primary);">Romman</span><span style="color: #ffffff;">Labs</span>`);

    let flashIndex = 0;

    function triggerFlash() {
        if (flashIndex < flashWords.length) {
            introText.innerHTML = flashWords[flashIndex];
            introText.classList.add("flash-active");
            
            // Duration the word stays on screen
            setTimeout(() => {
                introText.classList.remove("flash-active");
                flashIndex++;
                
                // Delay before next word
                let nextDelay = (flashIndex === flashWords.length - 1) ? 800 : 150; 
                setTimeout(triggerFlash, nextDelay);
            }, 600); 
        } else {
            // End of sequence: Explode into white flash and reveal site
            setTimeout(() => {
                introContainer.classList.add("explode-flash");
                
                // Reveal the main site while the flash is fading
                setTimeout(() => {
                    mainHeroElements.forEach(el => el.classList.add("visible"));
                    // Start the typewriter effect
                    setTimeout(typingEffect, 800);
                }, 300);
                
                // Completely remove the intro div from DOM to prevent blocking clicks
                setTimeout(() => {
                    introContainer.style.display = "none";
                }, 2000);

            }, 300);
        }
    }

    // Start intro sequence
    setTimeout(triggerFlash, 800);

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
                timer = setTimeout(loopTyping, 60);
            } else {
                dynamicText.innerHTML = fullWord + "<span class='cursor'>|</span>";
                setTimeout(deletingEffect, 2000); // Wait before deleting
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
                timer = setTimeout(loopDeleting, 30);
            } else {
                dynamicText.innerHTML = "<span class='cursor'>|</span>";
                i = (i + 1) % words.length;
                setTimeout(typingEffect, 500); // Wait before typing next
            }
        };
        loopDeleting();
    }

    // Set initial cursor state
    dynamicText.innerHTML = "<span class='cursor'>|</span>";
});
