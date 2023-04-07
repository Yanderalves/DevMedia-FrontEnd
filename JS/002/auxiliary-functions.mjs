import input from 'readline-sync';

const menu = () => {
    console.log("1 - Listar o histórico do salário mínimo");
    console.log("2 - Listar o histórico da taxa IPCA (inflação)");
    console.log("3 - Comparar e listar a porcentagem de crescimento salarial com a inflação(IPCA)");

    let option;

    do {
        option = input.question("Selecione uma opcao: ");
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

const calculateIncrementWage = (listWage) => {

    let array = []

    const LENGTH = listWage.length;
    let wage;

    for (let i = 1; i < LENGTH; i++) {
        wage = (((listWage[i].wage - listWage[i - 1].wage) / listWage[i - 1].wage) * 100).toFixed(2);
        array.push(wage);
    }

    return array;
}

const printAll = (listWage, listIpca) => {
    let  listIncrease = calculateIncrementWage(listWage);
    listIncrease.splice(0,0, "*");
    let msg = ["Ano: ", "Salário mínimo", "Crescimento salarial", "R$ ", "%", "inflação do IPCA"];
    const LENGTH = listWage.length;

    for (let i = 0; i < LENGTH; i++){
        let firstRowValue = `${msg[0].padEnd(40, '.')}${listWage[i].year}`;
        let secondRowValue = `${msg[1].padEnd(40, '.')}${String(msg[3] + listWage[i].wage.toFixed(2)).replace(".", ",")}`;
        let thirdRowValue;

        if(i == 0){
            thirdRowValue = `${msg[2].padEnd(40, '.')}${listIncrease[i]}`;
        }else{
            thirdRowValue = `${msg[2].padEnd(40, '.')}${listIncrease[i]+ msg[4]}`;
        }

        let fourthtRowValue = `${msg[5].padEnd(40, '.')}${String(listIpca[i].ipca) + msg[4]}`;

        console.log(firstRowValue);
        console.log(secondRowValue);
        console.log(thirdRowValue);
        console.log(fourthtRowValue);

        console.log(" ");
    }
}

export const auxiliaryFunctions = {
    menu,
    printItemList,
    calculateIncrementWage,
    printAll
};