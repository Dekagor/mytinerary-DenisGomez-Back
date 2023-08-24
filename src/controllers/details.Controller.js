const res = require("express/lib/response");
const Details = require("../models/details.Models")



const getCities = async (req, res) => {

    try {
        let cities = await City.find ()
        res.status(200).json (
            cities
        )
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


const getCity = (req, res) => {

    const {id} = req.params

    const {data} = req.query

        if(data) {
            res.json (
                {
                name: "Bariloche",
                country: "Argentina",
                location: "San Carlos de Bariloche",
                img: "https://www.elmundodeados.com/wp-content/uploads/2020/09/bariloche-en-verano-9105-848x400.jpg",
                description: "is a Patagonian city that, with 146,000 inhabitants (2022), is the most populous in the province of Río Negro, Bariloche is the most visited destination in Patagonia and one of the most visited destinations in Argentina. It receives around two million tourists annually, mainly in the winter season, among which those from Europe and America stand out due to their influx. It is known for being the main travel destination for high school graduates in Argentina and Uruguay. Its natural reserves, which include lakes, forests and mountains, and its outstanding ski resorts are the main attraction. The city has been considered by some sources as the second ski destination worldwide and the largest in South America.",
                paramId: id,
                queryData: data
                }
            )
        }else{
            res.json (
                {
                name: "Bariloche",
                country: "Argentina",
                location: "San Carlos de Bariloche",
                img: "https://www.elmundodeados.com/wp-content/uploads/2020/09/bariloche-en-verano-9105-848x400.jpg",
                description: "is a Patagonian city that, with 146,000 inhabitants (2022), is the most populous in the province of Río Negro, Bariloche is the most visited destination in Patagonia and one of the most visited destinations in Argentina. It receives around two million tourists annually, mainly in the winter season, among which those from Europe and America stand out due to their influx. It is known for being the main travel destination for high school graduates in Argentina and Uruguay. Its natural reserves, which include lakes, forests and mountains, and its outstanding ski resorts are the main attraction. The city has been considered by some sources as the second ski destination worldwide and the largest in South America.",
                paramId: id
                }
            )
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

module.exports = {getCities, getCity, addCities};