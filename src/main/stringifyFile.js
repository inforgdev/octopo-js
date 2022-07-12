import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";

export function writeFileResolve(data, options) {
    const fileDist = join(options.dirname, options.name + options.extname);
    const targetDir = dirname(fileDist);
    mkdirSync(targetDir, { recursive: true });
    writeFileSync(fileDist, data);
}
