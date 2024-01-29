import {
  OrderCancelledEvent,
  Subjects,
  BaseListener,
  OrderStatus,
} from "@ticket2005/common";
import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queue-group-name";
import { Order } from "../../models/order";

export class OrderCancelledListener extends BaseListener<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
  queue = queueGroupName;

  async onMessage(data: OrderCancelledEvent["data"], msg: Message) {
    try {
      const order = await Order.findOne({
        _id: data.id,
        version: data.version - 1,
      });
      console.log(order, "cancel");
      if (!order) {
        throw new Error("Order not found");
      }

      order.set({ status: OrderStatus.Cancelled });
      await order.save();

      msg.ack();
    } catch (err) {
      console.log("errr", err);
    }
  }
}
