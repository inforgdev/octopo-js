export function generateStatement(prod, node, lang) {
    return prod.generateMatches(node, lang, [ "call", "var", "dec", "mixin" ]);
};