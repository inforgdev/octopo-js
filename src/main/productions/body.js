import { generateStatement } from "./statement.js";

export function _body(items) {
    return {
        type: "body",
        items,
    };
}

export function $body(prod, node, lang) {
    let render = "";
    
    for(let i in node.items) {
        let item = node.items[i];
        let sta = generateStatement(prod, item, lang);

        let ender = lang.statementEnd;
        if(i == node.items.length - 1 && !lang.needLastStatementEnd) ender = "";
        if(lang.needBrln) ender = ender + "\n";

        render = render + lang.indent + sta + ender;
    }

    return render;
}