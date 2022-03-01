import { Flight } from '../models/flight.js'

function newFlight(req, res) {
  // in memory flight containing default departure date
  // const newFlight = new Flight()
  // console.log(newFlight)
  res.render('flights/new')
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
    res.redirect('/flights')
  })
}

function index(req, res) {
  Flight.find({}, function(err, flights){
    res.render('flights/index', {
      flights: flights
    })
  })
}
  
function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render('flights/show', {
      flight: flight,
      title: 'Flight Detail'
    })
  })
}

export {
  newFlight as new,
  create,
  index,
  show
}

// QUESTIONS
// what goes in the object in res.render- i know that is the data that is being passed to the view, but is there a syntax to follow? or is it just whatever the view needs 