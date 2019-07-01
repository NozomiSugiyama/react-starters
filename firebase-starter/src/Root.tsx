import React from "react";
import ErrorBoundary from "src/components/containers/ErrorBoundary";
import Firebase from "src/components/containers/Firebase";
import FirebaseAuth from "src/components/containers/FirebaseAuth";
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
                <Firebase>
                    <FirebaseAuth>
                        <MainLayout>
                            {children}
                        </MainLayout>
                    </FirebaseAuth>
                </Firebase>
            </Notification>
        </RouterHistory>
    </ErrorBoundary>
);
