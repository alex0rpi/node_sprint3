/* Publisher - Subscriber
Utilitzant RabbitMQ com a element imprescindible crea una queue on una classe Publisher publiqui missatges que siguin llegits per una classe Subscriber. Mostra l'emissió i recepció de cada missatge en consoles diferents. */

// Receive and print log messages

const { Subscriber } = require('rabbitmq-pubsub');

const subscriberOptions = {
  exchange: 'user',
  queueName: 'user',
  routingKeys: ['user.register', 'user.resetpassword'],
};

const subscriber = new Subscriber(subscriberOptions);

const onIncomingMessage = (message) => {
  debug('onIncomingMessage ', message.fields);

  assert(message);
  assert(message.content);
  assert(message.content.length > 0);

  subscriber.ack(message);
};

subscriber.start(onIncomingMessage);
