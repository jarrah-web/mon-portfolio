import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Tous les champs sont requis.' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.SMTP_USER, // Send to yourself
            subject: `Nouveau message de ${name} via le Portfolio`,
            text: `
        Nom: ${name}
        Email: ${email}
        Message:
        ${message}
      `,
            replyTo: email,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Message envoyé avec succès.' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        return NextResponse.json(
            { error: 'Erreur lors de l\'envoi du message.' },
            { status: 500 }
        );
    }
}
