import React from "react";
import LocalizationContext from "src/contexts/LocalizationContext";
import { LocationText } from "src/localization/locale";

export default (
    {
        text,
        ...props
    }: { text: LocationText } & React.Props<{}>
) => (
    <LocalizationContext.Consumer {...props}>
        {({ locationText }) => locationText[text]}
    </LocalizationContext.Consumer>
);
