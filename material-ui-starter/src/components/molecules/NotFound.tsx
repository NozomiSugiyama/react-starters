import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import styled from "styled-components";

const emojiList = ["(＝△＝)", "(´・ω・`)", "(＿´Д｀)", "(= ‐ω‐ =)", "(*ノω・*)"];

export default (
    props: React.HTMLAttributes<HTMLDivElement>
) => {
    const [emoji] = useState<string>(emojiList[Math.floor(Math.random() * emojiList.length)]);

    return (
        <Host
            {...props}
            unselectable={undefined}
        >
            <Typography
                variant="h2"
            >
                {emoji}
            </Typography>
            <Typography
                variant="h4"
            >
                Not Found
            </Typography>
        </Host>
    );
};

const Host = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: inherit;
    > :nth-child(2) {
        margin-top: 1rem;
    }
`;
