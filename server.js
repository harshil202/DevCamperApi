const  express  = require("express");
const dotenv = require("dotenv")

dotenv.config({path : "./config/config.env"})
const app = express()

const PORT = process.env.PORT || 3002


app.listen(PORT, console.log(`server running on ${PORT}`))