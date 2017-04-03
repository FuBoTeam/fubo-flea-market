const postcssNested = require('postcss-nested');
const postcssNext = require('postcss-cssnext');

module.exports = {
  plugins: [
    postcssNested,
    postcssNext,
  ],
};
