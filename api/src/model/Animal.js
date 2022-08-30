const { Schema , model } = require('mongoose')

const animalSchema = new Schema({
     name:{
        type: String,
      },

     condition: {
        type: String,
      },
    
      quantity: {
        type: Date,
      },
    
      price: {
        type: String,
      },

      origin: {
        type: String,
      },

})

module.exports = model('Animakl' , animalSchema)