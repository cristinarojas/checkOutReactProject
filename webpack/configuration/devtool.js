/* File to detect the mode */

// Saving production.
const isProduction = process.env.NODE_ENV === 'production';

// If not is production export -> cheap-module-source-map
// or if is production export -> ''.
export default !isProduction ? 'cheap-module-source-map' : '';
