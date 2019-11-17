const path = require('path')
const webpack = require('webpack')
const HappyPack = require('happypack')
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length})

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: {
    pageOne: './src/pageOne.js',
    pageTwo: './src/pageTwo.js',
    pageThree: './src/pageThree.js',
  },

  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [

    new webpack.ProgressPlugin(),
    new webpack.DllReferencePlugin({
      manifest: require('./vendor/dist/vendor-manifest.json'),
      // context需要和webpack.config.js保持一致
      context: __dirname,
    }),
    new webpack.ProvidePlugin({
      THREE: 'three',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['pageOne'],
      filename: 'pageOne.html',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['pageTwo'],
      filename: 'pageTwo.html',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['pageThree'],
      filename: 'pageThree.html',
    }),
    new HappyPack({
      // 这个HappyPack的“名字”就叫做happyBabel，和楼上的查询参数遥相呼应
      id: 'happyBabel',
      // 指定进程池
      threadPool: happyThreadPool,
      loaders: [{
        loader: 'babel-loader',
        query:  '?cacheDirectory',
        options: {
          plugins: ['syntax-dynamic-import'],

          presets: [
            [
              '@babel/preset-env',
              {
                modules: false,
              },
            ],
          ],
        },
      }],
    }),
  ],

  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'happypack/loader?id=happyBabel',

      }, {test: /\.(jpg|png|gif|bmp|jpeg)$/,
        use: [{
          loader:'url-loader',
          options:{
            limit:8192,
            name:'images/[name]-[hash:8].[ext]',
          },
        }]},
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
        },
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true,
    },
  },

  devServer: {
    open: true,
  },
}
