const path = require('path');
const webpack = require('webpack');

module.exports = [
    {
        name: 'client',
        target: 'web',
        entry: [
            'webpack-hot-middleware/client',
            'react-hot-loader/patch',
            './src/client.jsx'
        ],
        output: {
            path: path.join(__dirname, 'static'),
            filename: 'client.js',
            publicPath: '/static/'
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        devtool: 'cheap-module-eval-source-map',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules\/)/,
                    use: [
                        { loader: 'babel-loader' }
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        { loader: 'style-loader' },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[folder]__[local]__[hash:base64:5]',
                                sourceMap: true
                            }
                        },
                        { loader: 'sass-loader' }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': '"development"' } }),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ]
    },
    {
        name: 'server',
        target: 'node',
        entry: './src/server.jsx',
        output: {
            path: path.join(__dirname, 'static'),
            filename: 'server.js',
            libraryTarget: 'commonjs2',
            publicPath: '/static/'
        },
        devtool: 'source-map',
        resolve: {
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules\/)/,
                    use: [
                        { loader: 'babel-loader' }
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        { loader: 'isomorphic-style-loader' },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[folder]__[local]__[hash:base64:5]',
                                sourceMap: true
                            }
                        },
                        { loader: 'sass-loader' }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': '"development"' } }),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ]
    }
]