import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    console.log(name, email, message);
    // const { data, error } = await resend.emails.send({
    //   from: 'Sipsa Website <website@sipsacr.com>',
    //   to: ['marcoledezmacordero09@gmail.com'],
    //   subject: 'Hay un nuevo mensaje del sitio web sipsacr.com',
    //   react: await EmailTemplate({ firstName: 'John' }),
    // });

    // if (error) {
    //   return Response.json({ error }, { status: 500 });
    // }

    // return Response.json(data);
    return Response.json('All good', { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}