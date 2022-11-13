// eslint-disable-next-line no-unused-vars
import Router from 'express';
import EmailSendler from './../logic/email.js';
import {check} from 'express-validator';

const router = new Router();

router.get('/auth', EmailSendler.Form);

router.post('/auth', [
	check('email', 'email is empty').isLength({min: 6, max: 20}),
	check('password', 'password error').isLength({min:6, max:20})
], EmailSendler.AddEmail);

export default router;
