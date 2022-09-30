const path = require("path");
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      // load which style file you want to import globally
      patterns: [path.resolve(__dirname, "./src/styles/_variables.scss")],
    },
  },
});
