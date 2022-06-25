import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';


export const routes = express.Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e61c9e105107ea",
      pass: "805a253c06d004"
    }
  });


routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;


    const submitFeedbackUseCase = new SubmitFeedbackUseCase() 

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