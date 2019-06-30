import React from "react";
import LocationText from "src/components/atoms/LocationText";
import Page from "src/components/atoms/Page";
import Header from "src/components/molecules/Header";
import NotFound from "src/components/molecules/NotFound";
import Content from "src/components/pages/NotFoundPage/Content";

export default (props: React.Props<{}>) => {

    return (
        <Page
            ref={props.ref as any}
            {...props}
        >
            <Header
                title={<LocationText text="Not Found"/>}
            />
            <Content>
                <NotFound/>
            </Content>
        </Page>
    );
};
