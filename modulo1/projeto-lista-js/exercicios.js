// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A

function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}


// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = Number(prompt("Digite a altura do retangulo"))
const largura = Number(prompt("Digite a largura do retangulo"))
const resultadoRetangulo = altura * largura
console.log(resultadoRetangulo)
}


// EXERCÍCIO 02

function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("qual o ano atual"))
const anoNascimento = Number(prompt("qual o ano de nascimento"))
const atualNasc = anoAtual - anoNascimento
console.log(atualNasc)
}


// EXERCÍCIO 03

function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const imc = peso / (altura*altura)
return imc
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt("Digite seu nome")
const idade = prompt("Digite sua idade")
const email = prompt("Digite seu email")

console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05

function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const coresFavoritas = []
const corFavorita1 = prompt("Qual sua primeira cor favorita")
const corFavorita2 = prompt("Qual sua segunda cor favorita")
const corFavorita3 = prompt("Qual sua terceira cor favorita")
coresFavoritas.push(corFavorita1, corFavorita2, corFavorita3)
console.log(coresFavoritas)
}

// EXERCÍCIO 06

function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}


// EXERCÍCIO 07

function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const vendasIngressos = custo / valorIngresso
return vendasIngressos
}


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
let tamanho1 = string1.length 
let tamanho2 = string2.length
return tamanho1 === tamanho2
}

// EXERCÍCIO 09

function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}


// EXERCÍCIO 10

function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array [array.length-1]
}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const ultimoNum = array[array.length-1]
const primeiroNum = array[0]
array[array.length-1] = primeiroNum
array[0] = ultimoNum
return array
}


// EXERCÍCIO 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const igual = string1.toLowerCase() === string2.toLowerCase()
return igual
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Qual o ano atual"))
const anoNascimento = Number(prompt("qual o ano de nascimento"))
const anoEmissao = Number(prompt("Qual ano de emissao do rg"))

const idadePessoa = Number(anoAtual) - (anoNascimento)
const idadeRg = Number(anoAtual) - (anoEmissao)

const num1 = idadePessoa <= 20 && idadeRg >= 5
const num2 = idadePessoa > 20 && idadePessoa <= 50 && idadeRg >= 10
const num3 = idadePessoa > 50 && idadeRg >= 15

console.log(num1 || num2 || num3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
const bissexto1 = (ano % 4 == 0)
const bissexto2 = (ano % 100 == 0)
const bissexto3 = (ano % 400 == 0)

return bissexto1&&bissexto2==bissexto3
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const idade = prompt("tem mais de 18 anos?") 
const ensinoMedio = prompt("tem ensino médio completo?") 
const horario = prompt("tem disponibilidade de horários?")

const resolucao = idade == "sim" && ensinoMedio == "sim" && horario == "sim"

console.log(resolucao)
}