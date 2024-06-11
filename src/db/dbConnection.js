const mongoose = require("mongoose");

const connectDB = () => {
    mongoose
        .connect("mongodb+srv://akashkakadiya0:cO8jVyVZRt7NWLYK@netflix.0lr76og.mongodb.net/")
        .then((res) => {
            console.log(res);
            console.log("connectDB Access");
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = connectDB