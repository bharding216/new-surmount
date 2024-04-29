import nodemailer from 'nodemailer';
import { recaptcha_secret_key, mailtrap_password } from '$env/static/private'

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        // Verify reCAPTCHA
        const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `secret=${recaptcha_secret_key}&response=${data.get('g-recaptcha-response')}`
        });

        const recaptcha = await response.json();

        if (!recaptcha.success) {
            return {
                status: 400,
                body: {
                    error: 'reCAPTCHA failed'
                }
            }
        }

        // Production
        var transport = nodemailer.createTransport({
            host: "live.smtp.mailtrap.io",
            port: 587,
            auth: {
              user: "api",
              pass: mailtrap_password
            }
          });

        // Testing
        // var transport = nodemailer.createTransport({
        //     host: "sandbox.smtp.mailtrap.io",
        //     port: 2525,
        //     auth: {
        //       user: "593e36a29c5001",
        //       pass: "8d46480268a095"
        //     }
        //   });

        await transport.sendMail({
            from: 'hello@getsurmount.com',
            to: 'brandon@getsurmount.com',
            subject: 'New Contact Form Submission',
            html: `
                <h1>Contact Form Submission</h1>
                <p><strong>Name:</strong> ${data.get('username')}</p>
                <p><strong>Email:</strong> ${data.get('email')}</p>
                <p><strong>Phone:</strong> ${data.get('phone')}</p>
                <p><strong>Message:</strong> ${data.get('message')}</p>
                <p><strong>Budget:</strong> ${data.get('budget')}</p>
            `
        });
    }
}