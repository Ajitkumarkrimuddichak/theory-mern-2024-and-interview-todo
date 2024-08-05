//Rabbitmq and Erlang Download and the working ?
const express = require("express");
const app = express();
const amqp = require("amqplib/callback_api");
const port = 3000;

// Define a route
app.get("/product", (req, res) => {
  amqp.connect("amqp://localhost", function (err, conn) {
    conn.createChannel(function (err, ch) {
      const queue = "message_queue_user";

      console.log(`Waiting for the msg from queue`);
      ch.consume(
        queue,
        async function (msg) {
          console.log("Msg", msg.content.toString());
          await res.send(msg.content.toString());
        },
        { noAck: true }
      );
    });
  });

  //res.send("Hello, Product Page");
});

// Start the server
app.listen(port, () => {
  console.log(`Server Started: ${port}`);
});
