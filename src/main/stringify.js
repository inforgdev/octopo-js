import { unexpected, propUndefined } from "./logger.js"; 

let data;

export default function stringify(options) {
    let ast = options.in.data;
    data = options.proc.data;

    if(ast === undefined) return propUndefined("options.in.data");
    if(data === undefined) return propUndefined("options.proc.data");

    return globalStatements(ast);
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

export function arg(node) {
    if(node.type !== "arg") return unexpected(node);
    return exp(node.expression);
}

export function args(exp) {
    let a = [];

    if(!Array.isArray(exp)) {
        a.push(arg(exp));
    } else {
        for(let i in exp) {
            a.push(arg(exp[i]));
        }
    }

    return a.join(data.argSep);
}

export function call(node) {
    if(node.type !== "call") return unexpected(node);

    return data.call
        .replace("_NAME_", node.name)
        .replaceAll("_ARGS_", args(node.args));
}

export function mixin(node) {
    if(node.type !== "mixin") return unexpected(node);

    let mixinC = data.mixin
        .replaceAll("_NAME_", node.name)
        .replaceAll("_PARAMS_", params(node.params))
        .replaceAll("_BODY_", body(node.body));

    if(data.needBrln) mixinC = mixinC + "\n";

    return mixinC;
}

export function body(node) {
    let body = node;
    let bodyC = "";

    for(let i in body) {
        let statement = body[i];

        let sta;

        switch(statement.type) {
            case "call":
                sta = call(statement);
                break;
            case "v":
                sta = v(statement);
                break;
            case "dec":
                sta = dec(statement);
                break;
            case "mixin":
                sta = mixin(statement);
                break;
            default:
                return unexpected(statement);
        }

        let ender = data.statementEnd;
        if(i == body.length - 1 && !data.needLastStatementEnd) ender = "";
        if(data.needBrln) ender = ender + "\n";

        bodyC = bodyC + data.indent + sta + ender;
    }

    return bodyC;
}

export function globalStatements(ast) {
    let rootC = "";

    for(let i in ast) {
        let node = ast[i];
        
        let sta;

        switch(node.type) {
            case "call":
                sta = call(node);
                break;
            case "v":
                sta = v(node);
                break;
            case "mixin":
                sta = mixin(node);
                break;
            default:
                return unexpected(node);
        }

        let ender = data.statementEnd;
        if(i == ast.length - 1 && !data.needLastStatementEnd || node.type === "mixin") ender = "";
        if(data.needBrln && node.type !== "mixin") ender = ender + "\n";

        rootC = rootC + sta + ender;
    }

    return rootC;
}
