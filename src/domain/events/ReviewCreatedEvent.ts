import { IEvent } from './IEvent';

export class ReviewCreatedEvent implements IEvent {
  public readonly occurredOn: Date;
  public readonly id: string;

  constructor(
    id: string,
    public readonly reviewId: string,
    public readonly title: string,
    public readonly text: string,
    public readonly rating: number
  ) {
    this.id = id;
    this.occurredOn = new Date();
  }
}