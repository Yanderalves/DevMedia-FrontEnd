import { auxiliaryFunctions } from "./functionsAssistants.js";

console.log("Aplicação de juros:\n");

let value = auxiliaryFunctions.verifyEntry('Digite o valor: R$ ');

if(value > 0 ){
    let days = auxiliaryFunctions.verifyEntry('Informe quantos dias se passaram desde o vencimento do boleto: ');

    console.log("\n");
    
    let rate = auxiliaryFunctions.calculateInterestRate(value, days);
    
    let finalValue = auxiliaryFunctions.calculateInterest(value, rate);
    
    auxiliaryFunctions.printResult(value, days, rate, finalValue);
}else if(days == 0){
    console.log("\n");
    console.log("Você está em dia");
}else if(value <=0){
    console.log("\n");
    console.log("A dívida deve ser maior que 0");
}
