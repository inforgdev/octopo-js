import { propUndefined } from "../logger.js"; 
import { $globalStatements } from "../nodes/stringifier.js";
let data;

export function stringify(options) {
    if(options == undefined) return propUndefined("options");

    let ast = options.in.data;
    data = options.proc.grammar;

    return $globalStatements(ast, data);
}

export default stringify;
