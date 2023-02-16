/* Publisher - Subscriber
Utilitzant RabbitMQ com a element imprescindible crea una queue on una classe Publisher publiqui missatges que siguin llegits per una classe Subscriber. Mostra l'emissió i recepció de cada missatge en consoles diferents. */

// Emit log messages

const { Publisher } = require('rabbitmq-pubsub');

const publisherOptions = {
    user: 'user',
    type: 'topic',
    url: 'amqp://localhost',
};
// Advanced Message Queuing Protocol (AMQP)

const publisher = new Publisher(publisherOptions);

publisher.start().then(() => publisher.publish('key', 'Bon dia'));
