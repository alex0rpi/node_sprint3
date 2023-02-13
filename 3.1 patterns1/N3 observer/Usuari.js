/* Observer
Escriu una aplicació que creï diferents objectes Usuari/ària. 
L'aplicació podrà crear diferents Temes i subscriure els usuaris/es a ells.
Quan un Usuari/ària afegeixi un missatge a un Tema s'enviarà una alerta per la consola des del Tema.
També ho mostraran per consola cadascun dels Usuaris/es que estiguin subscrits al Tema (rebran el missatge).
Crea un Tema amb un Usuari/ària i un altre amb dos i mostra la recepció dels missatges pels usuaris/es. Utilitza el mòdul events. */
const EventEmitter = require('events');

class Usuari extends EventEmitter {
  constructor(userName) {
    super();
    this.username = userName;
  }
  speak() {
    console.log(`Bon dia, sóc el user ${this.username}`);
    this.emit('missatge');
  }
}

module.exports = { Usuari };
