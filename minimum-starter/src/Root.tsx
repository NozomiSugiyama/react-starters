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
            <Notification>
                <Auth>
                    <MainLayout>
                        {children}
                    </MainLayout>
                </Auth>
            </Notification>
        </RouterHistory>
    </ErrorBoundary>
);
