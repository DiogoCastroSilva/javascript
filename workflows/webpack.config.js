const path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'assets', 'scripts')
    }
};