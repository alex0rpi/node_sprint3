/* Middleware
Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON.
Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions).
Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió entre 2 dels operands inicials en cadascuna de les operacions. Invoca les execucions de la suma, la resta i la multiplicació, de manera que es vagin mostrant per la consola les modificacions que es van fent als valors abans del resultat final. */
const Middleware = require('./Middleware');
const operands = require('./params.json');
const Calculadora = require('./Calculadora');

// We inject an instance to the class Middleware
// console.log(app);
const app = new Middleware(new Calculadora());

// * Crec que s'han crear funcions per fer el quadrat cub i divisió i que tinguin el format:
const quadratMdw = (req, next) => {
  console.log(`Args rebuts per ${quadratMdw.name}: ${req.a} i ${req.b}`);
  req.a = req.a ** 2;
  req.b = req.b ** 2;
  console.log(`quadrat: ${req.a} i ${req.b}`);
  console.log('---------------------');
  next();
};
const cubMdw = (req, next) => {
  console.log(`Args rebuts per ${quadratMdw.name}: ${req.a} i ${req.b}`);

  req.a = req.a ** 3;
  req.b = req.b ** 3;
  console.log(`cub: ${req.a} i ${req.b}`);
  console.log('---------------------');
  next();
};
const divisioMdw = (req, next) => {
  console.log(`Args rebuts per ${quadratMdw.name}: ${req.a} i ${req.b}`);

  req.a = req.a / 2;
  req.b = req.b / 2;
  console.log(`divisió: ${req.a / req.b}`);
  console.log('---------------------');
  next();
};

// i després emprear el mètode .use() de la instancia de middleware
// per incorporar les funcions adalt especificades.
app.use(quadratMdw);
app.use(cubMdw);
app.use(divisioMdw);

// Ara les invoquem
app.suma(operands);
// app.resta(operands);
// app.multiplica(operands);

// Però segueixo sense entendre perquè no fa la suma, ni la resta ni la multiplicació
