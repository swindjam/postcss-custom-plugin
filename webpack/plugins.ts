import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import PostCSSAssetsPlugin from 'postcss-assets-webpack-plugin';
import postcssSelectorPrefix from '../postcss/postcss-selector-prefix';

export default [
    new MiniCssExtractPlugin({
        filename: 'css/[name].min.css',
        chunkFilename: 'css/[name].min.css'
    }),
    new HTMLWebpackPlugin({
        filename: 'html/index.html',
        inject: 'body',
        template: './src/template.ejs'
    }),
    new PostCSSAssetsPlugin({
        test: /\.css$/,
        log: false,
        plugins: [postcssSelectorPrefix]
    })
];