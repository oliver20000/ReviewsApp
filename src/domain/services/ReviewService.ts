import { IReviewRepository } from '../repositories/IReviewRepository';
import { Review } from '../entities/Review';
import { EventStore } from '../../infrastructure/repositories/EventStore';
import { ReviewCreatedEvent } from '../events/ReviewCreatedEvent';
import { v4 as uuidv4 } from 'uuid';
import { error } from 'console';

export class ReviewService {
  constructor(
    private reviewRepository: IReviewRepository,
    private eventStore: EventStore
  ) {}

  async createReview(title: string, text: string, rating: number): Promise<Review> {
    const review = new Review();
    review.title = title;
    review.text = text;
    review.rating = rating;

    const reviewId = uuidv4();
    review.id = reviewId;
    
    const eventId = uuidv4();

    const event = new ReviewCreatedEvent(eventId, review.id, title, text, rating);
    await this.eventStore.save(event);

    return await this.reviewRepository.create(review);
  }

  async getAllReviews(): Promise<Review[]> {
    return this.reviewRepository.findAll();
  }

  async rebuildReview(reviewId: string): Promise<Review> {
    const events = await this.eventStore.getEventsByReviewId(reviewId);
    const review = new Review();

    events.forEach((event) => {
      if (event instanceof ReviewCreatedEvent) {
        review.id = event.id;
        review.title = event.title;
        review.text = event.text;
        review.rating = event.rating;
      }
    });

    return review;
  }
}