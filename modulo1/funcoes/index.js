// Exercicios de interpretacao de codigo
// 1 questao

/*
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

// A - Esta imprimindo a funcao a variavel (5 * 2 = 10) e  (5 * 10 = 50)
// B - o consola nao vai vai funcionar, porque para funcionar tem imprimir no console.log
*/

// 2 questao

/*
let textoDoUsuario = prompt("Insira um texto"); 

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
*/

// A - A funcao toLowerCase deixa todas as letras minuscula e o includes procura o nome cenoura no texto.

// B -Todas as entradas foram tolowerCase.

// ---------------------------------------------

// Exercicios de escrita de codigo

// 1 questao

// A

/*
const informacao = () => {
console.log("Eu sou Adriana, tenho 33 anos, moro em Uberlandia, MG e sou estudante.")
}
informacao()

// B 

const informacao1 = (nome, idade, cidade) => {
 return "Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou {profissao}."
}
const apresentacao = informacao1("Adriana", 33, "Uberlandia MG", "Estudante")
console.log(informacao1)
*/

// 2 questao

// A

/*
let somaDosNumeros = (num1 = 3, num2 = 5) =>{
    return num1 + num2
}
console.log(somaDosNumeros(8, 10))
*/

// B

/*
function numero2 (num1, num2){
    console.log(num1 >= num2)
}
numPar(20, 30)
*/

// C

/*
function numPar (numero){
    return numero = 4 == 0
}
console.log(numPar(16))
*/

// D

/*
function fraseString (frase){
    console.log(`${frase.length}, ${frase. toUpperCase()}`)
}
fraseString("Ola Adriana")
*/

// 3 questao

/*
function soma(num1, num2){
    console.log(num1 + num2)
}
function subtracao(num1, num2){
    console.log(num1 - num2)
}
function multiplicacao(num1, num2){
    console.log(num1 * num2)
}
function divisao(num1, num2){
    console.log(num1 / num2)
}
const numero1 = + prompt("digite um numero")
const numero2 = + prompt("digite outro numero")

soma(numero1, numero2)
subtracao(numero1, numero2)
multiplicacao(numero1, numero2)
divisao(numero1, numero2)
*/