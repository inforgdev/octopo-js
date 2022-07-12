import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import stringify from "./stringify.js";

export function writeFileResolve(data, options) {
    const fileDist = join(options.dirname, options.name + options.extname);
    const targetDir = dirname(fileDist);
    mkdirSync(targetDir, { recursive: true });
    writeFileSync(fileDist, data);
}

export default function stringifyFile(options) {
    const data = stringify(options);
    writeFileResolve(data, options.out.file);
}
