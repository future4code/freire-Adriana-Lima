```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let contas = 0
  for(let numero of arrayDeNumeros) {
    if(numero === numeroEscolhido) {
      contas ++
    }
  }
  if (contas > 0) {
    return `O número ${numeroEscolhido} aparece ${contas} x`
  } else {
    return `Número não encontrado`
  }

}```