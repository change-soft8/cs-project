const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const SRC_PATH = path.resolve(__dirname, '../src');
const BUILD_PATH = path.resolve(__dirname, '__build__/');
const INDEX_FILE = path.resolve(__dirname, 'index.html');
const exec = require('child_process').exec;

module.exports = {

    devtool: 'inline-source-map',

    entry: fs.readdirSync(SRC_PATH).reduce(function(entries, dir) {
        if (fs.statSync(path.join(SRC_PATH, dir)).isDirectory() && dir != 'style' && dir != 'config')
            entries[dir] = path.join(SRC_PATH, 'app.js')
        return entries
    }, {}),

    output: {
        path: __dirname + '/__build__',
        filename: '[name].[hash].page.js',
        chunkFilename: '[id].[chunkhash].chunk.js',
        publicPath: '/__build__/'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },

    // Expose __dirname to allow automatically setting basename.
    context: __dirname,
    node: {
        __dirname: true
    },
    plugins: [
        //共享文件
        new webpack.optimize.CommonsChunkPlugin('shared.[hash].js'),
        // 根据文件大小排序
        new webpack.optimize.OccurrenceOrderPlugin(),
        // 对文件进行压缩
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }),
        // 删除重复依赖包
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),

        //删除过期文件
        function() {

            // 删除过期的 shared 文件
            exec('rm -rf ' + BUILD_PATH + '/shared*.js', function(err, out) {
                console.log(out);
                err && console.log(err);
            });
            exec('rm -rf ' + BUILD_PATH + '/*.page.js', function(err, out) {
                console.log(out);
                err && console.log(err);
            });

            // 插件执行完毕
            this.plugin('done', stats => {

                console.error('webpack plugin done: ' + JSON.stringify(arguments));
                // 读取 首页 html
                fs.readFile(INDEX_FILE, (err, data) => {
                    // 获得 html 文本
                    var html = data.toString();
                    // 替换 shared.hash.js 文本
                    html = html.replace(/shared\.[^\.]+\.js/, 'shared.' + stats.hash + '.js');
                    //替换page文本
                    html = html.replace(/[^\.]+\.page\.js/g, stats.hash + '.page.js');
                    // 将新值，重写入首页
                    fs.writeFile(INDEX_FILE, html, err => {
                        !err && console.log('Set has success: ' + stats.hash);
                    });
                });
            });
        }
    ],
    // CDN 加载的外部文件
    externals: {
        // react 使用cdn加载
        'react': 'React',
        // react-dom 使用cdn加载
        'react-dom': 'ReactDOM',
        // react 路由
        'react-router': 'ReactRouter'
    }

}
