import path from 'path';
import webpack from 'webpack';
 
const options = {
  entry: './index.js',
  output: { path: __dirname, filename: 'bundle.js' },
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