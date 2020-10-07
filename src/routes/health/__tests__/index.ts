import request from 'supertest'
import app from '../../../server'

describe('GET /health', () => {
  it('should provide the server health status', async () => {
    const response = await request(app).get('/health')

    expect(response.status).toEqual(200)
    expect(response.body).toEqual({status: 'UP'})
  })
})
