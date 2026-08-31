/* Reveal-on-scroll com stagger, sem dependências externas.
   Cada elemento [data-reveal] entra com fade + translateY suave
   (curva de spring), respeitando data-delay individual. */

function initReveal(){
  const items = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const el = entry.target;
        const delay = parseInt(el.dataset.delay || "0", 10);
        setTimeout(() => el.classList.add('in'), delay);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  items.forEach(el => io.observe(el));
}

/* Reveal usado para os cards de pergunta, criados dinamicamente pelo
   script.js depois do primeiro fetch — aplica stagger por ordem no grid. */
function revealCards(){
  const cards = document.querySelectorAll('.q-card:not(.in)');
  cards.forEach((card, i) => {
    setTimeout(() => card.classList.add('in'), i * 45);
  });
}

document.addEventListener('DOMContentLoaded', initReveal);