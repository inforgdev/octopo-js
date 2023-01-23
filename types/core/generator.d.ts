import { Grammar } from "../grammar";

export type Node = {
    type: string,
};
export type Producer<K extends Node> = {
    tmpl: (name: string) => string,
    render: (props: object, inlineTmpl: object) => string,
    generate: typeof generate<K>,
    generateMatches: typeof generateMatches,
};
export type Generator<K extends Node> = (prod: Producer<K>, node: K, lang: Grammar) => string;

export function generate<K extends Node>(node: Node, lang: Grammar, inlineGenerator?: Generator<K>): string;
export function generateMatches(node: object, lang: Grammar, nodeNames: string[]): string;
export function prod<K extends Node>(node: K, lang: Grammar): Producer<K>;
export function generator<K extends Node>(productionName: string): Generator<K>;
