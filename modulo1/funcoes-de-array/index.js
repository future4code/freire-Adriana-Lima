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
  // Object 0  Array(3)
  // Object 1  Array(3)
  // Object 2  Array(3)
// ---------------------------------------------------------------------
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
// ------------------------------------------------------------------------
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

//--------------- Exercícios de escrita de código ---------------

// 1. Dado o seguinte array de cachorrinhos que são clientes de um 
//   et shop, realize as operações pedidas nos itens abaixo utilizando as
//   funções de array map e filter:

// a) Crie um novo array que contenha apenas o nome dos doguinhos

// b) Crie um novo array apenas com os [cachorros salsicha]
// (https://www.youtube.com/watch?v=YQ404vwjzus)

// c) Crie um novo array que possuirá mensagens para enviar para todos os 
// clientes que são poodles. A mensagem deve ser: 
// "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

 // A.

    // const nomeDosPets = pets.map((pet) => {    
    //     return pet.nome
    // })
    // console.log(nomeDosPets)

// B.

// const racaDosPets = pets.filter((pet) => {
//     return pet.raca === "Salsicha"
// })
// console.log(racaDosPets)

// C.

// Nao consegui fazer.

// 2. Dado o seguinte array de produtos, realize as operações pedidas nos 
// itens abaixo utilizando as funções de array map e filter:
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

 // a) Crie um novo array que contenha apenas o nome de cada item

//  const nomeItens = produtos.map((item) => {
//      return item.nome
//  })
//  console.log(nomeItens)

 // b) Crie um novo array que contenha um objeto com o nome e o preço de 
 // cada item, aplicando 5% de desconto em todos eles

 //  const descontopreco = produtos.map((item) => {
//      return {produto: item.preco, preco: item.preco * 0.95
//     }
//  })
//  console.log(descontopreco)

// c) Crie um novo array que contenha apenas os objetos da categoria
// Bebidas

// const nomeItens1 = produtos.filter((objeto) => {
//         return objeto.categoria === "Bebidas"
//     })
//     console.log(nomeItens1)

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha
// a palavra "Ypê"

// Nao consegui fazer

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por
// [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome 
// contenha a palavra "Ypê"

// Nao consegui fazer