document.addEventListener('DOMContentLoaded', () => {

  // Cria uma função para lidar com a lógica do menu mobile x desktop
  function handleMobileMenu() {
    // Seleciona o menu atual
    const navContainer = document.querySelector('.nav-container');

    // Seleciona (se existirem) os elementos mobile que vamos criar
    let mobileHeader = document.querySelector('#mobile-header');
    let mobileMenu   = document.querySelector('#mobile-menu');
    let hamburger    = document.querySelector('#mobile-hamburger');

    // Verifica se a tela está em "modo mobile"
    if (window.innerWidth <= 768) {
      // -------- MODO MOBILE --------

      // 1) Esconde o menu original
      if (navContainer) {
        navContainer.style.display = 'none';
      }

      // 2) Se o cabeçalho mobile ainda não existe, cria tudo
      if (!mobileHeader) {
        // Cabeçalho fixo no topo
        mobileHeader = document.createElement('div');
        mobileHeader.id = 'mobile-header';
        // Inline styles para não mexer no CSS
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

        // Título à esquerda
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

        // Monta o header
        mobileHeader.appendChild(mobileTitle);
        mobileHeader.appendChild(hamburger);

        // Adiciona ao body
        document.body.appendChild(mobileHeader);
      }

      // 3) Se o menu dropdown mobile não existe, cria
      if (!mobileMenu) {
        mobileMenu = document.createElement('div');
        mobileMenu.id = 'mobile-menu';
        mobileMenu.style.position = 'fixed';
        mobileMenu.style.top = '60px'; // abaixo do header
        mobileMenu.style.right = '0';
        mobileMenu.style.backgroundColor = '#333';
        mobileMenu.style.padding = '20px';
        mobileMenu.style.borderRadius = '5px 0 0 5px'; // arredonda canto esquerdo
        mobileMenu.style.display = 'none'; // inicia escondido
        mobileMenu.style.zIndex = '9998';

        // Itens do menu (mesmos do seu nav original)
        const menuItems = [
          { text: 'Início',                href: '#intro' },
          { text: 'Funcionalidades',       href: '#funcionalidades' },
          { text: 'Estrutura',            href: '#estrutura-dados' },
          { text: 'Benefícios',           href: '#beneficios' },
          { text: 'Demonstração do Sistema', href: '#pos-login' },
          { text: 'Acesso ao Sistema',    href: 'https://horizonteturismo.streamlit.app/', external: true }
        ];

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
            link.target = '_blank'; // abre em nova aba
          }
          mobileMenu.appendChild(link);
        });

        // Adiciona o menu dropdown ao body
        document.body.appendChild(mobileMenu);
      }

      // 4) Controla o clique no hamburger
      hamburger.onclick = () => {
        if (mobileMenu.style.display === 'none') {
          mobileMenu.style.display = 'block';
        } else {
          mobileMenu.style.display = 'none';
        }
      };

    } else {
      // -------- MODO DESKTOP --------

      // 1) Mostra o menu original
      if (navContainer) {
        navContainer.style.display = '';
      }

      // 2) Remove (se existir) o header e menu mobile
      if (mobileHeader) {
        mobileHeader.remove();
      }
      if (mobileMenu) {
        mobileMenu.remove();
      }
    }
  }

  // Executa a primeira checagem ao carregar a página
  handleMobileMenu();

  // Se quiser que a troca ocorra ao redimensionar a janela,
  // escute o evento "resize" e chame handleMobileMenu novamente.
  window.addEventListener('resize', handleMobileMenu);
});
