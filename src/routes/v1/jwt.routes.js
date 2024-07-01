const express = require("express")
const { jwt_token_controller } = require("../../controllers")
const router = express.Router()

router.post("/jwt_token_create",
    // controller
    jwt_token_controller.create_jwt_token
)
router.post("/jwt_token_verify",
    // controller
    jwt_token_controller.verify_jwt_token
)
module.exports= router