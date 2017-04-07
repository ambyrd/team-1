module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'dist/bundle.js',
    path: __dirname
  },
  devServer:{
      historyApiFallback: true
  },
  module: {
    loaders:  [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }
    ]
  }
};