import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail.adapter";


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e61c9e105107ea",
      pass: "805a253c06d004"
    }
  });


export class NodemailerMailAdapter implements MailAdapter{
   async sendMail({ subject, body }: SendMailData) {
      await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Natali Soares <natalisoares90@gmail.com>',
        subject,
        html: body,
      });
   }
}