# Options

The options define which array will be used to generate the string, based on which grammar and to where.

Example:

```js
{
    in: {
        data: colors,
    },
    proc: {
        grammar: langs.less,
    },
    out: {
        file: {
            dirname: "./src/example/simple/dest",
        },
        print: true,
    },
}
```

Every available options:

## **in**: object

The input object.

## **in.data**: Array

This is the array of the AST that will be stringified.

Example: 

```js
// using factory
data: [ _var("blue", _val("#00f")) ]

// background
data: [
  {
    type: 'v',
    name: 'blue',
    expression: { type: 'val', expression: '#00f' }
  }
]
```

For more details, check out [nodes](/api/nodes). 

## **proc**: object

The processing options to render.

## **proc.grammar**

This is the grammar rules that goings be used to render.

For more details, check out [Grammars](/api/grammars). 

## **out**: object

This defines where the output will be rendered.

## **out.file**: object

This defines the output as a file.

Example:

```js
file: {
    dirname: "./src/example/simple/dest",
    name: "example",
}
```

Default value: 

```js
file: {
    dirname: "./dist/",
    name: "concrete",
    extname: options.proc.grammar.extname,
}
```

## **out.print**: boolean

This defines the output as a log in console.

Example:

```js
print: true,
```

Default value: `false`
