const { Schema , model } = require('mongoose')

const sightingSchema = new Schema({
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

      geometry: {
        type: Array,
      },

      geometry: [
        Number
      ],
      
      latitud:{
        type:String
      },

      longitud:{
        type:String
      },

      geo:[String],

      // geometryManual: 
      //   {
      //     latitude: String,
      //     longitude: String,
      //   }
      // ,


  
      altitud: {
        type: String,
      },

      name: {
        type: String,
      },

      scientistname: {
        type: String,
      },

      type: {
        type: String,
      },

      observador: {
        type: String,
      },

      other: {
        type: String,
      },

      isActive: {
        type: Boolean,
        default: true
    }


})

module.exports = model('Sighting' , sightingSchema)