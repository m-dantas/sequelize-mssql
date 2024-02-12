const { DataTypes } = require('sequelize')
const instance = require('../sequelize');
const Segmento = require('./segmentos.model')

const Produto = instance.define('Produtos', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
	status: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: true
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

Produto.belongsTo(Segmento, { foreignKey: { name: 'idSegmento', allowNull: false } })

module.exports = Produto