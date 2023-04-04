import input from 'readline-sync';

console.log("Aplicação de juros:");

let value = verifyEntry('Digite o valor: R$ ');

console.log(value);


function verifyEntry(msg) {
    while (true) {
        let value = input.question(msg);
        if (![null, undefined, " ", ""].includes(msg) && ![null, undefined, " ", ""].includes(value)) {
            return value;
        }else{
            console.log('Digite novamente!!')
        }
    }
}