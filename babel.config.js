module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".android.js",
            ".android.tsx",
            ".ios.js",
            ".ios.tsx"
          ],
          root: ["./src"],
          alias: {
            _api: ["./src/api"],
            _components: ["./src/components"],
            _hoc: ["./src/hoc"],
            _mobx: ["./src/mobx"],
            _screens: ["./src/screens"],
            _types: ["./src/types"],
            _utils: ["./src/utils"]
          }
        }
      ]
    ]
  };
};
