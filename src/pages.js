const pages = [
	{
		output: './home.html',
		content: {
			title: 'Home',
			description: 'Home Page'
		},
		template: './src/pages/home.hbs'
	},
	{
		output: './components.html',
		content: {
			title: 'Components',
			description: 'Components'
		},
		template: './src/pages/components.hbs'
	},
	{

		output: './index.html',
		content: {
			title: 'isp',
			description: 'Intesa - isp'
		},
		template: './src/pages/isp.hbs'
	},
];

module.exports = pages;
