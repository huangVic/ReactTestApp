var path = require('path'); 

// webpack.config.js
module.exports = {
    entry: path.resolve(__dirname, 'src/assets/boot.js'),
    output: {
        path: path.resolve(__dirname, 'src/dist'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.jsx$/, loader: 'babel-loader' }
        ]
    }
};