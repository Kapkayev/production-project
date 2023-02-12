import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { buildPath, buildEnv } from './config/build/types/config';

export default (env: buildEnv) => {

    const paths: buildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }
    
    const mode = env.mode || 'development';    
    const PORT = env.port || 3000;

    const isDev = mode === 'development';
    
    const config: webpack.Configuration = buildWebpackConfig({
        mode: mode,
        paths,
        isDev,
        port: PORT,
    });

    return config;
};