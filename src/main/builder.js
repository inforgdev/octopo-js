export function call(name, args) {
        return {
            "type": "call",
            "name": name,
            "args": args,
        };
}
