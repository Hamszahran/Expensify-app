const path = require('path');

module.exports = {
entry: './src/app.js',
output: {
    path: path.join(__dirname,'public'),
    filename: 'bundle.js'
},
module:{
    rules:[{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
    },{
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'

        ]
    }]
},

    devServer: {
        static: {
          directory: path.join(__dirname, 'public')
        },

        historyApiFallback : true,

      },

    mode: 'development',

};
const config = {
    devtool: 'cheap-module-eval-source-map'
};
 