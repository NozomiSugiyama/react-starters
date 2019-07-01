import React from "react";
import styled from "styled-components";

export interface HamburgerIconProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export default (props: HamburgerIconProps) => (
    <Host {...props} ref={props.ref as any}>
        <Border/>
        <Border/>
        <Border/>
    </Host>
);

const Host = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 32px;
    width: 32px;
    padding: 8px;
    box-sizing: border-box;
`;

const Border = styled.span`
    width: 16px;
    border-radius: 4px;
    height: 2px;
    background-color: #555;
`;
