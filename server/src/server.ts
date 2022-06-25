import { prisma } from './prisma';
import nodemailer from 'nodemailer'
import express from 'express'

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e61c9e105107ea",
      pass: "805a253c06d004"
    }
  });

app.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;


    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot,
        }
    })

    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Natali Soares <natalisoares90@gmail.com>',
        html: [
            `<div style="font-family: sans-serif; font-size:16px; color: #111;">`,
            `<p>Tipo de feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`, 
            `</div>`
        ].join('')
    });

    return res.status(201).json( {data: feedback} );

});

app.listen(3333, () => {
    console.log('HTTP server runing')

});