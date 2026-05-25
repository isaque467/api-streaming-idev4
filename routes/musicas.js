const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const musicasSchema = new mongoose.Schema({
    titulo: String,
    artista: String,
    album: String,
    genero: String,
    ano: Number,
    duracao: Number,
    disponivel: Boolean,
    detalhes: Object
})

const Musica = mongoose.model('musicas', musicasSchema);

router.get('/', async (req, res) => {
    try {
        const musicas = await Musica.find();
        res.json(musicas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;