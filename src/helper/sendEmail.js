import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: 'smtp.ethereal.email',
	port: 587,
	auth: {
		user: 'lia.mcclure1@ethereal.email',
		pass: 'SAguf1ckJbnvHAvKwT'
	}
});

let info = await transporter.sendMail({
	from: '"Fred Foo 👻" <foo@example.com>', // sender address
	to: 'bar@example.com, baz@example.com', // list of receivers
	subject: 'Hello ✔', // Subject line
	text: 'Hello world?', // plain text body
	html: '<b>Hello world?</b>', // html body
});

console.log('Message sent: %s', info.messageId);