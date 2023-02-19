/* Publisher - Subscriber
Utilitzant RabbitMQ com a element imprescindible crea una queue on una classe Publisher publiqui missatges que siguin llegits per una classe Subscriber. Mostra l'emissió i recepció de cada missatge en consoles diferents. */

// Emit log messages

const amqp = require('amqplib');

async function connect() {
  try {
    const connection = await amqp.connect('amqp://localhost:5000');
    const channel = await connection.createChannel();
    const queue = 'my-queue';

    await channel.assertQueue(queue);
    setInterval(() => {
      const message = `Current time is ${new Date().toLocaleTimeString()}`;
      channel.sendToQueue(queue, Buffer.from(message));
      console.log(`Sent message: ${message}`);
    }, 1000);
  } catch (error) {
    console.error(error);
  }
}

connect();
