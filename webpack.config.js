const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "bundle.js",
    },
    plugins: [
        new CopyPlugin({
          patterns: [
            { from: "node_modules/three/examples/jsm/libs/ammo.wasm.js", to: "ammo.wasm.js" },
            { from: "node_modules/three/examples/jsm/libs/ammo.wasm.wasm", to: "ammo.wasm.wasm" },
          ],
        }),
      ],
};