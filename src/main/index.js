import { generator, generate, generateMatches, prod } from "./core/generator.js";
import { tmpl, render } from "./core/tmpl.js";
import * as langs from "./langs/index.js";
import * as errors from "./core/errors.js";

export {
    generator, generate, generateMatches, prod,
    tmpl, render,
    langs,
    errors,
};

export * from "./productions/index.js";