// webpack里面最重要的四个东西；
// 入口、出口、loader、plugin；
// webpack是运行在node.js环境的,所以他的引入、导出都是遵循comon.js
// 引入node.js的path方法
const path = require('path')
// 引入webpack插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    entry: { //入口
        app: './src/main.js'
    },
    output: { //出口
        // // hash用于配合浏览器缓存策略，这是前端性能优化的一种方案
        filename: '[name][hash].bundle.js',
        // 指定打包结果的存放目录
        path: path.resolve(__dirname, 'dist'),
        //   publicPath:'/xxxx/'
    },
    // 配置热更新；
    devServer: {
        contentBase: './dist', //指定本地服务的静态资源根路径；
        hot: true, //开启热更新；
        // port:9000 //配置端口
        // proxy代理也是在这里配置
        proxy:{
            "/soso":{
                target:'https://c.y.qq.com',
                secure:false
            }
        }
    },

    plugins: [ //插件：
        new HtmlWebpackPlugin({ // 用于把打包后的入口.js文件插入到index.html文件中去
            template: './public/index.html',
        }),
        // new webpack.NameModulesPlugin(), //用于热更新；
        // new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [{
                test: /\.(.png|jpg|gif|svg)$/, // 打包图片文件
                use: [{
                    loader: 'file-loader'
                }]
            },
            {
                test: /\.css$/, // 打包css文件
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.scss$/, // 打包scss文件
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            },
            {
                test: /\.js$/, // 打包js文件
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}