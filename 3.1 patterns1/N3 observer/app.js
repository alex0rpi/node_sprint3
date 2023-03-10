/* Observer
Escriu una aplicació que creï diferents objectes Usuari/ària. 
L'aplicació podrà crear diferents Temes i subscriure els usuaris/es a ells.

Quan un Usuari/ària afegeixi un missatge a un Tema s'enviarà una alerta per la consola des del Tema. També ho mostraran per consola cadascun dels Usuaris/es que estiguin subscrits al Tema (rebran el missatge).

Crea un Tema amb un Usuari/ària i un altre amb dos i mostra la recepció dels missatges pels usuaris/es. Utilitza el mòdul events. */

/* Observer (Observador): Define una dependencia de uno-a-muchos entre objetos, de forma que cuando un objeto cambie de estado se notifique y actualicen automáticamente todos los objetos que dependen de él. */

// Aquí a app.js té lloc la creació (instanciació) d'objectes a partir de les classes Usuari i Tema. Per això els importem.

const { Usuari } = require('./Usuari');
const { Tema } = require('./Tema');

const Alex = new Usuari('Alex');
const Mies = new Usuari('Mies');
const Pepito = new Usuari('Pepito');

// 1er tema creat amb 2 usuaris
const Avions = new Tema('Avions');
Avions.addSubscriber(Alex)

// 2n tema creat amb 2 usuaris
const Backend = new Tema('Backend');
Backend.addSubscriber(Mies)
Backend.addSubscriber(Pepito)

// Alex.speak()
Mies.speak()