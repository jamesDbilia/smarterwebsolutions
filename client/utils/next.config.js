const withImages = require('next-optimized-images');
const withCss = require('@zeit/next-css');

module.exports = withImages(
 withCss(),
  { trailingSlash: true }
);
