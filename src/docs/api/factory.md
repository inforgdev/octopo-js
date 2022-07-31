# Factory

Factory function is a utility function to generate AST more easily.

Every factory starts with `_`.

Example:

```js
_call("size", _params(["w", "24px"], ["h", "24px"]))
```

Example output:

```js
{
    type: 'call',
    name: 'size',
    args: [
        { type: 'param', name: 'w', default: '24px' },
        { type: 'param', name: 'h', default: '24px' }
    ]
}
```

## Available Base Functions

Name                         | Description                 | Example (SCSS)       
-----------------------------|-----------------------------|-----------------------------------
`_call(name, args)`          | Mixin call                  | `_call("example", _args(["arg1"]))` 
`_arg(expression)`           | Mixin call argument         | `_arg(_val("24px"))`               
`_dec(prop, value)`          | Property declaration        | `_dec("color", _val("#00f"))`        
`_var(name, expression)`     | Variable declaration        | `_var("blue", _val("#00f"))`       
`_val(expression)`           | Value                       | `_val("24px")`               
`_ref(name)`                 | Variable reference          | `_ref("blue")`              
`_mixin(name, params, body)` | Mixin declaration           | `_mixin("example", _params())`
`_param(name, defaultValue)` | Mixin parameter declaration | `_param("width", _val())`          

## Available Derived Functions

Name                      | Description               | Example
--------------------------|---------------------------|-------------------------------------
`args(...expressions)`    | multiple `arg` util       | `_args(val("24px"), val("24px"))`
`params(...expressions)`  | multiple `param` util     | `_params(["w", "24px"], ["h", "24px"])`
