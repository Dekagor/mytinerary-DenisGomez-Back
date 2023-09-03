const cors = require ("cors")
const express = require("express")
const router = require("./router/router")
require("./config/database")

const app = express()

app.use(cors())

app.use(express.json())

app.use("/api", router)


app.listen(3000, () => {
    console.log("listening on port 3000");
})