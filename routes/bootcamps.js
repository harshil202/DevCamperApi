const express = require('express')
const {getBootcamp , getBootcamps , createBootcamps, updateBootcamps, deleteBootcamps} = require("../controllers/bootcamps")
const router = express.Router()

router
    .route('/')
    .get(getBootcamps)
    .post(createBootcamps)


router
    .route('/:id')
    .put(updateBootcamps)
    .get(getBootcamp)
    .delete(deleteBootcamps)

module.exports = router