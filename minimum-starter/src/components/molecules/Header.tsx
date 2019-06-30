import React from "react";
import styled from "styled-components";

export interface HeaderProps extends React.Props<{}> {
    title: JSX.Element;
}

export default (
    {
        title
    }: HeaderProps
) => {
    return (
        <AppBar>
            {title}
        </AppBar>
    );
};

const AppBar = styled.header`
    && {
        width: calc(100% - 17rem - 6rem);
        margin: 1rem 3rem 0 2rem;
        border-radius: 8px;
        color: #333;
        background-color: white;
        @media (max-width: 767px) {
            width: calc(100% - 6rem);
        }
    }
`;
