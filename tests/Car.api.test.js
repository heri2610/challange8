/* eslint-disable no-undef */
const request = require('supertest');
const dotenv = require('dotenv');
const app = require('../app');

dotenv.config();
// const baseUrl = "localhost:3000"

describe('API get all cars', () => {
  it('success get all data cars', async () => {
    const response = await request(app).get('/v1/cars');
    expect(response.statusCode).toBe(200);
  });
});
describe('API create cars', () => {
  it('succes create cars', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6InN0cmluZyIsImVtYWlsIjoic3RyaW5nIiwiaW1hZ2UiOm51bGwsInJvbGUiOnsiaWQiOjEsIm5hbWUiOiJDVVNUT01FUiJ9LCJpYXQiOjE2NjgwMTg4MjB9.weFZDBPqqS0dA7RPNzlytJln8bZXBs0cfJPlAvzKVtw';
    const cars = {
      name: 'string',
      price: 0,
      image: 'string',
      size: 'string',
    };
    const response = await request(app).post('/v1/cars').set('Authorization', `Bearer ${token}`).send(cars);
    expect(response.statusCode).toBe(401);
  });
  it('Unauthorized', async () => {
    const cars = {
      name: 'string',
      price: 0,
      image: 'string',
      size: 'string',
    };
    const response = await request(app).post('/v1/cars').send(cars);
    expect(response.statusCode).toBe(401);
  });
});
describe('API get car By ID', () => {
  it('success get data car', async () => {
    const response = await request(app).get('/v1/cars/20');
    expect(response.statusCode).toBe(200);
  });
});
describe('API delete car by ID', () => {
  it('Unauthorized', async () => {
    const response = await request(app).delete('/v1/cars/20');
    expect(response.statusCode).toBe(401);
  });
  it('succes delete car', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6InN0cmluZyIsImVtYWlsIjoic3RyaW5nIiwiaW1hZ2UiOm51bGwsInJvbGUiOnsiaWQiOjEsIm5hbWUiOiJDVVNUT01FUiJ9LCJpYXQiOjE2NjgwMTg4MjB9.weFZDBPqqS0dA7RPNzlytJln8bZXBs0cfJPlAvzKVtw';
    const response = await request(app).delete('/v1/cars/209').set('Authorization', `Bearer ${token}`);
    expect(response.statusCode).toBe(401);
  });
});
describe('API update car by ID', () => {
  it('Unauthorized', async () => {
    const cars = {
      name: 'string',
      price: 0,
      image: 'string',
      size: 'string',
    };
    const response = await request(app).put('/v1/cars/20').send(cars);
    expect(response.statusCode).toBe(401);
  });
});
describe('API rental car by ID', () => {
  it('Unauthorized', async () => {
    const rent = {
      rentStartedAt: '2022-11-09T17:17:14.357Z',
      rentEndedAt: '2022-11-09T17:17:14.357Z',
    };
    const response = await request(app).post('/v1/cars/20/rent').send(rent);
    expect(response.statusCode).toBe(401);
  });
});
