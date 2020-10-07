import {Router} from 'express'
import {healthRouter} from './health'
import {helloRouter} from './hello'

const router = Router()

// Wire up routers
router.use('/', helloRouter)
router.use('/health', healthRouter)

// Export the router
export default router
