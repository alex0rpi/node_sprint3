// Controller role
const Marcador = require('./Marcador');
// Only one instance of marcador is allowed on a Singleton pattern.

class Juego {
  static marcador
  constructor(nombre) {
    this.gameName = nombre;
    this.marcador = new Marcador()
    this.marcador.addGame(nombre);
    console.log(`Game ${nombre} created`);
  }

  displayGameResults() {
    this.marcador.displayGameResults(this.gameName);
  }
  receivePlayer(player) {
    this.marcador.addPlayer(this.gameName, player.name);
    console.log(`${player.name} joined game ${this.gameName}`);
    this.displayGameResults()
  }
  addPointsToPlayer(player, amount) {
    this.marcador.modifyScore(this.gameName, player.name, amount);
    this.displayGameResults();
    console.log(`player ${player.name} gets ${amount} points.`)
  }
  removePointsFromPlayer(player, amount) {
    this.marcador.modifyScore(this.gameName, player.name, amount * -1);
    this.displayGameResults();
    console.log(`player ${player.name} loses ${amount} points.`)
  }
  resetGameResults() {
    this.marcador.resetGameResults(this.gameName);
    this.displayGameResults();
  }
}

module.exports = Juego;
