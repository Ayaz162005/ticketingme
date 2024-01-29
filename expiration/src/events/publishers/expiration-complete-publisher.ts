import {
  Subjects,
  BasePublisher,
  ExpirationCompleteEvent,
} from "@ticket2005/common";

export class ExpirationCompletePublisher extends BasePublisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
