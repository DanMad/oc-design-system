const glob = require('glob');
const path = require('path');
const webpackConfig = require('../webpack.config.js');

const ROOT = path.resolve(__dirname, '../');
const NODE_MODULES = path.resolve(ROOT, 'node_modules');

module.exports = {
  "stories": [
    "../packages/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.(scss)$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: "sass-loader",
          options: {
            sassOptions: {
              includePaths: [NODE_MODULES]
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
