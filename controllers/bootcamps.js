
//@dec Gel all Bootcamps
exports.getBootcamps = (req, res, next) =>{
    res.status(200).json(
        {
            success: true,
            msg: "Show all bootcamps"
        }
    )
}

//@dec Gel single Bootcamps
exports.getBootcamp = (req, res, next) =>{
    res.status(200).json(
        {
            success: true,
            msg: `Show single bootcamps ${req.params.id}`
        }
    )
}

//@dec  Create Bootcamp
exports.createBootcamps = (req, res, next) =>{
    res.status(200).json(
        {
            success: true,
            msg: "Add bootcamps"
        }
    )
}

//@dec  Update Bootcamp
exports.updateBootcamps = (req, res, next) =>{
    res.status(200).json(
        {
            success: true,
            msg: `Update bootcamps ${req.params.id}`
        }
    )
}

//@dec  delete Bootcamp
exports.deleteBootcamps = (req, res, next) =>{
    res.status(200).json(
        {
            success: true,
            msg: `Delete bootcamps ${req.params.id}`
        }
    )
}