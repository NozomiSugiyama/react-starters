import getLines from "src/util/markdown/getLines";

export default (value: string, selectionNumbers: [number, number]): [string, [number, number]] => {
    const lines = getLines(value, selectionNumbers);

    const convertedValue = value.split("\n")
        .map((x: string, i: number) => {
            if (i + 1 === lines[1]) {
                return x.replace(/$/g, "\n| Align left | Align center | Align right |\n| :- | :-: | -: |\n| text | text | text |");
            }
            return x;
        })
        .join("\n");

    return [
        convertedValue,
        selectionNumbers
    ];
};
