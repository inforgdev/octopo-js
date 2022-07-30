# Example

```js
import octopo, { langs, factory } from "octopo-js";
const { _var, _val } = factory;

const colors = [];
for(let i = 0; i < 9; i++) {
    colors.push(_var("gray-" + i, _val(`#${i}${i}${i}`)));
}

octopo({
    in: {
        data: colors,
    },
    proc: {
        grammar: langs.scss,
    },
    out: {
        file: {
            dirname: "./src/example/simple/dest",
            name: "example",
        },
        print: true,
    },
});
```