const { Movie } = require("../models")


const create_movies_S = (data) =>{
    return Movie.create(data)
}

module.exports={
    create_movies_S
}