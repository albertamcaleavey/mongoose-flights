import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

// listens for a get request on homepage to execute index controller function
router.get('/', flightsCtrl.index)

// listens for a get request on the /new page
router.get('/new', flightsCtrl.new)
router.get('/:id', flightsCtrl.show)
router.post('/:id/tickets', flightsCtrl.createTicket)
router.post('/', flightsCtrl.create)


export {
  router
}
