//Exercicios de interpretação de codigo

// 1 questao
/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 
console.log("a. ", resultado) //false 

resultado = bool1 && bool2 && bool3  
console.log("b. ", resultado) //false

resultado = !resultado && (bool1 || bool2)    
console.log("c. ", resultado) //true

console.log("d. ", typeof resultado) //boolean
*/

// 2 questao

/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) // ao invés de somar as variaveis ele esta concatenando.
*/

// 3 questao

/*
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma) 
*/

/*let idade = Number(prompt("qual tua idade?"))
let idadeAmigo = Number(prompt("digite a idade de um amigo?"))

let usuario = idade > idadeAmigo
let diferenca = idade - idadeAmigo

console.log("Sua idade e maior do que a do seu melhor amigo?", usuario)
console.log("A diferenca de idade e idadeAmigo e?", diferenca)
*/

//Exercicio de escrita de codigo

//2 questao

/*let numeroPar = Number(prompt("Insira um numero par?"))
const resto = numeroPar % 2

console.log(resto) 

// Sempre que inserir numero par o resultado vai ser 0
// sempre que inserido numero impar o resultado vai ser 1
*/

// 3 questao
/*
let idadeAnos = Number(prompt("quantos anos voce tem?"))
let idadeMeses = idadeAnos * 12
let idadeDias = idadeMeses * 30
let idadeHoras = idadeDias * 24

console.log("A idade em meses e", idadeMeses, "a idade em dias e", idadeDias, "a idade em horas e", idadeHoras)
*/

// 4 questao

let numero1 = Number(prompt("qual o numero 1?"))
let numero2 = Number(prompt("qual o numero 2?"))

let matematica = numero1 > numero2
let biologia = numero1 === numero2
let geografia = numero1 % numero2 === 0
let portugues = numero2 % numero1 === 0

console.log("O primeiro numero e maior que segundo?", matematica)
console.log("O primeiro numero é igual ao segundo?", biologia)
console.log("O primeiro numero é divisível pelo segundo?", geografia)
console.log("O segundo numero é divisível pelo primeiro?", portugues)  



