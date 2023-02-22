class Calculadora {
  suma(data) { // argument expected {a:5, b:6}
    const suma = data.a + data.b;
    console.log(`La suma dels operands dona: ${suma}`);
    console.log('=======');
    return suma;
  }
  resta(data) {
    // argument expected {a:5, b:6}
    const resta = data.a - data.b;
    console.log(`La resta dels operands dona: ${resta}`);
    console.log('=======');
    return resta;
  }

  multiplica(data) {
    const multiplica = data.a * data.b;
    console.log(`El producte dels operands dona: ${multiplica}`);
    console.log('=======');
    return multiplica;
  }
}
module.exports = Calculadora;
