const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
    entry: {
        'index': '../src/pages/index.js'
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'output/dist')
    },
    module: {
        rules: [{
            test: /\.(js|jsx)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                },
                exclude: /node_modules/
            }
        }, {
            test: /\.(css|less)/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'less-loader'
            ]
        }, {
            test: /\.(png|jpe?g|gif)/i,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                },
            }, ],
        }]
    },
    plugins: [new MiniCssExtractPlugin()],
}