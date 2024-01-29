import { BasePublisher, OrderCreatedEvent, Subjects } from "@ticket2005/common";

export class OrderCreatedPublisher extends BasePublisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
