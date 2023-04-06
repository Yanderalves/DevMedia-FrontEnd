import input from 'readline-sync';

function verifyEntry(msg) {
    while (true) {
        let value = input.question(msg);
        if (![null, undefined, " ", ""].includes(value)) {
            return Number(value);
        } else {
            console.log('Digite novamente!!')
        }
    }
}

function calculateInterestRate(days) {
    let rate;
    if (days > 15) {
        rate = 0.1;
    } else {
        rate = 0.05;
    }
    return rate;
}

function calculateInterest(value, rate) {
    return (value * rate) + value;
}

function printResult(originalValue, days, rate, finalValue) {
    console.log(`Valor original da dívida: ${originalValue}`);
    console.log(`Dias atrasados: ${days}`);
    console.log(`Taxa de juros: ${rate * 100}%`);
    console.log(`Valor total com juros: ${finalValue} R$\n`);
}

export const auxiliaryFunctions = {
    verifyEntry,
    calculateInterestRate,
    calculateInterest,
    printResult
};