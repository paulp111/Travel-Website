const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js', //Main Page
        secondpage: './src/secondpage.js', //2nd Page
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs'),
    },
    
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
