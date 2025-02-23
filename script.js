document.addEventListener('DOMContentLoaded', () => {
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  // Exibe ou oculta o botão ao rolar a página
  window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Efeito de expandir/recolher ao clicar na imagem do card
  const cards = document.querySelectorAll('.screenshot-card');
  cards.forEach(card => {
    const img = card.querySelector('img');
    card.addEventListener('click', () => {
      img.classList.toggle('fullscreen');
    });
  });
});
