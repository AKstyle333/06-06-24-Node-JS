const express = require("express")
const userRoutes = require("./user.routes")
const movieRoutes = require("./movie.routes")
const seriesRoutes = require("./series.routes")
const adminRoutes = require("./admin.routes")
const cartoonRoutes = require("./cartoon.routes");

const router = express()

router.use("/linking-phrase",userRoutes)
router.use("/movie", movieRoutes);
router.use("/series", seriesRoutes);
router.use("/admin", adminRoutes);
router.use("/cartoon", cartoonRoutes);
module.exports = router