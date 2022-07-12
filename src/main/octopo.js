import stringify from "./stringify.js";

export default function octopo(options) {
    const data = stringify(options);

    if(options.out.print) console.log(data);
}
