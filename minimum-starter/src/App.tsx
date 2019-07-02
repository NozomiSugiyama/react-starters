import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Root from "src/Root";
import {
    NotFoundPage,
    TopPage
} from "src/Routes";
import styled from "styled-components";

export default () => (
    <Theme>
        <BrowserRouter>
            <Root>
                <Switch>
                    <Route
                        path="/"
                        component={TopPage}
                        exact={true}
                    />
                    <Route
                        path="/top"
                        component={TopPage}
                    />
                    <Route component={NotFoundPage}/>
                </Switch>
            </Root>
        </BrowserRouter>
    </Theme>
);

const Theme = styled.div`
    --main-color: #FAFBFD;
    --font-color: black;
`;
