module.exports = {
  "extends": [
    "@hanchayi/eslint-config-basic",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": [
    // 添加一些typescript的规则
    // https://zhuanlan.zhihu.com/p/295291463
    "@typescript-eslint"
  ],
  // 将TypeScript AST转换成 ESTree
  // https://www.jianshu.com/p/ade75072c70a
  "parser": "@typescript-eslint/parser",

}

