import { ReviewService } from '../src/domain/services/ReviewService';
import { IReviewRepository } from '../src/domain/repositories/IReviewRepository';
import { EventStore } from '../src/infrastructure/repositories/EventStore';

describe('ReviewService', () => {
  let reviewService: ReviewService;
  let reviewRepository: jest.Mocked<IReviewRepository>;
  let eventStore: Partial<EventStore>;

  beforeEach(() => {
    reviewRepository = {
      create: jest.fn(),
      findById: jest.fn(),
      findAll: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    } as jest.Mocked<IReviewRepository>;

    eventStore = {
      save: jest.fn(),
      getEventsByReviewId: jest.fn(),
    };

    reviewService = new ReviewService(reviewRepository, eventStore as EventStore);
  });

  it('should create a review', async () => {
    const reviewData = { title: 'Great place', text: 'Had a great time', rating: 5 };
    await reviewService.createReview(reviewData.title, reviewData.text, reviewData.rating);
    expect(eventStore.save).toHaveBeenCalled();
    expect(reviewRepository.create).toHaveBeenCalled();
  });
});