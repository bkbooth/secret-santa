const withCSS = require('@zeit/next-css');
const path = require('path');

module.exports = withCSS({
  webpack(config, _options) {
    ['components', 'pages', 'styles'].forEach(
      dir => (config.resolve.alias[dir] = path.join(__dirname, dir))
    );
    return config;
  },
});
