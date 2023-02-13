/* Construeix una aplicació que creï diversos Jugadors/es.
Els jugadors/es podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions i el guanyador/a. 
L'aplicació ha de poder afegir o treure punts a cada jugador/a perquè el marcador canviï. 
La classe Marcador ha d'implementar un patró Singleton com a requisit indispensable. */

const Jugador = require('./Jugador');
const Juego = require('./Juego');

// Only one instance of marcador is allowed on a Singleton pattern.

let alex = new Jugador();

let mies = new Jugador();

let quidditch = new Juego();

let poker = new Juego();
