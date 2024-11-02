import { DataSource, Repository } from 'typeorm';
import { Event } from '../../domain/entities/Event';
import { ReviewCreatedEvent } from '../../domain/events/ReviewCreatedEvent';
import { AppDataSource } from '../../data-source';

export class EventStore {
  private eventRepository: Repository<Event>;

  constructor(dataSource: DataSource) {
    this.eventRepository = AppDataSource.getRepository(Event);
  }

  async save(event: ReviewCreatedEvent) {
    const newEvent = new Event();
    newEvent.type = 'ReviewCreated';
    newEvent.data = {
      title: event.title,
      text: event.text,
      rating: event.rating,
      id: event.id,
    };
    newEvent.occurredOn = event.occurredOn;
    newEvent.reviewId = event.reviewId;

    await this.eventRepository.save(newEvent);
  }

  async getEventsByReviewId(reviewId: string): Promise<ReviewCreatedEvent[]> {
    const events = await this.eventRepository.find({ where: { reviewId } });

    return events.map(event => {
      const { id, title, text, rating } = event.data;
      return new ReviewCreatedEvent(id, event.reviewId, title, text, rating);
    });
  }
}