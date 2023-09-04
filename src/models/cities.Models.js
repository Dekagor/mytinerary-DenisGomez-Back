const { Schema, model } = require ('mongoose');


const schemaCity = new Schema ({

    name: {
        type: String,
        required: true,
    },

    country: {
        type: String,
        required: true,
    },

    location: {
        type: String,
        required: true,
    },

    img: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    price1: {
        type: String,
        required: true,
    },

    date1: {
        type: String,
        required: true,
    },

    itinerary1: {
        type: String,
        required: true,
    },

    about1: {
        type: String,
        required: true,
    },

    included1: {
        type: String,
        required: true,
    },

    notincluded1: {
        type: String,
        required: true,
    },

    price2: {
        type: String,
        required: true,
    },

    date2: {
        type: String,
        required: true,
    },

    itinerary2: {
        type: String,
        required: true,
    },

    about2: {
        type: String,
        required: true,
    },

    included2: {
        type: String,
        required: true,
    },

    notincluded2: {
        type: String,
        required: true,
    },

})

const City = model ("City", schemaCity)

module.exports = City;