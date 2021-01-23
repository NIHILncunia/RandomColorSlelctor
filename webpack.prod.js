const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    app: path.resolve(__dirname, 'src', 'index'),
  },
  resolve: {
    extensions: [ '.js', '.jsx', ],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@css': path.resolve(__dirname, 'src/assets/css/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@reducers': path.resolve(__dirname, 'src/reducers/'),
      '@contexts': path.resolve(__dirname, 'src/contexts/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ [
              '@babel/preset-env', {
                targets: {
                  esmodules: true,
                },
              }, ],
              '@babel/preset-react',
            ],
            plugins: [],
          },
        },
      },
      {
        test: [ /\.s[ac]ss$/i, /\.css$/i, ],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
};