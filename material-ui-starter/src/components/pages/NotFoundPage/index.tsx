import React from "react";
import { RouteChildrenProps } from "react-router";
import LocationText from "src/components/atoms/LocationText";
import Page from "src/components/atoms/Page";
import Header from "src/components/molecules/Header";
import NotFound from "src/components/molecules/NotFound";
import Content from "src/components/pages/NotFoundPage/Content";

export type NotFoundPageProps = React.ComponentProps<typeof Page> & RouteChildrenProps<{problemId: string}>;

export default (props: NotFoundPageProps) => {

    return (
        <Page
            ref={props.ref as any}
            {...props}
        >
            <Header
                appTitle={<LocationText text="Not Found"/>}
            />
            <Content>
                <NotFound/>
            </Content>
        </Page>
    );
};
