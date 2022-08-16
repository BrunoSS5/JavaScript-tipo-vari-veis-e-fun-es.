// AULA 04 - VIDEO 01 - ARQUIVO comparacoes.js

/*
Comparação implicíta:
JavaScript vai converter o numero em texto e vai ser verdadeiro no console.

const nuemro =5;
const texto = '5';

console.log(numero == texto); => Só compara Valores.
console.log(numero === texto); => Compara o valor e o tipo de dado.

As boas praticas pedem para fazer a conversão explícita utilizando:
Number()
String()
*/
const numero =5;
const texto = '5';

console.log("Primeira analise ==:", numero == texto);
console.log("Segunda analise ===:" ,numero === texto);