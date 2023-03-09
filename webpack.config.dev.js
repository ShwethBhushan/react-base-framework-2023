const config = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: './js/bundle.js',
    path: __dirname + '/public',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/env', '@babel/react'],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
            loader: 'url-loader',
            options: {
                limit: 25000
            }
        }
     }
    ],
  },
};

module.exports = config;
