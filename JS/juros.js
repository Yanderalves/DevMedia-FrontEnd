import input from 'readline-sync';

console.log("Aplicação de juros:");

let value = verifyEntry('Digite o valor: R$ ');

let days = verifyEntry('Informe quantos dias se passaram desde o vencimento do boleto: ')


function printResult(originalValue, days, rate, finalValue) {
    console.log(`Valor original da dívida: ${originalValue}`);
    console.log(`Dias atrasados: ${days}`);
    console.log(`Taxa de juros: ${rate * 100}`);
    console.log(`Valor total com juros: ${finalValue}`);
}

function verifyEntry(msg) {
    while (true) {
        let value = input.question(msg);
        if (![null, undefined, " ", ""].includes(value)) {
            return value;
        } else {
            console.log('Digite novamente!!')
        }
    }
}

function calculateInterestRate(days) {
    if (days > 15) {
        let rate = 0.1;
    } else {
        let rate = 0.05;
    }
    return rate;
}

function calculateInterest(value, rate) {
    return (value * rate) + value;
}
