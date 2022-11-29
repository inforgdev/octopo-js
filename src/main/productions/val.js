export function _val(expr) {
    return {
        type: "val",
        name: expr,
    };
};

export const $val = (prod, node, lang) => {
    return prod.render(node);
}