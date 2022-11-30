# Example

Input (*./src/example/example.js*):

```js
import { generate, langs, _val, _args, _call } from "octopo-js";

const callNode = _call("mixin-a", _args(_val("12px")));
const css = generate(callNode, langs.scss);

console.log(css);
```

Output (*Console*):

```scss
@include mixin-a(12px)
```