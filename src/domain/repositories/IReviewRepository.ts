import { Review } from '../entities/Review';

export interface IReviewRepository {
  create(review: Review): Promise<Review>;
  findById(id: string): Promise<Review | null>;
  findAll(): Promise<Review[]>;
  update(review: Review): Promise<Review>;
  delete(id: string): Promise<void>;
}