const path = require("path");

const config = module.exports = {
    root: path.join(__dirname, "../"),
    PATH: {
        get output() {
            return path.join(config.root, "build");
        },
        get sources() {
            return path.join(config.root, "src");
        },
        get entry() {
            return ["babel-polyfill", path.join(this.sources, "app.ts")];
        },
        get node_modules() {
            return path.join(config.root, "node_modules");
        }
    },
};
