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

console.log("Console comparações - Primeira analise ==:", numero == texto);
console.log("Console comparações - Segunda analise ===:" ,numero === texto);

// AULA 04 - VIDEO 02 - ARQUIVO - ternario.js

const idadeMinima =18;
const idadeCliente =16;
/*
 if classico.
if (idadeCliente >= idadeMinima){
    console.log("Suco de uva")
    }else{
        console.log("refrigerante")
    }
}
*/

//Operador Ternario
//                  condição              // true          // false
console.log("console operador ternario", idadeCliente >= idadeMinima ? "Suco de uva": "Refrigerante")
/*
Por que é um operador ternario? 
porque temos tres operadores sendo utilizados em uma unica função, como inicialmente temos a condição de teste, se a => é maior ou igual a b, e logo após o resultado o ? temos dois resultados possiveis, true : ou false.

*/

// AULA 04-VIDEO 03/ ARQUIVO template-string.js

/*
Ela surgiu para facilitar no processo de concatenação, é um metodo novo que veio apartir do ES6.
*/
// exemplo de com concatenação
const nome = "Bruno"
const idade= 2022-1994
const cidade = "Pititinga"

const apresentacao1 = "meu nome é " + nome + ', minha idade é '+ idade + " e nasci na cidade de " + cidade;

console.log('console do template - Primero teste:', apresentacao1)

// TEMPLATE STRING - metodo.
const apresentacao2 = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidade}`

console.log(' console do template - Segundo teste:', apresentacao1)