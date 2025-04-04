let nome='Lucas Nascimento Hubner' /*let é uma variavel mais moderna em relação ao var*/
let idade= 16;
let ehAluno = true;
const pi= 3.14; /*o valor de uma constante que n*/

function mostrarDados() /*função para mostrar os dados inseridos*/
{
    console.log('nome do aluno:' + nome + ' idade:' + idade + ' ALUNO MATRICULADO:' + ehAluno + ' PI:' + pi)

}
mostrarDados(); /*chamando am função*/

let numero = 12

function dobrarNumero() /*função para multiplicar por 2 um valor */
{
    console.log('2 * 12 = ' + 2 * numero);
}

dobrarNumero();

function saudacao(nome) /*função para saudar uma pessoa*/ 
{
    console.log('ola, ' + nome + ' seja bem vindo');/**/

}
saudacao('geovana');
saudacao('keynner');

const botao = document.getElementById('meuBotao'); /*adicionando um evento de alert após o botão com id"meuBotao" ser clicado*/ 
botao.addEventListener('click', function() {
    alert('Você clicou no botão!');
});

/*
function popUp() 
{
    alert('você clicou')

}*/