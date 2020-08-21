const Sequelize = require('sequelize')

const db = new Sequelize({
    host: 'localhost',
    dialect: 'mysql',
    database: 'netpliks2',
    username:'agungmubarok',
    password:'BoedakCOYE45*'
})

module.exports = db