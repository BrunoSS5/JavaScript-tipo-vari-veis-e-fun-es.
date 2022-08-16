// Aula 03 - video 02/ arquivo script02.js

//tipagem dinâmica

/*
o Javascript aceita a troca do tipo de dado de uma variavel, e untyped, significa que não precisamos declarar o tipo dessa variavel, como number, string ou booleano e etc.
*/
/* 
EXEMPLOS:
let minhaVAr = 876;
minhaVAr = "texto";
minhaVar = true;

/*

MULTIPARADIGMA:
     utilizado para Reselver varios problemas do nosso cotidiano.

POR QUE SE CHAMA JS? 
    porque veio do mesmo fundado do Java, nome dado para dar maior credibilidade ao JavaScript no inicio de sua utilização.

O QUE É ES6/ES2015? 
    É a versão do JavaScript de 2015, com as atualizações dos funções empregados na linguagem.

LIGUAGEM INTERPRETADA: 
    sua execução não precisa passar pelo copilador, ela vai ser executada por outro programa na hora.

O QUE É O NodeJS? 
    NodeJS é um intrepretador de codigo de JavaScript, vai rodar os programas feitos em JavaScript para tester o nosso codigo utilizando a função console.log()
*/

//AULA 03 - VIDEO 03/ ARQUIVO erros.js

const numero =1;
/*
const numero;
    Erro na declaração de variavel Const, elas não pode ser criadas sem algum valor, vai aparacer como erro de (SyntaxError: Missing initializer in const declaration) falta de inicializador na variavel const.

console.log(numero
    Na falta de alguma infromação vai apresentar o erro: (SyntaxError: missing ) after argument list)
*/

//TIPOS DE ERROS
/*
RangeError: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, mas recebe -1.

ReferenceError: Normalmente ocorre quando o código tenta acessar algo que não existe, como uma variável que não foi definida; muitas vezes é causado por erros de digitação ou confusão nos nomes utilizados, mas também pode indicar um erro no programa.

SyntaxError: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue executá-lo. Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, por exemplo, operadores ou sinais gráficos com elementos a menos, como esquecer de fechar chaves ou colchetes.

TypeError: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de texto, mas recebeu outro, como um número, booleano ou null.
*/

// AULA 03 - ARQUINO - console.js

/*
const minhaVar = true;

log(): é o registro do nosso console, podendo colocar qualquer informações, como string, number, variavel.
EX.
console.log(245)
console.log("eu sou texto")
console.log(minhaVar2)

TRATAMENTO DE ERRO.
console.erro("deu erro!")
varios tipos de consoles para cada tipo de erro que será exibido para o usuario no momento de utilizar algum recurso de um programa inadequadamente.

Outros métodos, existem:

console.table() para visualizar de forma mais organizada informações tabulares;
console.time() e console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;
console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.
*/