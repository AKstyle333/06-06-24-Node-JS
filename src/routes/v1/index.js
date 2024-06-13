const express = require("express")
const userRoutes = require("./user.routes")
const movieRoutes = require("./movie.routes")

const router = express()

router.use("/linking-phrase",userRoutes)
router.use("/movie", movieRoutes);
module.exports = router