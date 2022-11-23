module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://47.244.166.242:37100',
                changeOrigin: true
            },
        }
        
    },
   
}
//publicPath:'/app/'




