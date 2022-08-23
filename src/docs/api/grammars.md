# Grammars

The grammar defines how the node will be stringified.

There are these languages available:

Variable     | Description     
-------------|----------
`langs.scss` | SCSS 
`langs.styl` | Stylus
`langs.less` | LESS
`langs.lessMin` | LESS Minified
`langs.scssMin` | SCSS Minified

These variables can be accessed by: 

```js
import { langs } from "octopo-js";
```

## Custom Grammar

To create a custom grammar, just create a object and use these available keys:

Key                    | Description                   | Example (LESS)
-----------------------|-------------------------------|-------------------------
declaration | |
`var`                  | Variable declaration          | `"@_NAME_: _EXPRESSION_"`
`mixin`                | Mixin declaration             | `"._NAME_(_PARAMS_) {\n_BODY_}"`
`dec`                  | Property declaration          | `"_PROP_: _VALUE_"`
`param`                | Parameter declaration         | `"@_NAME_"`
`paramDefault`         | Mixin parameter declaration   | `"@_NAME_: _DEFAULT_"`
expression | |
`call`                 | Mixin call                    | `"._NAME_(_ARGS_)"`
`ref`                  | Variable reference            | `"@_NAME_"`
`val`                  | Value                         | `"_NAME_"`
`arg`                  | Argument                      | `""`
artifacts | |
`argSep`               | Argument separator            | `","`
`paramSep`             | Parameter separator           | `", "`
style | |
`statementEnd`         | Statement end                 | `";"`
`needLastStatementEnd` | Is last statement end needed? | `true`
`indent`               | Identation                    | `"  "`
`needBrln`             | Is line breaker needed?       | `true`
`wordSep`              | Word separator                | `"-"`
`extname`              | File extname                  | `".less"`

Example:

```js
const customLang = {
    //declaration

    var: "@_NAME_:_EXPRESSION_",
    mixin: "._NAME_(_PARAMS_){_BODY_}",
    dec: "_PROP_:_VALUE_",
    param: "@_NAME_",
    paramDefault: "@_NAME_:_DEFAULT_",

    //expression

    call: "._NAME_(_ARGS_)",
    ref: "@_NAME_",
    val: "_NAME_",
    arg: "",

    //artifacts
    
    argSep: ",",
    paramSep: ",",

    //style

    statementEnd: ";",
    needLastStatementEnd: false,
    indent: "",
    needBrln: false,
    wordSep: "-",
    extname: ".less",
};
```