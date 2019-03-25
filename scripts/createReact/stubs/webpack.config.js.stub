const path = require('path');

module.exports = {
  mode: 'production',

  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs',
    path: __dirname + '/dist',
    publicPath: __dirname + '/dist',
  },

  devtool: 'source-map',

  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src/'),
    },
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.json',
      '.scss',
      '.jpg',
      '.jpeg',
      '.png',
      '.svg',
      '.gif',
      '.ico',
    ],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        enforce: 'pre',
        loader: 'source-map-loader',
        test: /\.(js|jsx)$/,
      },
      {
        test: /\.(scss|css)?$/,
        use: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
      },
      {
        loader: 'file-loader',
        options: { name: '[path][name].ext' },
        test: /\.(jpg|jpeg|png|svg|gif|ico)?$/,
      },
    ],
  },

  externals: {
    react: 'window["React"]',
  },
};
