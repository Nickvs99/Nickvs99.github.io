const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "scss",
            patterns: [
                "./src/styles/_globals.scss",
                "./src/styles/_mixins.scss"
            ],
        }
    }
});
