module.exports = {
  presets: [
    ['@babel/preset-env', {
      corejs: "3",
      useBuiltIns: "usage"
    }],
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/transform-runtime']
};
