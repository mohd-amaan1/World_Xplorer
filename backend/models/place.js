const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Title is required!"] },
  description: { type: String, required: true },
  image: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Place', placeSchema);
