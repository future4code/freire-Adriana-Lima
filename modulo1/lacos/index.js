// Exercícios de interpretação de código

// 1. O que o código abaixo está fazendo? Qual o resultado impresso no 
// console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// Foi impresso o numero 10.

// 2. Leia o código abaixo:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a) O que vai ser impresso no console?

// Vai ser impresso todos os numeros que sao maiores que 18 até o final da 
// lista

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, 
// o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer 
// isso?

// Usando o for criaremos uma variavel i para acessar todas as listas.

// 3. Qual seria o resultado impresso no console, se o usuário digitasse o
// número 4 ?

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// Seria impresso isso:
// *
// **
// ***
// ****

// Exercícios de escrita de código

// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde 
// esse dado em uma variável. 

