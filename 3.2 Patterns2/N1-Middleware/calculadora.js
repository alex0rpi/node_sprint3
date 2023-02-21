class Calculadora {
  suma(data) {
    // argument expected {a:5, b:6}
    const suma = `La suma dels operands dona: ${data.a + data.b}`;
    console.log(suma);
    return suma;
  }
  resta(data) {
    // argument expected {a:5, b:6}
    const resta = `La resta dels operands dona: ${data.a - data.b}`;
    console.log(resta);
    return resta;
  }

  multiplica(data) {
    const multiplica = `El producte dels operands dona: ${data.a * data.b}`;
    console.log(multiplica);
    return multiplica;
  }
}
module.exports = Calculadora;
