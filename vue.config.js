module.exports = {
    outputDir : 'dist',
    // publicPath: '/pages/dashboard/',
    filenameHashing: true,
    productionSourceMap: false,    
   // devServer: {
    // proxy:  'https://api.razorpay.com',
    //   proxy: {
    //         target: 'https://api.razorpay.com/',
    //         ws: true,
    //         changeOrigin: true  
    //   }
    //  }
    //},
    devServer: {
        proxy: {  
          '^/': {  
            target: 'https://api.razorpay.com',
            ws: true,
            changeOrigin: true,
        },
      },
      },
    configureWebpack: {

        module: {
            rules: [
                { 
                }
            ]
        },
        plugins: [
        ]
    }
}