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
            <h2>
                {emoji}
            </h2>
            <h4>
                Not Found
            </h4>
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
