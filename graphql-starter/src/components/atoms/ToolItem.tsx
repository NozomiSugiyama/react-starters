import React from "react";
import styled from "styled-components";

export default (
    {
        children,
        ...props
    }: React.HTMLAttributes<HTMLDivElement>
) => (
    <StyledDiv
        {...props}
    >
        <div>{children}</div>
        <div/>
    </StyledDiv>
);

const StyledDiv = styled.div`
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all .2s ease-out;
    cursor: pointer;
    position: relative;
    :hover {
        background: rgba(0, 0, 0, .1);
        > :nth-child(1) {
            > * {
                color: #000;
            }
        }
    }
    > :nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        > * {
            color: #777;
        }
    }
    > :nth-child(2) {
        min-width: 2rem;
        min-height:2rem;
        z-index: 1;
        background-color: transparent;
        position: absolute;
        left: 0;
        right: 0;
    }
`;
