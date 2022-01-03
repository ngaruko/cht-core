/* eslint-disable max-len */
//import * as path from 'path';
const path = require('path');

module.exports = {
  //entry: './src/js/admin-main.ts',
  //context: __dirname + './src',
  //entry: '/js/admin-main.ts',
  entry: path.resolve(__dirname, 'src') + '/js/admin-main.ts',
  mode: 'development',

  output: {
    // options related to how webpack emits results
    path:path.resolve(__dirname, 'src') + 'dist', // string (default)
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: 'bundle.js', // string (default)
    // the filename template for entry chunks
    //publicPath: '/assets/', // string
    // the url to the output directory resolved relative to the HTML page

  },
  resolve: {
    alias: {
      'angular-translate-interpolation-messageformat': path.resolve(__dirname, '') + '/node_modules/angular-translate/dist/angular-translate-interpolation-messageformat/angular-translate-interpolation-messageformat',
      'google-libphonenumber': path.resolve(__dirname, '') + '/node_modules/google-libphonenumber',
      'gsm': path.resolve(__dirname, '') + '/node_modules/gsm',
      'object-path': path.resolve(__dirname, '') + '/node_modules/object-path',
      'bikram-sambat': path.resolve(__dirname, '') + '/node_modules/bikram-sambat',
      '@medic/phone-number': path.resolve(__dirname, '') + '/node_modules/@medic/phone-number',
      'lodash/core': path.resolve(__dirname, '') + '/node_modules/lodash/core',
    },
    fallback: {
      'fs': false,
      'path': false,
      'os': false,
    },
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    modules: [path.resolve(__dirname, 'node_modules')]
  },

  module: {
    rules: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      {
        test: /\.tsx?$/,
        //exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  }
};
