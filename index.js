// 1. Declarar uma variável com o seu nome
var nome1 = "Vinycius";
const frase6 = `QUESTÃO 1- var nome1 = "Vinycius";`;
console.log(frase6);

// 2. Declarar uma variável com o seu sobrenome 
var nome2 = "Silva Arruda";
const frase5 = `QUESTÃO 2- var nome2 = "Silva Arruda";`;
console.log(frase5);

// 3. Declarar uma variável nomeCompleto atribuindo os valores das variaveis nome e sobrenome 
var nomeCompleto = nome1 + ' ' + nome2;
const frase4 = `QUESTÃO 3- var nomeCompleto = nome1 + ' ' + nome2;`;
console.log(frase4);

// 4. Declarar uma variável com a sua idade 
let idade = 19;
const frase3 = `QUESTÃO 4- let idade = 19;`;
console.log(frase3);

// 5. Declarar uma variável com a sua comida favorita e não atribuir valor
let comidaFavorita;
const frase2 = `QUESTÃO 5- let comidaFavorita;`;
console.log(frase2);

// 6. Atribuir valor a sua comida favorita 
comidaFavorita = "Hamburguer";
const frase1 = `QUESTÃO 6- Valor da comida favorita: ${comidaFavorita}`;
console.log(frase1);

// 7. Verifique o erro na variavel criada abaixo que utiliza Template String:
const frase = `QUESTÃO 7- Olá, eu sou ${nomeCompleto} e tenho ${idade} anos`;
console.log(frase);
//nao tem nada dentro da chave..

// 8. Verifique o tipo da variável que contém o seu nome. Dica: console.log(typeof nomeDaVariavel)
const frase7 = `QUESTÃO 8- console.log(typeof nomeCompleto);`
console.log(frase7);
console.log(typeof nomeCompleto);

// 9. Qual o resultado da seguinte expressão?
const total = 10 + 5 * 2 / 2 + 20;
 console.log('QUESTÃO 9- 10 + 5 * 2 / 2 + 20 é igual a 35');

// 10. Somar a string '200' com o número 50 e retornar 250
let resultadoSoma = Number('200') + 50; // Isso retornará 250
const frase8 = `QUESTÃO 10- let resultadoSoma = Number('200') + 50; `
console.log(frase8);

// 11. Incremente o número 5 e retorne o seu valor incrementado
let num = 5;
let incrementado = num + 1;
const frase9 = `QUESTÃO 11- let num = 5; let incrementado = num + 1;`
console.log(frase9);

// 12. Verifique se a sua idade é maior do que a de algum parente, dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let minhaIdade = 19;
let idadedoParente = 40;

if (minhaIdade > idadedoParente) {
    console.log ('QUESTÃO 12- É maior');
} else if (minhaIdade === idadedoParente) {
    console.log ('QUESTÃO 12- É igual');
} else if (minhaIdade < idadedoParente) {
    console.log ('QUESTÃO 12- É menor');
}

// 13. Qual valor é retornado na seguinte expressão?
const expressao = (5 - 2) && (5 - ' ') && (5 - 2);
const frase10 = `QUESTÃO 13- Qual valor é retornado na seguinte expressão?: Falso ou 3`
console.log(frase10);

// 14. O que irá aparecer no console?

if(('Gato' === 'gato') && (5 > 2)) {
  console.log('QUESTÃO 14- Verdadeiro');
} else {
  console.log('QUESTÃO 14- Falso');
}

// 15. O que irá aparecer no console?

if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'QUESTÃO 15- Cão');
} else {
  console.log('Falso');
} // vai aparecer CÃO

// 16. Crie uma função que receba como parametro o peso e a altura, e retorne o imc. Dica: calculo para imc: peso / (altura ** 2);
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
  }

  let pesoKg = 82;
  let altura = 1.85;
  let meuIMC = calcularIMC(pesoKg, altura);
  console.log("QUESTÃO 16- Meu IMC é: " + meuIMC);

// 17. Crie uma função que verifica se um número é par, e retorne uma mensagem contendo o numero escolhido e se é ou nao par.
function ParOuImpar(num) {
    if (num % 2 === 0) {
      return "QUESTÃO 17- O número " + num + " é par.";
    } else {
      return "QUESTÃO 17- O número " + num + " é ímpar.";
    }
  }

  let resultado = ParOuImpar(8);
console.log(resultado);

// 18. Crie uma função que retorne o tipo de dado do argumento passado nela. Dica use o typeof para verificar o tipo
function tipodedado(dado) {
    return typeof dado;
}

let tipo1 = tipodedado(10);
let tipo2 = tipodedado('OIIII');
console.log ('QUESTÃO 18- '+ tipo1,tipo2);
// 19. Crie uma função que receba um nome e retorne uma mensagem de saudação para o usuario (bom dia/boa tarde/boa noite fulano!) de acordo com o horario
function saudacao(nome) {
    let saudacao;
    const hora = new Date().getHours();
  
    if (hora >= 5 && hora < 12) {
      saudacao = "QUESTÃO 19- Bom dia";
    } else if (hora >= 12 && hora < 18) {
      saudacao = "QUESTÃO 19- Boa tarde";
    } else {
      saudacao = "QUESTÃO 19- Boa noite";
    }
  
    return `${saudacao}, ${nome}!`;
  }
  
  let mensagem = saudacao("Fulano");
  console.log(mensagem);

// 20. Crie uma função que me informe a data de hoje quando chamada
function DataDeHoje() {
    let hoje = new Date(); 
    return hoje.toDateString();
  }  
    let dataDeHoje = DataDeHoje();
    console.log("QUESTÃO 20- A data de hoje é: " + dataDeHoje);