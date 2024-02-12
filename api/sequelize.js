const { Sequelize } = require('sequelize')

const instance = new Sequelize('DB_teste', 'user-teste', 'coxinha09@', {
	dialect: 'mssql',
	host: 'DESKTOP-5S6E91U',
	schema: 'APC',
	logging: process.env.NODE_ENV === 'develop'
})

module.exports = instance