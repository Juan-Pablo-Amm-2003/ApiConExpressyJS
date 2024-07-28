const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/App.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, "dist"), // Directorio de archivos estáticos
    port: 3000, // Puerto del servidor
    setupMiddlewares: (middlewares, devServer) => {
      // Puedes agregar middlewares personalizados aquí
      return middlewares;
    },
    hot: true, // Habilita el hot module replacement
  },
};
