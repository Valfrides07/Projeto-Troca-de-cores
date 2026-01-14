#  Chroma - Landing Page Interativa

![Status do Projeto](https://img.shields.io/badge/status-concluído-green )
![Linguagem Principal](https://img.shields.io/badge/linguagem-JavaScript-yellow )
![Tecnologias](https://img.shields.io/badge/tecnologias-HTML%20%7C%20CSS-blue )

**Chroma** é uma landing page interativa e visualmente dinâmica, projetada para demonstrar a manipulação avançada do DOM e estilização com CSS3. O projeto permite que os usuários alterem o esquema de cores de toda a página em tempo real, oferecendo uma experiência de usuário engajante e moderna.

O destaque do projeto são os botões com um efeito de "glow" (brilho) animado, criados puramente com CSS, que reagem ao hover do mouse, e a capacidade de gerar cores de fundo aleatórias de forma segura.

## ✨ Funcionalidades Principais

*   **Múltiplos Temas de Cores:** Altere o visual da página com um único clique, escolhendo entre os temas:
    *   **Preto:** Um tema escuro e elegante.
    *   **Branco:** Um tema claro e minimalista (desafio de contraste!).
    *   **Padrão:** Restaura o gradiente azul vibrante original.
*   **Cor Aleatória:** Pressione o botão "Aleatório" para gerar uma cor de fundo única a cada clique, utilizando a `Crypto.getRandomValues()` API para uma aleatoriedade mais robusta.
*   **Design Responsivo:** A interface se adapta de forma fluida a diferentes tamanhos de tela, garantindo uma boa experiência tanto em desktops quanto em dispositivos móveis.
*   **Efeitos Visuais com CSS:**
    *   **Botões com Efeito "Glow":** Animação de brilho nos botões que é ativada com o hover do mouse, criada com pseudo-elementos (`:before`, `:after`) e animações `@keyframes`.
    *   **Layout com Flexbox:** O layout da página é construído de forma moderna e eficiente usando CSS Flexbox.

## 🚀 Tecnologias Utilizadas

*   **HTML5:** Para a estrutura semântica da página, incluindo tags como `<header>`, `<main>` e `<footer>`.
*   **CSS3:** Responsável por todo o design, incluindo:
    *   `linear-gradient` para o fundo padrão.
    *   `Flexbox` para o layout principal.
    *   Animações com `@keyframes` para os efeitos de brilho.
    *   Pseudo-elementos (`:before`, `:after`) para a construção do efeito "glow".
    *   `Media Queries` para a responsividade.
*   **JavaScript (ES6+):** Utilizado para toda a lógica e interatividade:
    *   **Manipulação do DOM:** Seleção de elementos com `document.querySelector()` e `getElementById()`.
    *   **Gerenciamento de Eventos:** Captura de cliques nos botões com `addEventListener()`.
    *   **Manipulação de Estilos:** Alteração dinâmica das propriedades `style.background` dos elementos.
    *   **Web Crypto API:** Uso do método `window.crypto.getRandomValues()` para a geração de cores aleatórias seguras.

## 🔧 Como Executar

Este projeto não requer nenhuma instalação ou dependência.

1.  **Clone este repositório:**
    ```bash
    https://github.com/Valfrides07/Projeto-Troca-de-cores
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd chroma-landing-page
    ```
3.  **Abra o arquivo `index.html`** diretamente no seu navegador de preferência.

## 🧠 Destaques do Código e Aprendizados

Este projeto serve como um portfólio prático para vários conceitos importantes:

### Geração de Cor Aleatória com a Crypto API

Em vez de usar `Math.random( )`, a função de cor aleatória utiliza a API Web Crypto, que é uma fonte de aleatoriedade mais forte e segura, ideal para aplicações onde a imprevisibilidade é um fator importante.

```javascript
corRandom.addEventListener('click', function () {
    // Gera 3 bytes aleatórios (um para R, G e B) e os converte para uma string hexadecimal.
    let rgb = window.crypto.getRandomValues(new Uint8Array(3))
      .reduce((acc, val) => acc + val.toString(16).padStart(2, '0'), "#");

    if(backgroundElement){
        backgroundElement.style.background = rgb;
    }  
});
