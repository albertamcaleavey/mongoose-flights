import mongoose from "mongoose"

const Schema = mongoose.Schema 
// creates a shortcut to the mongoose.Schema class (optional but convenient)

const flightSchema = new Schema({
  airline = String,
  airport = String,
  flightNo = Number,
  departs = Date
})
//defines a mongoose schema
// String, Boolean, Number are  schemaTypes for properties 

const Flight = mongoose.model('Flight', flightSchema)
// compiles the schema into a model using the mongoose.model method

export {
  Flight
}
// exports the Flight model