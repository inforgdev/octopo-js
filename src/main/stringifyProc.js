import { $globalStatements } from "./nodes/stringifier.js";

function stringifyProc(data, meta) {
    return $globalStatements(data, meta.grammar);
}

export default stringifyProc;