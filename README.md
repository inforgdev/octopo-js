# OctopoJS

<a href="CONTRIBUTING.md"><img src="https://img.shields.io/badge/Contributing-SEE CONTRIBUTING IN CONTRIBUTING.md-005c99?style=flat&amp;logo=" alt="Contributing"/></a> <a href="https://inforg.dev/octopo-js"><img src="https://img.shields.io/badge/Documentation-website-005c99?style=flat&amp;logo=" alt="Documentation"/></a> <a href="LICENSE.md"><img src="https://img.shields.io/badge/License-SEE LICENSE IN LICENSE.md-005c99?style=flat&amp;logo=" alt="License"/></a>

## About

OctopoJS is a CSS preprocessor language agnostic AST stringifier.

## Example

Input (*./src/example/example.js*):

```js
import octopo, { langs, factory } from "octopo-js";
const { _var, _val } = factory;
const lang = langs.scss;

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

## Installation

Download and install via NPM from Github repository:

```bash
$ npm install --save-dev inforgdev/octopo-js
```

For usage using ESM, import it in JS file:

```js
import "octopo-js";
```