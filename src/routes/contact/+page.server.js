import nodemailer from 'nodemailer';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        var transport = nodemailer.createTransport({
            host: "live.smtp.mailtrap.io",
            port: 587,
            auth: {
              user: "api",
              pass: "3b5c881f9bef883ec03423c9691db043"
            }
          });

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

        return {
            status: 200,
            headers: {
                location: '/contact'
            },
            body: { message: 'Thanks! We\'ll get back to you later today.', success: true}
        };
    }
}