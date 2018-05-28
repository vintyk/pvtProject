const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/app/index.ts')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            // {
            //     test: /\.less$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         'css-loader',
            //         'less-loader',
            //         'sass-loader'
            //     ]
            // },

            // {
            //     test: /\.sass$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 sourceMap: true
            //             }
            //         },
            //         {
            //             loader: 'postcss-loader',
            //             options: {
            //                 plugins: [
            //                     autoprefixer({
            //                         browsers: ['ie >= 8', 'last 2 version']
            //                     })
            //                 ],
            //                 sourceMap: true
            //             }
            //         },
            //         {
            //             loader: 'sass-loader',
            //             options: {
            //                 sourceMap: true
            //             }
            //         }
            //     ]
            // },

            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: [
                    'node_modules'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject: false,
            chunks: {
                head: {
                    css: 'style.css',
                    js: 'main.js'
                }
            }
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    devtool: 'source-map'
};