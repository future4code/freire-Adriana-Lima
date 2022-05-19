// Exercícios de interpretação de código

// 1.  Leia o código abaixo

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })
  
  // a) O que vai ser impresso no console?

  // R: Vai ser impresso no console o indice de cada objeto e o array
  // (esta alterando o array)
  // Object 0  Array(3)
  // Object 1  Array(3)
  // Object 2  Array(3)

// 2. Leia o código abaixo

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

  // a) O que vai ser impresso no console?

  // R: Esta imprimindo os nomes do array e quantidade de indices que tem
  // que tem no array

  // 3. Leia o código abaixo

//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

// a) O que vai ser impresso no console?

// R: Está imprimindo apenas os arrays do primeiro e do segundo indice
// (2) [{...}, {...}]
// 0: { nome: 'Amanda Rangel', apelido: 'Mandi'}
// 1: { nome: 'Laís Petra', apelido: 'Laura'}

// Exercícios de escrita de código

// 1. Dado o seguinte array de cachorrinhos que são clientes de um 
//   et shop, realize as operações pedidas nos itens abaixo utilizando as
//   funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const 

// a) Crie um novo array que contenha apenas o nome dos doguinhos

// b) Crie um novo array apenas com os [cachorros salsicha]
// (https://www.youtube.com/watch?v=YQ404vwjzus)

// c) Crie um novo array que possuirá mensagens para enviar para todos os 
// clientes que são poodles. A mensagem deve ser: 
// "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"