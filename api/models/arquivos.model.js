const { DataTypes } = require('sequelize')
const instance = require('../sequelize');
const Produto = require('./produtos.model')

const Arquivo = instance.define('Arquivos', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
	valor: {
		type: DataTypes.STRING,
		allowNull: false
	},
	usuario: {
		type: DataTypes.STRING,
		allowNull: false
	},
	url: {
		type: DataTypes.BOOLEAN,
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

Arquivo.belongsTo(Produto, { foreignKey: { name: 'idProduto', allowNull: false }})

module.exports = Arquivo