/**
 * Created by pengchaoyang on 2018/3/14
 */
const webpack=require('webpack')


module.exports={
    devtool: 'eval-source-map',                  //配置生成Source Maps，选择合适的选项
    entry:{
        filename:__dirname+"/app.js"        //入口文件
    },
    output:{
        path:__dirname+"/public",                //输出位置
        filename:"bundle.js"
    },
    module:{
        //在规则中，属性 test, include, exclude 和 resource 对 resource 匹配，并且属性 issuer 对 issuer 匹配。
        rules:[
            //数组元素是一个rule对象
            {
                test:/\.json$/,
                use:[
                    //元素是一个UseEntry
                    {
                        loader:'json-loader',     //必须
                        options: {                //可选

                        }
                    },
                ]
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader:'babel-loader',
                        // 可以提取出来放在.babelrc 文件里
                        options:{                    //历史别名query ，值可以传递到 loader 中，将其理解为 loader 选项。
                            presets:['es2015','react']
                        }
                    }
                ]
            },

        ],
    },
    plugins:[

    ]
}
