const express = require("express")
const { nodeMailer_controller } = require("../../controllers")

const router = express.Router()

router.post("/sendMail",
    // controller
    nodeMailer_controller.send_Mail
)

module.exports = router