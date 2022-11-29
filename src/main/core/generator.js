import * as productions from "../productions/index.js";
import { GeneratorNotFoundError, UnexpectedNodeError } from "./errors.js";
import { render, tmpl } from "./tmpl.js";

export function prod(node, lang) {
    return {
        tmpl: (name) => {
            return tmpl(name || node.type, lang);
        },
        render: (props, inlineTmpl) => {
            return render(props, inlineTmpl || tmpl(node.type, lang));
        },
        generate,
        generateMatches,
    };
}

export function generate(node, lang, inlineGenerator) {
    const gen = inlineGenerator || generator(node.type);
    const prodObj = prod(node, lang);

    return gen(prodObj, node, lang);
}

export function generateMatches(node, lang, nodeNames) {
    if(nodeNames.includes(node.type)) {
        return generate(node, lang);
    }

    throw new UnexpectedNodeError(node);
}

export function generator(name) {
    let generator = productions[`$${name}`];
    if(generator === undefined) throw new GeneratorNotFoundError(`$${name}`);
    
    return generator;
}