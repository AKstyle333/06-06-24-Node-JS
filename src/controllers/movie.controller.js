const { movie_Service } = require("../services")

const create_movies =async (req,res)=>{
     try {
        const data = req.body
        const new_movie = await movie_Service.create_movies_S(data)
        res.status(200).json({
            success: true,
            data: new_movie
        });
     } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
     }
}
module.exports = {
    create_movies
}