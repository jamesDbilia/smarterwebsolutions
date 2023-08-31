const withImages = require('next-optimized-images');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = withImages(
  { responsive: { adapter: require('responsive-loader/sharp') } },
  withSass({ minified: true }, withCss()),
  { trailingSlash: true }
);
