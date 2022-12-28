import { generateExpr } from "./expr.js";

export function _dec(prop, value) {
    return {
        type: "dec",
        prop,
        value,
    };
}

export function $dec(prod, node, lang) {
    const props = {
        prop: node.prop,
        value: generateExpr(prod, node.value, lang),
    };
    
    return prod.render(props);
}