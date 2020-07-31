var path = require('path');

module.exports = {
    resolve: {
        extensions: [".js", ".jsx"]
    },
    mode: 'production',
    entry: './src/lib/index.js',
    externals: {
        react: 'commonjs react',
        'react-dom': 'commonjs react-dom',
      },
    output: {
        path: path.resolve('dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
              }
        ]
    }
}