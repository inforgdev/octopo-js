import stringify from "./stringify.js";
import { handleWriteFile } from "./stringifyFile.js";

export default function octopo(options) {
    const data = stringify(options);

    if(options.out.print) console.log(data);
    if(!options.out.file) return;

    handleWriteFile(data, options);
}
