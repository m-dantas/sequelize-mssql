const { Router } = require('express');
const router = Router();
const Segmentos = require('../models/segmentos.model')

router.get('/', async (req, res) => {
	try {
		const segmentos = await Segmentos.findAll({ where: { status: true }});
		res.json({ sucesso: true, data: { itens: segmentos } });
	} catch (err) {
		res.status(500).json({ sucesso: false, data: { err } });
	}
})

router.post('/', async (req, res) => {
	try {
		const segmentos = await Segmentos.create({ ...req.body });
		res.json({ sucesso: true, data: { ...segmentos.dataValues } });
	} catch (err) {
		res.status(500).json({ sucesso: false, data: { err } });
	}
})

router.put('/', async (req, res) => {
	try {
		const { id, nome } = req.body;
		const segmentos = await Segmentos.update({ nome }, { where: { id }});
		if (segmentos[0] === 0) {
			return res.status(400).json({ sucesso: false, data: {} });
		}
		return res.json({ sucesso: true, data: { id, nome } });
	} catch (err) {
		res.status(500).json({ sucesso: false, data: { err } });
	}
})

router.put('/status', async (req, res) => {
	try {
		const { id, status } = req.body;
		const segmentos = await Segmentos.update({ status }, { where: { id }});
		if (segmentos[0] === 0) {
			return res.status(400).json({ sucesso: false, data: {} });
		}
		return res.json({ sucesso: true, data: {} });
	} catch (err) {
		res.status(500).json({ sucesso: false, data: { err } });
	}
})

module.exports = router