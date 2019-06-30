import React, { useEffect, useState } from "react";
import Root from "src/components/controls/Root";
import styled from "styled-components";

export interface SnackbarProps extends React.Props<HTMLDivElement> {
    duration?: number;
    onAnimationEnd?: (e: React.AnimationEvent<HTMLDivElement>) => void;
    onHidden?: () => void;
    type?: "error" | "info";
}

export default (props: SnackbarProps) => (
    <Root
        component={
            <Snackbar
                {...props}
            />
        }
    />
);

const Snackbar = (
    {
        duration = 3000,
        onAnimationEnd,
        onHidden,
        type = "info",
        ...props
    }: SnackbarProps
) => {
    const [timeoutID, setTimeoutID] = useState<number | null>(null);
    const [visibled, setVisibility] = useState<boolean>(true);

    useEffect(
        () => {
            return () => {
                timeoutID && clearTimeout(timeoutID);
            };
        },
        []
    );

    return (
        <Host
            visibled={visibled}
            type={type}
            onAnimationEnd={e => {
                onAnimationEnd && onAnimationEnd(e);
                if (visibled) {
                    setTimeoutID(
                        setTimeout(
                            () => {
                                setTimeoutID(null);
                                setVisibility(false);
                            },
                            duration
                        )
                    );
                } else {
                    onHidden && onHidden();
                }
            }}
            {...props}
            ref={props.ref as any}
        />
    );
};

interface HostProps {
    visibled: boolean;
    type: "error" | "info";
}

const Host = styled.div<HostProps>`
    display         : flex;
    position        : fixed;
    bottom          : 0;
    box-sizing      : border-box;
    min-width       : 288px;
    width           : 100vw;
    max-width       : 568px;
    min-height      : 48px;
    padding         : 0 24px;
    background-color: #323232;
    color           : #FFF;
    font-size       : .875rem;
    background-color: ${(props) => (
        props.type === "error" ? "#D32F2F;"
      :                          "#FAFBFD;"
    )}
    ${(props) => (
        props.visibled ? "animation: show .2s ease-out both;"
      :                  "animation: hide .2s ease-out both;"
    )}

    > :nth-child(1) {
        padding: 14px 0;
    }

    @keyframes show {
        0% {
            transform: translateY(100%);
        }
        100% {
            transform: translateY(0);
        }
    }

    @keyframes hide {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(100%);
        }
    }
`;
