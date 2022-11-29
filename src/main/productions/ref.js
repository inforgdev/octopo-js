export function _ref(name) {
    return {
        type: "ref",
        name,
    };
}

export function $ref(prod, node, lang) {
    return prod.render(node);
}