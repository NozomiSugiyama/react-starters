import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Root from "src/Root";
import {
    NotFoundPage,
    WorkListPage
} from "src/Routes";

export default () => (
    <BrowserRouter>
        <Root>
            <Switch>
                <Route
                    path="/"
                    component={WorkListPage}
                    exact={true}
                />
                <Route
                    path="/works"
                    component={WorkListPage}
                />
                <Route component={NotFoundPage}/>
            </Switch>
        </Root>
    </BrowserRouter>
);
