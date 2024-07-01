const mongoose = require("mongoose");

const admin_Schema = mongoose.Schema(
    {
        admin_name: {
            type: String,
            trim: true,
            default: "admin",
        },
        admin_contact: {
            type: Number,
            default: 9998887776,
        },
        fav_cartoon:{
            type: mongoose.Types.ObjectId,
            ref: "Cartoon",
        }
    },
    {
        timestamps: true,
    }
);

const admin = mongoose.model("Admin",admin_Schema)
module.exports = admin