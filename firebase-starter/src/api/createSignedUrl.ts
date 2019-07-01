import toURIQuery from "src/api/toURIQuery";
import config from "src/config";

interface Props {
    userId  : string;
    type    : string;
    mimetype: string;
    jwt     : string;
}

type ResponseJson = {
    signedUrl: string;
    uploadedUrl: string;
};

export default async (
    {
        userId,
        type,
        mimetype,
        jwt,
    }: Props
): Promise<ResponseJson> => {
    const response = await fetch(
        `${config.api.uri}/signed-url?${toURIQuery({ userId, type, mimetype })}`,
        {
            headers: {
                Authorization: jwt,
                Date: new Date().toUTCString()
            },
            method : "GET"
        }
    );

    if (!response.ok)
        throw response;

    return (await response.json()) as ResponseJson;
};
