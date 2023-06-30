import { NextRequest } from 'next/server';
import type { NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest, response: NextApiResponse) {
    const res = await request.json();

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'slavishkolo@gmail.com',
            pass: process.env.PASSWORD
        }
    });

    try {
        await transporter.sendMail({
            from: 'slavishkolo@gmail.com',
            to: 'slavirezashkiofficial@gmail.com',
            subject: res.subject,
            text: `Email sent by: ${res.email}\n${res.content}`,
            html: `
                <div>
                    <pre style="font-family: 'Verdana';">From:\nEmail: ${res.email}\nName: ${res.name}</pre>
                    <hr>
                    <div style="font-family: 'Verdana'; font-size: 16px; font-weight: 400;">Subject: ${res.subject}</div>
                    <br>
                    <pre style="font-family: 'Verdana'; font-size: 16px; font-weight: 300;">Content:\n${res.content}</pre>
                </div>
            `
        });
    } catch (err) {
        console.log(err);
    };
};