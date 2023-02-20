class Calculadora {
  suma({ ...operands }) {
    // object expected {a:5, b:6}
    const array = Object.values(operands);
    const sum = array.reduce((accum, curr) => (accum += curr));
    return sum;
  }
  resta({ ...operands }) {
    const array = Object.values(operands);
    const resta = array.reduce((accum, curr) => (accum -= curr));
    return resta;
  }
  multiplica({ ...operands }) {
    const array = Object.values(operands);
    let multi = array[0];
    for (let i = 1; i <= array.length - 1; i++) {
      multi = multi * array[i];
    }
    return multi;
  }
}

module.exports = Calculadora;
