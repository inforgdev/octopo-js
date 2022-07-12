import { propUndefined } from "./logger.js"; 

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
