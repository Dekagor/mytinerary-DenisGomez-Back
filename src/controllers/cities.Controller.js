const res = require("express/lib/response");
const City = require("../models/cities.Models")



const getCities = async (req, res) => {
    let cities = await City.find ()
    try {
        res.status(200).json (
            cities
        )
    } catch (error) {
        res.status(500).json({message: error.message})
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

    let payload = req.body

    let createCity = await City.create(payload)


    res.status(201).json ({
        "message": "city has been added",
        "city": createCity
    })

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

module.exports = {getCities, getCity, addCities, deleteCities};