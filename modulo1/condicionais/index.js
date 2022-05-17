// Exercicios de interpretacao de codigo

// 1. Leia o código abaixo:

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? 
 
// Resp: Imprime o numero que quero testar.

 // b) Para que tipos de números ele imprime no console "Passou no teste"? 
 
 // Resp: So para os numeros pares.

 // c) Para que tipos de números a mensagem é "Não passou no teste"? 

 // Resp: para os numeros impares.

// 2. O código abaixo foi feito por uma pessoa desenvolvedora, 
//contratada para automatizar algumas tarefas de um supermercado:
    
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    
// a) Para que serve o código acima?
    
// Resp: Para testar se esta imprimindo corretamente.

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

// Resp: O preço da fruta Maçã é R$ 2.25

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a 
// mensagem impressa no console se retirássemos o `break` que está logo 
// acima do `default` (o `break` indicado pelo comentário 
// "BREAK PARA O ITEM c.")?
 
// resp: O preço da fruta Pêra é R$ 5

// 3. Leia o código abaixo:
    
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }
// console.log(mensagem)

// a) O que a primeira linha está fazendo?

// Resp: Esta imprimindo um numero o primeiro numero.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

// Resp: Se for 10 aparece a mensagem: Esse número passou no teste. Se for -10 aparece a mensagem: Essa mensagem é secreta.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

// Acontece um erro porque a variavel let mensagem esta dentro do bloco if.

// Exercícios de escrita de código

// 1. Faça um programa que pergunta ao usuário qual a idade dele e 
//imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    //     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    //     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    //     c) Agora veja se essa idade do usuário corresponde à idade 
    // mínima que permite dirigir. Se sim, imprima no console 
    // `"Você pode dirigir"`, caso contrário, imprima 
    // `"Você não pode dirigir."`

// const idade = Number(prompt("Digite a idade"))

// if (idade >= 18){
//   console.log("Voce pode dirigir")
// }else{
//   console.log("Voce nao pode dirigir")
// }


// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. 
// Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". 
// Utilize o bloco `if/else`
//     - 💡 Dica
        
//         <aside>
//         ⭐ Se o usuário digitar "V" no prompt, você deverá imprimir no 
// console a mensagem `"Boa Tarde!"`Nesse caso, temos 3 resultados diferentes 
// (Bom dia/Tarde/Noite)
        
//         </aside>
        
//         Se o usuário digitar "V", a saída deve ser:
        
//         ```
//         "Boa Tarde!"
//         ```

// const turnoAula = prompt("Qual o turno que o aluno estuda: M = Matutino, V = Vespertino, N = Noturno")

// if (turnoAula==="V") {
//   console.log("Boa tarde")

// } else if (turnoAula === "N") {
//   console.log("Boa noite")
// } else {
//   console.log("Bom dia")
// }

// 3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.
//     - 💡 Dica
        
//         <aside>
//         ⭐ Lembre-se que o switch case é como se fosse um if, mas ele verifica APENAS IGUALDADES ESTRITAS 
//(`===`)
        
//         </aside>

// const turnoAula = prompt("Qual o turno que o aluno estuda: M = Matutino, V = Vespertino, N = Noturno")
// .toLowerCase()

// switch (turnoAula) {
//   case "m":
//     console.log("Bom dia")
//     break
//   case "v":
//     console.log("Boa tarde")
//     break
//   case "n":
//     console.log("Boa noite")
//     break    
//   default:
//     console.log("Turno nao encontrado")  
//     break
// }

// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, 
// porém ele/ela só assistirá a um filme com você se ele for do gênero 
// fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que 
// pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta 
// sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar 
// assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, 
// caso contrário, imprima `"Escolha outro filme :("`

// let filme = prompt("Digite o genero do filme")
// let precoIngresso = Number(prompt("Digite o preco do ingresso"))

//   if (filme === "fantasia" && precoIngresso < 15){
//     console.log("Bom filme")
//   } else {
//     console.log("Escolha outro filme")
//   }

// Desafios

// 1 -

const filme = prompt("Digite o genero do filme")
const precoIngresso = Number(prompt("Digite o preco do ingresso"))
const lanchinho = prompt("Digite o lanche que voce vai comprar")

    if (filme === "fantasia" && precoIngresso <= 15) {
        console.log(`Bom filme! aproveite o seu ${lanchinho}`)
    } else  {
        console.log("Escolha outro filme")
    }



