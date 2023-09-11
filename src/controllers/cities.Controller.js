const City = require("../models/cities.Models")
const Itinerary = require("../models/itinerary.Models")



const getCities = async (req, res) => {
    const query = {}
    if (req.query.name) {
        query.name = { $regex:req.query.name, $options: 'i' }
    }
    let cities = await City.find (query)
    try {
        res.status(200).json ({status:200, success:true, response: cities})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const getCity = async (req, res) => {
    const {id} = req.params
    const data = await City.findById(id)
        if(data) {
            res.status(200).json ({
                city:data
            })
        }else{
            res.status(404).json ({
                message: "city not found"
            })
        }
}

const addCities = async (req, res) => {

    try {
        const newCity = { ...req.body }

        const itinerary = await Itinerary.findOne( { itinerary: req.body.itinerary } )

        if (itinerary) {
            newCity.itinerary = itinerary._id
        }else {
            const newItinerary = await Itinerary.create( { itinerary: req.body.itinerary } )
            newCity.itinerary = newItinerary._id
        }

        const createCity = await City.create( newCity )
        await Itinerary.findOneAndUpdate( {_id: newCity.itinerary}, { $push : { itinerary : createCity._id } } )


    res.status(201).json ({
        "message": "city has been added",
        "city": createCity
    })

    } catch (error) {
        res.status(500).json({message: error})
    }
}


const addAllCities = async (req, res) => {

    try {
        for (const item of req.body) {
            const { itinerary } = item
            const newCity = { ...item }
            const aux = await Itinerary.findOne( { itinerary: itinerary } )

        if (aux) {
            newCity.itinerary = aux._id
        }else {
            const newItinerary = await Itinerary.create( { itinerary: itinerary } )
            newCity.itinerary = newItinerary._id
        }

        const createCity = await City.create( newCity )
        await Itinerary.findOneAndUpdate( {itinerary: itinerary}, { $push : { itinerary : createCity._id } } )

    }

    res.status(200).json ({ success: true })
    } catch (error) {
        res.status(500).json({message: error})
    }
}




const deleteCities = async (req, res) => {
    let {id} = req.query
    await City.deleteOne({_id: id})
    try {
        res.status(201).json ({
            "message": "city has been deleted",
        })
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const updateCities = async (req, res) => {
    let {id} = req.query
    await City.findByIdAndUpdate(id,{description: new description})
    try {
        res.status(204).json ({
            "message": "Updated cities",
        })
    } catch (error) {
        res.status(500).json({message: error})
    }
}

module.exports = {getCities, getCity, addCities, addAllCities, deleteCities, updateCities};