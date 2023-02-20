// Creadora i gestora de middlewares
class Middleware {
  constructor(classInstanceToBeAdopted) {
    this.adoptedClassInstance = classInstanceToBeAdopted;
    this.middlewares = []; //empty array for now, will be mapped later
    this.req = {}; //empty object for now, will be used to get values to work with.

    const adoptedClassInstancePrototype = Object.getPrototypeOf(this.adoptedClassInstance);

    Object.getOwnPropertyNames(adoptedClassInstancePrototype).forEach((funcMethod) => {
      if (funcMethod !== 'constructor') return this.createFn(funcMethod);
      // Definim aquest mètode createFn() abaix ↓ ↓
      // volem crearlo en el context d'aquesta classe Middleware per tar d'adoptar-la com a pròpia.
    });
  }
  executeMiddlewares(i = 0) {
    if (i < this.middlewares.length) {
      this.middlewares[i].call(this, ...this.req, () => this.executeMiddlewares(i + 1));
      // Necessari utilitzar ...this.req a fi que la funció rebi cadascun dels diferents paràmetres esperats, a i b. Si no, rebria un sol argument objecte sense els arguments separats.
    }
  }
  createFn(func) {
    // Dynamically create a method with the given func name
    this[func] = function () {
      this.req = [...arguments]; //arguments per si NO ES UNA ARRAY, si no un objecte. Per això utilitzo el spread operator i entre [], per tal que la info passada a this.req sigui una array d'arguments.
      // console.log(this.req);
      this.executeMiddlewares();
    };
  }
  use(mdw) {
    this.middlewares.push(mdw);
  }
}
module.exports = Middleware;
