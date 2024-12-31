const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        config: './config/postcss.config.js'
      }
    }
  }],
});

module.exports = {
  module: {
    rules,
  },
};