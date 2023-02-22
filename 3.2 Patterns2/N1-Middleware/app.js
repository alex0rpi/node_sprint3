/* Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON.
Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions).
Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió entre 2 dels operands inicials en cadascuna de les operacions. Invoca les execucions de la suma, la resta i la multiplicació, de manera que es vagin mostrant per la consola les modificacions que es van fent als valors abans del resultat final. */
const Middleware = require('./Middleware');
const operands = require('./params.json');
const Calculadora = require('./Calculadora');

// We inject an instance to the class Middleware
const app = new Middleware(new Calculadora());
console.log(app);

// * Crec que s'han crear funcions per fer el quadrat cub i divisió i que tinguin el format:
const quadratMdw = (data, next) => {
  console.log(`Args rebuts per ${quadratMdw.name}: ${data.a} i ${data.b}`);
  data.a = data.a ** 2;
  data.b = data.b ** 2;
  console.log(`quadrat: ${data.a} i ${data.b}`);
  console.log('---------------------');
  next();
};
const cubMdw = (data, next) => {
  console.log(`Args rebuts per ${cubMdw.name}: ${data.a} i ${data.b}`);
  data.a = data.a ** 3;
  data.b = data.b ** 3;
  console.log(`cub: ${data.a} i ${data.b}`);
  console.log('---------------------');
  next();
};
const divisioMdw = (data, next) => {
  console.log(`Args rebuts per ${divisioMdw.name}: ${data.a} i ${data.b}`);
  data.a = data.a / 2;
  data.b = data.b / 2;
  console.log(`divisió: ${data.a} i ${data.b}`);
  console.log('---------------------');
  next();
};

// i després emprear el mètode .use() de la instancia de middleware
// per incorporar les funcions adalt especificades.
app.use(quadratMdw);
app.use(cubMdw);
app.use(divisioMdw);

// Invocar les funcions per separat, sino, el resultat de multiplica és d'un ordre de magnitud elevat.
app.suma(operands)
// app.resta(operands);
// app.multiplica(operands);