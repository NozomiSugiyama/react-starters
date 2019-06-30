import baseTextConverter from "src/util/markdown/baseTextConverter";

export default (value: string, selectionNumbers: [number, number]): [string, [number, number]] =>
    baseTextConverter({
        value,
        selectionNumbers,
        syntax: "*",
        syntaxRegex: "\\*"
    });
