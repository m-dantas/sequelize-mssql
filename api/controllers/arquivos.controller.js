const { Router } = require('express');
const router = Router();
const Arquivos = require('../models/arquivos.model')

router.get('/:idProduto', async (req, res) => {
	try {
		const { idProduto } = req.params
		const arquivos = await Arquivos.findAll({ where: { idProduto }});
		res.json({ sucesso: true, data: { itens: arquivos } });
	} catch (err) {
		console.log(err)
		res.status(500).json({ sucesso: false, data: { err } });
	}
})

router.post('/', async (req, res) => {
	try {
		const arquivos = await Arquivos.create({ ...req.body });
		res.json({ sucesso: true, data: { ...arquivos.dataValues } });
	} catch (err) {
		res.status(500).json({ sucesso: false, data: { err }});
	}
})

router.put('/', async (req, res) => {
	try {
		const { id, nome, valor, url } = req.body;
		const usuario = 'mcdantas';
		const arquivos = await Arquivos.update({ nome, valor, url, usuario }, { where: { id }});
		if (arquivos[0] === 0) {
			return res.status(400).json({ sucesso: false, data: {} });
		}
		return res.json({ sucesso: true, data: { id, nome, valor, url, usuario }});
	} catch (err) {
		res.status(500).json({ sucesso: false, data: { err } });
	}
})

router.delete('/', async (req, res) => {
	try {
		const { id } = req.body;
		const arquivos = await Arquivos.destroy({ where: { id } })
		console.log(id)
		if (arquivos[0] === 0) {
			return res.status(400).json({ sucesso: false, data: {} });
		}
		return res.json({ sucesso: true, data: {}});
	} catch (err) {
		res.status(500).json({ sucesso: false, data: { err } });
	}
})

module.exports = router