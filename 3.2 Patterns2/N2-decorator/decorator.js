const conversions = require('./currency_conversions.json');

const calcCost = (items) => {
  const convArray = Object.entries(conversions);
  const convObj = {};
  convArray.forEach((item) => (convObj[item[0]] = item[1]));

  const result = items.map((item) => {
    return {
      ...item,
      cost: item.preu * item.qty,
    };
  });
  const euroResult = result.map((item) => ({
    ...item,
    euroCost: +(item.preu * convObj[`${item.divisa}_EUR`] * item.qty).toFixed(2),
  }));
  console.log(euroResult); // nova array d'objectes enriquits amb propietat euroCost afegida.
};

module.exports = calcCost;
