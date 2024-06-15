const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sendEmail = require('./server/email');
require('dotenv').config();

const app = express();

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para analisar o corpo das solicitações
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { email, assunto, mensagem } = req.body;

    sendEmail(email, assunto, mensagem)
        .then(() => res.status(200).send('Email enviado com sucesso'))
        .catch(error => res.status(500).send('Erro ao enviar o email'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
