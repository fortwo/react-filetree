import path from 'path';

const options = {
	entry: './src/FileTree.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'react-filetree.js',
		publicPath: '/',
    library: 'FileTree',
    libraryTarget: 'umd',
	},
	module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader',
      }, {
        test: /\.(jpg|png|gif)$/,
        loader: 'image-webpack-loader',
        query: {
          optipng: {
            optimizationLevel: 7,
          },
        }
      },
    ]
  },
};

module.exports = options;