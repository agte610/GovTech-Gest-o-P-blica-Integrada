/**
 * Script.js
 * Interações leves de User Experience (Animações de Scroll).
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica do Intersection Observer para as animações de Fade-in
    // Quando um elemento com a classe .fade-in entrar na tela, adicionamos .is-visible
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Dispara quando 15% do elemento está visível
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // (Opcional) descomente a linha abaixo para que a animação rode toda vez, não só na primeira
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos com fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => fadeObserver.observe(el));

    // 2. Comportamento para o Header no Scroll (estético - diminuir opacity se quiser)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
});
