const express = require ('express')
const router = express.Router()
const {getCities, getCity, addCities, deleteCities} = require ('../controllers/cities.Controller')
const {verifyData, verifyDelete} = require('../middlewares/verifications')


router.get("/cities", getCities)
router.get("/city/:id", getCity)
router.post("/cities", verifyData, addCities)
router.delete("/cities", verifyDelete, deleteCities)


module.exports = router;