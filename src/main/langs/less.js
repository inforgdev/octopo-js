export default {
    extname: ".less",

    wordSep: "-",

    statementEnd: ";",
    needLastStatementEnd: true,
    needBrln: true,
    v: "@_NAME_: _EXPRESSION_",
    dec: "_PROP_: _VALUE_",
    call: "._NAME_(_ARGS_)",
    argSep: ", ",
    arg: "",
    
    ref: "@_NAME_",
    val: "_NAME_",

    indent: "  ",
    mixin: "._NAME_(_PARAMS_) {\n_BODY_}",
    param: "@_NAME_",
    paramDefault: "@_NAME_: _DEFAULT_",
    paramSep: ", ",
};