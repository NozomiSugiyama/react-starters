import deduplicationFromArray from "src/util/deduplicationFromArray";

export default (param: string, list: string[], currentList?: string[]) =>
    // tslint:disable-next-line:prefer-template
    `?${param}=` + (
        currentList ? (
            deduplicationFromArray(currentList.concat(list))
                .reduce((prev, next, i) => i === 0 ? next : `${prev},${next}`, "")
        )
      :               list.reduce((prev, next, i) => i === 0 ? next : `${prev},${next}`, "")
    );
