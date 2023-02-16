/* Middleware
Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON.
Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions).
Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió entre 2 dels operands inicials en cadascuna de les operacions. Invoca les execucions de la suma, la resta i la multiplicació, de manera que es vagin mostrant per la consola les modificacions que es van fent als valors abans del resultat final. */
const Middleware = require('./Middleware');


class Calculadora {
    suma({ ...operands }) {
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
  
  const calculatrice = new Calculadora();



/*
La idea sería
1er MDW (fer el quadrat dels operands)
es realitza la suma, resta i multiplicació amb els operands modificats
next()

2n MDW (fer el cub dels operands)
es realitza la suma, resta i multiplicació amb els operands modificats novament
next()

3er MDW (divisió entre els 2 operands)
es realitza la suma, resta i multiplicació amb els operands modificats novamnet
*/
