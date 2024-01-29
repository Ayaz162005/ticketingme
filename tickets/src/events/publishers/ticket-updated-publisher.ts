import {
  BasePublisher,
  Subjects,
  TicketUpdatedEvent,
} from "@ticket2005/common";

export class TicketUpdatedPublisher extends BasePublisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
