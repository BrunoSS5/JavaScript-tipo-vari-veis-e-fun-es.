//AULA 05 VIDEO 03 - ARQUIVO - expressoes-funcoes.js
/*

Expressão de função, a função não tem um nome, ela fica em uma const, chamada também função anonima.
Ela não pode ser chamada antes de ser declarada, porque ela vai se comportar como uma variavel const, sendo assim devemos declarar antes para depois fazer uso desse tipo de função.
obs: Funções e var são "Listadas" no topo do arquivo antes de rodar o programa.
*/
const soma3 = function(num1, num2){  return num1+num2}
console.log(soma3(1,1))
console.log(aparesentar())
function aparesentar(){
    return "olá"
}
