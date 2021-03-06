const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [
        './dev/main.js'
    ],
    watch: true,
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000,
        ignored: /node_modules/
    },
    devtool: 'source-maps',
    devServer: {
        contentBase: path.join(__dirname, 'dev'),
        watchContentBase: true,
        hot: true,
        open: true,
        inline: true
    },
    plugins : [
        new HtmlWebpackPlugin({
            title: 'Mini Custom Components',
            template: path.resolve('./dev/index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            ["@babel/plugin-proposal-class-properties", { "loose": true }]
                        ]
                    }
                }
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: './images',
                        name: "[name].[ext]"
                    }
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    }
};