import React from "react";
import LocalizationContext from "src/contexts/LocalizationContext";
import { LocationText } from "src/localization/locale";

export interface LocationTextProps {
    text: LocationText;
}

export default (
    {
        text,
        ...props
    }: LocationTextProps
) => (
    <LocalizationContext.Consumer {...props}>
        {({ locationText }) => locationText[text]}
    </LocalizationContext.Consumer>
);
