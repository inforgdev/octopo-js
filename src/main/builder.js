export function call(name, args) {
    return {
        "type": "call",
        "name": name,
        "args": args,
    };
}

export function arg(expression) {
    return {
        "type": "arg",
        "expression": expression,
    };
}

export function dec(prop, value) {
    return {
        "type": "dec",
        "prop": prop,
        "value": value,
    };
}

export function v(name, expression) {
    return {
        "type": "v",
        "name": name,
        "expression": expression,
    };
}

export function val(expression) {
    return {
        "type": "val",
        "expression": expression,
    };
}
