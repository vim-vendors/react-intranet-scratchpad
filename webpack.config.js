//entry -> output 
const path = require('path');

module.exports = {
	entry: './public/src/app.jsx',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	watchOptions: {
  		poll: true,
  		ignored: /node_modules/
	},
	module: {
		rules: [{
			loader: 'babel-loader',
			test: /\.jsx?$/,
			exclude: /node_modules/
		}, {
		  test: /\.s?css$/,
		  use: [
		  	'style-loader',
		  	'css-loader',
		  	'sass-loader'
		  ]	
		},
		{
            test: /\.(png|jp(e*)g|svg)$/,  
            use: [{
                loader: 'url-loader',
                options: { 
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: 'images/[hash]-[name].[ext]'
                } 
            }]
        }
        ]
	},
	devtool: 'cheap-module-eval-source-map'
};

