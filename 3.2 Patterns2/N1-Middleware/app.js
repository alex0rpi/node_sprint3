/* Middleware
Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON.
Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions).
Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió entre 2 dels operands inicials en cadascuna de les operacions. Invoca les execucions de la suma, la resta i la multiplicació, de manera que es vagin mostrant per la consola les modificacions que es van fent als valors abans del resultat final. */
const Middleware = require('./Middleware');
const operands = require('./params.json');
const Calculadora = require('./Calculadora')

const calculatrice = new Calculadora();

// We inject that instance to the class Middleware
const app = new Middleware(calculatrice);
console.log(app)

// * Crec que he de crear funcions, middleware per fer el quadrat cub i divisió i que tinguin el format:
const myMiddleware = (req, next) => {
  // ...
  next();
};

// i després emprear el mètode .use() de la instancia de middleware i incorporar-hi myMiddleware
app.use(myMiddleware);
app.myMethod();

// Now this middleware instance can use the same methods calculatrice has.
// console.log(app.suma(operands));
// console.log(app.resta(operands));
// console.log(app.multiplica(operands));

// ###################################################

// Now take the first 2 key-value pairs of the imported json object.
const operandsArray = Object.entries(operands);
// const twoInitialOperands = Object.fromEntries(operandsArray.slice(0, 2));

const firstOperand = Object.fromEntries([operandsArray[0]]);
// console.log(firstOperand);
const secondOperand = Object.fromEntries([operandsArray[1]]);
// console.log(secondOperand);

// console.log(Object.values(firstOperand)[0]);
// console.log(Object.values(secondOperand)[0]);

const num1quadrat = app.multiplica(firstOperand, firstOperand);
const num2quadrat = app.multiplica(secondOperand, secondOperand);
// console.log(num1quadrat);
// console.log(num2quadrat);
/*----------------------------------------*/
const num1Cub = app.multiplica(firstOperand, firstOperand, firstOperand);
const num2Cub = app.multiplica(secondOperand, secondOperand, secondOperand);
// console.log(num1Cub);
// console.log(num2Cub);
/*----------------------------------------*/
// const num1Dividitnum2 = app.divideix(
//   Object.values(firstOperand)[0],
//   Object.values(secondOperand)[0]
// );
// console.log(num1Dividitnum2);
/*----------------------------------------*/

// console.log(app.suma(twoInitialOperands))
// console.log(app.resta(twoInitialOperands))
// console.log(app.multiplica(twoInitialOperands))