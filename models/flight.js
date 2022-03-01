import mongoose from "mongoose"

const Schema = mongoose.Schema 
// creates a shortcut to the mongoose.Schema class (optional but convenient)

// const ticketSchema = new Schema({
//   seat: {
//     type: String,
//   },
//   price: {
//     type: Number,
//     min: 0,
//   }
// })

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true
  },
  departs: {
    type: Date,
    default: function(){
      let date = new Date()
      return date.setFullYear(date.getFullYear() + 1)
    }
  },
  // tickets: {
  //   type: [ticketSchema]
  // }
}, {
  timestamps: true
})
//defines a mongoose schema
// String, Boolean, Number are  schemaTypes for properties 

const Flight = mongoose.model('Flight', flightSchema)
// compiles the schema into a model using the mongoose.model method

export {
  Flight
}
// exports the Flight model