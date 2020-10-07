import request from 'supertest'
import app from '../../../server'

describe('GET /', () => {
  it('should return a hello world message', async () => {
    const response = await request(app).get('/')

    expect(response.status).toEqual(200)
    expect(response.body).toEqual({message: 'Hello world!'})
  })
})
