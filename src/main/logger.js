export function unexpected(node)  {
    console.log("Illegal argument exception: " + JSON.stringify(node, null, 2));
    return undefined;
}
