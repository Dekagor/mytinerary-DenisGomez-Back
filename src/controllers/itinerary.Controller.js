const City = require("../models/cities.Models.js")
const Itinerary = require ("../models/itinerary.Models.js")



const getItineraries = async (_,res) => {

    try {
        const itineraries = await Itinerary.find().populate({
            path: 'city',
            select: 'name image'
        })
        res.json ({ itineraries })
    } catch (error) {
        res.status(500).json( {message: error} )
    }
}


const getOneItinerary = async (req, res) => {
    const newItinerary = await Itinerary.create(req.body)
    const updatedCity = await City.findOneAndUpdate({ _id: req.body.city }, {
        $push: {itinerary: newItinerary._id}
    }, {new: true})
            res.json ({
                data: newItinerary,
                updatedCity,
                success: true,
                error: null
            })
}


const addItinerary = async (req, res) => {

    try {
        const newItinerary = await Itinerary.create (req.body)
        res.status(201).json ({ newItinerary: newItinerary })
    } catch (error) {
        res.status(500).json({message: error})
    }
}


const deleteItinerary = async (req, res) => {
    let {id} = req.query
    await Itinerary.deleteOne({_id: id})
    try {
        res.status(201).json ({
            "message": "Itinerary has been deleted",
        })
    } catch (error) {
        res.status(500).json({message: error})
    }
}
    
    const updateItinerary = async (req, res) => {
        let {id} = req.query
        await Itinerary.findByIdAndUpdate({id: id}, {$push: {} })
        try {
            res.status(204).json ({
                "message": "Updated Itinerary",
            })
        } catch (error) {
            res.status(500).json({message: error})
        }
    }


    module.exports = {getItineraries, getOneItinerary, addItinerary, deleteItinerary, updateItinerary};



