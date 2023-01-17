var babel = require('rollup-plugin-babel');

var pkg = require('../package.json');

var version = pkg.version;

var banner = 
`/*!
 * ${pkg.name} ${version}
 * Licensed under MIT
 */
`;

function getCompiler(opt) {
    // 兼容方案
    return babel({
        babelrc: false,
        presets: [
            [
                '@babel/preset-env',
                {
                    'targets': {
                        'browsers': 'last 2 versions, > 1%, ie >= 8, Chrome >= 45, safari >= 10',
                        'node': '0.12'
                    },
                    'modules': false,
                    // 代表松散模式，为true能够更好地兼容IE8浏览器
                    'loose': false
                }
            ]
        ],
        plugins: [
            [
                '@babel/plugin-transform-runtime',
                {
                    "corejs": 2,
                    'helpers': false,
                    'regenerator': false
                }
            ]
        ],
        runtimeHelpers: true,
        exclude: 'node_modules/**'
    });
}

exports.name = 'clone';
exports.banner = banner;
exports.getCompiler = getCompiler;
