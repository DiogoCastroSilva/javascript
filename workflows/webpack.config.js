const path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'assets', 'scripts'),
        publicPath: 'assets/scripts/'
    },
    devtool: 'cheap-module-source-map'
    // devServer: {
    //     contentBase: './'
    // }
};