/* Observer
Escriu una aplicació que creï diferents objectes Usuari/ària. 
L'aplicació podrà crear diferents Temes i subscriure els usuaris/es a ells.
Quan un Usuari/ària afegeixi un missatge a un Tema s'enviarà una alerta per la consola des del Tema.
També ho mostraran per consola cadascun dels Usuaris/es que estiguin subscrits al Tema (rebran el missatge).
Crea un Tema amb un Usuari/ària i un altre amb dos i mostra la recepció dels missatges pels usuaris/es. Utilitza el mòdul events. */

class Tema {
  constructor(nomTema) {
    this.name = nomTema;
    this.subscriptors = [];
    console.log(`New Tema ${nomTema} has been created.`);
  }
  addSubscriber(newSub) {
    this.subscriptors.push(newSub);
    newSub.on('missatge', (content) => {
      this.subscriptors.forEach((subs) => {
        // if (subs.name !== newSub.name) {
          console.log(`Alert ${subs.name}, ${newSub.name} has emitted a message: ${content}`);
        // }
      });
    });
    console.log(`${newSub.name} was added to tema: ${this.name}`);
  }
}

module.exports = { Tema };
