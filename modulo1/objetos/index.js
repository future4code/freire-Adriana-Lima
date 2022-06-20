// Exercicios de interpretacao de codigo

// 1 questao

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) 
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// A. Imprimiu o valor especifico no primeiro console e no terceiro console  
// tambem fez a mesma coisa. No segundo console imprimiu o ultimo elemento.

// 2 questao

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// A. No primeiro console vai ser impresso o nome, a idade e a raca do cachorro
// No segundo console faz um espelhamento dos dados do cachorro trocando apenas
// a letra C pela D.
// no terceiro console fez o espelhamento do dados do gato substituindo a letra
// A por O.

// B. Faz o espelhamento dos dados do objeto anterior.

// 3 questao

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// A. No primeiro console diz que a pessoa nao e backender. em seguida no segundo 
// console retorna um undefined porque noa tem valor para a altura.

// B. A propriedade do backender tem um valor que false e um undefined, pois nao
// foi declarado nem um valor.

// Exercicio de escrita de codigo

// 1 questao

// A.

// Exemplo de entrada

const pessoa1 = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }
 
function individuo (pessoa) {

    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: 
    ${pessoa.apelidos[0]}, 
    ${pessoa.apelidos[1]},
    ${pessoa.apelidos[2]}`)    
}
individuo(pessoa1)

// B.

const pessoa2 = {
    ...pessoa1,
    apelidos: ["Dryca", "Adry", "Nana"]
}
individuo(pessoa2)

// 2 questao

// A.

const informacao1 = {
    nome: "Manoel",
    idade: 57,
    profissao: "agricultor"
}

const informacao2 = {
    nome: "Maria",
    idade: 40,
    profissao: "professora"
}

// B.

function apresentacao(informacao1, informacao2){
    const novaInformacao = {...informacao1,
    ...informacao2,}
    const novaInformacao1 = [novaInformacao.nome, novaInformacao.nome.length,
    novaInformacao.idade, novaInformacao.profissao, 
    novaInformacao.profissao.length]
    return novaInformacao1
}
console.log(apresentacao(informacao1))

// 3 questao

carrinho = []

const fruta1 = {
    nome: "banana",
    disponibilidade: true
}

const fruta2 = {
    nome: "maca",
    disponibilidade: true
}

const fruta3 = {
    nome: "goiaba",
    disponibilidade: true
}

function sacola(fruta){

const frutas0 = {
    ...fruta1,
    ...fruta2,
    ...fruta3
}
carrinho = [fruta1, fruta2, fruta3]
return carrinho
}

console.log(sacola(carrinho.fruta1))



