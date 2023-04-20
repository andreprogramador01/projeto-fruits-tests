
import supertest from "supertest";
import app from "../src/app"
import { getFruits } from "controllers/fruits-controller";


const api = supertest(app)

describe('Testando a API', () => {
  it('testando a rota post /fruits', async () => {
    const fruits = await api.post('/fruits')
    console.log(fruits.body)
    expect(fruits.status).toBe(201)
  })
})
describe('Testando a API', () => {
  it('testando a rota get /fruits', async () => {
    const fruits = await api.get('/fruits')
    console.log(fruits.body)
    expect(fruits.status).toBe(200)
  })
})