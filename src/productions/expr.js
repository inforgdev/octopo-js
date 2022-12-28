export function generateExpr(prod, node, lang) {
    return prod.generateMatches(node, lang, [ "val", "ref" ]);
}