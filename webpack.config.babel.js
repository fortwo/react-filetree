import path from 'path';
import webpack from 'webpack';
 
const options = {
  entry: './example/index.js',
  output: { 
    path: path.join(__dirname, 'example'), 
    filename: 'bundle.js',
    publicPath: '/example/',
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
        exclude: '/assets/example.gif',
      }, {
        test: /\.(jpg|png|gif)$/,
        loader: 'image-webpack-loader',
        query: {
          optipng: {
            optimizationLevel: 7,
          },
        },
        exclude: '/assets/example.gif',
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'example'),
    publicPath: '/example/',
    port: 3000,
    hot: true
  }
};

module.exports = options;