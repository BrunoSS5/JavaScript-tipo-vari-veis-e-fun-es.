// AULA 05 VIDEO 01 - ARQUIVO funcoes.js
/*
- O uso da função é para que parte de um codigo seja executado apenas quando desejamos que ele execute.  - Funções tem dois momentos, primeiro ela é declarada, depois é quando executamos a função.

*/
/*
let x = ''
console.log(x)
x = 'oi';
*/
// Exemplo de funções.
function imprimeTexto(texto){
    console.log("Exemplo da Aula05-Video01:", texto)
}
imprimeTexto('Ola Mundo!')
imprimeTexto('outro texto')
imprimeTexto(34-20)

function soma1(){
   return resultado = 2 + 2;  
    //return tem que ser a ultima linha do codigo antes de fechar o bloco.
}
// Podemos utilizar funções dentro de outra funções.
imprimeTexto(soma1())

// ver funções prontas de matematica do JS -  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math#description

//AULA 05 - VIDEO02 ARQUIVO parametros.js

/*
function nome(parametro1, parametro2...){
    codigo....
    exemplo:
    retrun parametro1 + parametro2
}

*/

function soma(num1, num2,){
    return  num1 + num2;
}
console.log(soma(2,2)) // Console1

function nomeIdade(nome, idade){
    return `Console2 Exemplo Video 02 parametros.js - resultado: meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade('Bruno', 27)) //Console2

function multiplica(num1 = 1 ,num2 = 1){
    return num1 * num2;
}
console.log(multiplica(soma(4, 5), ))
/*
Não podemos colocar apenas um parametro para a função que deve receber dois parametros, vai ocorrer NaN, podemos fazer dessa seguinte maneira:

function multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}

Nesta configuração podemos colocar apenas um parametro e não vai da erro.
Os parametros pode receber qualquer nome, mesmo que se repitam, eles só vão ser validos dentro da função, podemos ter varias funções com os mesmos nomes de parametros iguais, e também pode ter varios parametros.

PARAMETROS X ARGUMENTOS
Parâmetros é o momento em que a função é definida (no caso, num1, num2, etc) e argumentos como os dados que utilizamos para executar a função;
multiplica(2,10) 
saida: 20

*/

//AULA 05 VIDEO 03 - ARQUIVO - expressoes-funcoes.js
/*

Expressão de função, a função não tem um nome, ela fica em uma const, chamada também função anonima.
Ela não pode ser chamada antes de ser declarada, porque ela vai se comportar como uma variavel const, sendo assim devemos declarar antes para depois fazer uso desse tipo de função, vai da erro caso tentarmos chamar essa função antes dela ser declarada.
obs: Funções e var são "Listadas" no topo do arquivo antes de rodar o programa.
*/
const soma3 = function(num1, num2){  return num1+num2}
console.log(soma3(1,1))
console.log(aparesentar())
function aparesentar(){
    return "olá"
}
// AULA05 - VIDEO 04 ARQUIVO arrow-function.js

/*
Essa função utiliza uma seta como caracteristica desse metodo, ela não vem nomeada e sempre é necessário ser declarada com uma const, não precisa de retorno quando for escrita com apenas uma linha de codigo, se precisar mais de uma linha vai precisar de return.


*/
//Arrow function
const aparesentarArrow = nome => `meu nome é ${nome}`;

const soma = (num1, num2) => num1 + num2;

//Arrow function com +  de uma linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if(num1 > 10 || num2 > 10){
        return "somante numeros de 1 a 9"
    }else{
        return num1 + num2;
    }
}

//Não confundir com o perador maior ou igual que - >=

/*
Como saber quando utilizar cada um dos tipos de funções?(Função, Expressão de função, e Arrow Function)
Arrow Function é um jeito mais rapido e mais curto de criar uma função, deixando com poucas linhas de codigos, tem grandes vantagens em objetos.
*/