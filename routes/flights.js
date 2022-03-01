import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

// listens for a get request on homepage to execute index controller function
router.get('/', flightsCtrl.index)
router.get('/:id', flightsCtrl.show)
// listens for a get request on the /new page
router.get('/new', flightsCtrl.new)

router.post('/', flightsCtrl.create)

export {
  router
}
