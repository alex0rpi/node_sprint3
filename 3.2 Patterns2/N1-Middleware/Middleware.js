// Creadora i gestora de middlewares
class Middleware {
  constructor(classInstanceToBeAdopted) {
    this.adoptedClassInstance = classInstanceToBeAdopted;
    this.middlewares = []; //empty array for now, will be mapped later
    this.data = {}; //empty object for now, will be used to get values to work with.

    const adoptedClassInstancePrototype = Object.getPrototypeOf(this.adoptedClassInstance);
    // Accedir a les propietats(mètodes) del prototip de la instància que hem absorvit (suma, resta, multiplicar)
    console.log(Object.getOwnPropertyNames(adoptedClassInstancePrototype));
    Object.getOwnPropertyNames(adoptedClassInstancePrototype).forEach((funcMethod) => {
      if (funcMethod !== 'constructor') return this.createFn(funcMethod);
      // Definim aquest mètode createFn() abaix ↓ ↓
      // volem crearlo en el context d'aquesta classe Middleware per tar d'adoptar el mètode com a propi.
    });
  }
  executeMiddlewares(i = 0) {
    if (i < this.middlewares.length) { //recorrerem tota l'array de funcions
      this.middlewares[i].call(this, ...this.data, () => this.executeMiddlewares(i + 1));
      // .call requires the parameters be listed explicitly.
      // Necessari utilitzar ...this.data a fi que la funció rebi cadascun dels diferents paràmetres esperats, a i b.
      //  Si no, rebria un sol argument objecte sense els arguments separats.
    }
  }
  createFn(func) {
    // Dynamically create a method with the given func name
    this[func] = function () {
      this.data = [...arguments]; //arguments per sí NO ES UNA ARRAY, si no un objecte. Per això utilitzo el spread operator i entre [], per tal que la info passada a this.data sigui una array d'arguments.
      console.log(this.data); //[{a:, b:}]
      console.log(...this.data); //{a:, b:}
      this.executeMiddlewares();
      // I finalment executem la funció en questió per a què operi amb els valors de this.data tal qual han quedat.
      return this.adoptedClassInstance[func].call(this, ...this.data);
    };
  }
  use(mdw) {
    this.middlewares.push(mdw);
    console.log(this.middlewares);
  }
}
module.exports = Middleware;
