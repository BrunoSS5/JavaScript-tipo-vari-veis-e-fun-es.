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