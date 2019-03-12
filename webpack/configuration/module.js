/* In this file we are creating all our rules that will manage our project */
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// Saving production.
const isProduction = process.env.NODE_ENV === 'production';

// Rules to load js or jsx with babel-loader.
const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: 'babel-loader'
  },
  {
    test: /\.(png|jpg|gif|jpeg)$/,
    use: [
      {
        loader: 'file-loader',
        options: {}
      }
    ]
  }
];

rules.push({
  test: /\.scss$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        modules: true,
        localIdentName: '[local]--[hash:base64:5]',
      }
    },
    "sass-loader"
  ]
});

export default {
  rules
};
