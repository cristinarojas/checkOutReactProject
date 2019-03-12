/* Root file for import and export webpack configuration */

// Importing of chunks of webpack configuration, this is more flexible to manage, more organizate.
import devtool from './devtool'; // environment mode.
import module from './module'; // rules
import optimization from './optimization'; // budle split
import plugins from './plugins'; // plugins
import resolve from './resolve'; // script type extensions

// Exporting the chunks of webpack configuration.
export {
  devtool,
  module,
  optimization,
  plugins,
  resolve
};
