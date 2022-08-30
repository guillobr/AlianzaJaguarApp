const { Schema , model } = require('mongoose')

const poachingSchema = new Schema({
    country:{
        type: String,
      },

    place: {
        type: String,
      },
    
      date: {
        type: Date,
      },
    
      time: {
        type: String,
      },

      postsQuantity: {
        type: Number,
      },

      postsFrecuency: {
        type: String,
      },

      commercyType: {
        type: String,
      },

      commercyStatus: {
        type: String,
      },

      animal:{
        type: String,
      },

      animalCondition:{
        type: String,
      },
      
      quantity: {
        type: String,
      },

      price:{
        type: String,
      },

      origin:{
        type: String,
      },

      observador: {
        type : String,
      },

      other: {
        type : String,
      },


      isActive: {
        type: Boolean,
        default: true
    }


})

module.exports = model('Poaching' , poachingSchema)