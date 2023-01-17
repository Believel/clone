# `package.json`属性解析
```js
{
  // main 字段，定义是当前模块对应的逻辑入口文件，当该模块被其他模块引用时，Node.js会找到main字段对应的文件。
  "main": "dist/index.js",

  // jsnext和module两个字段来表示自己是否支持ESModule,目前流行的是module，也可以两个都设置
  "jsnext:main": "dist/index.esm.js",
  "module": "dist/index.esm.js",

  // 让使用库的项目能够按需加载
  "sideEffects": false,

  "scripts": {
    "build:self": "rollup -c config/rollup.config.js",
    "build:esm": "rollup -c config/rollup.config.esm.js",
    "build:aio": "rollup -c config/rollup.config.aio.js",
    "build": "npm run build:self && npm run build:esm && npm run build:aio",
    "test": "cross-env NODE_ENV=test nyc mocha",
    "test:puppeteer": "node test/browser/puppeteer.js"
  },

  "devDependencies": {
    // ES2015转化
    "@babel/core": "^7.1.2",
    "rollup-plugin-babel": "^4.0.3",
    "@babel/preset-env": "^7.1.0",
    // babel集成了core-js，通过编译自动将我们用的API转换成core-js方式
    "@babel/plugin-transform-runtime": "^7.1.0",
    "@babel/register": "^7.0.0",
    "babel-plugin-istanbul": "^5.1.0",
    "colors": "^1.4.0",
    "cross-env": "^5.2.0",
    // 是一个BDD体系的断言库，兼容性非常好，甚至可以支持IE6浏览器
    "expect.js": "^0.3.1",
    // Mocha 推荐使用Chai作为断言库。由于Chai不能兼容IE8浏览器，因此需要使用一个断言库
    "mocha": "^3.5.3",
    // 代码覆盖率检查
    "nyc": "^13.1.0",
    "ora": "^5.1.0",
    // 自动化测试
    "puppeteer": "^5.5.0",
    "rollup": "^0.57.1",
    "rollup-plugin-commonjs": "^8.3.0",
    "rollup-plugin-node-resolve": "^3.0.3"
  },
  "dependencies": {
    "@babel/runtime-corejs2": "^7.12.5",
    "@babel/runtime-corejs3": "^7.12.5",
    "core-js": "^3.7.0"
  }
}

```