import { Request, Response } from 'express';
import { ReviewService } from '../../domain/services/ReviewService';

export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const { title, text, rating } = req.body;
      const review = await this.reviewService.createReview(title, text, rating);
      res.status(201).json(review);
    } catch (error) {
      console.log("Erro ao criar review", error);
      res.status(500).json({ message: 'Error creating review', error });
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const reviews = await this.reviewService.getAllReviews();
      res.status(200).json(reviews);
    } catch (error) {
      console.log("Erro ao buscar reviews", error);
      res.status(500).json({ message: 'Error fetching reviews', error });
    }
  }
}