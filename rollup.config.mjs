import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import path from 'path';
import terser from '@rollup/plugin-terser';
import dts from "rollup-plugin-dts";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: path.resolve('dist/cjs/index.js'),
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: path.resolve('dist/esm/index.js'),
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            postcss({
                plugins: [tailwindcss, autoprefixer],
                extract: true,
                minimize: true,
                sourceMap: true,
                inject: true,
            }),
            resolve(),
            commonjs(),
            typescript({
                tsconfig: './tsconfig.json',
            }),
            babel({
                babelHelpers: 'bundled',
                exclude: 'node_modules/**',
            }),
            terser(), // Minifies the bundle
        ],
        external: ['react', 'react-dom'],

    },
    {
        input: "dist/esm/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.css$/],
    },
];
