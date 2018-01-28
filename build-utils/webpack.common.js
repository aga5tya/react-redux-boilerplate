'use strict';

const webpack = require('webpack');
const htmlWebpack = require('html-webpack-plugin');

const commonPaths = require('./common-paths');
console.log(commonPaths.srcPath);
module.exports = {
    // Entry: First file webpack starts(your dependency graph)
    entry: {
        app: commonPaths.inputPath,
    },
    // Output: How and where to put bundles and format them
    output: {
        filename: 'bundle.js',
        path: commonPaths.outputPath,
    },
    // Loaders:  How to treat files before adding to dependency graphs
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                include: [commonPaths.inputPath],
                loader: ['babel-loader'],
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-runtime'],
                },
                options: {
                    cacheDirectory: true,
                },
            },
        ],
        rules: [
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000,
                        },
                    },
                ],
            },
        ],
    },
    // Plugins: Extremely Customisable
    plugins: [new webpack.ProgressPlugin(), new htmlWebpack()],
};
