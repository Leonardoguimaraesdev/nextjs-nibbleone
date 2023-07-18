import nodemailer from 'nodemailer';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, email, telefone, mensagem } = req.body;

    // Configurar o transporte do Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Configurar o email a ser enviado
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'coresnp25@gmail.com',
      subject: 'Novo formulário de contato',
      text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`,
    };

    // Enviar o email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao enviar o email.' });
      } else {
        console.log('Email enviado: ' + info.response);
        res.status(200).json({ message: 'Email enviado com sucesso!' });
      }
    });
  } else {
    res.status(405).json({ error: 'Método não permitido.' });
  }
}