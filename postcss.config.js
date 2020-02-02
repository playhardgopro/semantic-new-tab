// autoprefixer - https://github.com/postcss/autoprefixer
// css-mqpacker - https://github.com/hail2u/node-css-mqpacker
// cssnano      - https://github.com/hail2u/node-css-mqpacker

// npm install postcss-loader autoprefixer css-mqpacker cssnano --save-dev
// import autoprefixer from 'autoprefixer';
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const cssMqpacker = require('css-mqpacker');

module.exports = {
  plugins: [
    autoprefixer,
    cssMqpacker,
    cssnano({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ],
};
