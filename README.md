# OctopoJS

<a href="CONTRIBUTING.md"><img src="https://img.shields.io/badge/Contributing-SEE CONTRIBUTING IN CONTRIBUTING.md-005c99?style=flat&amp;logo=" alt="Contributing"/></a> <a href="https://inforg.dev/octopo-js"><img src="https://img.shields.io/badge/Documentation-website-005c99?style=flat&amp;logo=" alt="Documentation"/></a> <a href="LICENSE.md"><img src="https://img.shields.io/badge/License-SEE LICENSE IN LICENSE.md-005c99?style=flat&amp;logo=" alt="License"/></a>

## About

OctopoJS is a language agnostic CSS generator.

## Example

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

## Installation

Download and install via NPM from Github repository:

```bash
$ npm install --save-dev inforgdev/octopo-js
```

For usage using ESM, import it in JS file:

```js
import "octopo-js";
```