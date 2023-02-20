class Calculadora {
  suma(req,next) {
    // object expected {a:5, b:6}
    // const array = Object.values(operands);
    const sum = req.a + req.b;
    console.log(sum);
    next()
    // return sum;
  }
  resta({ ...operands }) {
    const array = Object.values(operands);
    const resta = array.reduce((accum, curr) => (accum -= curr));
    console.log(resta);
    return resta;
  }
  multiplica({ ...operands }) {
    const array = Object.values(operands);
    let multi = array[0];
    for (let i = 1; i <= array.length - 1; i++) {
      multi = multi * array[i];
    }
    console.log(multi);
    return multi;
  }
}

module.exports = Calculadora;
