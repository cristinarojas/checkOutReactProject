/* File to import all webpack configuration root file */
import {
  devtool,
  module,
  optimization,
  plugins,
  resolve
} from './webpack/configuration';

export default {
  devtool,
  module,
  plugins,
  optimization,
  resolve
};
