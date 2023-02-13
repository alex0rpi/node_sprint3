// Controller role
const Marcador = require('./Marcador');

class Juego {
  constructor(nombre) {
    this.gameName = nombre;
    this.players = [];
  }
  crearMarcador() {
    const marcador = new Marcador();
  }
  recibirJugador(playerName) {
    this.players.push(playerName);
  }
  addPointsToPlayer(player, amount) {
    this.marcador.modifyResults();
  }
  takePointsFromPlayer(player, amount) {
    this.marcador.modifyResults();
  }
}

module.exports = Juego;