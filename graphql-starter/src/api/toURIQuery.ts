export default (a: {[key: string]: string}) => {
    let b = "";

    for (const i in a)
        b += `${encodeURIComponent(i)}=${encodeURIComponent(a[i])}&`;

    return b.slice(0, -1);
};
