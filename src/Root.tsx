import { MuiThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import React from "react";
import Auth from "src/components/wrappers/Auth";
import ErrorBoundary from "src/components/wrappers/ErrorBoundary";
import MainLayout from "src/components/wrappers/MainLayout";
import Notification from "src/components/wrappers/Notification";
import RouterHistory from "src/components/wrappers/RouterHistory";

// Do not change of componet order
export default (
    {
        children
    }: React.Props<{}>
) => (
    <ErrorBoundary>
        <RouterHistory>
            <MuiThemeProvider theme={theme}>
                <Notification>
                    <Auth>
                        <MainLayout>
                            {children}
                        </MainLayout>
                    </Auth>
                </Notification>
            </MuiThemeProvider>
        </RouterHistory>
    </ErrorBoundary>
);

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
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
