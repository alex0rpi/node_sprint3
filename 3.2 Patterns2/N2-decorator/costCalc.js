/* Decorator
Crea un Decorator en un arxiu que retorni una funció. Aquesta funció efectuarà una conversió de moneda a euros multiplicant pel coeficient de conversió del fitxer adjunt currency_conversions.json en funció de la divisa original.
Crea una petita aplicació que calculi el cost d'uns quants Articles en euros a partir de les seves divises inicials, aplicant diferents conversions que usin el Decorator del punt anterior. */

const conversions = require('./currency_conversions.json');

const arrayConv = Object.entries(conversions);

const ArrayOfObjConv = [];

arrayConv.forEach((item) => {
  const obj = {};
  obj[item[0]] = item[1];
  ArrayOfObjConv.push(obj);
});

console.log(ArrayOfObjConv);

const productes = [
  { nom: 'teclat', preu: 55, divisa: 'GBP' },
  { nom: 'mouse', preu: 10, divisa: 'CNY' },
  { nom: 'monitor', preu: 30, divisa: 'CHF' },
  { nom: 'cadira', preu: 40, divisa: 'USD' },
];
