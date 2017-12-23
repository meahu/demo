var path = require('path');
var webpack = require("webpack");
var liveReloadPlugin = require('webpack-livereload-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: [
            path.join(__dirname, '../src/public/js/index.es'),
            path.join(__dirname, '../src/public/js/indexadd.js')
        ],
        tag: [
            path.join(__dirname, '../src/public/js/tags.es')
        ]
    },    // 入口
    output: {                               // 出口
        path: path.join(__dirname, '../build/'),         // 出口路径
        filename: "public/js/[name]-[hash:5].js"   // 出口文件
    },
    module: {
        // rules: [{
        //     test: /\.es$/,
        //     exclude: /(node_modules|bower_components)/,
        //     use: {
        //         loader: 'babel-loader',
        //         options: {
        //             presets: ['es2015', 'stage-0']
        //         }
        //     }
        // },
        // {
        //     test: /\.css$/,
        //     loaders: ExtractTextPlugin.extract({
        //         fallback: "style-loader",
        //         use: "css-loader"
        //     })
        // }]
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
    plugins: [                              // 插件
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"dev"'
            }
        }),
        new liveReloadPlugin({
            appendScriptTag: true
        }),
        new ExtractTextPlugin("public/css/[name]-[hash:5].css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'public/js/common/vendor-[hash:5].min.js'
        }),
        new HtmlWebpackPlugin({
            filename: './views/index.html',
            template: 'src/views/index.js',
            inject: false,
            chunks: ['vendor', 'index', 'tag']
        }),
        new HtmlWebpackPlugin({
            filename: './views/layout.html',
            template: 'src/widget/layout.html'
        }),
        new HtmlWebpackPlugin({
            filename: './widget/index.html',
            template: 'src/widget/index.html'
        }),
    ]
}