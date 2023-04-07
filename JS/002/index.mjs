
import { auxiliaryFunctions } from "./auxiliary-functions.mjs";

const wageCollection = [
    { year: 2010, wage: 510 },
    { year: 2011, wage: 545 },
    { year: 2012, wage: 622 },
    { year: 2013, wage: 678 },
    { year: 2014, wage: 724 },
    { year: 2015, wage: 788 },
    { year: 2016, wage: 880 },
    { year: 2017, wage: 937 },
    { year: 2018, wage: 954 },
    { year: 2019, wage: 998 },
    { year: 2020, wage: 1045 }
];

const ipcaCollection = [
    { year: 2010, ipca: 5.91 },
    { year: 2011, ipca: 6.50 },
    { year: 2012, ipca: 5.84 },
    { year: 2013, ipca: 5.91 },
    { year: 2014, ipca: 6.41 },
    { year: 2015, ipca: 10.67 },
    { year: 2016, ipca: 6.29 },
    { year: 2017, ipca: 2.95 },
    { year: 2018, ipca: 3.75 },
    { year: 2019, ipca: 4.31 },
    { year: 2020, ipca: 4.52 }
];

let option = auxiliaryFunctions.menu();

switch (option) {
    case 1:
        auxiliaryFunctions.printItemList(wageCollection);
        break;
    case 2:
        auxiliaryFunctions.printItemList(ipcaCollection);
        break;
    case 3:
        auxiliaryFunctions.printAll(wageCollection, ipcaCollection);
        break;
    default:
        console.log("Opção inválida.")
}

