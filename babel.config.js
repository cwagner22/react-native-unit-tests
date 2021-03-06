module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  env: {
    test: {
      plugins: [
        [
          "@babel/plugin-proposal-class-properties",
          {
            loose: true
          }
        ],
        "rewire"
      ]
    }
  }
};
