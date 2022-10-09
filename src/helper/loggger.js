import chalk from 'chalk';

const Helper = {
	logger: (name, err) => {
		console.log(chalk.red(`Error name: ${name} || Message: ${err}`));
	}
};

export default Helper;