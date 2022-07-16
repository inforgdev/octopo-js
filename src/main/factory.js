export function _call(name, args) {
    return {
        "type": "call",
        "name": name,
        "args": args,
    };
}

export function _arg(expression) {
    return {
        "type": "arg",
        "expression": expression,
    };
}

export function _dec(prop, value) {
    return {
        "type": "dec",
        "prop": prop,
        "value": value,
    };
}

export function _var(name, expression) {
    return {
        "type": "v",
        "name": name,
        "expression": expression,
    };
}

export function _val(expression) {
    return {
        "type": "val",
        "expression": expression,
    };
}

export function _ref(name) {
    return {
        "type": "ref",
        "name": name,
    };
}

export function _mixin(name, params, body) {
    return {
        "type": "mixin",
        "name": name,
        "params": params,
        "body": body,
    };
}

export function _param(name, defaultValue) {
    return {
        "type": "param",
        "name": name,
        "default": defaultValue,
    };
}

export function _args(...expressions) {
    let a = [];

    for(let i in expressions) {
        let expression = expressions[i];
        a.push(_arg(expression));
    }

    return a;
}

export function _params(...expressions) {
    let a = [];
    
    for(let i in expressions) {
        let expression = expressions[i];
        let name = expression[0];
        let defaultValue = expression[1];
        a.push(_param(name, defaultValue));
    }

    return a;
}
