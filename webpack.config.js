const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // 진입점
    entry: {
        app: path.join(__dirname, 'main.js')
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
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}