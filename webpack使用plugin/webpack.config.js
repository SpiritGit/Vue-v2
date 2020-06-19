const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry:'./src/main.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        // publicPath:'dist/'  
        //专门处理url类的东西，因为webpack打包会把url后的东西挪到dist下
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|jpg|gif|jpeg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:8192,
                            name:'img/[name].[hash:8].[ext]' //生成规范命名而不是32位hash值
                        },
                    }
                ]
            },
            {
                test:/\.m?ls$/,
                exclude:/(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presents:['es2015']
                    }
                }
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            }

        ]
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js' //按照此路径找vue，vue.esm.js包括complier
        }
    },
    plugins:[
        new webpack.BannerPlugin('版权归X所有'),
        new HtmlWebpackPlugin({
            template:'index.html'
        }),
        new uglifyJsPlugin()
    ]
}