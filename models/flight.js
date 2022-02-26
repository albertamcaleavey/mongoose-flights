import mongoose from "mongoose"

const Schema = mongoose.Schema 
// creates a shortcut to the mongoose.Schema class (optional but convenient)

const flightSchema = new Schema({
  flightNumber = Number,
  seatNumber = String,
  airline = String,
  origin = String,
  destination = String,
  departure = Number, 
  arrival = Number,
  delayed = Boolean
})
//defines a mongoose schema
// String, Boolean, Number are  schemaTypes for properties 

const Flight = mongoose.model('Flight', flightSchema)
// compiles the schema into a model and exports it

export {
  Flight
}