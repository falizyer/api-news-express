const nodeExternals = require("webpack-node-externals");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const config = require("./config");

module.exports = {
    name: "server",
    devtool: "eval",
    target: "node",
    mode: "development",
    entry: config.PATH.entry,
    output: {
        path: config.PATH.output,
        filename: "index.js"
    },
    externals: [nodeExternals()],
    resolve: {
        extensions: [".js", ".ts", ".json"],
        modules: [config.PATH.node_modules, config.PATH.sources]
    },
    module: {
        rules: [
            {
                test: /\.(j?t)s$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
};
