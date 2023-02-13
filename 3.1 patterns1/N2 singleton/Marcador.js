class Marcador {
  static instance;
  results = [];
  constructor() {
    if (Marcador.instance) {
      return Marcador.instance;
    }

    Marcador.instance = this;
  }
  modifyResults(player, amount) {
    this.results.map((result) => {
      if (result.player === player) {
        result.score += amount;
      }
    });
  }
}

module.exports = Marcador;

// ######################################
/* class Singleton {
    static instance;
    data = [];
  
    constructor() {
      if (Singleton.instance) {
        return Singleton.instance;
      }
  
      Singleton.instance = this;
    }
  
    addData(value) {
      this.data.push(value);
    }
  }
  
  class Client {
    modifySingletonData(value) {
      const singletonInstance = new Singleton();
      singletonInstance.addData(value);
    }
  }
  
  const clientInstance = new Client();
  clientInstance.modifySingletonData('Data 1');
  
  const anotherClientInstance = new Client();
  anotherClientInstance.modifySingletonData('Data 2');
  
  const singletonInstance = new Singleton();
  console.log(singletonInstance.data); // Output: ['Data 1', 'Data 2'] */
// ######################################
