import React, { useContext, useEffect, useRef, useState } from "react";
import DrawerContext from "src/contexts/DrawerContext";
import styled from "styled-components";

interface DrawerProps extends React.Props<HTMLElement> {
    fixed: boolean;
}

export default (
    {
        fixed,
        ...props
    }: DrawerProps
) => {
    const drawer = useContext(DrawerContext);
    const [size, setSize] = useState<[number, number] | null>(null);
    const hostRef = useRef<HTMLElement>(null);

    useEffect(
        () => {
            if (hostRef.current) {
                const rect = hostRef.current.getBoundingClientRect();
                setSize([
                    rect.width,
                    rect.height
                ]);
            }
        },
        []
    );

    return (
        <div>
            {!fixed && drawer.opend ? <Wall onClick={drawer.toggleDrawer}/> : null}
            <Host
                opend={drawer.opend}
                fixed={fixed}
                ref={hostRef as any}
                size={size}
                {...props}
            />
        </div>
    );
};

interface HostProps extends React.Props<HTMLElement> {
    opend: boolean;
    fixed: boolean;
    size: [number, number] | null;
}

const Host = styled.nav<HostProps>`
    ${props => props.fixed ? `
    `                      : `
        margin-left: ${(
            props.opend ? 0
          : props.size  ? `-${props.size[0] + 10}px`
          :               0
        )};
    `
    }
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1001;
    overflow: auto;
    max-width: 280px;
    min-width: max-content;
    border-right: 1px solid #DDD;
    background-color: #FAFBFD;
    font-family: "Roboto", sans-serif;
    font-weight: bolder;
    transition: all .3s ease-out;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, .3);
`;

const Wall = styled.div`
    position: absolute;
    z-index: 1000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .1);
`;
