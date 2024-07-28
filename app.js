const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sendEmail = require('./server/email'); // Certifique-se de que o caminho está correto
require('dotenv').config();

const app = express();

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public_html')));

// Middleware para analisar o corpo das solicitações
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    console.log('Serving index.html');
    res.sendFile(path.join(__dirname, 'public_html', 'index.html'));
});

app.post('/send-email', (req, res) => {
    const { email, assunto, mensagem } = req.body;

    sendEmail(email, assunto, mensagem, (error) => {
        if (error) {
            console.error('Erro ao enviar o email:', error);
            console.log(error)
            return res.status(500).send(`Erro ao enviar o email: ${error.message}`);
        }
        res.status(200).json({ success: true, message: 'Email enviado com sucesso, entraremos em contato assim que for recebido sua mensagem.' });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
