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
  console.log("listening work");
  const opts = stan
    .subscriptionOptions()
    .setDeliverAllAvailable()
    .setManualAckMode(true);

  const subs = stan.subscribe("my-channel", "queue", opts);

  subs.on("message", (msg) => {
    console.log(msg);

    msg.ack();
  });
});

stan.on("error", (err) => {
  console.error(`Error: ${err}`);
});

// Callback to handle connection close
stan.on("close", () => {
  console.log("Connection to NATS Streaming Server closed");
});
