import * as dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), 'config', '.env') });

const config = {
	api: {
		// eslint-disable-next-line no-undef
		PORT: process.env.PORT //|| 10000
	},
	mongoDB: {
		// eslint-disable-next-line no-undef
		URI: process.env.URI_DB
	},
	Gmail: {
		// eslint-disable-next-line no-undef
		HOST: process.env.GMAIL_HOST,
		PASSWORD: process.env.GMAIL_PASSWORD,
		USER: process.env.GMAIL_USER,
		PORT: process.env.GMAIL_PORT  
	}
};

export default config;