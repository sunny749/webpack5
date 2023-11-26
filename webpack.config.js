const path=require('path');
const TerserPlugin=require('terser-webpack-plugin')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')

module.exports={
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'./dist'),
        publicPath:'dist/'
    },
    mode:'none',
    module:{
        rules:[{
            test:/\.(jpg|png)$/,
            type:'asset',
            //to change the default 8kb size in assert mode 
            // parser:{
            //     dataUrlCondition:{
            //         maxSize:700*1024
            //     }
            // }
    },{
        test:/\.(txt)$/,
        type:'asset/source'
    },
    {
        test:/\.css/,
        use:[MiniCssExtractPlugin.loader,'css-loader']
    },
    {
        test:/\.scss/,
        use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
    },
    {
        test:/\.js$/,
        exclude:/node_modules/,
        use:{
            loader: 'babel-loader',
            options:{
                presets:['@babel/env'],
                // plugin:['@babel/plugin-proposal-class-properties']
            }
        }
    }
]
    },
    plugins:[
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename:'styles.css'
        })
    ]
};
