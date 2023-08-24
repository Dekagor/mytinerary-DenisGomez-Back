const { Schema, model } = require ('mongoose');


const schemaDetails = new Schema ({
    
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

})

const Details = model ("Details", schemaDetails)

module.exports = Details;