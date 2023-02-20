/* Publisher - Subscriber
Utilitzant RabbitMQ com a element imprescindible crea una queue on una classe Publisher publiqui missatges que siguin llegits per una classe Subscriber. Mostra l'emissió i recepció de cada missatge en consoles diferents. */

// Receive and print log messages

const amqp = require('amqplib');

async function connect() {
  try {
    const connection = await amqp.connect('amqp://195.235.110.69:5671');
    const channel = await connection.createChannel();
    const queue = 'my-queue';

    await channel.assertQueue(queue);
    channel.consume(queue, (message) => {
      console.log(`Received message: ${message.content.toString()}`);
    });
  } catch (error) {
    console.error(error);
  }
}

connect();

