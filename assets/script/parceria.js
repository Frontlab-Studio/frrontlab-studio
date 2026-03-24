document.addEventListener("DOMContentLoaded", () => {
    const mathSystem = document.getElementById('math-system');
    const codeLines = document.querySelectorAll('#js-compiler span');
    const notifications = document.querySelectorAll('.sys-notif');

    if (mathSystem && codeLines.length > 0) {
        const compilerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    const targetWidths = ['80%', '50%', '90%'];

                    codeLines.forEach((line, index) => {
                        setTimeout(() => {
                            line.style.transition = 'width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                            line.style.width = targetWidths[index];
                        }, index * 300 + 400);
                    });

                    const compileTime = (codeLines.length * 300) + 400 + 300;

                    notifications.forEach((notif, index) => {
                        setTimeout(() => {
                            notif.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
                            notif.style.opacity = '1';
                            notif.style.transform = 'translateY(0)';
                        }, compileTime + (index * 400)); 
                    });

                    compilerObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 }); 

        compilerObserver.observe(mathSystem);
    }
});
// ==========================================
// MÓDULO DE INTERAÇÃO: CYBER CARDS (GLOW & DECODE)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {

    const cyberCards = document.querySelectorAll('.cyber-card');

    if (window.matchMedia("(hover: hover)").matches) {
        cyberCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    }

    const gridContainer = document.getElementById('tech-grid');
    const glitchTexts = document.querySelectorAll('.glitch-text');

    if (gridContainer) {
        const gridObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

       
                    cyberCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('system-online');
                        }, index * 200); 
                    });

   
                    glitchTexts.forEach((el, index) => {
                        setTimeout(() => {
                            const originalText = el.getAttribute('data-text');
                            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
                            let iterations = 0;

                            const interval = setInterval(() => {
                                el.innerText = originalText.split("").map((letter, i) => {
                                    if (letter === "<" || letter === ">") return letter;

                                    if (i < iterations) return originalText[i];
                                    return chars[Math.floor(Math.random() * chars.length)];
                                }).join("");

                                if (iterations >= originalText.length) {
                                    clearInterval(interval);
                               
                                    if (originalText === "Pro") {
                                        el.innerHTML = 'Pro <span class="focus-tag">[ Tráfego ]</span>';
                                    }
                                }
                                iterations += 1 / 2; 
                            }, 30);
                        }, index * 200); 
                    });

                    gridObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 }); 

        gridObserver.observe(gridContainer);
    }
});
// ==========================================
// MÓDULO DE INTERAÇÃO: BENCHMARK ARENA
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const arena = document.getElementById('benchmark-arena');
    const cards = document.querySelectorAll('.duelo-card');
    const wpCard = document.getElementById('wp-card');

    if (arena) {
        const benchmarkObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    cards.forEach(card => card.classList.add('in-view'));

                    const animarScore = (scoreElement, barElement, target, isBad) => {
                        let current = 0;
                        const speed = isBad ? 40 : 15;

                        const counter = setInterval(() => {
                            if (isBad && Math.random() > 0.8) {
                                wpCard.classList.add('is-glitching');
                                setTimeout(() => wpCard.classList.remove('is-glitching'), 600);
                                return;
                            }

                            current += 1;
                            scoreElement.innerText = current;
                            barElement.style.width = `${current}%`;

                            if (current >= target) {
                                clearInterval(counter);
                            }
                        }, speed);
                    };

                    setTimeout(() => {
                        const scoreBad = document.querySelector('.js-score-bad');
                        const barBad = document.querySelector('.js-bar-bad');
                        const scoreGood = document.querySelector('.js-score-good');
                        const barGood = document.querySelector('.js-bar-good');

                        animarScore(scoreBad, barBad, parseInt(scoreBad.getAttribute('data-target')), true);
                        animarScore(scoreGood, barGood, parseInt(scoreGood.getAttribute('data-target')), false);
                    }, 500);

                    benchmarkObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        benchmarkObserver.observe(arena);
    }
});
// ==========================================
// MÓDULO DE INTERAÇÃO: STEALTH UNCLOAK (ACORDO FANTASMA)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const ghostModule = document.getElementById('ghost-module');
    const stealthElements = document.querySelectorAll('.stealth-element');

    if (ghostModule && stealthElements.length > 0) {
        const stealthObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    stealthElements.forEach((el, index) => {
                        setTimeout(() => {
                            el.classList.add('uncloaked');
                        }, index * 150);
                    });

                    stealthObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        stealthObserver.observe(ghostModule);
    }
});
// ==========================================
// MÓDULO DE INTERAÇÃO: FAQ INTELIGENTE & CASCATA
// ==========================================
document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll('.faq-anim-b2b');

    if (faqItems.length > 0) {
        const faqObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {

                    setTimeout(() => {
                        entry.target.classList.add('show');
                    }, index * 150);

                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        faqItems.forEach(item => faqObserver.observe(item));
    }

    const detailsElements = document.querySelectorAll('.js-smart-faq');

    detailsElements.forEach(targetDetail => {
        targetDetail.addEventListener('click', () => {

            if (!targetDetail.hasAttribute('open')) {

                detailsElements.forEach(detail => {
                    if (detail !== targetDetail && detail.hasAttribute('open')) {
                        detail.removeAttribute('open');
                    }
                });
            }
        });
    });

});
// ==========================================
// MÓDULOS DE SISTEMA: COOKIES B2B & FOOTER GLITCH
// ==========================================
document.addEventListener("DOMContentLoaded", () => {


    const glitchLinks = document.querySelectorAll('.js-glitch-link');

    glitchLinks.forEach(link => {
        let interval = null;

        link.addEventListener('mouseenter', (e) => {
            clearInterval(interval);
            const originalText = link.getAttribute('data-text');
            const textNode = link.lastChild; 
            const chars = "0101XYZ#@&*";
            let iterations = 0;

            interval = setInterval(() => {
                const scrambled = originalText.split("").map((letter, i) => {
                    if (i < iterations) return originalText[i];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("");

                textNode.textContent = ' ' + scrambled;

                if (iterations >= originalText.length) {
                    clearInterval(interval);
                }
                iterations += 1; 
            }, 30);
        });

        link.addEventListener('mouseleave', () => {
            clearInterval(interval);
            link.lastChild.textContent = ' ' + link.getAttribute('data-text');
        });
    });

    // --- 2. TERMINAL DE COOKIES ---
    const cookieTerminal = document.getElementById('cookie-terminal');
    const btnAcceptCookies = document.getElementById('btn-accept-cookies');
    const btnRejectCookies = document.getElementById('btn-reject-cookies');

    if (cookieTerminal && !localStorage.getItem('frontlab_sys_auth')) {

        setTimeout(() => {
            cookieTerminal.show();
            requestAnimationFrame(() => {
                cookieTerminal.style.opacity = '1';
                cookieTerminal.style.transform = 'translateY(0)';
            });
        }, 3000);
    }

    function fecharTerminal(status) {
        localStorage.setItem('frontlab_sys_auth', status);
        cookieTerminal.style.opacity = '0';
        cookieTerminal.style.transform = 'translateY(20px)';

        setTimeout(() => {
            cookieTerminal.close();
        }, 400);
    }

    if (btnAcceptCookies) btnAcceptCookies.addEventListener('click', () => fecharTerminal('accepted'));
    if (btnRejectCookies) btnRejectCookies.addEventListener('click', () => fecharTerminal('rejected'));
});