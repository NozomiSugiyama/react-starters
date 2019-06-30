const { DefinePlugin }     = require("webpack");
const CopyWebpackPlugin    = require("copy-webpack-plugin");
const path                 = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin    = require('html-webpack-plugin');
// const UglifyJsPlugin       = require("uglifyjs-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
    entry: "./src/index.tsx",
    mode: NODE_ENV || "production",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src/'),
        },
        modules: ["node_modules"],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.(jsx?|tsx?)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },
    optimization: {
        ...(NODE_ENV === "production" ? {
            splitChunks: {
                cacheGroups: {
                    appRoot: {
                        test: /src\/Root.tsx/ig,
                        name: "app-root",
                        chunks: "initial",
                        enforce: true
                    },
                    react: {
                        test: /node_modules\/react/,
                        name: "react.vendor",
                        chunks: "initial",
                        enforce: true
                    },
                }
            }
        }
      :                                 {}
        )
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new DefinePlugin(
            Object.entries({ ...process.env, VERSION: require("./package.json").version })
                .map(x => ({["process.env." + x[0]]: JSON.stringify(x[1])}))
                .reduce((x, y) => Object.assign(x, y), {})
        ),
        new HtmlWebpackPlugin({
            hash: true,
            title: "Service Name" + (NODE_ENV === "development" ? " - dev" : ""),
            minify: (
                NODE_ENV === "production" ? {
                    caseSensitive: true,
                    collapseBooleanAttributes: true,
                    collapseInlineTagWhitespace: true,
                    collapseWhitespace: true,
                    decodeEntities: true,
                    preserveLineBreaks: true,
                    useShortDoctype: true
                }
              :                                         false
            ),
            filename: "index.html",
            template: "src/index.html"
        }),
        new CopyWebpackPlugin([ { from: './assets', to: 'assets' } ])
    ],
    devServer: {
        open: true,
        historyApiFallback: true
    }
};
