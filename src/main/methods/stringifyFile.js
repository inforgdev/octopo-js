import stringify from "./stringify.js";
import optionOutFile from "../options/outFile.js";
import { bypass, mkfile, val, vesic } from "vesic-js";

export function vesicMkfile(data, options) {
    vesic({
        src: val(data),
        proc: bypass,
        sink: mkfile,
        meta: {
            path: options.out.file,
        }
    });
}

export function handleWriteFile(data, options) {
    vesicMkfile(data, optionOutFile(options));
}

export function stringifyFile(options) {
    const data = stringify(options);
    handleWriteFile(data, options);
}

export default stringifyFile;