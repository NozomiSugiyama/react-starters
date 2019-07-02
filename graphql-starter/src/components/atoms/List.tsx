import React from "react";
import styled from "styled-components";

export interface ListProps extends React.Props<HTMLUListElement> {
    orientation?: "vertical" | "horizontal";
    selectedIndex?: number;
}

export default (
    {
        children,
        selectedIndex,
        orientation = "vertical",
        ...props
    }: ListProps
) => (
    <Host
        orientation={orientation}
        {...props}
        ref={props.ref as any}
    >
        {React.Children.toArray(children).map((x, i) =>
           !React.isValidElement(x) ? x
          : i === selectedIndex     ? React.cloneElement(
                x,
                { selected: true }
            )                       : x
        )}
    </Host>
);

interface HostProps extends React.Props<HTMLUListElement> {
    orientation: "vertical" | "horizontal";
}

const Host = styled.ul<HostProps>`
    display: flex;
    flex-direction: ${props => props.orientation === "vertical" ? "column" : "row"};
    padding: ${props => props.orientation === "vertical" ? "0" : ".5rem 0"};
    box-sizing: border-box;
    margin: 0;
    list-style: none;
    -webkit-padding-start: 0;
    & + & {
        border-top: 1px solid rgba(0, 0, 0, .12);
    }
`;
