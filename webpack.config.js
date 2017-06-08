const path = require('path');

module.exports = {
    entry: './src/form-loading-animation.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'form-loading-animation.js',
        library: 'formLoadingAnimation'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: /src/,
                loader: 'babel-loader'
            }
        ]
    }
};