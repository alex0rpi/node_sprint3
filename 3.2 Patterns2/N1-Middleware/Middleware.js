// Creadora i gestora de middlewares
class Middleware {
  constructor(classInstanceToBeAdopted) {
    this.adoptedClassInstance = classInstanceToBeAdopted;
    this.middlewares = []; //empty array for now, will be mapped later
    this.req = {}; //empty object for now, will be used to get values to work with.

    const adoptedClassInstancePrototype = Object.getPrototypeOf(this.adoptedClassInstance);
    /* Object.getPrototypeOf() method is used to get the prototype object of the classToBeAdopted. 
    This is because the classToBeAdopted is passed as a constructor function, and not as an instance of a class. */
    /*  When you use the classToBeAdopted.prototype property, it assumes that classToBeAdopted is an instance of a class,
    which is not the case in this scenario. */
    // "constructor" es una prop que també forma part de les "own properties" d'una instancia, i per a aquesta en concret no volem crear una funció, però sí per a la resta.
    // console.log(Object.getOwnPropertyNames(adoptedClassInstancePrototype)); // [ 'constructor', 'suma', 'resta', 'multiplica', 'divideix' ]
    Object.getOwnPropertyNames(adoptedClassInstancePrototype).forEach((funcMethod) => {
      if (funcMethod !== 'constructor') return this.createFn(funcMethod); // per a cada mètode de les propietats de la class adoptada, creem una funció
      // Definim aquest mètode createFn() abaix ↓ ↓
      // funcMethod és el nom d'una funció que no coneixem previament, pot ser qualssevol. I Sigui quin sigui el nom,
      // volem crearlo en el context d'aquesta classe Middleware per tar d'adoptar-la com a pròpia.
    });
  }
  // methods of the middleware ↓ ↓
  executeMiddlewares(i = 0) { // i defaults to 0 to start sweeping all the methods
    if (i < this.middlewares.length) {
      this.middlewares[i].call(this, this.req, () => this.executeMiddlewares(i + 1))
      // La funció s'autoinvoca amb el paràmetre index incrementat
    }
  }
  createFn(func) {
    // Dynamically create a method with the name func
    this[func] = function () {
      this.req = arguments;
      console.log(this.req);
      this.executeMiddlewares();
      /* we then return the result of calling the new particular method of the adopted class,
      with the args as parameters */
      // return this.adoptedClassInstance[func].call(this, this.req);
    };
  }
  use(mdw) {
    // Ara populem l'objecte req i l'array middlewares del constructor de la classe Middleware ↑↑
    this.middlewares.push(mdw);
  }
}
module.exports = Middleware;
