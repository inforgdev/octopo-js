export type Grammar = {
    //selecting
    
    class: string,

    //declaration

    var: string,
    mixin: string,
    dec: string,
    param: string,
    paramDefault: string,

    //expression

    call: string,
    ref: string,
    val: string,
    arg: string,

    //artifacts
    
    argSep: string,
    paramSep: string,

    //style

    statementEnd: string,
    needLastStatementEnd: boolean,
    indent: string,
    needBrln: boolean,
    wordSep: string,
    extname: string,
};