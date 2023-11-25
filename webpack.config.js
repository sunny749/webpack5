const path=require('path');

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
    }]
    }
};
