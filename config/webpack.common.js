const { resolve } = require('path');
// const tsconfig = require('../tsconfig.json');
// console.log(tsconfig.compilerOptions.paths);

module.exports = {
  entry: "../src",
  context: resolve(__dirname),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          "file-loader"
        ]
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".css", ".css", ".ts", ".tsx"],
    alias: {
      'classes': resolve(__dirname, '../src/classes'),
      'components': resolve(__dirname, '../src/components'),
      'hooks': resolve(__dirname, '../src/hooks'),
      'state': resolve(__dirname, '../src/state'),
      'styles': resolve(__dirname, '../src/styles'),
      'utilities': resolve(__dirname, '../src/utilities'),
      'Types': resolve(__dirname, '../src/types'),
    }
  },
  output: {
    path: `${resolve(__dirname)}/dist`,
    publicPath: "/",
    filename: "bundle.js"
  }
}