

const verifyData = (req, res, next) => {

    let {name, country, location, img, description, price1, date1, itinerary1, about1, included1, notincluded1, price2, date2, itinerary2, about2, included2, notincluded2} = req.body

    if(!name || !country || !location || !img || !description) {
        return res.status(400).json({message: "Invalid data"})
    }

    if(name == ""){
        return res.status(400).json({message: "Invalid name"})
    }

    if(country == ""){
        return res.status(400).json({message: "Invalid country"})
    }

    if(location == ""){
        return res.status(400).json({message: "Invalid location"})
    }

    if(img == ""){
        return res.status(400).json({message: "Invalid img"})
    }

    if(description == ""){
        return res.status(400).json({message: "Invalid description"})
    }

    next ()
}

const verifyDelete = (req, res, next) => {

    let {_id} = req.query
    
    next ()
}


const verifyUpdate = (req, res, next) => {

    let {_id} = req.query
    
    next ()
}



module.exports = {verifyData, verifyDelete, verifyUpdate};
