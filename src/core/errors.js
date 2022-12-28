export class OctopoError extends Error {
    constructor(name, ...args) {
        super(name, args);
        this.name = "OctopoError";
    }
}

export class UnexpectedNodeError extends OctopoError {
    constructor(node) {
        super(node.type);
        this.name = "Unexpected node";
    }
}

export class TemplateNotFoundError extends OctopoError {
    constructor(name) {
        super(name);
        this.name = "Template not found";
    }
}

export class GeneratorNotFoundError extends OctopoError {
    constructor(name) {
        super(name);
        this.name = "Generator not found";
    }
}