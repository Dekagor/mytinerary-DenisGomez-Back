const { Schema, model, mongoose } = require ('mongoose');

const SchemaItinerary = new Schema ({

    itinerary: { type: String, required: true, unique: true },

    nameIti: { type: String },

    photo: { type: String },

    author: { type: String },

    price: { type: Number },

    duration: { type: Number },

    likes: { type: String },

    hashtags: { type: String },

    name: [{ type: mongoose.Types.ObjectId, ref: 'City', required: true }],

    comments: { type: String },

})


const Itinerary = model ("Itinerary", SchemaItinerary)

module.exports = Itinerary;