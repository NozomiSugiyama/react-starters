import React from "react";
import Ripple from "src/components/atoms/Ripple";
import styled from "styled-components";

export interface ListItemProps extends React.Props<HTMLLIElement> {
    disabled?: boolean;
    selected?: boolean;
    button? : boolean;
}

export default (
    {
        disabled = false,
        selected = false,
        button = false,
        ...props
    }: ListItemProps
) => {
    const Element = <Host disabled={disabled} selected={selected} />;
    return (
        button ? (
            <Ripple
                component={Element}
                ref={props.ref as any}
                {...props}
            />
        )      : Element
    );
};

interface HostProps extends React.Props<HTMLLIElement> {
    disabled: boolean;
    selected: boolean;
}

const Host = styled.li<HostProps>`
    display        : flex;
    flex-grow      : 1;
    align-items    : center;
    box-sizing     : border-box;
    min-height     : 3rem;
    padding        : 0 1rem;
    outline-width  : 0;
    color          : inherit;
    text-decoration: none;
    transition     : all .3s ease-out;
    :hover {
        background-color: rgba(0, 0, 0, .05);
    }
    ${props => !props.disabled ? `
        cursor: pointer;
    `                          : ""
    };
    ${props => props.selected ? `
        color: var(--main-color, #2196F3);
    `                         : ""
    }
`;
