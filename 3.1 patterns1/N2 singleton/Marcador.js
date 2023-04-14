class Marcador {
  static instancia; // initialize a property we'll call "instancia" once the 1st instancia is created
  results = []; // [{game:'', whoWins: '', puntuacions:[{player:'', score:0}]}]
  constructor() {
    if (Marcador.instancia) { //check if an "instancia" property already exists
      return Marcador.instancia;
      // so if I try to create another instancia, I return the one that already exists.
    }
    Marcador.instancia = this;
    // O BIEN
    // Marcador.instancia = "yes";
  }
  restetEverything() {
    this.results = [];
    console.log(this.results);
  }
  addGame(gameName) {
    const gameExists = this.results.find((item) => item.game === gameName);
    if (!gameExists) {
      this.results.push({
        game: gameName,
        whoWins: 'No one',
        puntuacions: [],
      });
      console.log(this.results);
    }
  }
  addPlayer(gameName, playerName) {
    const game = this.results.find((result) => result.game === gameName);
    if (game) {
      game.puntuacions.push({
        player: playerName,
        score: 0,
      });
    }
  }
  checkWinner(targetGame) {
    let highScore = 0;
    const targetGameIndex = this.results.findIndex((result) => result.game === targetGame);
    if (targetGameIndex) {
      targetGame.puntuacions.forEach((item) => {
        if (item.score >= highScore) {
          highScore = item.score;
          targetGame.whoWins = item.player;
        }
      });
    }
  }
  modifyScore(game, player, amount) {
    const targetGame = this.results.find((result) => result.game === game);
    //{game:'', whoWins: '', puntuacions:[{player:'', score:0}]}
    const targetPlayer = targetGame.puntuacions.find((punt) => punt.player === player);
    targetPlayer.score += amount;
    this.checkWinner(targetGame);
  }

  displayGameResults(game) {
    let gameHighlight = this.results.find((result) => result.game === game);
    console.log(gameHighlight);
  }
  resetGameResults(game) {
    this.results.map((result) => {
      if (result.game === game) {
        result.puntuacions = [];
        result.whoWins = '';
      }
    });
  }
}
module.exports = Marcador;
