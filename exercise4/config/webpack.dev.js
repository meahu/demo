const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');//监控浏览器自动更新
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Manifest = require('webpack-manifest');

module.exports = {
    entry: {
        index: [
            path.join(__dirname, '../src/public/scripts/index.es'),
            path.join(__dirname, '../src/public/scripts/indexadd.js')
        ],
        tag: [
            path.join(__dirname, '../src/public/scripts/tag.es'),
            path.join(__dirname, '../src/public/scripts/star.es')
        ]
    },
    output: {
        filename: 'public/scripts/[name].js',
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
        new ExtractTextPlugin("public/css/[name].css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'public/scripts/common/vendor.min.js',
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
        new HtmlWebpackPlugin({ // Also generate a test.html 
            filename: './views/star.html',
            template: 'src/views/star.js',
            inject: false,
            chunks: ['vendor', 'index', 'tag'],
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html 
            filename: './widget/star.html',
            template: 'src/widget/star.html',
            inject: false,
        }),
        new Manifest({
	        cache: [
	          '../public/css/vendor.css', 
	        ],
	        timestamp: true,
	        filename:'cache.manifest', 
	        // 注意*星号前面用空格隔开 
	        network: [
	          'http://cdn.bootcss.com/ *',
//	          'http://localhost:35729/livereload.js',
	          'http://localhost:3000/ *'
	        ], 
	        headcomment: "koatesting", 
	        master: ['../views/layout.html']
	    })

    ]
}