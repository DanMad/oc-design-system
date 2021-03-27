# Monorepo Starter

## Prerequisites

To successfully build the Monorepo Starter template you will need to have previously installed [NVM](https://github.com/nvm-sh/nvm#installing-and-updating) and [Yarn](https://yarnpkg.com/getting-started/install).

## Getting started

To get started, you will need to execute the following commands at the root directory of your instance of `monorepo-starter`.

1. Ensure you're running the correct version of Node.js (`v12.13.0`) by executing `nvm install`.
2. Install all of the necessary dependencies by executing `yarn install`.
3. Create dependency links between your packages by executing `yarn bootstrap`.

## Building

To build your entire project, execute `yarn build`. To build CSS or JavaScript separately, execute `yarn build:css` or `yarn:build:js` respectively.

## Contributing

See [CONTRIBUTING.md](https://github.com/DanMad/monorepo-starter/blob/master/CONTRIBUTING.md).

## Additional information

The Monorepo Starter template's linters are configured with [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript) and [Airbnb's CSS/Sass Style Guide](https://github.com/airbnb/css).
