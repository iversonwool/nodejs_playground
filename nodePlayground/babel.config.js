module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current" // 指定运行环境为当前 Node.js 版本
        }
      }
    ]
  ],
  plugins: [
    ["@babel/plugin-transform-modules-umd", {
      exactGlobals: true,
      globals: {
        index: 'AnimalApi'
      }
    }]
  ],
};
