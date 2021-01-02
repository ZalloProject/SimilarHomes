const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, "/client/index.jsx"),
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.css/,
        loader:
          "style-loader!css-loader?modules=true&localIdentName=[name]__[local]__[hash:base64:5]",
        include: path.join(__dirname, "/client")
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/client/dist")
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ]
};
