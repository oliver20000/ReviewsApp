import request from 'supertest';
import { app, startServer } from '../../src/index';
import { AppDataSource } from '../../src/data-source'; 

describe('Review API', () => {
  let server: any;

  beforeAll(async () => {
    const appData = await startServer();
    server = appData.server;
  });

  afterAll(async () => {
    await AppDataSource.destroy();
    await server.close();
  });

  it('should create a review', async () => {
    const response = await request(app)
      .post('/reviews')
      .send({ title: 'Great place', text: 'Had a great time', rating: 5 })
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe('Great place');
  });
});