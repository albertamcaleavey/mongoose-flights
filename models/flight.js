import mongoose from "mongoose"

const Schema = mongoose.Schema 
// creates a shortcut to the mongoose.Schema class (optional but convenient)

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
    required: true
    // function(input) {
    //   if(input > 10 && input < 9999){
    //     return true
    //   } else {
    //     return false
    //   }
    // },
    
  },
  departs: {
    type: Date,
    // default: function(){
    //   return new Date().getFullYear()
    // }
  }
}, {timestamps: true})
//defines a mongoose schema
// String, Boolean, Number are  schemaTypes for properties 

const Flight = mongoose.model('Flight', flightSchema)
// compiles the schema into a model using the mongoose.model method

export {
  Flight
}
// exports the Flight model