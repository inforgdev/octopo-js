import { TemplateNotFoundError } from "./errors.js";

export function tmpl(name, lang) {
    const tmpl = lang[name];
    if(tmpl === undefined) throw new TemplateNotFoundError(name);
    
    return tmpl;
}

export function render(props, tmpl) {
    let data = tmpl;

    function renderProp(prop) {
        const propName = `_${prop.toUpperCase()}_`;
        const value = props[prop];

        data = data.replaceAll(propName, value);
    }

    Object.keys(props).forEach((prop) => renderProp(prop));

    return data;
}