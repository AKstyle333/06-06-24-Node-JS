const mongoose = require("mongoose")

const series_Schema = mongoose.Schema({
    series_name:{
        type:String,
        trim:true,
        default:"Lucifer"
    },
    series_rating:{
        type:Number,
        default:0
    }
},{
    timestamps:true
})

const series = mongoose.model("Series",series_Schema)
module.exports = series