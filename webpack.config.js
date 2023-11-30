const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, "src/script.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Weather App',
            filename: 'index.html',
            template: 'src/index.html',
        }),
    ]
}