import getLines from "src/util/markdown/getLines";

export default (value: string, selectionNumbers: [number, number]): [string, [number, number]] => {
    const lines = getLines(value, selectionNumbers);

    let adjustmentCount = 0;
    const convertedValue = value.split("\n")
        .map((x: string, i: number) => {
            if (i + 1 >= lines[0] && i + 1 <= lines[1]) {
                if (/^#{6}/.test(x)) {
                    adjustmentCount = adjustmentCount - 7;
                    return x.replace(/^#{6} /g, "");
                } else if (/^#/.test(x)) {
                    adjustmentCount = adjustmentCount + 1;
                    return x.replace(/^/g, "#");
                }
                adjustmentCount = adjustmentCount + 2;
                return x.replace(/^/g, "# ");
            }
            return x;
        })
        .join("\n");
    return [
        convertedValue,
        [
            selectionNumbers[0],
            selectionNumbers[1] + adjustmentCount
        ]
    ];
};
