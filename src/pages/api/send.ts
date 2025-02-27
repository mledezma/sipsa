import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('hi?');
  const { data, error } = await resend.emails.send({
    from: 'SIPSA CR <marcoledezmacordero09@gmail.com>',
    to: ['marcoledezmacordero09@gmail.com'],
    subject: 'Hello world',
    react: await EmailTemplate({ firstName: 'John' }),
  });
  console.log('hi 2?', error);

  // if (error) {
  //   return res.status(400).json(error);
  // }

  // res.status(200).json(data);
};