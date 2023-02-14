class Marcador {
  static instance; // initialize the instance property once the 1st instance is created
  results = []; // [{game:'', whoWins: '', puntuacions:[{player:'', score:0}]}]
  constructor() {
    if (Marcador.instance) {
      //check if an instance already exists
      return Marcador.instance;
      // so if I try to create another instance, I return the one that already exists.
    }
    Marcador.instance = this;
  }
  restetEverything() {
    this.results = [];
    console.log(this.results);
  }
  addGame(gameName) {
    const gameExists = this.results.find((item) => (item.game = gameName));
    if (!gameExists) {
      this.results.push({
        game: gameName,
        whoWins: '',
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

  modifyScore(game, player, amount) {
    const targetGame = this.results.find((result) => result.game === game);
    const targetPlayer = targetGame.puntuacions.find((punt) => (punt.player = player));
    targetPlayer.score = +amount;
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
