var path = require('path');

module.exports = {
    entry:
      [
        path.join(__dirname, 'index.js')
      ]
    ,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'build.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            },
        ]
    }
}
