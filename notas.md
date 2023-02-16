# Patterns
```
CB_hell – Singleton – Observer – Middlewares – Decorators – Publisher Subscriber 
```

## Singleton (utiliza clases) 
App.js 
jugador.js
juego.js
marcador.js

Marcador guarda la puntuacion de todos los juegos 
El marcador no debe repetirse (porque es singleton). Debe marcar las puntuaciones de cada jugador 
Juego --> classe que tendrá metodos, por ejemplo, para recibir a un jugador 
Jg = new Jugador('Alex') 
parchís.addPoints(alex)
El juego hace el rol de controlador, y se encargará de cosas como guardar puntos en el marcador
Emplear objetos.
Array de jugadores o de puntos
Hay que poder guardar puntuaciones de más de un juego para cada jugador.
Array de Arrays de puntuaciones.

## Observer

usuari es pot suscriure a tema, i pot escriure en ell.
Si no estas suscrit ni rebs ni pots enviar missatges en un tema.
Extra: que només els suscriptros d'un tema ho puguin fer (escriure i llegir)
"se ha creado un tema"
"se ha enviado un msg en tal tema"
Quien esté suscrito que vea un mensaje informativo.
app.js --> crear usuaris
temes --> crar temes
usuari-persones
Llibreria (mòdul) EVENTS

rebs el missatge, recorres l'array per a què et faci console.logs()

##  Middlewares

Cas general de middlewares.
(Node tips) mirar
instanciar mdw
mdw té un mètode .use() 
repliquem com va una part de Express
definir el mètode use del middleware.
Caldrà fer servir prototips per a què una instància d'una classe es "mengi" una altra classe.
classe gestora de mdws

## Decorators

objectos creados con una classe
array de esos objetos (no es indispensable, se puede hacer de uno en uno)
divisas convertir a euros

class Producto.js hay que importarla
app.js nos coge los rpdocutos, los pasa por una función, que es el decorator
changes.json (con los cambios de moneda)
decorator.js (no es una clase). no se modifica la clase que se instancia

app.js

Decorator convierte la divisa (necesita un json)
Buscar definición de "decorator", tiene que hacerle una cosa particular a la clase, añadirle una cosa.

mostrar precio en euros por console en forma de propiedad añadida con el decorator

## Publisher-observer

El programa es un server que reb missatges ordenats i els reenvia a tothom del sistema. 
Publisher.js i Subscriber.js 
Publisher envia un missatge i es tanca , i el suscriber el reb 
Pub-Sus --> RabbitMQ (llibreria)