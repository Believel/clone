// rollup.config.js
// commonjs   Node.js环境
var common = require('./rollup.js');

module.exports = {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        // 输出模块遵循CommonJS规范
        format: 'cjs',
        // When export and export default are not used at the same time, set legacy to true.
        // legacy: true,
        // 添加banner
        banner: common.banner,
    },
    plugins: [
        common.getCompiler()
    ]
};
