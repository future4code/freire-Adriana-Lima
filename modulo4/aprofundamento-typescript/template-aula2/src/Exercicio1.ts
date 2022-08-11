let minhaString : string

console.log(" A. Não podemos atribuir tipo number ao tipo string ")

let meuNunber: number | string

console.log("B. Temos que usar o Union Type para atribuir outro valor a variável.")

type person = {
    name: string,
    age: number,
    colorFavorite: string
}

const colors: person = {
    name: "Joao",
    age: 36,
    colorFavorite: "blue"
}

console.log("person")
