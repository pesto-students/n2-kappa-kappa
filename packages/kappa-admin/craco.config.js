const _castArray = require('lodash/castArray');
const _concat = require('lodash/concat');
const path = require('path');
const { getLoader, loaderByName } = require('@craco/craco');

const packages = [];
packages.push(path.resolve(__dirname, '../kappa-components/src'));
module.exports = {
  webpack: {
    alias: {
      kappaComponents: '@kappa/components/src',
    },
    configure: (webpackConfig) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName('babel-loader'),
      );
      if (isFound) {
        const include = _castArray(match.loader.include);
        match.loader.include = _concat(include, packages);
      }
      return webpackConfig;
    },
  },
};
