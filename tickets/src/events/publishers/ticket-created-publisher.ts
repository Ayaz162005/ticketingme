import {
  BasePublisher,
  Subjects,
  TicketCreatedEvent,
} from "@ticket2005/common";

export class TicketCreatedPublisher extends BasePublisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
