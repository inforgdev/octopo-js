export default {
    //declaration

    var: "@_NAME_:_EXPRESSION_",
    mixin: "._NAME_(_PARAMS_){_BODY_}",
    dec: "_PROP_:_VALUE_",
    param: "@_NAME_",
    paramDefault: "@_NAME_:_DEFAULT_",

    //expression

    call: "._NAME_(_ARGS_)",
    ref: "@_NAME_",
    val: "_NAME_",
    arg: "",

    //artifacts
    
    argSep: ",",
    paramSep: ",",

    //style

    statementEnd: ";",
    needLastStatementEnd: true,
    indent: "",
    needBrln: false,
    wordSep: "-",
    extname: ".less",
};