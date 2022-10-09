import Helper from '../helper/loggger.js';
import path from 'path';
import EmailDB from '../helper/addEmail.js';
const __dirname = path.resolve();

class EmailSendler {
	async Form(req, res) {
		try {
			res.sendFile(__dirname + '/templates/form.html');
		} catch (e) {
			Helper.logger('Form', e);
		}
	}
	async AddEmail(req, res) {
		try {
			const {email, password} = req.body;
			const result = await EmailDB.createEmail(email, password);
			return res.json(result);
		} catch (e) {
			Helper.logger('AddEmail', e);
		}
	}
}

export default new EmailSendler();