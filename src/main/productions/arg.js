import { generateExpr } from "./expr.js";

export function _arg(expr) {
    return {
        type: "arg",
        expression: expr,
    };
}

export function $arg(prod, node, lang) {
    const props = {
        ...node,
        expression: generateExpr(prod, node.expression, lang),
    };

    return prod.render(props);
}