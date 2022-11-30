# Generator

## generate(node, lang)

This function is responsible to generate a string of the node.

Parameters:
* **node**: this is essentially a object. This object, which is called node, is a representation of CSS language nodes, it can be a mixin call, a variable declaration, etc. If you want to generate it easily you can use the [factory functions](/api/factory).
* **lang**: this is the grammar rules object that will be used for rendering. For more details, check out [Grammars](/api/grammars).

Returns: the string generated from the node and lang.