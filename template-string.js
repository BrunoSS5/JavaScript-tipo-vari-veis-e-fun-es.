// AULA 04-VIDEO 03/ ARQUIVO template-string.js

/*
Ela surgiu para facilitar no processo de concatenação, é um metodo novo que veio apartir do ES6.
*/
// exemplo de com concatenação
const nome = "Bruno"
const idade= 2022-1994
const cidade = "Pititinga"

const apresentacao1 = "meu nome é " + nome + ', minha idade é '+ idade + " e nasci na cidade de " + cidade;

console.log('Primero teste:', apresentacao1)

// TEMPLATE STRING - metodo.
const apresentacao2 = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidade}`

console.log('Segundo teste:', apresentacao1)