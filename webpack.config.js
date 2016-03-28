'use strict';

var webpack = require("webpack");

module.exports = {
    entry: {
        app: ['bootstrap-loader','./public/js/main.js'],
    },
    output: {
        path: __dirname + '/public',
        filename: "[name].js",
        chunkFilename: "[name].js",
    },  
    module: {
        loaders: [
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" }
        ]
    },    
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Tether: 'Tether',
            "window.Tether": "Tether"
        }),
        // new webpack.optimize.UglifyJsPlugin({
        // sourceMap: false,
        // mangle: false
        // })
    ]
};