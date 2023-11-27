const path=require('path');
const TerserPlugin=require('terser-webpack-plugin')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    entry:'./src/index.js',
    output:{
        filename:'bundle.[contenthash].js',
        path:path.resolve(__dirname,'./dist'),
        publicPath:''
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
    },
    {
        test:/\.hbs$/,
        use:[
            'handlebars-loader'
        ]
    }
]
    },
    plugins:[
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename:'styles.[contenthash].css'
        }),
        new CleanWebpackPlugin(
            {   
                cleanOnceBeforeBuildPatterns:['**/*',path.join(process.cwd(),'build/**/*')]
            }
        ),
        new HtmlWebpackPlugin({
            title:'hello world',
            // filename:'subfolder/custom_file.html',
            template:'src/index.hbs',
            description:'some description',
        })
    ]
};
