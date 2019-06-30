import React from "react";
import LocationText from "src/components/atoms/LocationText";
import Header from "src/components/molecules/Header";
import Host from "src/components/pages/WorkListPage/Host";

export default (props: React.Props<{}>) => {
    return (
        <Host
            ref={props.ref as any}
            {...props}
        >
            <Header
                title={<LocationText text="Works"/>}
            />
            <div>Test</div>
        </Host>
    );
};
