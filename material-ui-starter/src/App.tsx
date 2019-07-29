import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Root from "src/Root";
import {
    NotFoundPage,
    TopPage
} from "src/Routes";

export default () => (
    <BrowserRouter>
        <Root>
            <Switch>
                <Route
                    path="/"
                    component={TopPage}
                    exact
                />
                <Route
                    path="/top"
                    component={TopPage}
                    exact
                />
                <Route component={NotFoundPage}/>
            </Switch>
        </Root>
    </BrowserRouter>
);
