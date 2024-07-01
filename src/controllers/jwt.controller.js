const { jwtToken_Service } = require("../services");

const create_jwt_token = async (req, res) => {
    try {
        // services
        const payload = req.body;
        const token = await jwtToken_Service.create_jwt_token_S(payload);
        if (!token) {
            throw new Error("Something went wrong!!");
        }
        res.status(200).json({
            success: true,
            token: token,
            message: "token created successfully",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
const verify_jwt_token = async (req, res) => {
    try {
        // services
        const token = req.body.token;
        const verify_token = await jwtToken_Service.verify_jwt_token_S(token)
        if (!verify_token) {
            throw new Error("Something went wrong!!");
        }
        res.status(200).json({
            success: true,
            token: verify_token,
            message: "token verify successfully",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create_jwt_token,
    verify_jwt_token
};
