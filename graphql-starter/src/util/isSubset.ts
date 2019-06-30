export default <T>(subset: T[], superset: T[]) =>
    subset.every(x =>
        superset.includes(x)
    );
