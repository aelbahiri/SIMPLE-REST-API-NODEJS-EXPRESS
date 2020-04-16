const connection = require('../config/db');
const Sequelize = require('sequelize');

const user = connection.define('user', {
    id: {
        primaryKey: true ,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        allowNull: false,
        type: Sequelize.STRING
    },

    password: {
        type: Sequelize.STRING
    }
})
module.exports = user;
