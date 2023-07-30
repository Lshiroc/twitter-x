const path = require('path'); 
const CopyPlugin = require('copy-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        popup: path.resolve('./src/popup/popup.tsx'),
    },
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                use: "ts-loader",
                test: /\.tsx$/,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { 
                    from: path.resolve('src/manifest.json'), 
                    to: path.resolve('dist'),
                },
            ],
        }),
        new HTMLPlugin({
            title: "ReactJS Extension",
            filename: "popup.html",
            chunks: ['popup']
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js'
    }
}