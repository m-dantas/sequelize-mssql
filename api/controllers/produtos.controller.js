const { Router } = require('express');
const router = Router();
const Produtos = require('../models/produtos.model')

router.get('/', async (req, res) => {
	try {
		const produtos = await Produtos.findAll({ where: { status: true }});
		res.json({ sucesso: true, data: { itens: produtos } });
	} catch (err) {
		res.status(500).json({ sucesso: false, data: { err } });
	}
})

router.post('/', async (req, res) => {
	try {
		const produtos = await Produtos.create({ ...req.body });
		res.json({ sucesso: true, data: { ...produtos.dataValues } });
	} catch (err) {
		res.status(500).json({ sucesso: false, data: { err } });
	}
})

router.get('/:idSegmento', async (req, res) => {
	try {
		const { idSegmento } = req.params;
		const produtos = await Produtos.findAll({ where: { idSegmento }});
		res.json({ sucesso: true, data: { itens: produtos } });
	} catch (err) {
		res.status(500).json({ sucesso: false, data: { err } });
	}
})

router.put('/', async (req, res) => {
	try {
		const { id, nome } = req.body;
		const produtos = await Produtos.update({ nome }, { where: { id }});
		if (produtos[0] === 0) {
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
		const produtos = await Produtos.update({ status }, { where: { id }});
		if (produtos[0] === 0) {
			return res.status(400).json({ sucesso: false, data: {} });
		}
		return res.json({ sucesso: true, data: {} });
	} catch (err) {
		res.status(500).json({ sucesso: false, data: { err } });
	}
})

module.exports = router;