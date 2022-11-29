import { generateExpr } from "./expr.js";

export function _param(name, defaultValue) {
    return {
        type: "param",
        name,
        default: defaultValue,
    };
};

export const $param = (prod, node, lang) => {
    let tmpl = prod.tmpl(node.default ? "paramDefault" : "param");

    const props = {
        ...node,
        default: node.default && generateExpr(prod, node.default, lang),
    };

    return prod.render(props, tmpl);
};