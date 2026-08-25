import nodemailer from 'nodemailer';
import { recaptcha_secret_key, AWS_SES_PASSWORD } from '$env/static/private'

function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

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
                success: false
            }
        }

        var transport = nodemailer.createTransport({
            host: "email-smtp.us-east-2.amazonaws.com",
            port: 587,
            auth: {
              user: "AKIAXHBWGT3G6EXNX5OD",
              pass: AWS_SES_PASSWORD
            }
          });

        await transport.sendMail({
            from: 'hello@getsurmount.com',
            to: 'brandon@getsurmount.com',
            subject: 'New Software Assessment',
            html: `
                <h1>Software Assessment</h1>
                <p><strong>Name:</strong> ${escapeHtml(data.get('username'))}</p>
                <p><strong>Email:</strong> ${escapeHtml(data.get('email'))}</p>
                <p><strong>Phone:</strong> ${escapeHtml(data.get('phone'))}</p>
                <p><strong>Doing manually today:</strong> ${escapeHtml(data.get('manual_work'))}</p>
                <p><strong>Current software:</strong> ${escapeHtml(data.get('current_software'))}</p>
                <p><strong>Biggest problem:</strong> ${escapeHtml(data.get('biggest_problem'))}</p>
                <p><strong>People involved:</strong> ${escapeHtml(data.get('people_involved'))}</p>
                <p><strong>Budget:</strong> ${escapeHtml(data.get('budget'))}</p>
            `
        });

        return { success: true };
    }
}
