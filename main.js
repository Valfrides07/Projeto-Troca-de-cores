
const corPreto = document.querySelector('#button_Preto');
const corPadrao = document.querySelector('#button_Padrao');
const corBranca = document.querySelector('#button_Branco');
const corRandom = document.querySelector('#button_Aleatorio');

const backgroundElement = document.querySelector('#Background_Selector');
const mudarForm = document.querySelector('#Form');
const mudarHeader = document.querySelector('#Class_header');
const mudarFooter = document.querySelector('#id_footer')

// Adicionar eventListener para captura de cliques das quatros constantes


corPreto.addEventListener('click', function () {
    try {

        if (backgroundElement,mudarForm,mudarHeader, mudarFooter) {

        backgroundElement.style.background='#000000ff';

        mudarForm.style.background = '#141414ff';

        mudarHeader.style.background = '#141414ff';
        
        mudarFooter.style.background = '#141414ff';

        }

        // console.log(event.target);
        // alert('O botao clicado foi de cor Preta')
        console.log('Botão "da cor Preto" funcionando.')

    } catch (erro) {
        alert('Opa, ocorreu algum erro,recarregue a pagina');

        console.log('Erro na troca de cores do background.')
    }

});

corPadrao.addEventListener('click', function () {
    try {
        // Se encontrar backgroundElement 
        if (backgroundElement,mudarForm,mudarHeader, mudarFooter) {

        backgroundElement.style.background= 'linear-gradient(90deg, rgb(26, 23, 80) 0%, rgb(10, 10, 150) 35%, rgb(12, 95, 190) 100%)';

        mudarForm.style.background = '#000000ff';

        mudarHeader.style.background = '#000000ff';
        
        mudarFooter.style.background = '#000000ff';
        // target se refere ao evento no html, na caso ele serve para avisar se foi clicado
        // console.log(event.target);
        // alert('O botao clicado foi de cor Padrão')
        console.log('Botão "da cor  Padrão" funcionando.')
        }

    } catch (erro) {
        alert('Opa, ocorreu algum erro,recarregue a pagina');

        console.log('Erro na troca de cores do background.')
    }
});

corBranca.addEventListener('click', function () {
    try {
        if (backgroundElement) {

            // linear-gradient(...) do seu CSS é mais abrangente e tem alta prioridade (por causa do seletor de ID). Ela continuava a "vencer" a disputa, ignorando a cor que o JS tentava aplicar e renderizando o gradiente por cima de tudo.
            backgroundElement.style.background = '#fff';
        }

        // console.log(event.target);
        // alert('O botao clicado foi de cor Branca')
        console.log('Botão "da cor Branca" funcionando.')

    } catch (erro) {
        alert('Opa, ocorreu algum erro,recarregue a pagina');

        console.log('Erro na troca de cores do background.')
    }
});

corRandom.addEventListener('click', function () {
    try {

        // let que adiciona # antes dos numeros, assim tornando variações de cores aleatorias
        let rgb = window.crypto.getRandomValues(new Uint8Array(3))
          .reduce((acc, val) => acc + val.toString(16), "#");

        if(backgroundElement){
            backgroundElement.style.background = rgb;
        }  
        // console.log(event.target);
        // alert('O botao clicado foi de cor Aleatória')
        console.log('Botão "da cor Aleatória" funcionando.')

    } catch (erro) {
        alert('Opa, ocorreu algum erro,recarregue a pagina');

        console.log('Erro na troca de cores do background.')
    }
});