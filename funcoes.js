// AULA 05 VIDEO 01 - ARQUIVO funcoes.js
/*
- O uso da função é para que parte de um codigo seja executado apenas quando desejamos que ela execute.  - Funções tem dois momentos, primeiro ela é declarada, depois é quando executamos a função.

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

function soma(){
   return resultado = 2 + 2;  
    //return tem que ser a ultima linha do codigo antes de fechar o bloco.
}
// Podemos utilizar funções dentro de outra funções.
imprimeTexto(soma())