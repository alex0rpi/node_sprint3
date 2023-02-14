// Creadora i gestora de middlewares

class Middleware {
  constructor(operacio) {
    this.operacio = operacio;
  }
  use(num1, num2) {
    switch (this.operacio) {
      case 'suma':
        console.log(num1 + num2);
        break;
      case 'resta':
        console.log(num1 - num2);
        break;
      case 'multiplica':
        console.log(num1 * num2);
        break;

      default:
        console.log('De aquí no sale nada');
    }
  }
}

module.exports = Middleware;
