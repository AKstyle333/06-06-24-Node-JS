const { bcrypt_Service } = require("../services");

const create_bcrypt_hash = async (req, res) => {
    try {
        // service
        const password = req.body.password;
        const hash_create = await bcrypt_Service.create_bcrypt_S(password);
        if (!hash_create) {
            throw new Error("Hash not Create!!!");
        }
        res.status(200).json({
            success: true,
            message: "Hash Create Success!!!",
            hash: hash_create,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
const compare_bcrypt_hash = async (req, res) => {
    try {
        // service
        const hash_password = req.body.password;
        const password = "$2b$10$0O6Vq45fLFXvncAjbp8JJ.q4Kl5xmHZ0FtywoL6O1aGKI2tmJPSbi";
        const hash_compare = await bcrypt_Service.compare_bcrypt_S(hash_password, password);
        if (!hash_compare) {
            throw new Error("Hash not Compare!!!");
        }
        res.status(200).json({
            success: true,
            message: "Hash compare Success!!!",
            check_hash: hash_password,
            compare_hash_with:password,
            hash: hash_compare,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = { create_bcrypt_hash, compare_bcrypt_hash };
