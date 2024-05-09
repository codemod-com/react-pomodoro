var debug = process.env.NODE_ENV !== "production";
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, "app"),
  devtool: debug ? "inline-source-map" : null,
  entry: "./js/app.js",
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    path: __dirname + "/app/",
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html'})
]
};
