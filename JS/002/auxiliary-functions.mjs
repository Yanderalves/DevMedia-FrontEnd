import input from 'readline-sync';

const menu = () => {
    console.log("1 - Listar o histórico do salário mínimo");
    console.log("2 - Listar o histórico da taxa IPCA (inflação)");
    console.log("3 - Comparar e listar a porcentagem de crescimento salarial com a inflação(IPCA)");

    let option;

    do {
        option = input.question("Selecione uma opção: ");
    } while (![1, 2, 3].includes(Number(option)))

    return Number(option);
}

const printItemList = (list) => {

    const propertyNames = Object.keys(list[0]);

    let msg = propertyNames.includes('wage') ? ["R$", "Ano: ", "Salário mínimo: "] : ["%", "Ano: ", "inflação do IPCA"]

    console.log(" ");

    list.forEach(item => {
        let firstRowValue = `${msg[1].padEnd(40, '.')}${String(item[propertyNames[0]])}`;
        let secondRowValue;

        if (msg[0] == "R$") {
            secondRowValue = `${msg[2].padEnd(40, '.')}${msg[0] + String(item[propertyNames[1]])}`;
        } else {
            secondRowValue = `${msg[2].padEnd(40, '.')}${String(item[propertyNames[1]]) + msg[0]}`;
        }

        console.log(`${firstRowValue}`);
        console.log(`${secondRowValue}`);

        console.log(" ");
    });
}

export const auxiliaryFunctions = {
    menu,
    printItemList
};