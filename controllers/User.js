const User = require('../models/User')

module.exports = {
    // fungsi CRUD
    getAll: (req, res) => {
        User.findAll({
            raw: true
        })
        .then(result => {
            res.send({
                message: 'Get All data',
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
    createUser: (req, res) => {
        User.create(req.body)
        .then(result => {
            res.send({
                message: "Create One user success",
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
    updateProfile: async (req, res) => {
        await User.update(req.body, {
            where: {
                idUser: req.params.id
            }
        })
        .then(result => {
            res.send({
                message: 'Profile Updated',
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
    deleteProfile: async (req, res) => {
        await User.destroy({
            where: {
                idUser: req.params.id
            }
        })
        .then(result => {
            res.send({
                message: 'Delete Succesfully',
                status: 201,
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message:'Internal Server Error',
                status:500
            })
        })
    }
}