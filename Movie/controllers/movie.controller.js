const movie = require('../models/movie.schema')

const home = async (req, res) => {
    try {
        const data = await movie.find();
        return res.render("dashboard", { moviesData: data })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { home }