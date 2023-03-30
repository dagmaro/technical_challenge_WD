const router = require("express").Router();
const Phone = require("../models/Phone.model")

router.get("/", async (req, res, next) => {
    try {
       const response = await Phone.find()
       res.status(200).json(response) 
    } catch (error) {
        next(error)
    }
})
router.get("/:id", async(req, res, next) => {
    const {id} = req.params
    try {
        const response = await Phone.findById(id)
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
})

module.exports = router;