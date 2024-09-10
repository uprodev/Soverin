"use strict";

const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');


const options = {
  title: "Soverin",
  meta: {
    charset: {
      charset: "UTF-8",
    },
    viewport: {
      name: "viewport",
      content: "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0",
    },
    edge: {
      httpEquiv: "X-UA-Compatible",
      content: "ie=edge",
    },
  },
};

module.exports = {
  mode: "development",
  entry: "./src/js/main.js",
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Очищает папку dist перед сборкой
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 8080,
    hot: true,
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new HtmlWebpackPlugin({
      title: options.title,
      filename: "index.html",
      template: "./src/index.html",
      meta: options.meta,
      inject: 'body',
      minify: false,
    }),
    new HtmlWebpackPlugin({
      title: options.title,
      filename: "home.html",
      template: "./src/home.html",
      meta: options.meta,
      inject: 'body',
      minify: false,
    }),
    new HtmlWebpackPlugin({ title: options.title, filename: "isp.html", template: "./src/isp.html", meta: options.meta, minify: false, }),
    new HtmlWebpackPlugin({ title: options.title, filename: "smb.html", template: "./src/smb.html", meta: options.meta, minify: false, }),
    new HtmlWebpackPlugin({ title: options.title, filename: "resellers.html", template: "./src/resellers.html", meta: options.meta, minify: false, }),
    new HtmlWebpackPlugin({ title: options.title, filename: "pricing.html", template: "./src/pricing.html", meta: options.meta, minify: false, }),
    new HtmlWebpackPlugin({ title: options.title, filename: "features.html", template: "./src/features.html", meta: options.meta, minify: false, }),
    new HtmlWebpackPlugin({ title: options.title, filename: "blog.html", template: "./src/blog.html", meta: options.meta, minify: false, }),
    new HtmlWebpackPlugin({ title: options.title, filename: "article.html", template: "./src/article.html", meta: options.meta, minify: false, }),
    new HtmlWebpackPlugin({ title: options.title, filename: "team.html", template: "./src/team.html", meta: options.meta, minify: false, }),
    new HtmlWebpackPlugin({ title: options.title, filename: "faq.html", template: "./src/faq.html", meta: options.meta, minify: false, }),
    new HtmlWebpackPlugin({ title: options.title, filename: "technical.html", template: "./src/technical.html", meta: options.meta, minify: false, }),
    new HtmlWebpackPlugin({ title: options.title, filename: "help.html", template: "./src/help.html", meta: options.meta, minify: false, }),
    new HtmlWebpackPlugin({ title: options.title, filename: "help2.html", template: "./src/help2.html", meta: options.meta, minify: false, }),
    new HtmlWebpackPlugin({ title: options.title, filename: "conditions.html", template: "./src/conditions.html", meta: options.meta, minify: false, }),
    new HtmlWebpackPlugin({ title: options.title, filename: "privacy.html", template: "./src/privacy.html", meta: options.meta, minify: false, }),
    new FaviconsWebpackPlugin({
      logo: "./src/favicons/favicon.png",
      favicons: {
        appName: "",
        appShortName: "",
        appDescription: "",
        developerName: "Name",
        dir: "auto",
        lang: "en-US",
        version: "1.0.0",
        logging: false,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          favicons: true,
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: "css/main.css", // Все стили будут в этом файле
    }),
  ],
  module: {
    rules: [

      {
        test: /.(jpg|png|svg|gif|mp4)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /.(ttf|woff|woff2)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            minimize: false,
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader, // Извлекает стили в отдельный файл
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
};
