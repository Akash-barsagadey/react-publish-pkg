var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/boilerplate-component.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'boilerplate-component.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}