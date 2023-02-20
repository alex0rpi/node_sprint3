// Creadora i gestora de middlewares
class Middleware {
  constructor(classToBeAdopted) {
    this.adoptedClass = classToBeAdopted;
    this.middlewares = []; //empty array for now, will be mapped later
    this.req = {}; //empty object for now, will be used to get values to work with.

    const adoptedClassPrototype = Object.getPrototypeOf(this.adoptedClass);
    /* Object.getPrototypeOf() method is used to get the prototype object of the classToBeAdopted. 
    This is because the classToBeAdopted is passed as a constructor function, and not as an instance of a class. */
    /*  When you use the classToBeAdopted.prototype property, it assumes that classToBeAdopted is an instance of a class,
    which is not the case in this scenario. */
    // El constructor es una prop que també forma part de les "own properties" d'una instancia, i per aquesta en concret no volem crear una funció, però sí per a la resta.
    // console.log(Object.getOwnPropertyNames(adoptedClassPrototype)); // [ 'constructor', 'suma', 'resta', 'multiplica', 'divideix' ]
    Object.getOwnPropertyNames(adoptedClassPrototype).forEach((funcMethod) => {
      if (funcMethod !== 'constructor') return this.createFn(funcMethod); // per a cada mètode de les propietats de la class adoptada, creem una funció
      // Definim aquest mètode createFn() abaix ↓ ↓
      // funcMethod és el nom d'una funció que no coneixem previament, pot ser qualssevol. I Sigui quin sigui el nom,
      // volem crearlo en el context d'aquesta classe Middleware per tar d'adoptar-la com a pròpia.
    });
  }
  // methods of the middleware ↓ ↓
  executeMiddleware(i = 0) {
    // i is given a default value of 0
    if (i < this.middlewares.length) {
      console.log(this.middlewares[i].call(this, this.req, () => this.executeMiddleware(i + 1)));
      // La funció s'autoinvoca amb el paràmetre index incrementat
    }
  }
  createFn(func) {
    // Dynamically create a method with the name func
    /* We cannot add the new method "func" with dot notation bq then it would create a method with literally the name "func" 
    and we want it to have the name that is passed as parameter to createFn. To achieve that, we use 
    this[func] which will put whatever name it is. */
    this[func] = () => {
      this.req = arguments;
      this.executeMiddleware();
      /* we then return the result of calling the new particular method of the adopted class,
      with the args as parameters */
      return this.adoptedClass[func].call(this, this.req);
      // NodeTips diu que cal emprear .call() però jo crec que redefinir el contexte "this" a la de la classe Middleware es redundant.
    };
  }
  use(mdw) {
    // Ara populem l'objecte req i l'array middlewares al constructor ↑↑
    this.middlewares.push(mdw);
    // mdw pot ser una de les funcions que suma, resta, multiplica etc.
    console.log(this.middlewares);
    this.createFn(mdw);
    // this.executeMiddleware(mdw);
  }
}
module.exports = Middleware;
