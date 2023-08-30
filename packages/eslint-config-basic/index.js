module.exports = {
  extends: './standard',
  // 代码运行的环境
  "env": {
    "es6": true,
    "node": true, //  Node.js 全局变量和 Node.js 作用域。
    "browser": true, // window等全局变量可直接使用
  },
  // 忽略的文件
  ignorePatterns: [
    'CHANGELOG.md',
    'dist',
    'coverage',
    'public',
    'LICENSE*',
    // lock
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
  ]
}