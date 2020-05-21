const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
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
    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html')
        }),
        // assets 디렉터리의 내용을 `dist` 디렉터리에 복사합니다
        new CopyPlugin({
            patterns: [
                {
                    from: 'assets/',
                    to: '' // output의 경로
                },
            ],
        }),
        // 빌드(build) 직전 `output.path`(`dist` directory) 내 기존 모든 파일 삭제
        new CleanWebpackPlugin()
    ]
}