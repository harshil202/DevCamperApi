const  express  = require("express");
const dotenv = require("dotenv")

//Router files
const bootcamps = require('./routes/bootcamps')

dotenv.config({path : "./config/config.env"})
const app = express()


//Mount Routers
app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT || 3002


app.listen(PORT, console.log(`server running on ${PORT}`))