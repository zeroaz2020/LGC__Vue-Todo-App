const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const merge = require('webpack-merge')
require('@babel/polyfill')

module.exports = (env, opts) => {
    const config = {
        resolve: {
            extensions: ['.vue', '.js']
        },
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
                        "css-loader",
                        "postcss-loader"
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'sass-loader',
                        'postcss-loader',
                        'sass-loader'
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
        ]
    }

    if (opts.mode === 'development') {
        return merge(config, {
            // 빌드 시간이 적고, 디버깅이 가능한 방식
            devtool: 'eval',
            devServer: {
                // 자동으로 기본 브라우저를 오픈합니다
                open: false,
                // HMR, https://webpack.js.org/concepts/hot-module-replacement/
                hot: true
            }
            })
        // opts.mode === 'production'
    } else {
        return merge(config, {
            // 추가 배포용 옵션
            devtool: 'cheap-module-source-map',
            plugins: [
                // 빌드(build) 직전 `output.path`(`dist` directory) 내 기존 모든 파일 삭제
                new CleanWebpackPlugin()
            ]
        })
    }
}