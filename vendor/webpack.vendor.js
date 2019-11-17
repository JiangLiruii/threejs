const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',

  entry: {
    vendor: [
      'three',
    ],
  },

  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.join(__dirname, 'dist', '[name]-manifest.json'),
      context: __dirname,
    }),
  ],
}
