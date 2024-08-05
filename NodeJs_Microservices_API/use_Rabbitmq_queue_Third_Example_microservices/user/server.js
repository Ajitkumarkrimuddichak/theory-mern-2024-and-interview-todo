//Rabbitmq and Erlang Download and the working ?
const express = require("express");
const app = express();
const amqp = require("amqplib/callback_api");
const port = 3001;

// Define a route
app.get("/user", (req, res) => {
  let data = {
    id: 1,
    name: "Ajit",
    age: 25,
  };
  amqp.connect("amqp://localhost", function (err, conn) {
    conn.createChannel(function (err, ch) {
      const queue = "message_queue_user";
      const msg = JSON.stringify(data);

      ch.assertQueue(queue, { durable: false });
      ch.sendToQueue(queue, Buffer.from(msg));

      console.log(`send ${msg} to ${queue}`);
    });
  });

  res.send("Hello, User Page");
});

// Start the server
app.listen(port, () => {
  console.log(`User Server Started: ${port}`);
});
