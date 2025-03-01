import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { data: formData } = await request.json();
    const { fullname, email, serviceType, zipCode, phoneNumber, additionalInfo } = formData;
    const { data, error } = await resend.emails.send({
      from: 'Sipsa - Sitio Web <website@sipsacr.com>',
      to: ['marcoledezmacordero09@gmail.com'],
      subject: 'Hay un nuevo mensaje del sitio web sipsacr.com',
      react: await EmailTemplate({
        fullname: fullname,
        email: email,
        serviceType: serviceType,
        zipCode: zipCode,
        phoneNumber: phoneNumber,
        additionalInfo: additionalInfo
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({...data, message: 'Correo enviado.'}, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}