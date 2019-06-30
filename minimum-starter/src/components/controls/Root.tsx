import React, { useEffect, useState } from "react";
import { render, unmountComponentAtNode } from "react-dom";

export interface RootProps {
    component: React.ReactElement<React.DOMAttributes<Element>, any>;
}

export default (
    {
        component,
    }: RootProps
) => {
    const [element, setElement] = useState<HTMLDivElement | null>(null);
    useEffect(
        () => {
            const e = document.createElement("div");
            document.body.appendChild(e);
            setElement(e);
            return () => {
                if (element) {
                    unmountComponentAtNode(element);
                    document.body.removeChild(element);
                }
            };
        },
        []
    );

    useEffect(
        () => {
            render(
                component,
                element
            );
        },
        [element]
    );

    return null;
};
