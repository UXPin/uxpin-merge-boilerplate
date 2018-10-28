const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: ["./src/index.js"],
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js",
      publicPath: "/"
    },
    resolve: {
      modules: [__dirname, "node_modules"],
      extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.svg$/,
          exclude: /node_modules/,
          loader: 'svg-react-loader'
        },
        {
          test: /\.tsx?$/, 
          loader: "awesome-typescript-loader"
        },
        {
          use: {
            loader: "babel-loader",
            options: {
              babelrc: false,
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['emotion']
            }
          },
          test: /\.js?$/,
          exclude: /node_modules/
        },
        { 
          enforce: "pre", 
          test: /\.js$/, 
          loader: "source-map-loader" 
        }
      ]
    }
};