const db = require('../config/connection')
const Sequelize = require('sequelize');
const User = require('../models/User');
const Subscriptions = require('./Subscriptions');
const Movies = require('./Movies');

const HistoryWatch = db.define('history_watch', {
    idHistory: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    idUser: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idMovie: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idSubcription: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    // options
});

User.hasMany(HistoryWatch, {
    foreignKey: 'idUser',
    constraints: false
});
HistoryWatch.belongsTo(User);

Movies.hasMany(HistoryWatch, {
    foreignKey: 'idMovie',
    constraints: false

});
HistoryWatch.belongsTo(Movies);

Subscriptions.hasMany(HistoryWatch, {
    foreignKey: 'idSubscription',
    constraints: false

});
HistoryWatch.belongsTo(Subscriptions);

module.exports = HistoryWatch;