// rollup.config.aio.js
// umd  支持浏览器（script、AMD、CMD）

// 目的是将依赖的库打包进来
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');

var common = require('./rollup.js');

module.exports = {
    input: 'src/index.js',
    output: {
        file: 'dist/index.aio.js',
        // 表示输出模块遵循UMD规范
        format: 'umd',
        // When export and export default are not used at the same time, set legacy to true.
        // legacy: true,
        // name配置的值作为全局变量和AMD规范的模块名
        name: common.name,
        banner: common.banner,
    },
    plugins: [
        nodeResolve({
            main: true,
            extensions: ['.js']
        }),
        commonjs({
            include: 'node_modules/**',
        }),
        common.getCompiler(),
    ]
};
