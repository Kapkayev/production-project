export type buildMode = 'production' | 'development';

export interface buildPath {
    entry: string,
    build: string,
    html: string,
    src: string,
}

export interface buildOptions {
    mode: buildMode,
    paths: buildPath,
    isDev: boolean,
    port: number,
}

export interface buildEnv {
    mode: buildMode,
    port: number,
}