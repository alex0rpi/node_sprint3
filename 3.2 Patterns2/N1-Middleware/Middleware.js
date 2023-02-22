// Creadora i gestora de middlewares
class Middleware {
  constructor(classInstanceToBeAdopted) {
    this.adoptedClassInstance = classInstanceToBeAdopted;
    this.middlewares = []; //empty array for now, will be mapped later

    const adoptedClassInstancePrototype = Object.getPrototypeOf(this.adoptedClassInstance);
    // Accedir a les propietats(mètodes) del prototip de la instància que hem absorvit (suma, resta, multiplicar)
    // console.log(Object.getOwnPropertyNames(adoptedClassInstancePrototype));
    Object.getOwnPropertyNames(adoptedClassInstancePrototype).forEach((funcMethod) => {
      if (funcMethod !== 'constructor') return this.createFn(funcMethod);
      // Definim aquest mètode createFn() abaix ↓ ↓
      // volem crearlo en el context d'aquesta classe Middleware per tar d'adoptar el mètode com a propi.
    });
  }
  executeMiddlewares(i = 0, data) {
    if (i < this.middlewares.length) {
      this.middlewares[i].call(this, data, () => this.executeMiddlewares(i + 1, data));
    }
  }
  createFn(func) {
    // Dynamically create a method with the given func name
    this[func] = function (factors) {
      const data = { ...factors };
      console.log(data);
      this.executeMiddlewares(0, data);
      // I finalment executem la funció en questió per a què operi amb els valors de this.data tal qual han quedat.
      const resFinal = this.adoptedClassInstance[func].call(this, data);
      return resFinal;
    };
  }
  use(mdw) {
    this.middlewares.push(mdw);
    // console.log(this.middlewares);
  }
}
module.exports = Middleware;
