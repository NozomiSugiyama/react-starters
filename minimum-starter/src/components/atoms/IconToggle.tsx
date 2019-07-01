
import React from "react";
import Ripple from "src/components/atoms/Ripple";
import styled from "styled-components";

export interface IconToggleProps extends React.Props<{}> {
    disabled?: boolean;
}

export default (
    {
        disabled = false,
        ...props
    }: IconToggleProps
) => (
    <Ripple
        component={<Host disabled={disabled}/>}
        disabled={disabled}
        fixed
        {...props}
        ref={props.ref as any}
    />
);

interface Props {
    disabled: boolean;
}

const Host = styled.div<Props>`
    display        : inline-flex;
    align-items    : center;
    justify-content: space-around;
    min-width      : 36px;
    min-height     : 0;
    width          : 36px;
    height         : 36px;
    border-radius  : 50%;
    transition     : all .3s ease-out;
    ${props => props.disabled ? `
        color; rgba(0, 0, 0, .38);
    `                         : `
        color : rgba(0, 0, 0, .54);
        cursor: pointer;
        :hover {
            background-color: rgba(0, 0, 0, .05);
        }
    `
    }
`;
