import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import cors from 'cors'
import { AppDataSource } from './data-source';
import { ReviewService } from './domain/services/ReviewService';
import { ReviewController } from './application/controllers/ReviewController';
import { ReviewRepository } from './infrastructure/repositories/ReviewRepository';
import { EventStore } from './infrastructure/repositories/EventStore';

const app = express();
app.use(cors());
app.use(express.json());


const startServer = async () => {
    try {
      await AppDataSource.initialize();
      console.log('Data Source has been initialized!');
  
      const reviewRepository = new ReviewRepository();
      const eventStore = new EventStore(AppDataSource);
  
      const reviewService = new ReviewService(reviewRepository, eventStore);
      const reviewController = new ReviewController(reviewService);
  
      app.post('/reviews', (req, res) => reviewController.create(req, res));

      app.get('/reviews', (req, res) => reviewController.getAll(req, res));
  
      const server = app.listen(3000, () => { 
        console.log('Server is running on port 3000');
      });
  
      return {server, dataSource: AppDataSource };
    } catch (err) {
      console.error('Error during Data Source initialization:', err);
      throw err; 
    }
  }
  
  if (process.env.NODE_ENV !== 'test') {
    startServer();
}

  export { app, startServer };