const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
require('@babel/polyfill')

module.exports = {
    // 진입점
    entry: {
        app: [
            '@babel/polyfill',
            path.join(__dirname, 'main.js')
        ]
    },
    // 결과물에 대한 설정
    output: {
        filename: '[name].js', // app.js
        path: path.join(__dirname, 'dist')
    },
    // module, plugins은 webpack의 처리 과정
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    "vue-style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
                template: path.join(__dirname, 'index.html')
            })
    ]
}