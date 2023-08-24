require('dotenv').config({path:'./.env'});
const { connect } = require('mongoose');


const URL = `mongodb+srv://Dekagor:${process.env.clave}@cluster0.h6vbp4l.mongodb.net/?retryWrites=true&w=majority`


    connect (URL)
        .then(() => {
            console.log("Connect success to database")
        })
        .catch(() => {
            console.log ("error connecting to database")
        })
