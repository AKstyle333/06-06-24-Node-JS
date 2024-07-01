const express = require("express")
const { bcrypt_controller } = require("../../controllers")

const router = express.Router()

router.post("/create_bcrypt_hash",
    // controller
    bcrypt_controller.create_bcrypt_hash
)

router.post("/compare_bcrypt_hash",
    // controller
    bcrypt_controller.compare_bcrypt_hash
)

module.exports=router