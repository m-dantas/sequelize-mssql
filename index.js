require('dotenv').config()
const express = require('express')
const instance = require('./api/sequelize')
const port = process.env.PORT || 3000
const app = express()


// Config APP
app.use(express.json());

// Controllers
const segmentoController = require('./api/controllers/segmentos.controller')
const produtosController = require('./api/controllers/produtos.controller')
const arquivosController = require('./api/controllers/arquivos.controller')


// Apply routes
app.use('/segmentos', segmentoController)
app.use('/produtos', produtosController)
app.use('/arquivos', arquivosController)

app.listen(port, async () => {
	try {
		await instance.authenticate()
		console.log('Servidor e conexão no ar')
	} catch (err) {
		console.log('Erro na conexão', err)
	}
})