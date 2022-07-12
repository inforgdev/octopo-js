import nodeResolve from "rollup-plugin-node-resolve";

export default {
    input: "./src/main/index.js",
    output: {
        file: "./dist/octopo.min.js",
    },
    external: [
        "fs",
        "path",
    ],
    plugins: [
        nodeResolve(),
    ]
};