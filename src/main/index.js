import octopo from "./methods/octopo.js";
import * as factory from "./nodes/factory.js";
import * as stringifier from "./nodes/stringifier.js";
import * as langs from "./langs/index.js";
import * as logger from "./logger.js";
import * as stringify from "./methods/stringify.js";
import * as stringifyFile from "./methods/stringifyFile.js";
import stringifyProc from "./nodes/stringifyProc.js";
import options from "./options/index.js";

export default octopo;

export {
    octopo,
    factory,
    stringifier,
    langs,
    logger,
    stringify,
    stringifyFile,
    stringifyProc,
    options,
};
