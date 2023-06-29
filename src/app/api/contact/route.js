import nodemailer from 'nodemailer';

export async function POST(request, response) {
    const res = await request.json();

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        post: 465,
        secure: true,
        auth: {
            user: 'slavishkolo@gmail.com',
            pass: process.env.PASSWORD
        }
    });

    try {
        await transporter.sendMail({
            from: 'slavishkolo@gmail.com',
            to: 'slavishkolo@gmail.com',
            subject: res.subject,
            text: `Email sent by: ${res.email}\n${res.content}`,
            html: `
                <div>
                    <p style="font-family: 'Verdana';">Email sent by: ${res.email} | ${res.name}</p>
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