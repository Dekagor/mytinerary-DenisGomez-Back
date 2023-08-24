

const verifyData = (req, res, next) => {

    let {name, country, location, img, description} = req.body

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



module.exports = {verifyData, verifyDelete};
