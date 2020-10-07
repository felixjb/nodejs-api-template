import dotenv from 'dotenv'
import express from 'express'
import router from './routes'

// initialize configuration
dotenv.config()

const port = process.env.SERVER_PORT

const app = express()

// Set up middleware for request parsing json
app.use(express.json())

// Load up the routes
app.use('/', router)

// Start the API
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})

// Export API server for testing
export default app
