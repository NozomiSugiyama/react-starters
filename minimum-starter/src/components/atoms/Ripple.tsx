import React, { useState } from "react";
import styled from "styled-components";

export interface RippleProps<T> extends React.Props<HTMLDivElement> {
    component: JSX.Element;
    disabled?: boolean;
    fixed?: boolean;
    onClick?: (e: React.MouseEvent<T, MouseEvent>) => void;
}

type RippleEvent = {
    radius: number,
    id: number,
    opacity: number,
    position: [number, number]
};

export default <T extends HTMLElement>(
    {
        component,
        children,
        disabled,
        onClick,
        fixed,
        ...props
    }: RippleProps<T>
) => {
    const [ripples, setRipples] = useState<RippleEvent[]>([]);

    const Element = React.cloneElement(
        component,
        {
            ...props,
            disabled,
            style: {
                position: "relative",
                overflow: "hidden",
                verticalAlign: "top",
            },
            onClick: (e: React.MouseEvent<T, MouseEvent>) => {
                onClick && onClick(e);

                if (disabled)
                    return;

                const rect = e.currentTarget.getBoundingClientRect();

                if (fixed) {
                    const radius = Math.min(rect.width, rect.height) / 2;

                    setRipples(
                        ripples.concat({
                            radius,
                            id: e.timeStamp,
                            opacity: 1,
                            position: [
                                rect.width  / 2 - radius,
                                rect.height / 2 - radius
                            ]
                        })
                    );
                } else {
                    const radius = Math.max(rect.width, rect.height);

                    setRipples(
                        ripples.concat({
                            radius,
                            id: e.timeStamp,
                            opacity: 1,
                            position: [
                                e.clientX - rect.left - radius,
                                e.clientY - rect.top  - radius
                            ],
                        })
                    );
                }
            },
            children: [
                children,
                ripples.map(({ id, position, radius }) => (
                    <RippleEfect
                        key={id}
                        onAnimationEnd={() => {
                            setRipples(
                                ripples.filter(x => x.id !== id)
                            );
                        }}
                        style={{
                            left  : `${position[0]}px`,
                            top   : `${position[1]}px`,
                            width : `${radius * 2}px`,
                            height: `${radius * 2}px`
                        }}
                    />
                ))
            ]
        }
    );

    return Element;
};

const RippleEfect = styled.span`
    display         : inline-block;
    position        : absolute;
    border-radius   : 50%;
    background-color: rgba(0, 0, 0, .5);
    animation       : ripple .3s ease-out both;
    pointer-events  : none;
    @keyframes ripple {
        0% {
            opacity  : 1;
            transform: scale(0);
        }
        100% {
            opacity  : 0;
            transform: scale(1);
        }
    }
`;
