import path from "path";
import webpack from "webpack";

export default {
  debug: true,
  devtool: "source-map",
  noInfo: false,
  entry: [
    //application entry point
    path.resolve(__dirname, "src/index"), //will look for src/index.js
  ],
  target: "web", //could target to node if running on node
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    // Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

    //Minify JS
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    //file types to handle
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel"] },
      { test: /\.css$/, loaders: ["css"] },
    ],
  },
};
