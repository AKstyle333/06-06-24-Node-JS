const { admin_Service } = require("../services");

const create_admin = async (req, res) => {
    try {
        //! services
        const data = req.body;
        const new_admin = await admin_Service.create_admin_S(data);
        if (!new_admin) {
            throw new Error("Admin data not found!");
        }
        res.status(200).json({
            success: true,
            message: "Admin created successfully",
            data: new_admin,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
const get_admin = async (req, res) => {
    try {
        //! services
        const list_admin = await admin_Service.get_admin_S();
        res.status(200).json({
            success: true,
            message: "Admin found",
            data: list_admin,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "data not found",
        });
    }
};
const delete_admin = async (req, res) => {
    try {
        //! services
        const id = req.params.id;
        const delete_admin = await admin_Service.delete_admin_S(id);
        res.status(200).json({
            success: true,
            message: "admin deleted",
            data: delete_admin,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "admin not deleted",
        });
    }
};
const update_admin = async (req, res) => {
    try {
        //! services
        const id = req.params.id;
        const data = req.body;
        const update_admin = await admin_Service.update_admin_S(id, data);
        res.status(200).json({
            success: true,
            message: "admin updated",
            update_data:data,
            old_data: update_admin,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "admin not updated",
        });
    }
};
module.exports = {
    create_admin,
    get_admin,
    delete_admin,
    update_admin,
};
