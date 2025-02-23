# Sistema de Gestão de Viagem - Horizonte Turismo

Este repositório contém o **Sistema de Gestão de Viagem** desenvolvido para a **Horizonte Turismo**. O sistema facilita o gerenciamento de viagens, permitindo o cadastro de viagens, controle de combustível, gestão de custos e monitoramento de datas. Além disso, a interface possui design responsivo, com um menu tradicional para desktop e um menu hamburger dinâmico para dispositivos móveis, sem alterar o HTML/CSS original.

## Sumário

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar](#como-executar)
- [Customização](#customização)
- [Créditos](#créditos)
- [Licença](#licença)

## Histórico e Origem da Demanda

A demanda para o **Sistema de Gestão de Viagem - Horizonte Turismo** surgiu da necessidade de organizar e gerenciar as informações de viagens de forma mais eficiente. Tudo começou com um esboço feito à mão (veja a imagem abaixo) para estruturar os dados necessários, incluindo informações como origem, destino, carro utilizado, quilometragem, combustível e custos relacionados. 

![Imagem Inicial](./assets/inicio_demanda.jpg)

Essa necessidade evoluiu para um sistema robusto que permite o cadastro, visualização e análise das viagens.

## Visão Geral

O **Sistema de Gestão de Viagem - Horizonte Turismo** foi desenvolvido para auxiliar no gerenciamento de viagens, registrando detalhes como:

- Origem e destino
- Veículo utilizado
- Quilometragem inicial e final
- Consumo de combustível (Óleo Diesel S10 e S500)
- Custos (pedágios, diárias, despesas extras)
- Datas de saída e retorno

A interface foi construída com **HTML**, **CSS** e **JavaScript**. Para telas menores (ex.: smartphones), um menu hamburger é criado dinamicamente via JavaScript, mantendo o menu tradicional em desktops e notebooks.

## Funcionalidades

- **Cadastro de Viagens:** Registra dados como origem, destino, veículo e quilometragem.
- **Controle de Combustível:** Monitoramento do consumo e valores dos diferentes tipos de óleo diesel.
- **Gestão de Custos:** Registro de pedágios, diárias e despesas extras.
- **Monitoramento de Datas:** Controle das datas de saída e retorno das viagens.
- **Interface Responsiva:** Adaptação automática da interface para dispositivos móveis.
- **Menu Hamburger Mobile:** Exibição de um menu dinâmico para mobile sem modificar o HTML/CSS original.
- **Expansão de Imagens:** Ao clicar nas telas de demonstração, as imagens se expandem para visualização em tela cheia.
- **Botão "Voltar ao Topo":** Permite rolar a página suavemente até o início.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **Streamlit, SQLite3, pandas, Altair** (no back-end do sistema, não inclusos neste repositório).

## Estrutura do Projeto

Este projeto foi desenvolvido utilizando **Data Sprint** para a organização do processo de desenvolvimento, seguindo as etapas:
- **Planejamento e Requisitos:** Coleta de informações e definição das funcionalidades necessárias.
- **Modelagem de Dados:** Criação de **Diagramas UML** e **Modelos de Dados**.
- **Modelagem Lógica e Física:** Construção do **Modelo Lógico** e **Modelo Físico** utilizando **SQLite3**.
- **Desenvolvimento:** Construção da interface com **Streamlit** e funcionalidades com **Python** e **pandas**.
- **Testes e Validação:** Verificação de funcionalidades e validação com usuários finais.
- **Deploy e Documentação:** Publicação da aplicação e criação da documentação completa.

### UML e Modelagem de Dados

Durante a fase de modelagem, utilizamos **Diagramas UML** para representar:
- **Diagrama de Casos de Uso:** Mapeando as interações do usuário com o sistema.
- **Diagrama de Classes:** Estruturando as entidades como **Viagem**, **Carro**, **Motorista**, **Combustível** e **Custos**.
- **Diagrama ER (Entidade-Relacionamento):** Representando as relações entre as tabelas do banco de dados.

### Modelos Físico e Lógico

- **Modelo Lógico:** Representação das tabelas e relacionamentos em nível lógico.
- **Modelo Físico:** Implementação do banco de dados em **SQLite3** para armazenamento local.

### Tecnologias Utilizadas
- **Python**: Para backend e manipulação de dados.
- **Streamlit**: Framework para criar a interface de usuário.
- **SQLite3**: Banco de dados local para armazenamento das informações.
- **pandas**: Manipulação de dados e integração com o banco de dados.
- **Altair**: Visualização de dados com gráficos interativos.
- **UML**: Modelagem de dados e estrutura do sistema.


```
├── assets/
│   ├── img.jpg
│   ├── image3.png
│   ├── ...
└── index.html
└── styles.css
└── script.js
```

## Como Executar

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Adrianogvs/horizonte_turismo.git
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd horizonte_turismo
   ```

3. **Abra o arquivo **``** no navegador.**

## Customização

- **HTML (**``**)**
- **CSS (**``**)**
- **JavaScript (**``**)**

## Créditos

Desenvolvido por [Adriano Vilela](https://adrianogvs.com.br/).

- [LinkedIn](https://www.linkedin.com/in/adrianogvs/)
- [Email](mailto\:dataengineer@adrianogvs.com.br)

## Licença

© Todos os direitos reservados a Adrianogvs.

