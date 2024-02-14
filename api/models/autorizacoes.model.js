const { DataTypes } = require('sequelize')
const instance = require('../sequelize')
const Segmentos = require('./segmentos.model')

const Autorizacoes = instance.define('Autorizacoes', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
  usuario: {
    type: DataTypes.STRING,
    allowNull: false
  },
	admin: {
		type: DataTypes.BOOLEAN,
		allowNull: false
	},
	usuario: {
		type: DataTypes.STRING,
		allowNull: false
	},
	createdAt: {
		allowNull: false,
		type: DataTypes.DATE
	},
	updatedAt: {
		allowNull: false,
		type: DataTypes.DATE
	}
});

Autorizacoes.belongsTo(Segmentos, { foreignKey: { name: 'idSegmento', allowNull: false }})

module.exports = Autorizacoes
