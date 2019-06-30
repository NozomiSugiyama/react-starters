import React from "react";
import styled from "styled-components";

interface Props extends React.Props<{}> {
    children: React.ReactNode;
    selectedIndex: number;
}

export default (
    {
        children,
        selectedIndex,
        ...props
    }: Props
) => (
    <Host>
        {React.Children.toArray(children).map(
            (x: any) => React.cloneElement(
                x,
                {
                    style: {
                        transform: `translate3d(${ -100 * selectedIndex }%, 0, 0)`,
                    },
                    ...props
                }
            )
        )}
    </Host>
);

const Host = styled.div`
    display: flex;
    overflow: hidden;
    > * {
        position: relative;
        overflow: auto;
        max-width: 100%;
        min-width: 100%;
        transition: all .3s ease-out;
    }
`;
