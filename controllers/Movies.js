const Movies = require('../models/Movies')

module.exports = {
    // fungsi CRUD
    getAllMovies: (req, res) => {
        Movies.findAll({
            raw: true
        })
        .then(result => {
            res.send({
                message: 'Get All Movies',
                status: 200,
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message: 'internal server error',
                status: 500,
            })
        })
    },
    addMovie: (req, res) => {
        Movies.create(req.body)
        .then(result => {
            res.send({
                message: "Create One Movie success",
                status: 201,
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message: "Internal server error",
                status: 500
            })
        })
    },
    updateMovie: async (req, res) => {
        await Movies.update(req.body, {
            where: {
                idMovie: req.params.id
            }
        })
        .then(result => {
            res.send ({
                message: 'Movie Updated',
                status: 201,
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message: 'Internal Server Error',
                status: 500
            })
        })
    },
    deleteMovie: async (req, res) => {
        await Movies.destroy({
            where: {
                idMovie: req.params.id
            }
        })
        .then(result => {
            res.send ({
                message: 'Deleted Succesfully',
                status: 201,
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message: 'Internal Server Error',
                status: 500
            })
        })
    }
}