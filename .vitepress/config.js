import appConfig from "../src/docs/appConfig.js";
import themeConfig from "../src/docs/themeConfig.js";

export default {
    base: '/octopo-js/',
    srcDir: './src/docs/views/',
    outDir: './dist/docs',
    ...appConfig,
    themeConfig,
};