/* Decorator
Crea un Decorator en un arxiu que retorni una funció. Aquesta funció (retornada) efectuarà una conversió de moneda a euros multiplicant pel coeficient de conversió del fitxer adjunt currency_conversions.json en funció de la divisa original.
Crea una petita aplicació (o sigui funció que serà decorada) que calculi el cost d'uns quants Articles en euros a partir de les seves divises inicials, aplicant diferents conversions que usin el Decorator del punt anterior. */

// Es tracta, entenc, el decorator de l'aplicacio calculadora de costos en divises

const conversions = require('./currency_conversions.json');

const productes = [
  { nom: 'teclat', preu: 55, divisa: 'GBP', qty: 2 },
  { nom: 'mouse', preu: 10, divisa: 'CNY', qty: 1 },
  { nom: 'monitor', preu: 30, divisa: 'CHF', qty: 3 },
  { nom: 'cadira', preu: 40, divisa: 'USD', qty: 4 },
];

// Funció calculadora de costos que posteriorment serà decorada
const calcCost = (productList) => {
  const prodsWithCosts = productList.map((producte) => {
    return {
      ...producte,
      cost: producte.preu * producte.qty,
    };
  });
  return prodsWithCosts;
};

const decorator = (calcCost) => {
  return function () {
    const convArray = Object.entries(conversions);
    const convObj = {};
    convArray.forEach((item) => (convObj[item[0]] = item[1]));
    const convert = (coin, price) => {
      return price * convObj[`${coin}_EUR`];
    };
    // Funció que decorem ⬇ ⬇
    const result = calcCost.apply(this, arguments);
    // Funció que decorem ⬆ ⬆
    const euroResult = result.map((item) => ({
      ...item,
      euroCost: convert(item.divisa, item.preu) * item.qty,
    }));
    console.log(euroResult);
    let totalCost = 0;
    for (i in euroResult) {
      totalCost += result[i].cost;
    }
    return totalCost;
  };
};

const operate = decorator(calcCost);
// This is a new decorated function, that we can now call with arguments

console.log(operate(productes));
