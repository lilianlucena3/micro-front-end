const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:9001/',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        port: 9001, 
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'listar',
            filename: 'remoteEntry.js',
            exposes: {
                './ListarClientesApp' : path.resolve(__dirname, 'src', 'components', 'ListarClientes'),
            }
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_mudules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}