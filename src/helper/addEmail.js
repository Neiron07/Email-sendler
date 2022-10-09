import Users from './../models/UserEmail.js';

class EmailDB {
	async createEmail(email, password) {
		const date = new Date().toUTCString(); 
		const result = await Users.create({email, password, date});
		return result;
	}
}

export default new EmailDB();