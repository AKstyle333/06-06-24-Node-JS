const express = require("express")
const userRoutes = require("./user.routes")
const movieRoutes = require("./movie.routes")
const seriesRoutes = require("./series.routes")
const adminRoutes = require("./admin.routes")
const cartoonRoutes = require("./cartoon.routes");
const jwtTokenRoutes = require("./jwt.routes");
const bcryptHashRoutes = require("./bcrypt.routes");
const nodeMailerRoutes = require("./nodemailer.routes");

const router = express()

router.use("/linking-phrase",userRoutes)
router.use("/movie", movieRoutes);
router.use("/series", seriesRoutes);
router.use("/admin", adminRoutes);
router.use("/cartoon", cartoonRoutes);
router.use("/jwtToken", jwtTokenRoutes);
router.use("/bcrypt", bcryptHashRoutes);
router.use("/nodemailer", nodeMailerRoutes);
module.exports = router