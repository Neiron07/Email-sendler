import * as dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), 'config', `.env`) });

const config = {
	api: {
		// eslint-disable-next-line no-undef
		PORT: process.env.PORT //|| 10000
	},
    mongoDB: {
        // eslint-disable-next-line no-undef
        URI: process.env.URI_DB
    }
};

export default config;