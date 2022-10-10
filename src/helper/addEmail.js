import Users from './../models/UserEmail.js';

class EmailDB {
	async createEmail(email, text, password) {
		try {
			const date = new Date().toUTCString(); 
			const result = await Users.create({email, text, password, date});
			return result;	
		} catch (e) {
			return e;
		}
	}
}

export default new EmailDB();