const mongoose = require('mongoose');

const nodeSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: [true, 'Please tell us UID!']
  },
  user: {
    type: String,
    required: [true, 'Please tell us user Name']
  },
  location: {
    type: String,
    required: [true, 'Please provides location']
  },
  sublocation: {
    type: String,
    required: [true, 'Please provide Sub - Locations']
  },
  data: [
    {
      temperature: {
        type: Number,
        default: 0.0,
        min: [1, 'Rating must be above 1.0'],
        max: [100, 'Rating must be below 5.0']
      },
      humidity: {
        type: Number,
        default: 0.0,
        min: [1, 'Rating must be above 1.0'],
        max: [100, 'Rating must be below 5.0']
      },
      windSpeed: {
        type: Number,
        default: 0.0,
        min: [1, 'Rating must be above 1.0'],
        max: [100, 'Rating must be below 5.0']
      },
      barometric: {
        type: Number,
        default: 0.0,
        min: [1, 'Rating must be above 1.0'],
        max: [100, 'Rating must be below 5.0']
      },
      globalRadiation: {
        type: Number,
        default: 0.0,
        min: [1, 'Rating must be above 1.0'],
        max: [100, 'Rating must be below 5.0']
      },
      rain: {
        type: Number,
        default: 0.0,
        min: [1, 'Rating must be above 1.0'],
        max: [100, 'Rating must be below 5.0']
      }
    }
  ]
});

module.exports = mongoose.model('Node', nodeSchema);

// Air temperature
// Humidity
// Wind direction and speed (Anemometer)
// Barometric pressure
// Global radiation and radiation balance
// Precipitation / Rain
