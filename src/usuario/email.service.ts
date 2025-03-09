import * as sgMail from '@sendgrid/mail';
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class EmailService {
  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
  }

  async sendVerificationEmail(to: string, code: string) {
    const senderEmail = process.env.EMAIL_FROM;
    if (!senderEmail) {
      throw new Error('CUIDADO: El EMAIL de orgien no esta definido en .env');
    }

    const msg: sgMail.MailDataRequired = {
      to,
      from: senderEmail,
      subject: 'Código de Verificación - BICENTENARIO',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);">
          <div style="text-align: center;">
            <h2 style="color: #2c3e50;">🔐 Código de Verificación</h2>
            <p style="font-size: 16px; color: #555;">Usa este código para verificar tu cuenta en <b>BICENTENARIO</b>:</p>
            <div style="background-color: #3498db; color: #fff; padding: 15px; font-size: 24px; font-weight: bold; border-radius: 5px; display: inline-block; margin: 10px 0;">
              ${code}
            </div>
            <p style="font-size: 14px; color: #777;">Este código es válido solo por 1 minuto.</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="font-size: 12px; color: #aaa;">Si no solicitaste este código, puedes ignorar este mensaje.</p>
          </div>
        </div>
      `,
    };
    

    try {
      await sgMail.send(msg);
      console.log(`✅ Correo enviado a ${to}`);
      return { message: 'Código de verificación enviado correctamente' };
    } catch (error) {
      console.error('❌ Error enviando correo:', error.response?.body || error);
      throw new Error('No se pudo enviar el correo');
    }
  }
}
