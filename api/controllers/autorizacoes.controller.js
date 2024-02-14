const { Router } = require('express');
const router = Router();
const Autorizacoes = require('../models/autorizacoes.model')

router.post('/', async (req, res) => {
	try {
		const autorizacoes = await Autorizacoes.create({ ...req.body });
		res.json({ sucesso: true, data: { ...autorizacoes.dataValues } });
	} catch (err) {
		res.status(500).json({ sucesso: false, data: { err }});
	}
})

router.get('/:idSegmento', async (req, res) => {
	try {
		const { idSegmento } = req.params
		const usuario = 'mcdantas'
		const autorizacoes = await Autorizacoes.findOne({ where: { idSegmento, usuario } })
		if (autorizacoes === null) {
			return res.status(400).json({ sucesso: false, data: {}});
		}
		return res.json({ sucesso: true, data: { ...autorizacoes.dataValues } });
	} catch (err) {
		console.log(err)
		res.status(500).json({ sucesso: false, data: { err }});
	}
})

router.delete('/', async (req, res) => {
	try {
		const { id } = req.body
		const autorizacoes = await Autorizacoes.destroy({ where: { id }});
		if (autorizacoes[0] === 0) {
			return res.status(400).json({ sucesso: false, data: {} });
		}
		return res.json({ sucesso: true, data: {}});
	} catch (err) {
		res.status(500).json({ sucesso: false, data: { err }});
	}
})

module.exports = router