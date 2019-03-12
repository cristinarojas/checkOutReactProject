/* In this file: we are calling all the plugins that will be manage our project. */

// Dependencies.
import HtmlWebPackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

// Saving production.
const isProduction = process.env.NODE_ENV === 'production';

// HtmlWebPackPlugin is to load the html code.
const plugins = [
  new HtmlWebPackPlugin({
    title: 'Asana pet adoption',
    template: './src/index.html',
    filename: './index.html',
    favicon:  './src/shared/images/pet.ico',
  })
];

 // if not is production.
plugins.push(
  new MiniCssExtractPlugin({
    chunkFilename: '[id].css',
    filename: '[name].css'
  }),
  new WebpackNotifierPlugin({
    title: 'React'
  })
);

if (isProduction) {
  plugins.push(new BundleAnalyzerPlugin());
}

export default plugins;
