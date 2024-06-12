const mongoose = require("mongoose");
const user_Schema = mongoose.Schema(
    {
        first_name: {
            type: string,
            trim: true,
        },
        last_name: {
            type: string,
            trim: true,
        },
        email: {
            type: string,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);
const user = mongoose.model("User", user_Schema);
module.exports = user;
