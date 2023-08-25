const express = require ('express')
const router = express.Router()
const {getCities, getCity, addCities, deleteCities, updateCities} = require ('../controllers/cities.Controller')
const {verifyData, verifyDelete, verifyUpdate} = require('../middlewares/verifications')


router.get("/cities", getCities)
router.get("/city/:id", getCity)
router.post("/cities", verifyData, addCities)
router.delete("/cities", verifyDelete, deleteCities)
router.put("/cities/:id/description:new description", verifyUpdate, updateCities)


module.exports = router;