const withImages = require('next-optimized-images');
const withCss = require('@zeit/next-css');
const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withImages(
  withCss(
    withReactSvg({
      include: path.resolve(__dirname, 'public/svg'),
      webpack(config, options) {
        // Add any additional webpack configurations if necessary
        return config;
      },
      trailingSlash: true,
    })
  )
);
