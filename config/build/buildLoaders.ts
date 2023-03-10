import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { buildOptions } from './types/config';

export function buildLoaders({isDev}: buildOptions): webpack.RuleSetRule[]{

    const svgLoader = {
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    }

    const fileLoader = {
      test: /\.(png|jpe?g|gif|woff2|woff)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    }

    const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        {
            loader: "css-loader",
            options: {
                modules: {
                    auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                    localIdentName: isDev
                        ? "[path][name]__[local]--[hash:base64:8]"
                        : "[hash:base64:8]",
                },
            },
        },
        {
          loader: "sass-loader",
        },
      ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader,
    ]
}