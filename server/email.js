const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

const sendEmail = (email, assunto, mensagem, callback) => {
    const mailOptions = {
        from: email,
        to: 'seu-email@gmail.com', // Substitua pelo seu email
        subject: `Contato de: ${email} - Assunto: ${assunto}`,
        text: mensagem
    };

    transporter.sendMail(mailOptions, callback);
};

module.exports = { sendEmail };
 