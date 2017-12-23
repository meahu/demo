const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');//监控浏览器自动更新
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: [
            path.join(__dirname, '../src/public/scripts/index.es'),
            path.join(__dirname, '../src/public/scripts/indexadd.js')
        ],
        tag: [
            path.join(__dirname, '../src/public/scripts/tag.es')
        ]
    },
    output: {
        filename: 'public/scripts/[name]-[hash:5].js',
        path: path.join(__dirname, '../build/')
    },
    module: {
        loaders: [
            {
                test: /\.es$/,
                exclude: /(node_modules|bower_components)/,
                loaders: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-0']
                    }
                }
            },
            {
                test: /\.css$/,
                loaders: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"dev"'
            }
        }),

        new LiveReloadPlugin({ appendScriptTag: true }),//将<LiveReload>的script自动加入<head>中
        new ExtractTextPlugin("public/css/[name]-[hash:5].css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'public/scripts/common/vendor-[hash:5].min.js',
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html 
            filename: './views/layout.html',
            template: 'src/widget/layout.html',
            inject: false,
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html 
            filename: './views/index.html',
            template: 'src/views/index.js',
            inject: false,
            chunks: ['vendor', 'index', 'tag'],
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html 
            filename: './widget/index.html',
            template: 'src/widget/index.html',
            inject: false,
        }),

    ]
}