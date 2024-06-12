const express = require("express")
const userRoutes = require("./user.routes")

const router = express()

router.use("/linking-phrase",userRoutes)
module.exports = router