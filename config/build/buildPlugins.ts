import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { buildOptions } from './types/config';


export function buildPlugins({paths}: buildOptions): webpack.WebpackPluginInstance[]{
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ 
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        })
    ]
}