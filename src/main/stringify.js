import { unexpected, propUndefined } from "./logger.js"; 

let data;

export default function stringify(options) {
    let ast = options.in.data;
    data = options.proc.data;

    if(ast === undefined) return propUndefined("options.in.data");
    if(data === undefined) return propUndefined("options.proc.data");

    return globalStatements(ast, data);
}

export function ref(node, lang = data) {
    if(node.type !== "ref") return unexpected(node);
    return lang.ref.replaceAll("_NAME_", node.name);
}

export function val(node, lang = data) {
    if(node.type !== "val") return unexpected(node);
    return lang.val.replaceAll("_NAME_", node.expression);
}

export function exp(node, lang = data) {
    if(node === undefined) return unexpected(node);

    switch(node.type) {
        case "ref":
            return ref(node, lang);
        case "val":
            return val(node, lang);
        default:
            return unexpected(node);
    }
}

export function v(node, lang = data) {
    if(node.type !== "v") return unexpected(node);
    
    let expressionC = exp(node.expression, lang);

    return lang.var
        .replaceAll("_NAME_", node.name)
        .replaceAll("_EXPRESSION_", expressionC);
}

export function dec(node, lang = data) {
    if(node.type !== "dec") return unexpected(node);

    let valueC = exp(node.value, lang);

    return lang.dec
        .replaceAll("_PROP_", node.prop)
        .replaceAll("_VALUE_", valueC);
}

export function param(node, lang = data) {
    if(node.type !== "param") return unexpected(node);

    if(node.default) {
        return lang.paramDefault
            .replaceAll("_NAME_", node.name)
            .replaceAll("_DEFAULT_", node.default);
    }

    return lang.param.replaceAll("_NAME_", node.name);
}

export function params(exp, lang = data) {
    let a = [];

    if(!Array.isArray(exp)) {
        a.push(param(exp, lang));
    } else {
        for(let i in exp) {
            a.push(param(exp[i], lang));
        }
    }

    return a.join(lang.paramSep);
}

export function arg(node, lang = data) {
    if(node.type !== "arg") return unexpected(node);
    return exp(node.expression, lang);
}

export function args(exp, lang = data) {
    let a = [];

    if(!Array.isArray(exp)) {
        a.push(arg(exp, lang));
    } else {
        for(let i in exp) {
            a.push(arg(exp[i], lang));
        }
    }

    return a.join(lang.argSep);
}

export function call(node, lang = data) {
    if(node.type !== "call") return unexpected(node);

    return lang.call
        .replace("_NAME_", node.name)
        .replaceAll("_ARGS_", args(node.args, lang));
}

export function mixin(node, lang = data) {
    if(node.type !== "mixin") return unexpected(node);

    let mixinC = lang.mixin
        .replaceAll("_NAME_", node.name)
        .replaceAll("_PARAMS_", params(node.params, lang))
        .replaceAll("_BODY_", body(node.body, lang));

    if(lang.needBrln) mixinC = mixinC + "\n";

    return mixinC;
}

export function body(node, lang = data) {
    let body = node;
    let bodyC = "";

    for(let i in body) {
        let statement = body[i];

        let sta;

        switch(statement.type) {
            case "call":
                sta = call(statement, lang);
                break;
            case "v":
                sta = v(statement, lang);
                break;
            case "dec":
                sta = dec(statement, lang);
                break;
            case "mixin":
                sta = mixin(statement, lang);
                break;
            default:
                return unexpected(statement);
        }

        let ender = lang.statementEnd;
        if(i == body.length - 1 && !lang.needLastStatementEnd) ender = "";
        if(lang.needBrln) ender = ender + "\n";

        bodyC = bodyC + lang.indent + sta + ender;
    }

    return bodyC;
}

export function globalStatements(ast, lang = data) {
    let rootC = "";

    for(let i in ast) {
        let node = ast[i];
        
        let sta;

        switch(node.type) {
            case "call":
                sta = call(node, lang);
                break;
            case "v":
                sta = v(node, lang);
                break;
            case "mixin":
                sta = mixin(node, lang);
                break;
            default:
                return unexpected(node);
        }

        let ender = lang.statementEnd;
        if(i == ast.length - 1 && !lang.needLastStatementEnd || node.type === "mixin") ender = "";
        if(lang.needBrln && node.type !== "mixin") ender = ender + "\n";

        rootC = rootC + sta + ender;
    }

    return rootC;
}
