import { _body } from "./body.js";
import { generateStatement } from "./statement.js";

export function _root(items) {
    return {
        type: "root",
        items,
    };
}

export function $root(prod, node, lang) {
    let group;
    
    if(!Array.isArray(node.items)) {
        group = [ generateStatement(prod, node.items, lang) ];
    } else {
        group = node.items.map((param) => generateStatement(prod, param, lang));
    }

    return group.join("\n");
}