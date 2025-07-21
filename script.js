   
        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        // Header animation on scroll
        ScrollTrigger.create({
            start: "top -9",
            end: 99999,
            toggleClass: {className: "scrolled", targets: ".header"}
        });

        // Hero animations
        const tl = gsap.timeline();
        
        tl.from(".hero-title", {
            duration: 1.2,
            y: 100,
            opacity: 0,
            ease: "power3.out"
        })
        .from(".hero-subtitle", {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power3.out"
        }, "-=0.8")
        .from(".hero-buttons", {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: "power3.out"
        }, "-=0.6")
        .from(".floating-element", {
            duration: 2,
            scale: 0,
            rotation: 180,
            stagger: 0.2,
            ease: "elastic.out(1, 0.5)"
        }, "-=1");

        // Floating elements continuous animation
        gsap.to(".floating-1", {
            duration: 6,
            x: 30,
            y: -20,
            rotation: 360,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to(".floating-2", {
            duration: 8,
            x: -40,
            y: 25,
            rotation: -360,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to(".floating-3", {
            duration: 7,
            x: 20,
            y: -30,
            rotation: 360,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Stats counter animation
        const counters = document.querySelectorAll('.stat-number');
        
        ScrollTrigger.batch(".stat-item", {
            onEnter: (elements) => {
                elements.forEach((el, i) => {
                    const counter = el.querySelector('.stat-number');
                    const target = parseInt(counter.getAttribute('data-count'));
                    
                    gsap.from(counter, {
                        duration: 2,
                        textContent: 0,
                        ease: "power2.out",
                        snap: {textContent: 1},
                        stagger: 0.2,
                        onUpdate: function() {
                            counter.textContent = Math.ceil(counter.textContent);
                        }
                    });
                    
                    gsap.fromTo(el, 
                        { y: 50, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.8, delay: i * 0.1, ease: "power3.out" }
                    );
                });
            },
            start: "top 80%"
        });

        // Service cards animation
        ScrollTrigger.batch(".service-card", {
            onEnter: (elements) => {
                gsap.fromTo(elements, 
                    { y: 100, opacity: 0, scale: 0.8 },
                    { 
                        y: 0, 
                        opacity: 1, 
                        scale: 1,
                        duration: 0.8, 
                        stagger: 0.15, 
                        ease: "back.out(1.7)" 
                    }
                );
            },
            start: "top 80%"
        });

        // Section title animation
        ScrollTrigger.batch(".section-title", {
            onEnter: (elements) => {
                gsap.fromTo(elements, 
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
                );
            },
            start: "top 85%"
        });

        // Button hover effects
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .cta-btn');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" });
            });
            
            button.addEventListener('mouseleave', () => {
                gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
            });
        });

        // Service card hover animations
        const serviceCards = document.querySelectorAll('.service-card');
        
        serviceCards.forEach(card => {
            const icon = card.querySelector('.service-icon');
            
            card.addEventListener('mouseenter', () => {
                gsap.to(icon, { scale: 1.1, rotation: 5, duration: 0.3, ease: "power2.out" });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3, ease: "power2.out" });
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    gsap.to(window, {duration: 1, scrollTo: target, ease: "power2.inOut"});
                }
            });
        });

        // Parallax effect for hero background
        gsap.to(".hero-bg", {
            yPercent: -50,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    