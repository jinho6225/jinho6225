const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './client/src'),
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js[x]?/,
        exclude: /node_modules/,
        options: {
          plugins: [
            '@babel/plugin-transform-react-jsx'
          ]
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
