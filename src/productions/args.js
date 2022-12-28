
import { $arg, _arg } from "./arg.js";

export function _args(...exprs) {
    return {
        type: "args",
        items: exprs.map((expr) => _arg(expr))
    };
}

export function $args(prod, node, lang) {
    let group;

    if(!Array.isArray(node.items)) {
        group = [ prod.generate(node.items, lang, $arg) ];
    } else {
        group = node.items.map((arg) => prod.generate(arg, lang, $arg));
    }

    return group.join(lang.argSep);
}