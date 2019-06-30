import getLines from "src/util/markdown/getLines";

interface BaseTextConverterArgs {
    value: string;
    selectionNumbers: [number, number];
    syntax: string;
    syntaxEnd?: string;
    syntaxRegex?: string;
    syntaxRegexEnd?: string;
}

export default (
    {
        value,
        selectionNumbers,
        syntax,
        syntaxEnd = syntax,
        syntaxRegex = syntax,
        syntaxRegexEnd = syntaxRegex
    }: BaseTextConverterArgs
): [string, [number, number]] => {
    const lines = getLines(value, selectionNumbers);

    let newSelectionNumbers = selectionNumbers;
    let convertedValue = "";

    // Check multiple characters are not selected
    if (selectionNumbers[0] === selectionNumbers[1]) {
        // Multiple characters are not selected and only one place is selected
        // Convert selected 1 row

        let selectionEndPoint = 0;
        const regex = new RegExp(`^${syntaxRegex}(.*)${syntaxRegexEnd}$`);
        convertedValue = value.split("\n").map((x: string, i: number) => {
            if (i + 1 === lines[0]) {
                // Check whether Markdown syntax is already set
                if (regex.test(x)) {
                    newSelectionNumbers = [
                        selectionEndPoint + x.length - (syntax.length + syntaxEnd.length),
                        selectionEndPoint + x.length - (syntax.length + syntaxEnd.length)
                    ];
                    // Convart to plain text
                    return x.replace(regex, "$1");
                } else {
                    newSelectionNumbers = [
                        selectionEndPoint + x.length + (syntax.length + syntaxEnd.length),
                        selectionEndPoint + x.length + (syntax.length + syntaxEnd.length)
                    ];
                    // Convart to markdown syntax
                    return `${syntax}${x}${syntaxEnd}`;
                }
            }
            selectionEndPoint = selectionEndPoint + x.length;
            return x;
        })
        .join("\n");
    } else {
        // Check only one row is selected
        if (lines[0] === lines[1]) {
            // Multiple characters are selected and only one row is selected
            // Convert selected multiple characters
            const startCount   = selectionNumbers[0];
            const targetLength = selectionNumbers[1] - selectionNumbers[0];
            const regex = new RegExp(
                `(?<=^(?:.|\n){${startCount}})${syntaxRegex}(.{${targetLength - (syntax.length + syntaxEnd.length)}})${syntaxRegexEnd}`
            );

            // Check whether Markdown syntax is already set
            if (regex.test(value)) {
                newSelectionNumbers = [
                    newSelectionNumbers[0],
                    newSelectionNumbers[1] - (syntax.length + syntaxEnd.length)
                ];
                // Convart to plain text
                convertedValue = value.replace(
                    regex,
                    "$1"
                );
            } else {
                newSelectionNumbers = [
                    newSelectionNumbers[0],
                    newSelectionNumbers[1] + (syntax.length + syntaxEnd.length)
                ];
                // Convart to markdown syntax
                convertedValue = value.replace(
                    new RegExp(`(?<=^(?:.|\n){${startCount}})(.{${targetLength}})`),
                    `${syntax}$1${syntaxEnd}`
                );
            }
        } else {
            // When multiple characters are selected and only one row is selected
            // Convert selected multiple rows

            const regex = new RegExp(`^${syntaxRegex}(.*)${syntaxRegexEnd}$`);
            convertedValue = value.split("\n").map((x: string, i: number) => {
                if (i + 1 >= lines[0] && i + 1 <= lines[1]) {
                    // Check whether Markdown syntax is already set
                    if (regex.test(x)) {
                        newSelectionNumbers = [
                            newSelectionNumbers[0],
                            newSelectionNumbers[1] - (syntax.length + syntaxEnd.length)
                        ];
                        // Convart to plain text
                        return x.replace(regex, "$1");
                    } else {
                        newSelectionNumbers = [
                            newSelectionNumbers[0],
                            newSelectionNumbers[1] + (syntax.length + syntaxEnd.length)
                        ];
                        // Convart to markdown syntax
                        return `${syntax}${x}${syntaxEnd}`;
                    }
                }
                return x;
            })
            .join("\n");
        }
    }

    return [convertedValue, newSelectionNumbers];
};
