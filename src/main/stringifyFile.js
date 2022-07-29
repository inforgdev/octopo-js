import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import stringify from "./stringify.js";

export function writeFileResolve(data, options) {
    const fileDist = join(options.dirname, options.name + options.extname);
    const targetDir = dirname(fileDist);
    mkdirSync(targetDir, { recursive: true, });
    writeFileSync(fileDist, data);
}

export default stringifyFile;

export function stringifyFile(options) {
    const data = stringify(options);
    writeFileResolve(data, options.out.file);
}

export function handleWriteFile(data, options) {
    function handleDefaultOptions(
        dirname = "./dist/",
        name = "concrete",
        extname = options.proc.grammar.extname,
    ) {
        options.out.file.dirname = dirname;
        options.out.file.name = name;
        options.out.file.extname = extname;
    }

    const fileOptions = options.out.file;
    handleDefaultOptions(fileOptions.dirname, fileOptions.name, fileOptions.extname);

    writeFileResolve(data, fileOptions);
}
