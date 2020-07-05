
const path = require('path');
const htmlPlugin = require('html-webpack-plugin');


module.exports = {
	entry: path.join(__dirname,'./src/main.js'),
	output:{
		path: path.join(__dirname,'./dist'),
		filename: 'bundle.js'
	},
	plugins:[
		new htmlPlugin({
			template: path.join(__dirname,'./src/index.html'),
			filename: 'index.html'
		})
	]
}