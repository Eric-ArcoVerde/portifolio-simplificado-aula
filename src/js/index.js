//alert('oi'); /*carrega o pop up de aviso quando abre a pagina*/

/*
    Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 

        Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
    
        Passo 2 - identificar o clique no botão 
    
        Passo 3 - adicionar a classe ativo nos projetos escondidos

    Objetivo 2 - esconder o botão de mostrar mais 
    
        Passo 1 - pegar o botão e esconder ele
*/
// Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 

// Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 

//console.log(document.querySelector('.btn-mostrar-projetos')); //loga/mostra informações no console, log é um metodo, mostra o que tem no document. QuerySelecto, procura o um seletor

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos'); //busca um elemento que tem essa classe
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)'); //procura todos os elementos que tem essa classe. Esta procurando todos os que tem a classe projeto e os que não tem a classe ativo

//console.log(botaoMostrarProjetos);
//console.log(projetosInativos); //mostrou 4 elementos que tem esses seletores

botaoMostrarProjetos.addEventListener('click', () => { //funciona como uma escuta no botão. função de seta
    //console.log('teste'); //testa se ta funcionando
    //Passo 3 - adicionar a classe ativo nos projetos escondidos
    /*
    projetosInativos.forEach(projetoInativo => {
         projetoInativo.classList.add('ativo'); //classlist é uma caracteristica do objeto, add adiciona a classe ativo
     }); //para cada projeto inativo vai fazer alguma coisa. Função seta, como so tem 1 argumento não precisa de colocar ele entre parenteses
     */
    mostrarMaisProjetos(); 
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
