# Processors

## stringifyProc(data, meta)

This function is responsible to generate a string of the AST representation.

Parameters:

* **data**: this is essentially an array of objects. These objects, which are called nodes, are a representation of CSS preprocessor language nodes, it can be a mixin call, a variable declaration, etc. If you wanna generate it easily you can use the [factory functions](/api/factory).
* **meta.grammar**: this is the grammar rules object that will be used for rendering. For more details, check out [Grammars](/api/grammars).

Returns: the string generated from the data and grammar.