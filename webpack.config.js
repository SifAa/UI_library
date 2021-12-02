const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    },
    // devServer : {
    //     contentBase: path.resolve(__dirname, 'dist'),
    //     publicPath: '/assets/'
    // } This does not work but is what the tutorial said
    // devServer: {
    //     static: {
    //       directory: path.join(__dirname, 'dist'),
    //     },
    //     compress: true,
    //     port: 9000,
    //   }, This and the other one works but does not create a virtual auto compile like the tutorial
    devServer : {
        static: './dist',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};
