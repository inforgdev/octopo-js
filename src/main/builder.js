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
