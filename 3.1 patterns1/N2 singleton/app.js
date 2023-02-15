/* Construeix una aplicació que creï diversos Jugadors/es.
Els jugadors/es podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions i el guanyador/a. 
L'aplicació ha de poder afegir o treure punts a cada jugador/a perquè el marcador canviï. 
La classe Marcador ha d'implementar un patró Singleton com a requisit indispensable. */

const Jugador = require('./Jugador');
const Juego = require('./Juego');

let alex = new Jugador('alex');
let mies = new Jugador('mies');
let alfa = new Jugador('alfa');
let bravo = new Jugador('bravo');


// For every game (Juego) you can:
// receivePlayer - addPointsToPlayer - removePointsFromPlayer
// displayGameresults - resetGameResults

let parchis = new Juego('parchis');
let futbol = new Juego('futbol');

futbol.receivePlayer(alex);
futbol.receivePlayer(alfa);
futbol.receivePlayer(bravo);
futbol.addPointsToPlayer(alex, 2);
futbol.addPointsToPlayer(alfa, 4);
futbol.addPointsToPlayer(bravo, 10);

parchis.receivePlayer(mies);
parchis.addPointsToPlayer(mies, 10);
