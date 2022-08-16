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