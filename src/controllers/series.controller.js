const { series_Service } = require("../services");

const create_series = async (req, res) => {
    try {
        const data = req.body;
        const new_series = await series_Service.create_series_S(data);
        if (!new_series) {
            throw new Error("Something went wrong!");
        }
        res.status(200).json({
            status: true,
            message: "Series created successfully",
            data: new_series
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
};
const get_series = async (req, res) => {
    try {
        const get_series = await series_Service.get_series_S();
        if (!get_series) {
            throw new Error("Something went wrong! Series Not Found!");
        }
        res.status(200).json({
            status: true,
            message: "Series Found!",
            data: get_series
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
};
module.exports = { create_series, get_series };
