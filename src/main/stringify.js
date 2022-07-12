import { propUndefined } from "./logger.js"; 

let data;

export default function stringify(options) {
    let ast = options.in.data;
    data = options.proc.data;

    if(ast === undefined) return propUndefined("options.in.data");
    if(data === undefined) return propUndefined("options.proc.data");

    return "";
}