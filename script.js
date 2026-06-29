document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Initial fade-in animation
    setTimeout(() => {
        document.querySelectorAll(".fade-in-up").forEach(el => {
            el.classList.add("visible");
        });
    }, 100);

    // 2. Interactive Spotlight Grid (Hidden Phrases)
    const techPhrases = [
        "هندسة برمجية متقدمة", "حماية بيانات سيادية", "بنية تحتية سحابية", "ذكاء أعمال مستدام",
        "تحول رقمي شامل", "أتمتة العمليات", "حلول متدرجة", "منظومات ذكية", "تحليل بيانات ضخم",
        "أمان سيبراني مطلق", "واجهات تفاعلية", "تجربة مستخدم فائقة", "موثوقية عالية",
        "سرعة استجابة", "خوارزميات متطورة", "تطوير مرشّد", "بوابات دفع آمنة", "تكامل أنظمة",
        "تقنيات الجيل القادم", "ابتكار مستمر", "ذكاء اصطناعي مدمج", "حلول لوجستية ذكية",
        "إدارة سلسلة الإمداد", "أنظمة تخطيط الموارد", "حلول مالية رقمية", "تكنولوجيا مالية",
        "تشفير متقدم", "هندسة بيانات", "واجهات برمجة التطبيقات", "بنية لا مركزية",
        "بلوكتشين للأعمال", "إنترنت الأشياء", "مدن ذكية", "حلول تجارة إلكترونية",
        "منصات تداول متطورة", "تطوير تطبيقات أصلية", "استضافة سحابية آمنة", "خوادم مخصصة",
        "إدارة هويات رقمية", "تعلم آلة مستمر", "نماذج تنبؤية", "أداء فائق السرعة",
        "توسعية لا محدودة", "مرونة تشغيلية", "دعم فني استباقي", "مراقبة مدار الساعة",
        "حلول تعافي من الكوارث", "تخزين سحابي لامركزي", "أدوات اتصال متقدمة", "منصات إدارة المهام",
        "أتمتة تسويق", "إدارة علاقات عملاء", "نظم إدارة محتوى", "منصات تعليم إلكتروني",
        "تكنولوجيا صحية ذكية", "إدارة أصول مؤسسية", "نظم تحكم ذكية", "أمن شبكات",
        "حلول تنقل مستدامة", "أنظمة حجز متكاملة", "منصات عقارية رقمية", "تقنيات واقع معزز",
        "واقع افتراضي للأعمال", "تصميم تجارب رقمية", "هندسة واجهات معتمدة", "تصميم واجهات بديهية",
        "تخصيص متقدم", "تقارير تحليلية لحظية", "أدوات ذكاء تنافسي", "أنظمة كشف احتيال",
        "توثيق ثنائي العوامل", "إدارة حقوق رقمية", "أنظمة نقاط بيع سحابية", "إدارة مخزون ذكية",
        "تتبع أصول لحظي", "لوحات تحكم تفاعلية", "أدوات تكامل مستمر", "تطوير عمليات مؤتمتة",
        "بنية خوادم صغرى", "تصميم بنية مرنة", "حلول استدامة رقمية", "تمكين قوى عاملة",
        "تطوير قدرات رقمية", "مبادرات تحول وطنية", "حلول قطاع عام", "تكنولوجيا زراعية ذكية",
        "منصات تفاوض إلكتروني", "أنظمة تعاقد ذكية", "منصات مقاولات متكاملة", "حلول دمج مجتمعي",
        "تمكين ذوي الهمم رقمياً", "أنظمة وصول شاملة", "تقنيات مساعدة ذكية", "تصميم رقمي شامل",
        "شراكات استراتيجية", "نمو مستدام", "كفاءة تشغيلية", "حلول مخصصة للشركات",
        "تصميم معماري برمجي", "استشارات تحول رقمي", "إدارة مشاريع رشيقة", "تطوير منتجات رقمية"
    ];

    const spotlightGrid = document.getElementById("spotlight-grid");
    if (spotlightGrid) {
        // Ensure enough words to fill the entire screen (top to bottom) even with large gaps
        const shuffled = techPhrases.sort(() => 0.5 - Math.random());
        const wordsToDisplay = [...shuffled, ...shuffled, ...shuffled].slice(0, 180);
        
        wordsToDisplay.forEach(word => {
            const span = document.createElement("span");
            span.className = "spotlight-word";
            span.textContent = word;
            spotlightGrid.appendChild(span);
        });

        // Track mouse movement to update the mask gradient position
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            spotlightGrid.style.setProperty('--mouse-x', `${x}px`);
            spotlightGrid.style.setProperty('--mouse-y', `${y}px`);
        });
    }

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
    
    // Start typing effect
    setTimeout(typingEffect, 1200);
});
