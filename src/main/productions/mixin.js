import { $body, _body } from "./body.js";
import { $params } from "./params.js";

export function _mixin(name, params, body) {
    return {
        type: "mixin",
        name,
        params,
        body,
    };
}

export function $mixin(prod, node, lang) {
    const props = {
        ...node,
        params: prod.generate(node.params, lang, $params),
        body: prod.generate(_body(node.body), lang, $body),
    };
    
    return prod.render(props) + (lang.needBrln ? "\n" : "");
}