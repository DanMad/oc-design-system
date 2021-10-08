// @ts-ignore | This module needs types declared
import tokenImporter from 'node-sass-token-importer';
import babel from './babel.config.json';

const config = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'singletonStyleTag' },
          },
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                importer: tokenImporter({
                  convertCase: true,
                }),
                includePaths: ['../../node_modules'],
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

export { config as default };
