document.addEventListener('DOMContentLoaded', () => {
  /*************************************************
   * 1. BOTÃO "VOLTAR AO TOPO" (scrollTopBtn)
   *************************************************/
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
    });
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
      img.classList.toggle('fullscreen');
      if (img.classList.contains('fullscreen')) {
        img.style.transition = 'transform 0.5s ease';
        img.style.transform = 'scale(1)';
      } else {
        img.style.transition = 'transform 0.5s ease';
        img.style.transform = 'scale(0.8)';
      }
    });
  });

  /*************************************************
   * 3. MENU HAMBURGER SOMENTE PARA MOBILE
   *************************************************/
  function handleMobileMenu() {
    const mobileMaxWidth = 768;
    const navContainer = document.querySelector('.nav-container');
    let mobileHeader = document.querySelector('#mobile-header');
    let mobileMenu   = document.querySelector('#mobile-menu');
    let hamburger    = document.querySelector('#mobile-hamburger');

    if (window.innerWidth <= mobileMaxWidth) {
      if (navContainer) {
        navContainer.style.display = 'none';
      }

      if (!mobileHeader) {
        mobileHeader = document.createElement('div');
        mobileHeader.id = 'mobile-header';
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
        mobileHeader.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';

        const mobileTitle = document.createElement('span');
        mobileTitle.textContent = 'Horizonte Turismo';
        mobileTitle.style.color = '#fff';
        mobileTitle.style.fontSize = '1.2rem';
        mobileTitle.style.fontWeight = 'bold';
        mobileTitle.style.cursor = 'pointer';

        // Ao clicar, rola suavemente para o topo
        mobileTitle.addEventListener('click', () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });

        hamburger = document.createElement('div');
        hamburger.id = 'mobile-hamburger';
        hamburger.style.width = '30px';
        hamburger.style.height = '24px';
        hamburger.style.display = 'flex';
        hamburger.style.flexDirection = 'column';
        hamburger.style.justifyContent = 'space-between';
        hamburger.style.cursor = 'pointer';
        hamburger.style.transition = 'transform 0.3s ease';

        for (let i = 0; i < 3; i++) {
          const bar = document.createElement('span');
          bar.style.display = 'block';
          bar.style.width = '100%';
          bar.style.height = '3px';
          bar.style.backgroundColor = '#fff';
          bar.style.borderRadius = '2px';
          hamburger.appendChild(bar);
        }

        mobileHeader.appendChild(mobileTitle);
        mobileHeader.appendChild(hamburger);
        document.body.appendChild(mobileHeader);
      }

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
        mobileMenu.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';

        const menuItems = [
          { text: 'Início', href: '#intro' },
          { text: 'Funcionalidades', href: '#funcionalidades' },
          { text: 'Estrutura', href: '#estrutura-dados' },
          { text: 'Benefícios', href: '#beneficios' },
          { text: 'Demonstração do Sistema', href: '#pos-login' },
          { text: 'Acesso ao Sistema', href: 'https://horizonteturismo.streamlit.app/', external: true }
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
          link.style.transition = 'color 0.3s ease';
          link.onmouseover = () => link.style.color = '#ff8c00';
          link.onmouseout = () => link.style.color = '#fff';
          if (item.external) {
            link.target = '_blank';
          }
          mobileMenu.appendChild(link);
        });

        document.body.appendChild(mobileMenu);
      }

      hamburger.onclick = () => {
        hamburger.style.transform = (mobileMenu.style.display === 'none') 
          ? 'rotate(90deg)' 
          : 'rotate(0deg)';
        mobileMenu.style.display = (mobileMenu.style.display === 'none')
          ? 'block'
          : 'none';
      };

    } else {
      if (navContainer) {
        navContainer.style.display = '';
      }
      if (mobileHeader) {
        mobileHeader.remove();
      }
      if (mobileMenu) {
        mobileMenu.remove();
      }
    }
  }

  handleMobileMenu();
  window.addEventListener('resize', handleMobileMenu);
});
