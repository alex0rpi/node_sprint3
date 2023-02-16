/* Middleware
Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON. Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions). Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió entre 2 dels operands inicials en cadascuna de les operacions. Invoca les execucions de la suma, la resta i la multiplicació, de manera que es vagin mostrant per la consola les modificacions que es van fent als valors abans del resultat final. */
// Creadora i gestora de middlewares

class Middleware {
  constructor(classToBeAdopted) {
    this.adoptedClass = classToBeAdopted;
    this.middlewares = []; //empty array for now, will be mapped later
    this.req = {}; //empty object for now, will be used to get values to work with.

    // Find out what is the prototype of the adopted class
    const adoptedClassPrototype = Object.getPrototypeOf(this.adoptedClass);
    // La propietat "constructor" es una propietat del prototip, que es refereix a la funció constructora amb la què s'ha creat un objecte o funció.
    // Aquesta propietat, també forma part de les "own properties" d'una instancia, i per aquesta en concret no volem crear una funció, si no que per a la resta.
    Object.getOwnPropertyNames(adoptedClassPrototype).forEach((funcMethod) => {
      if (funcMethod !== 'constructor') return this.createFn(funcMethod);
      // Definim aquest mètode createFn() abaix ↓ ↓
      // funcMethod és el nom d'una funció que no coneixem previament, pot ser qualssevol. I Sigui quin sigui, volem crearlo en el context d'aquesta classe Middleware.
    });
  }
  // methods of the middleware ↓ ↓
  executeMiddleware(i = 0) {
    // i is given a default value of 0
    if (i < this.middlewares.length) {
      this.middlewares[i].call(this, this.req, () => this.executeMiddleware(i + 1));
      // La funció s'autoinvoca amb el paràmetre index incrementat
    }
  }
  createFn(func) {
    // Dynamically create a method with the name f
    /* We cannot add the new method "func" with dot notation, bq, then it would create a method with literally the name "func" and we want it to have the name that is passed as parameter to createFn. To achieve that, we use 
    this[func] which will put whatever name it is. */
    this[func] = (args) => {
      this.req = args;
      this.executeMiddleware();
      /* we then return the result of calling the new particular method of the adopted class,
      with the args as parameters */
      return this.adoptedClass[func].call(this, this.req);
    };
  }
  use(mdw) {
    // Ara populem l'objecte req i l'array middlewares al constructor ↑↑
    this.middlewares.push(mdw);
    // mdw pot ser una de les funcions que suma, resta, multiplica etc.
    // Però mdw també podria ser una classe?
  }
}
module.exports = Middleware;
