var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry:"./app.js",//入口文件
  output:{
    path:__dirname,//输出的目录
    filename: 'bundle.js'//输出的文件名称
  },
  devtool:"source-map",//便于调试，相当于命令行中 webpack --devtool source-map
  module: {
    rules: [
      {
        test: /\.vue$/,
//          exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
//          exclude: /node_modules/,
        loader: 'babel-loader',
//          query:{//es6预设
//            presets:["es2015","react"]
//          }
      },
//    {
//          test: /\.js$/,
//          exclude: /node_modules/,
//          loader: 'babel-loader'
//      },
//    {
//          test: /\.jsx$/,
//          exclude: /node_modules/,
//          loader: 'jsx-loader'
//      },
      {
        test: /\.css$/,
         // exclude: /node_modules/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
//          exclude: /node_modules/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.scss$/,
//          exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {//背景图片
        test:/\.(jpg|png|gif)$/,
        loader:"url-loader?limit=1024"
      },
      {//字体文件
        test:/\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
        loader:'file-loader?name=[name].[ext]'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
