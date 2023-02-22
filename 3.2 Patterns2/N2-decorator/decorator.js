const conversions = require('./currency_conversions.json');

const calcCost = (items) => {
  const convArray = Object.entries(conversions);
  const convObj = {};
  convArray.forEach((item) => (convObj[item[0]] = item[1]));

  console.log('input article instances array ⬇')
  console.table(items)

  const euroResult = items.map((item) => ({
    ...item,
    euroCost: +(item.preu * convObj[`${item.divisa}_EUR`] * item.qty).toFixed(2),
  }));
  console.log('after decoration ⬇')
  console.table(euroResult); // nova array d'objectes enriquits amb propietat euroCost afegida.
};

module.exports = calcCost;
