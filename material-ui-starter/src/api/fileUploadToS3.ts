interface Props {
    url     : string;
    file    : any;
    // filename: string;
}

export default async (
    {
        url,
        file,
        // filename,
    }: Props
) :Promise<boolean> => {
    const response = await fetch(
        url,
        {
            method : "PUT",
            body   : file,
            headers: {
                "Content-Type" : file.type,
            }
        }
    );

    if (!response.ok)
        throw response;

    return true;
};
