const { DataTypes } = require('sequelize')
const sequelize = require('../db/db');



const User = sequelize.define('User', {
    first_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telegram_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: true
    },
})
User.sync({ alter: true })

module.exports = User
