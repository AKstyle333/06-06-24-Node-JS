const express = require("express")
const { series_controller } = require("../../controllers")
const router = express.Router()

router.post("/create-series",
    // callback || controller
    series_controller.create_series
)
router.get("/list",
    // callback || controller
    series_controller.get_series
)
module.exports = router