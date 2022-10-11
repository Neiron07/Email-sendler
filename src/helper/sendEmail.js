import * as nodemailer from 'nodemailer';
import config from '../../config/config.js';

const transporter = nodemailer.createTransport({
	pool: true,
	maxConnections: 8,
	host: config.Gmail.HOST,
	port: config.Gmail.PORT,
	auth: {
		user: config.Gmail.USER,
		pass: config.Gmail.PASSWORD
	}
});

export async function sendMail(email, title, subject, text, html) {
	try {
		await transporter.sendMail({
			from: `${title} <ajbekkodalov@gmail.com>`, // sender address
			to: `${email}`, // list of receivers
			subject: `${subject}`, // Subject line
			text: `${text}`, // plain text body
			html: `${html}`, // html body
		});
	} catch (e) {
		return e;
	}
}