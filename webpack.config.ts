import path from "path";
import { Configuration } from "webpack";
import TerserPlugin from "terser-webpack-plugin";
import TsConfigPathPlugin from "tsconfig-paths-webpack-plugin";

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
      cacheGroups: {
        modules: {
          name: "mod",
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
          enforce: true,
          chunks: "all",
          filename: "[name].bundle.js",
        },
        default: {
          reuseExistingChunk: true,
          priority: -100,
          filename: "app.js",
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
};
