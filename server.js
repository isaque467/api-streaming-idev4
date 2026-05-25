const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

const musicasRouters = require('./routers/musicas');
const filmesRouters = require('./routers/filmes');
const seriesRouters = require('./routers/series');
const jogosRouters = require('./routers/jogos');
const livrosRouters = require('./routers/livros');

app.use('/musicas', musicasRouter);
app.use('/filmes', filmesRouter);
app.use('/series', seriesRouter);
app.use('/jogos', jogosRouter);
app.use('/livros', livrosRouter);


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

