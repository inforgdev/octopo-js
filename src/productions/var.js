import { generateExpr } from "./expr.js";

export function _var(name, expr) {
    return {
        type: "var",
        name,
        expression: expr,
    };
}

export function $var(core, node, lang) {
    const props = {
        ...node,
        expression: generateExpr(core, node.expression, lang),
    };

    return core.render(props);
}