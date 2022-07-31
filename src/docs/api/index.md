# API

This session details how to use the OctopoJS API.

## How it works?

To achieve its goal, the API receives an options object containing the input, processing and output information needed.

The input is essentially an array of objects. These objects, which are called nodes, are a representation of CSS preprocessor language nodes, it can be a mixin call, a variable declaration, etc. If you wanna generate it easily you can use the [factory functions](/api/factory).

In the middle, the processing options are mainly the grammar, an object with keys assigned to respectively to the node abstractions, which includes, for example, a variable reference.

Last but not the least, the output, which are options that define weather the string will be printed and/or written to a file.

For more information about the options, visit the next page.