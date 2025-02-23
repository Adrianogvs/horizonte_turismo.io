document.addEventListener('DOMContentLoaded', () => {
  /*************************************************
   * 1. BOTÃO "VOLTAR AO TOPO" (scrollTopBtn)
   *************************************************/
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    // Mostra/esconde o botão de scroll ao rolar a página
    window.addEventListener('scroll', () => {
      scrollTopBtn.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
    });
    // Ao clicar, sobe suavemente
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /*************************************************
   * 2. EXPANDIR/RECOLHER IMAGENS AO CLICAR (fullscreen)
   *************************************************/
  const cards = document.querySelectorAll('.screenshot-card');
  cards.forEach(card => {
    const img = card.querySelector('img');
    card.addEventListener('click', () => {
      img.classList.toggle('fullscreen'); // adiciona/remove a classe .fullscreen
    });
  });

  /*************************************************
   * 3. MENU HAMBURGER SOMENTE PARA MOBILE
   *************************************************/
  function handleMobileMenu() {
    // Define a largura máxima que você considera "mobile"
    const mobileMaxWidth = 768;

    // Seleciona o menu original
    const navContainer = document.querySelector('.nav-container');

    // Tenta selecionar (caso já tenha sido criado) os elementos do menu mobile
    let mobileHeader = document.querySelector('#mobile-header');
    let mobileMenu   = document.querySelector('#mobile-menu');
    let hamburger    = document.querySelector('#mobile-hamburger');

    if (window.innerWidth <= mobileMaxWidth) {
      // =========== MODO MOBILE ===========

      // 1) Esconde o menu original
      if (navContainer) {
        navContainer.style.display = 'none';
      }

      // 2) Se ainda não existe o cabeçalho mobile, cria agora
      if (!mobileHeader) {
        mobileHeader = document.createElement('div');
        mobileHeader.id = 'mobile-header';
        // Estilos inline para não mexer no CSS
        mobileHeader.style.position = 'fixed';
        mobileHeader.style.top = '0';
        mobileHeader.style.left = '0';
        mobileHeader.style.width = '100%';
        mobileHeader.style.height = '60px';
        mobileHeader.style.backgroundColor = '#121212';
        mobileHeader.style.display = 'flex';
        mobileHeader.style.alignItems = 'center';
        mobileHeader.style.justifyContent = 'space-between';
        mobileHeader.style.padding = '0 20px';
        mobileHeader.style.zIndex = '9999';

        // Texto "Horizonte Turismo" à esquerda
        const mobileTitle = document.createElement('span');
        mobileTitle.textContent = 'Horizonte Turismo';
        mobileTitle.style.color = '#fff';
        mobileTitle.style.fontSize = '1.2rem';
        mobileTitle.style.fontWeight = 'bold';

        // Ícone hamburger à direita
        hamburger = document.createElement('div');
        hamburger.id = 'mobile-hamburger';
        hamburger.style.width = '30px';
        hamburger.style.height = '24px';
        hamburger.style.display = 'flex';
        hamburger.style.flexDirection = 'column';
        hamburger.style.justifyContent = 'space-between';
        hamburger.style.cursor = 'pointer';

        // Cria as 3 barrinhas
        for (let i = 0; i < 3; i++) {
          const bar = document.createElement('span');
          bar.style.display = 'block';
          bar.style.width = '100%';
          bar.style.height = '3px';
          bar.style.backgroundColor = '#fff';
          bar.style.borderRadius = '2px';
          hamburger.appendChild(bar);
        }

        // Monta o header mobile
        mobileHeader.appendChild(mobileTitle);
        mobileHeader.appendChild(hamburger);
        document.body.appendChild(mobileHeader);
      }

      // 3) Se o dropdown do menu mobile ainda não existe, cria agora
      if (!mobileMenu) {
        mobileMenu = document.createElement('div');
        mobileMenu.id = 'mobile-menu';
        mobileMenu.style.position = 'fixed';
        mobileMenu.style.top = '60px';
        mobileMenu.style.right = '0';
        mobileMenu.style.backgroundColor = '#333';
        mobileMenu.style.padding = '20px';
        mobileMenu.style.borderRadius = '5px 0 0 5px';
        mobileMenu.style.display = 'none';
        mobileMenu.style.zIndex = '9998';

        // Mesmos links do menu original
        const menuItems = [
          { text: 'Início',                href: '#intro' },
          { text: 'Funcionalidades',       href: '#funcionalidades' },
          { text: 'Estrutura',             href: '#estrutura-dados' },
          { text: 'Benefícios',            href: '#beneficios' },
          { text: 'Demonstração do Sistema', href: '#pos-login' },
          { text: 'Acesso ao Sistema',     href: 'https://horizonteturismo.streamlit.app/', external: true }
        ];

        // Cria os links
        menuItems.forEach(item => {
          const link = document.createElement('a');
          link.textContent = item.text;
          link.href = item.href;
          link.style.color = '#fff';
          link.style.display = 'block';
          link.style.marginBottom = '10px';
          link.style.textDecoration = 'none';
          link.style.fontSize = '1rem';
          if (item.external) {
            link.target = '_blank';
          }
          mobileMenu.appendChild(link);
        });

        document.body.appendChild(mobileMenu);
      }

      // 4) Ao clicar no hamburger, mostra/esconde o menu
      hamburger.onclick = () => {
        mobileMenu.style.display = (mobileMenu.style.display === 'none')
          ? 'block'
          : 'none';
      };

    } else {
      // =========== MODO DESKTOP ===========

      // Mostra o menu original
      if (navContainer) {
        navContainer.style.display = '';
      }

      // Remove o header e menu mobile (se existirem)
      if (mobileHeader) {
        mobileHeader.remove();
      }
      if (mobileMenu) {
        mobileMenu.remove();
      }
    }
  }

  // Chama a função pela primeira vez
  handleMobileMenu();

  // Se quiser alternar automaticamente ao redimensionar (sem dar refresh):
  window.addEventListener('resize', handleMobileMenu);
});
