import { $args } from "./args.js";

export function _call(name, args) {
    return {
        type: "call",
        name,
        args,
    };
}

export function $call(prod, node, lang) {
    const props = {
        name: node.name,
        args: prod.generate(node.args, lang, $args),
    };

    return prod.render(props);
}