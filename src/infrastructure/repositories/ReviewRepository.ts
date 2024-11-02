import { Repository } from 'typeorm';
import { Review } from '../../domain/entities/Review';
import { IReviewRepository } from '../../domain/repositories/IReviewRepository';
import { AppDataSource } from '../../data-source';

export class ReviewRepository implements IReviewRepository {
  private ormRepository: Repository<Review>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Review);
  }

  async create(review: Review): Promise<Review> {
    return await this.ormRepository.save(review);
  }

  async findById(id: string): Promise<Review | null> {
    return await this.ormRepository.findOneBy({ id });
  }

  async findAll(): Promise<Review[]> {
    return await this.ormRepository.find();
  }

  async update(review: Review): Promise<Review> {
    return await this.ormRepository.save(review);
  }

  async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}