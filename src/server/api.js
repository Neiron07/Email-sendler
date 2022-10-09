// eslint-disable-next-line no-unused-vars
import express, { json } from 'express';
import config from '../../config/config.js';
import cors from 'cors';
import morgan from 'morgan';
import router from './../routes/email.js';
import * as swaggerUi from 'swagger-ui-express';
import mongoose from 'mongoose';
import Helper from './../helper/loggger.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup());

async function StartAPI(){
	try {
		await mongoose.connect(config.mongoDB.URI, { useNewUrlParser: true, useUnifiedTopology: true });
		app.listen(config.api.PORT, ()=> console.log(`API started on http://localhost:${config.api.PORT}`));
	} catch (e) {
		Helper.logger('StartAPI', e);
	}
}

StartAPI();
