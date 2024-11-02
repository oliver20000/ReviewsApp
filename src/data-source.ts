import "reflect-metadata";
import { DataSource } from 'typeorm';
import { Review } from './domain/entities/Review';
import { Event } from './domain/entities/Event';
import 'dotenv/config';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [Review, Event],
    migrations: [],
    subscribers: [],
});