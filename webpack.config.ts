import path from "path";
import { Configuration } from "webpack";
import TerserPlugin from "terser-webpack-plugin";
import TsConfigPathPlugin from "tsconfig-paths-webpack-plugin";
import { ObfuscatorCode } from "./obfuscator";

export default <Configuration>{
  entry: "./src/main.ts",
  mode: process.env.STAGE,
  target: ["node", "es5"],
  module: {
    rules: [
      {
        test: /\.ts/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
    ],
  },
  output: {
    filename: "[name].app.js",
    path: path.resolve(__dirname, `dist/${process.env.STAGE}`),
    publicPath: "/",
    libraryTarget: "commonjs2",
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
        parallel: true,
      }),
    ],
    splitChunks: {
      chunks: "all",
      minSize: 1024 * 2,
      maxSize: 1024 * 2,
      minChunks: 1,
      enforceSizeThreshold: 1024 * 2,
      name: "m",
      filename: "[name].app.js",
      cacheGroups: {
        modules: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
          enforce: true,
          chunks: "all",
        },
        default: {
          reuseExistingChunk: true,
          priority: -100,
          enforce: true,
          chunks: "all",
        },
      },
    },
  },
  resolve: {
    extensions: [".js", ".ts", ".json"],
    plugins: [
      new TsConfigPathPlugin({
        configFile: path.resolve(__dirname, "tsconfig.json"),
      }),
    ],
  },
  devtool:
    process.env.STAGE === "development" ? "inline-source-map" : undefined,
  stats: {
    errorDetails: true,
  },
  plugins: [new ObfuscatorCode()],
  externals:
    process.env.STAGE === "development"
      ? undefined
      : {
          express: ["express"],
        },
};
