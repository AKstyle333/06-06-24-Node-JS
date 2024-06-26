const express = require("express")
const { admin_controller } = require("../../controllers")
const router = express.Router()

router.post("/create_admin",
    // controller
    admin_controller.create_admin
)
router.get("/list",
    // controller
    admin_controller.get_admin
    
)
router.delete(
    "/delete_admin/:id",
    // controller
    admin_controller.delete_admin
);
router.put(
    "/update_admin/:id",
    // controller
    admin_controller.update_admin
);

module.exports = router