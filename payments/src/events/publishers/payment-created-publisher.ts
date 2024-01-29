import {
  Subjects,
  BasePublisher,
  PaymentCreatedEvent,
} from "@ticket2005/common";

export class PaymentCreatedPublisher extends BasePublisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
