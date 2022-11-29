import { $param, _param } from "./param.js";

export function _params(...exprs) {
    return {
        type: "params",
        items: exprs.map((expr) => {
            if(Array.isArray(expr)) {
                const name = expr[0];
                const defaultValue = expr[1];
                return _param(name, defaultValue);
            }

            return _param(expr);
        }),
    };
};

export const $params = (prod, node, lang) => {
    let group;

    if(!Array.isArray(node.items)) {
        group = [ prod.generate(node.items, lang, $param) ];
    } else {
        group = node.items.map((param) => prod.generate(param, lang, $param));
    }

    return group.join(lang.paramSep);
}; 