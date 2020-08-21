const HistoryWatch = require('../models/HistoryWatch')
const Users = require('../models/User')
const Movies = require('../models/Movies')

module.exports = {
    // fungsi CRUD
    getHistoryWatch: (req, res) => {
        HistoryWatch.findAll({
            raw: true,
            include: [Movies, Users]
        })
        .then(result => {
            res.send({
                message: 'Here are your History',
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

    createHistory: (req, res) => {
        HistoryWatch.create(req.body)
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
    deleteHistory: async (req, res) => {
        await HistoryWatch.destroy({
            where: {
                idHistory: req.params.id
            }
        })
        .then(result => {
            res.send({
                message: 'Deleted Succesfully',
                status: 201,
                result
            })
        })
        .catch(err => {
            console.log(err)
            res.send ({
                message: 'Internal Server Error',
                status: 500
            })
        })
    }
}