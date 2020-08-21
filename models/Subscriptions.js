const db = require('../config/connection')
const Sequelize = require('sequelize');
const Users = require('./User')

const Subscriptions = db.define('subscriptions', {
    idSubcription: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    // idUser: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    // }
}, {
    // options
});
Users.hasOne(Subscriptions, {
    foreignKey: 'idUser'
})
Subscriptions.belongsTo(Users, {
    foreignKey: 'idUser',
    constraints: false
});

module.exports = Subscriptions;