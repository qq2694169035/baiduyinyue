module.exports={
    devServer: {
        open: true,
        contentBase: 'src',
        port: 3049,
        hot: true,
        proxy: {
            // "/^api":{
            //     target:"http://tingapi.ting.baidu.com",
            //     changeOrigin: true
            // }
            "/v1/restserver/ting": {
                target: "http://tingapi.ting.baidu.com",
                changeOrigin: true
            },
        },
        proxy: {

            "/v1/restserver/ting": {
                target: "http://musicapi.taihe.com",
                changeOrigin: true
            },
        },
    }
}