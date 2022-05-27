// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length

}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a,b) => a-b)
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPares = array.filter((pares) =>{
        if (pares % 2 === 0) {
            return true
        }
    })
    
    return arrayPares
    
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayNumero = array.filter((numero) => {
        if (numero % 2 === 0){
            return true
        }
    })
    let arrayElevado = arrayNumero.map((numero) => {
        return numero ** 2
    })
    return arrayElevado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let arrayPares = []
    for (let i = 0; i < n; i++) {
        arrayPares[i] = i * 2
    }
    return arrayPares;
    
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   const filme = {
       nome: 'O Diabo Veste Prada',
       ano: 2006,
       diretor: 'David Frankel',
       atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    }
   return "Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2], ${filme.atores[3]}."
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}