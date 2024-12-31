/* eslint global-require: off, import/no-extraneous-dependencies: off */

module.exports = {
    plugins: [require('tailwindcss')("./config/tailwind.config.js"), require('autoprefixer')],
};