const Subscriptions = require('../models/Subscriptions')
const User = require('../models/User')

module.exports = {
    // fungsi CRUD
    getAllSubscriptions: (req, res) => {
        Subscriptions.findAll({
            include: User,
            raw: true
        })
        .then(result => {
            res.send({
                message: 'Get All Subscribers',
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
    createSub: (req, res) => {
        Subscriptions.create(req.body)
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
    }
}