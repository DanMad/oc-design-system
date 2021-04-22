const tokenImporter = require('node-sass-token-importer');
const babel = require('./babel.config.json');

module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                importer: tokenImporter({
                  convertCase: true,
                }),
              },
            },
          },
        ],
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: babel.presets,
          },
        },
      },
      {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'production',
  entry: './src/index',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['node_modules'],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};
