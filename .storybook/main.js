require("@babel/register")({ extensions: ['.js', '.ts'] });
const glob = require('glob');
const path = require('path');
const tokenImporter = require('node-sass-token-importer');
const webpackConfig = require('../webpack.config.babel.ts');

const ROOT = path.resolve(__dirname, '../');
const NODE_MODULES = path.resolve(ROOT, 'node_modules');

module.exports = {
  "core": {
    "builder": "webpack5",
  },
  "stories": [
    "../packages/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules = webpackConfig.module.rules.filter(
      f => f.test.toString() !== '/\\.(scss)$/'
    );

    config.module.rules.push({
      test: /\.(scss)$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        {
          loader: "sass-loader",
          options: {
            sassOptions: {
              includePaths: [NODE_MODULES],
              importer: tokenImporter({
                convertCase: true,
              }),
            }
          }
        }
      ],
      include: ROOT,
    });
      
    config.resolve = {
      ...webpackConfig.resolve,
    };
    
    config.resolve.modules = [NODE_MODULES];

    config.resolve.alias = glob.sync(`${ROOT}/packages/*`).reduce((obj, el) => {
      const name = require(`${el}/package.json`).name;
      obj[name] = path.resolve(NODE_MODULES, name, 'src');
      return obj
    }, {});
      
    config.stats = 'verbose';

    return config;
  },
}
