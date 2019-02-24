module.exports = {
	entry: {
		main: './src/js/main.js',
		game: './src/js/game.js',
		winner: './src/js/winner.js'
	},
	output: {
		path: __dirname+'/dist/',
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					{loader: "style-loader"},
					{loader: "css-loader"}
				]
			},
			{
				test: /\.scss$/,
				use: [
					{loader: "style-loader"},
					{loader: "css-loader"},
					{loader: "sass-loader"}
				]
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					{loader: "url-loader"}
				]
			}
		]
	},
	devServer: {
		inline: true,
		contentBase: './',
		port: 3001
	},
	watch: true,
};