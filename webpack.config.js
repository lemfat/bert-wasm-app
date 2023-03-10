const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".wasm"]
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/index.html")
    }),
    new WasmPackPlugin({
      crateDirectory: path.join(__dirname, "maskedlm")  // RustプロジェクトのCargo.tomlがあるディレクトリを指定
    })
  ],
  experiments: {
    asyncWebAssembly: true,  // wasm-bindgenで生成されたコードは全て動的モジュールとして扱う必要があるため
  },
};