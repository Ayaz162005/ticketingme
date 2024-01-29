import nats from "node-nats-streaming";
import crypto from "crypto";
const stan = nats.connect(
  "ticketingme",
  crypto.randomBytes(8).toString("hex"),
  {
    url: "nats://localhost:4222",
  }
);
stan.on("connect", () => {
  console.log("Connected to NATS Streaming Server");

  // Create a durable subscription to a channel
  //   const opts = stan.subscriptionOptions().setDurableName("my-durable");
  //   const subscription = stan.subscribe("my-channel", opts);

  // Callback to handle incoming messages
  //   subscription.on("message", (msg) => {
  //     console.log(`Received a message [${msg.getSequence()}]: ${msg.getData()}`);
  //   });

  // Publish a message to the channel
  stan.publish("my-channel", "Hello, NATS Streaming!", () => {
    console.log("sending pushing");
  });
});

// Callback to handle errors
stan.on("error", (err) => {
  console.error(`Error: ${err}`);
});

// Callback to handle connection close
stan.on("close", () => {
  console.log("Connection to NATS Streaming Server closed");
});
