require('dotenv').config({path:'./.env'});
const { connect } = require('mongoose');


const URL = process.env.clave


    connect (URL)
        .then(() => {
            console.log("Connect success to database")
        })
        .catch(() => {
            console.log ("error connecting to database")
        })
