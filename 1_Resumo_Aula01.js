// Video 01 - type_Number.js

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero + segundoNumero;

console.log(operacaoMatematica)

// ponto Flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5

const novaOperação = primeiroNumero/numeroPontoFlutuante

console.log(novaOperação)
/*
Math.round() - faz o arredondamento de um numero decimal.
Math.PI()
Math.ceil() que retorna o maior número inteiro que é maior que o número passado, por exemplo Math.ceil(11.123), o valor fica 12
Math.floor() que retorna o menor número inteiro que é menor que o número passado, por exemplo Math.floor(11.789), o valor fica 11


Formatando o resultado com ajuda do método .toFixed()
    É possivel controlar o número de casas decimais após a vírgula, de forma mais simples, indicando o número de casas que eu quero como parâmetro.

    Um ponto importante de se observar é que o método .toFixed() arredonda o número para cima
    Outro ponto importante de se observar é que seu retorno será uma string representando o número.

*/
//utilização do metodo .toFixed()

/* <-APAGA ESSE LINHA QUE O CODIGO APARECE!!!
 function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    const total = salarioHora.toFixed(2);
  
    return total;
  };

verificaGanho = ganhoPorHora( 555,6)
//console.log(verificaGanho)

// FORMATANDO O RESULTADO PARA REAL.
/* No JavaScript temos um método chamado toLocaleString() que converte um número para uma string, já tratando a questão do arredondamento e convertendo para a moeda do país que queremos, no nosso caso, o real, tornando a tarefa do programador muito mais simples.

O método toLocaleString() recebe alguns argumento - um objeto literal com as propriedades -, no meu caso eu utilizei:

style : Que é o estilo do formato a ser utilizado, aqui é permitido usar:

decimal para representar números simples.

currency que diz respeito ao formato monetário e que vai indicar a moeda que vai ser utilizada.

percent para formato percentual.

currency: A moeda para usar na formatação monetária
*/

function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
    return formatado;
  
  }
  //let verificaReal = ganhoPorHora(1000,8);
  //console.log(verificaReal)

// NaN -> Not A Number (não é um número)
/*
Erro será apresentado se houver operações matematica entre string com number.

*/

//ORDENAÇÃO DE NUMEROS COM .sort()

var lista = [10,1, 5, 9, 8, 12, 15];
//função opcional
function comparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }

/*
O sort recebe opcionalmente uma função de comparação que, dados dois valores, deve devolver um número inteiro:

Se for 0 indica que são iguais
Se for -1 indica que o primeiro valor é menor
Se for 1, o segundo é menor.



*/
//Simplicando a implementação Com arrow functions
let ordenaNum = lista.sort((a, b) => a - b);
console.log(ordenaNum)

//Tipo String 

/*

Metodo - toLowerCase()
Converte todas letras em minúsculas

Propriedade .length
verifica a quantidade de caracteres uma string possue.
converter qualquer coisa em String
String(coisa)

*/

// Tipo boolean

