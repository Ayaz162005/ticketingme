import {
  Subjects,
  BasePublisher,
  OrderCancelledEvent,
} from "@ticket2005/common";

export class OrderCancelledPublisher extends BasePublisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
