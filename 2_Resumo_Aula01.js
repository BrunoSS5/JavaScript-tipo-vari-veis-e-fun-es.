//VIDEO 01 ARQUIVO - script.js

// var
/*
Var pode ser usada antes de ser declarada, e ser declara posteriormente, porque o JavaScript na inicialização do programa vai carregar as var primeiro.
*/


var altura1 = 12;
var comprimento1 = 5;

area1 = altura1 * comprimento1;
console.log(area1)
var area1;


// let
/*
para o let funcionar dentro do bloco de codigo a variavel dever ser inicializada no começo do programa, ou antes de utiliza-las em um bloco de codigo, assim a variavel vai fazer as operações dentro do bloco e vai armazenar o valor na let que esta fora do bloco de codigo, podemos alterar o valor dela caso necessário.
*/

let forma2 = 'retângulo'
let altura2 = 5;
let comprimento2 = 7; 
let area2;

if (forma2 ==='retângulo'){
   area2 = altura2 * comprimento2;
} else{
    area2 = (altura2 * comprimento2)/2;
}

console.log(area2)

// const -  constante porque não podemos mudar o valor dela.

/*
Não podemos utilizar esse tipo de variavel em algo que vai precisar mudar de valor, neste caso só será viavel em casos de valores fixos.
*/

const forma3 = 'quadrado';
const altura3 = 5;
const comprimento3 = 8;
let area3;

if (forma3 === 'quadrado'){
    area3 = altura3 * comprimento3
} else{
    area3 = (altura * comprimento3)/2;
}

console.log(area3)
