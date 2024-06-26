const { cartoon_Service } = require("../services");

const create_cartoon = async (req, res) => {
    try {
        // service
        const data = req.body;
        const new_cartoon = await cartoon_Service.create_cartoon_S(data);
        if (!new_cartoon) {
            throw new Error("Something went Wrong");
        }
        res.status(200).json({
            success: true,
            message: "Cartoon created successfully",
            data: new_cartoon,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
const get_cartoon = async (req, res) => {
    try {
        // service
        const get_cartoon = await cartoon_Service.get_cartoon_S()
        if (!get_cartoon) {
            throw new Error("Something went Wrong");
        }
        res.status(200).json({
            success: true,
            message: "Cartoon find successfully",
            data: get_cartoon,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
const delete_cartoon = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const delete_cartoon = await cartoon_Service.delete_cartoon_S(id)
        if (!delete_cartoon) {
            throw new Error("Something went Wrong");
        }
        res.status(200).json({
            success: true,
            message: "Cartoon delete successfully",
            data: delete_cartoon,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
const update_cartoon = async (req, res) => {
    try {
        // service
        const id = req.params.id;
        const data = req.body
        const update_cartoon = await cartoon_Service.update_cartoon_S(id,data);
        if (!delete_cartoon) {
            throw new Error("Something went Wrong");
        }
        res.status(200).json({
            success: true,
            message: "Cartoon Update successfully",
            data: update_cartoon,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    create_cartoon,
    get_cartoon,
    delete_cartoon,
    update_cartoon,
};
