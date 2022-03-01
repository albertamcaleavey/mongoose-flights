import { Flight } from '../models/flight.js'
import { Meal } from '../models/meal.js'

function newFlight(req, res) {
  // in memory flight containing default departure date
  // const newFlight = new Flight()
  // console.log(newFlight)
  res.render('flights/new', {
    title: "Add Flight",
  })
}

function create(req, res) {
  // deletes properties whose values are empty string to allow for default values to be assigned
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  const flight = new Flight(req.body)
  // console.log(flight)
  // console.log(new Date().getFullYear())
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new')
    res.redirect(`/flights/${flight._id}`)
  })
}

function index(req, res) {
  Flight.find({}, function(err, flights){
    res.render('flights/index', {
      flights: flights,
      title: 'All Flights'
    })
  })
}
  
function show(req, res) {
  Flight.findById(req.params.id)
  .populate('meals')
  .exec(function (err, flight) {
    Meal.find({_id: {$nin: flight.meals}}, function(err, meals) {
      res.render('flights/show', {
      flight: flight,
      title: 'Flight Detail',
      meals: meals,
      })
    })
  })
}

function createTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.tickets.push(req.body)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function deleteFlight(req,res) {
  Flight.findByIdAndDelete(req.params.id, function(err, movie) {
    res.redirect('/flights')
  })
}

function addToMeals(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.meals.push(req.body.mealId)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

export {
  newFlight as new,
  create,
  index,
  show,
  createTicket,
  deleteFlight as delete,
  addToMeals
}

