module.exports = {
  entry: ['./app/main.js'],
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js?$/,
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3000
  }
}
