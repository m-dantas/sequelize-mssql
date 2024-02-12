const { DataTypes } = require('sequelize')
const instance = require('../sequelize');

const Segmento = instance.define('Segmentos', {
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

module.exports = Segmento