/* Middleware
Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON.
Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions).
Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió entre 2 dels operands inicials en cadascuna de les operacions. Invoca les execucions de la suma, la resta i la multiplicació, de manera que es vagin mostrant per la consola les modificacions que es van fent als valors abans del resultat final. */
const Middleware = require('./Middleware');
const operands = require('./params.json');
const Calculadora = require('./Calculadora');

const calculatrice = new Calculadora();

// We inject that instance to the class Middleware
const app = new Middleware(calculatrice);
console.log(app);

// Now this middleware instance can use the same methods calculatrice has.
// console.log(app.suma(operands));
// console.log(app.resta(operands));
// console.log(app.multiplica(operands));

// ###################################################

// Now take the first 2 key-value pairs of the imported json object.
const operandsArray = Object.entries(operands);

const firstOperand = Object.fromEntries([operandsArray[0]]);
// console.log(firstOperand); {num1: 5}
const secondOperand = Object.fromEntries([operandsArray[1]]);
// console.log(secondOperand); {num2: 2}

// * Crec que s'han crear funcions per fer el quadrat cub i divisió i que tinguin el format:
const quadratMdw = (req, next) => {
  const quadrat = req.a ** 2;
  console.log(quadrat);
  return quadrat
  next();
};
const cubMdw = (req, next) => {
  const cub = req.a ** 3;
  console.log(cub);
  return cub
  next();
};
const divisioMdw = (req, next) => {
  const divisio = req.a / req.b;
  console.log(divisio);
  return divisio
  next();
};

// i després emprear el mètode .use() de la instancia de middleware
// per incorporar les funcions adalt especificades.
app.use(quadratMdw);
app.use(cubMdw);
app.use(divisioMdw);

// Ara les invoquem i anem reassignant les variables operands

console.log(app.quadratMdw(firstOperand))

// secondOperand = app.quadratMdw(secondOperand);

// firstOperand = app.cubMdw(firstOperand);

// secondOperand = app.cubMdw(secondOperand);

// app.divisioMdw(firstOperand, secondOperand);

