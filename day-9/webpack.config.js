console.log(process.env.NODE_ENV);

const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const watch = mode !== "production";

module.exports = {
  mode: mode,
  watch: watch,
  module: {
    rules: [{
      test: /\.js/,
      exclude: /node_modules/,
      loader: "babel-loader"
    },{
      test: /\.css/,
      exclude: /node_modules/,
      loader: "style-loader!css-loader"
    }]
  }
}