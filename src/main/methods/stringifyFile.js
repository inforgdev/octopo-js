import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import stringify from "./stringify.js";
import optionOutFile from "../options/outFile.js";

export function stringifyFile(options) {
    const data = stringify(options);
    writeFileResolve(data, options.out.file);
}

export default stringifyFile;

export function writeFileResolve(data, options) {
    const fileDist = join(options.dirname, options.name + options.extname);
    const targetDir = dirname(fileDist);
    mkdirSync(targetDir, { recursive: true, });
    writeFileSync(fileDist, data);
}

export function handleWriteFile(data, options) {
    options = optionOutFile(options);

    writeFileResolve(data, options.out.file);
}
