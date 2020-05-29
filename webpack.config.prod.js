import path from "path";

export default {
  debug: true,
  devtool: "inline-source-map",
  noInfo: false,
  entry: [
    //application entry point
    path.resolve(__dirname, "src/index"), //will look for src/index.js
  ],
  target: "web", //could target to node if running on node
  output: {
    //where it should create our dev bundle (it's a in memory :)) so is a simulation
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [],
  module: {
    //file types to handle
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel"] },
      { test: /\.css$/, loaders: ["css"] },
    ],
  },
};
