export default function optionOutFile(options) {
    function handle(
        dirname = "./dist/",
        name = "concrete",
        extname = options.proc.grammar.extname,
    ) {
        options.out.file.dirname = dirname;
        options.out.file.name = name;
        options.out.file.extname = extname;
    };
    const fileOptions = options.out.file;
    handle(fileOptions.dirname, fileOptions.name, fileOptions.extname);

    return options;
}