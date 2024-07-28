const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

const sendEmail = (email, assunto, mensagem, callback) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'contato@arttechproject.com', // Substitua pelo seu email
        subject: `Contato de: ${email} - Assunto: ${assunto}`,
        text: mensagem
    };

    transporter.sendMail(mailOptions, callback);
};

module.exports = sendEmail; // Certifique-se de que está exportando a função corretamente
