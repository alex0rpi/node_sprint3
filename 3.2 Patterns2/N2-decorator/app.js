/* Decorator
Crea un Decorator en un arxiu que retorni una funció. Aquesta funció (retornada) efectuarà una conversió de moneda a euros multiplicant pel coeficient de conversió del fitxer adjunt currency_conversions.json en funció de la divisa original.
Crea una petita aplicació (o sigui funció que serà decorada) que calculi el cost d'uns quants Articles en euros a partir de les seves divises inicials, aplicant diferents conversions que usin el Decorator del punt anterior. */

const Article = require('./Article');
const calcCost = require('./decorator');

const art1 = new Article('teclat', 55, 'GBP', 2);
const art2 = new Article('mouse', 10, 'GBP', 1);
const art3 = new Article('monitor', 30, 'GBP', 3);
const art4 = new Article('cadira', 40, 'GBP', 4);

const articles = [art1, art2, art3, art4];

calcCost(articles);

// Executar node app.js
