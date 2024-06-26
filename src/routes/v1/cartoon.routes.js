const express = require("express")
const { cartoon_controller } = require("../../controllers")

const router = express.Router()

router.post("/create_cartoon",
    // callback || controller
    cartoon_controller.create_cartoon
)
router.get("/list",
    // callback || controller
    cartoon_controller.get_cartoon
)
router.delete(
    "/delete_cartoon/:id",
    // callback || controller
    cartoon_controller.delete_cartoon
);
router.put(
    "/update_cartoon/:id",
    // callback || controller
    cartoon_controller.update_cartoon
);

module.exports =router