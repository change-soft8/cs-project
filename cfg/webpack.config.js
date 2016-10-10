/*eslint-disable no-var */

var fs = require('fs')
var path = require('path')
var webpack = require('webpack')
var srcPath = path.resolve(__dirname, '../src')

module.exports = {

    devtool: 'inline-source-map',

    entry: fs.readdirSync(srcPath).reduce(function(entries, dir) {
        if (fs.statSync(path.join(srcPath, dir)).isDirectory() && dir != 'style')
            entries[dir] = path.join(srcPath, dir, 'app.js')
        return entries
    }, {}),

    output: {
        path: __dirname + '/__build__',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/__build__/'
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.css$/, loader: 'style!css' }
        ]
    },

    // Expose __dirname to allow automatically setting basename.
    context: __dirname,
    node: {
        __dirname: true
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('shared.js'),
        // 根据文件大小排序
        new webpack.optimize.OccurrenceOrderPlugin(),
        // 对文件进行压缩
        new webpack.optimize.UglifyJsPlugin({ minimize: true }),
        // 删除重复依赖包
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ]

}
