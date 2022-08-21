import { ret, val, vesic } from "vesic-js";
import { propUndefined } from "../logger.js"; 

export function stringify(options) {
    if(options == undefined) return propUndefined("options");

    return vesic({
        src: val(options.in.data),
        proc: stringifyProc,
        sink: ret,
        meta: {
            grammar: options.proc.grammar,
            path: options.out.file,
        }
    }); 
}

export default stringify;
