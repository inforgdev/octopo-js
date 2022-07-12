import { unexpected, propUndefined } from "./logger.js"; 

let data;

export default function stringify(options) {
    let ast = options.in.data;
    data = options.proc.data;

    if(ast === undefined) return propUndefined("options.in.data");
    if(data === undefined) return propUndefined("options.proc.data");

    return "";
}

export function ref(node) {
    if(node.type !== "ref") return unexpected(node);
    return data.ref.replaceAll("_NAME_", node.name);
}

export function val(node) {
    if(node.type !== "val") return unexpected(node);
    return data.val.replaceAll("_NAME_", node.expression);
}

export function exp(node) {
    if(node === undefined) return unexpected(node);

    switch(node.type) {
        case "ref":
            return ref(node);
        case "val":
            return val(node);
        default:
            return unexpected(node);
    }
}

export function v(node) {
    if(node.type !== "v") return unexpected(node);
    
    let expressionC = exp(node.expression);

    return data.v
        .replaceAll("_NAME_", node.name)
        .replaceAll("_EXPRESSION_", expressionC);
}

export function dec(node) {
    if(node.type !== "dec") return unexpected(node);

    let valueC = exp(node.value);

    return data.dec
        .replaceAll("_PROP_", node.prop)
        .replaceAll("_VALUE_", valueC);
}

export function param(node) {
    if(node.type !== "param") return unexpected(node);

    if(node.default) {
        return data.paramDefault
            .replaceAll("_NAME_", node.name)
            .replaceAll("_DEFAULT_", node.default);
    }

    return data.param.replaceAll("_NAME_", node.name);
}

export function params(exp) {
    let a = [];

    if(!Array.isArray(exp)) {
        a.push(param(exp));
    } else {
        for(let i in exp) {
            a.push(param(exp[i]));
        }
    }

    return a.join(data.paramSep);
}
