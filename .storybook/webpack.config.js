module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(js|jsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [["react-app", { flow: false, typescript: false }]]
    }
  });
  config.resolve.extensions.push(".js", ".jsx");
  return config;
};
