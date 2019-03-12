import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
/* File to split the bundles using this file as webpack mode */

export default {
  minimizer: [
    new OptimizeCSSAssetsPlugin()
  ],
  splitChunks: {
    cacheGroups: {
      default: false,
      commons: {
        test: /node_modules/,
        name: 'vendor',
        chunks: 'all'
      }
    }
  }
}
