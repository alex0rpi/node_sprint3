/* Middleware
Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON. Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions). Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió entre 2 dels operands inicials en cadascuna de les operacions. Invoca les execucions de la suma, la resta i la multiplicació, de manera que es vagin mostrant per la consola les modificacions que es van fent als valors abans del resultat final. */
// Creadora i gestora de middlewares

class Middleware {
  constructor(classToBeAdopted) {
    this.adoptedClass = classToBeAdopted;
    this.middlewares = []; //empty array for now, will be mapped later
    this.req = {}; //empty object for now, will be used to get values to work with.
  }
  // 
}

module.exports = Middleware;
