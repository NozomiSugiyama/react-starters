import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import Auth from "src/components/containers/Auth";
import ErrorBoundary from "src/components/containers/ErrorBoundary";
import MainLayout from "src/components/containers/MainLayout";
import Notification from "src/components/containers/Notification";
import RouterHistory from "src/components/containers/RouterHistory";

// Do not change of componet order
export default (
    {
        children
    }: React.Props<{}>
) => (
    <ErrorBoundary>
        <RouterHistory>
            <ThemeProvider theme={theme}>
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

const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paper: {
                backgroundColor: "#fafbfd"
            },
            paperAnchorDockedLeft: {
                borderRight: "none"
            }
        },
        MuiDialog: {
            paper: {
                border: 0,
                borderRadius: 8,
                color: "#333",
            },
        },
    },
    palette: {
        primary: {
            contrastText: "#fff",
            dark: "#c56200",
            light: "#ffc246",
            main: "#ff9100",
        },
    }
});
