import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import Auth from "src/components/containers/Auth";
import ErrorBoundary from "src/components/containers/ErrorBoundary";
import MainLayout from "src/components/containers/MainLayout";
import Notification from "src/components/containers/Notification";
import RouterHistory from "src/components/containers/RouterHistory";
import muiTheme from "src/muiTheme";

// Do not change of componet order
export default (
    {
        children
    }: {
        children?: React.ReactNode
    }
) => (
    <ErrorBoundary>
        <RouterHistory>
            <ThemeProvider theme={muiTheme}>
                <Notification>
                    <Auth>
                        <MainLayout>
                            {children}
                        </MainLayout>
                    </Auth>
                </Notification>
            </ThemeProvider>
        </RouterHistory>
    </ErrorBoundary>
);
