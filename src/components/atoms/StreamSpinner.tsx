import CircularProgress, { CircularProgressProps } from "@material-ui/core/CircularProgress";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface Props extends CircularProgressProps {
    onVisible?: () => void;
    disable: boolean;
}

export default (
    {
        onVisible,
        disable,
        ...props
    }: Props
) => {
    const hostElement = useRef<HTMLDivElement>(null);
    const [visibled, setVisiblity] = useState(false);

    const onScroll = () => {
        if (!disable && hostElement.current) {
            const rect = hostElement.current!.getBoundingClientRect();
            if (rect.top < window.innerHeight && !visibled) {
                onVisible && onVisible();
                setVisiblity(true);
            } else if (visibled) {
                setVisiblity(false);
            }
        }
    };

    useEffect(
        () => {
            onScroll();
            window.addEventListener("scroll", onScroll, false);
            return () => window.removeEventListener("scroll", onScroll, false);
        },
        []
    );

    if (disable)
        return null;

    return(
        <Host
            {...props}
            ref={hostElement}
        >
            <CircularProgress {...props}/>
        </Host>
    );
};

const Host = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;
`;
