const express = require ('express')
const router = express.Router()
const {getCities, getCity, addCities, deleteCities, updateCities, addAllCities} = require ('../controllers/cities.Controller')
const {verifyData, verifyDelete, verifyUpdate} = require('../middlewares/verifications')
const { getOneItinerary, getItineraries, addItinerary, deleteItinerary, updateItinerary } = require('../controllers/itinerary.Controller')



router.get("/cities", getCities)
router.get("/city/:id", getCity)
router.post("/cities", verifyData, addCities)
router.post("/cities/all", addAllCities)
router.delete("/cities", verifyDelete, deleteCities)
router.put("/cities/:id/description:new description", verifyUpdate, updateCities)


router.get("/itinerary", getItineraries)
router.get("/itinerary/:id", getOneItinerary)
router.post("/itinerary", addItinerary)
router.delete("/itinerary", deleteItinerary)
router.put("/itinerary/:id", updateItinerary)


module.exports = router;