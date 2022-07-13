import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default [
    {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                targets: {
                    // Browsers that support type="module"
                    browsers: [
                        'Chrome >= 61',
                        'Safari >= 11',
                        'iOS >= 11',
                        'Firefox >= 60',
                        'Edge >= 79'
                    ]
                }
            }
        }
    },
    {
        test: /\.css/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
            },
            {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        config: 'postcss.config.js'
                    }
                }
            }
        ]
    },
    {
        test: /\.html$/,
        use: 'raw-loader'
    }
];