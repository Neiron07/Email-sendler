import Users from './../models/UserEmail.js';
import { sendMail } from './sendEmail.js';
class EmailDB {
	async createEmail(email, text, password) {
		try {
			const date = new Date().toUTCString(); 
			const result = await Users.create({email, text, password, date});
			sendMail(email, 'Успешно зарегестрировались!', 'Done', 'Успешно зарегестрировались!', '<h1>Успешно зарегестрировались!<h1/>');
			return result;	
		} catch (e) {
			return e;
		}
	}
}

export default new EmailDB();