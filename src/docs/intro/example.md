# Example

Input (*./src/example/example.js*):

```js
import octopo, { langs, factory } from "octopo-js";
const { _var, _val } = factory;

const colors = [];
for(let i = 0; i < 9; i++) {
    colors.push(_var("gray-" + i, _val(`#${i}${i}${i}`)));
}

octopo({
    in: {
        data: colors
    },
    proc: {
        data: lang,
    },
    out: {
        file: {
            dirname: "./src/example/",
            name: "example",
        }
    },
});
```

Output (*./src/example/example.scss*):

```scss
$gray-0: #000;
$gray-1: #111;
$gray-2: #222;
$gray-3: #333;
$gray-4: #444;
$gray-5: #555;
$gray-6: #666;
$gray-7: #777;
$gray-8: #888;
```