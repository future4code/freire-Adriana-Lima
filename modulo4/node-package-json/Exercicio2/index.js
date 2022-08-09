const operacoes = Number(process.argv[2])

const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

if (operacoes && num1 && num2 != undefined) {
    switch (operacoes) {
        case "soma":
            return console.log(`resultado= ${num1 + num2}`);
        case "subtracao":
            return console.log(`resultado= ${num1 - num2}`);    
        case "multiplicacao":
            return console.log(`resultado= ${num1 * num2}`);
        case "divisao":
            return console.log(`resultado= ${num1 / num2}`);    
        default:
            break;
    }
} else {
    console.log("erro");
}

