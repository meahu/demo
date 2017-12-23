var path = require('path');
var webpack = require("webpack");
var liveReloadPlugin = require('webpack-livereload-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    entry: {
        index: [
            path.join(__dirname, '../src/public/js/index.es'),
            path.join(__dirname, '../src/public/js/indexadd.js')
        ],
        tags: [
            path.join(__dirname, '../src/public/js/tags.es')
        ]
    },    // 入口
    output: {                               // 出口
        path: path.join(__dirname, '../build/'),         // 出口路径
        filename: "public/js/[name]-[hash:5].js"   // 出口文件
    },
    module: {
        rules: [{
            test: /\.es$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'stage-0']
                }
            }
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }]
    },
    plugins: [                              // 插件
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"prod"'
            }
        }),
        new liveReloadPlugin({
            appendScriptTag: true
        }),
        new ExtractTextPlugin("public/css/[name]-[hash:5].css"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'public/js/common/vendor-[hash:5].min.js'
        })
    ]
}