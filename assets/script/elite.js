document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("slider");
    const goodSide = document.getElementById("good-side");
    const sliderButton = document.getElementById("slider-button");

    slider.addEventListener("input", (e) => {
        const sliderPos = e.target.value;
        goodSide.style.clipPath = `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`;
        sliderButton.style.left = `${sliderPos}%`;
    });
});
// ==========================================
// MÓDULO DE INTERAÇÃO: OFERTA ELITE (DECODE)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const eliteCard = document.getElementById('elite-card');
    const priceValue = document.getElementById('price-value');

    const ofertaObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 1. Dispara a subida do Card
                entry.target.classList.add('is-visible');

                // 2. Dispara o Efeito Hacker de Preço
                if (priceValue && !priceValue.classList.contains('decoded')) {
                    priceValue.classList.add('decoded');

                    const finalString = "R$ 360";
                    const chars = "010101#@$%*&";
                    let iterations = 0;

                    const interval = setInterval(() => {
                        priceValue.innerText = finalString.split("").map((letter, index) => {
                            if (index < iterations) return finalString[index];
                            return chars[Math.floor(Math.random() * chars.length)];
                        }).join("");

                        if (iterations >= finalString.length) {
                            clearInterval(interval);
                        }
                        iterations += 1 / 3; // Controla a velocidade da decodificação
                    }, 40);
                }

                // Para de observar depois que rodou a primeira vez
                ofertaObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }); // Aciona quando 20% do card entra na tela

    if (eliteCard) {
        ofertaObserver.observe(eliteCard);
    }
});
// ==========================================
// MÓDULO DE INTERAÇÃO: TIMELINE PROGRESSIVA
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll('.timeline-step');
    const progressBar = document.getElementById('timeline-progress');

    if (steps.length > 0 && progressBar) {
        const stepObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-active');

                    // Lógica para descer a linha verde dinamicamente
                    // Encontra todos os elementos ativos para calcular a altura da linha
                    const activeSteps = document.querySelectorAll('.timeline-step.is-active');
                    const lastActive = activeSteps[activeSteps.length - 1];

                    if (lastActive) {
                        // Calcula a distância do topo da timeline até o final do último item ativo
                        const timelineTop = lastActive.parentElement.getBoundingClientRect().top;
                        const lastActiveBottom = lastActive.getBoundingClientRect().top + lastActive.offsetHeight;

                        // Define a altura da barra verde
                        let newHeight = lastActiveBottom - timelineTop;
                        progressBar.style.height = `${newHeight}px`;
                    }
                }
            });
        }, {
            threshold: 0.5, // Dispara quando 50% do bloco entra na tela
            rootMargin: "0px 0px -15% 0px" // Antecipa levemente para dar tempo da animação rolar
        });

        steps.forEach(step => {
            stepObserver.observe(step);
        });
    }
});
// ==========================================
// MÓDULO DE INTERAÇÃO: FEEDBACK (SISTEMA BOOT)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const feedbackModule = document.getElementById('feedback-module');
    const feedbackCards = document.querySelectorAll('.feedback-card');

    if (feedbackModule && feedbackCards.length > 0) {
        const feedbackObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    // 1. Efeito Cascata: Injeta a classe .booted um por um
                    feedbackCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('booted');

                            // 2. Efeito "Typing" Hacker nas estrelas
                            const ratingEl = card.querySelector('.js-rating');
                            if (ratingEl) {
                                const targetRating = ratingEl.getAttribute('data-rating');
                                ratingEl.innerText = ''; // Limpa

                                let charIndex = 0;
                                const starInterval = setInterval(() => {
                                    ratingEl.innerText += targetRating[charIndex];
                                    charIndex++;
                                    if (charIndex >= targetRating.length) clearInterval(starInterval);
                                }, 100); // 100ms por estrela
                            }

                        }, index * 200); // Delay de 200ms entre cada card
                    });

                    // Desliga o observador para animar apenas na primeira vez
                    feedbackObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        feedbackObserver.observe(feedbackModule);
    }
});
// ==========================================
// MÓDULO DE INTERAÇÃO: FAQ CASCATA
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll('.faq-anim');

    if (faqItems.length > 0) {
        const faqObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Delay progressivo usando o index da lista para efeito "escada"
                    setTimeout(() => {
                        entry.target.classList.add('show');
                    }, index * 150);

                    // Para de observar depois que apareceu
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1, // Dispara assim que 10% do item aparece
            rootMargin: "0px 0px -50px 0px" // Dispara um pouco antes de tocar no rodapé da tela
        });

        faqItems.forEach(item => {
            faqObserver.observe(item);
        });
    }
});
// ==========================================
// MÓDULO DE PRIVACIDADE: COOKIES TIPO TERMINAL
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const cookieTerminal = document.getElementById('cookie-terminal');
    const btnAcceptCookies = document.getElementById('btn-accept-cookies');
    const btnRejectCookies = document.getElementById('btn-reject-cookies');

    if (cookieTerminal && !localStorage.getItem('frontlab_sys_auth')) {
        // Atraso de 3 segundos para proteger o PageSpeed (LCP)
        setTimeout(() => {
            cookieTerminal.show();

            // Permite que o browser renderize o display block antes da transição
            requestAnimationFrame(() => {
                cookieTerminal.style.opacity = '1';
                cookieTerminal.style.transform = 'translateY(0)';
            });
        }, 3000);
    }

    function fecharTerminalCookie(status) {
        localStorage.setItem('frontlab_sys_auth', status);

        cookieTerminal.style.opacity = '0';
        cookieTerminal.style.transform = 'translateY(20px)';

        setTimeout(() => {
            cookieTerminal.close();
        }, 400);
    }

    if (btnAcceptCookies) {
        btnAcceptCookies.addEventListener('click', () => fecharTerminalCookie('accepted'));
    }

    if (btnRejectCookies) {
        btnRejectCookies.addEventListener('click', () => fecharTerminalCookie('rejected'));
    }
});