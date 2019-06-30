import React, { useState, Fragment } from "react";
import Snackbar from "src/components/atoms/Snackbar";
import NotificationContext from "src/contexts/NotificationContext";

interface Notification {
    type: "info" | "error";
    message: string;
    key: number;
}

export default (
    {
        children
    }: React.Props<{}>
) => {

    const [notifications, setNotification] = useState<Notification[]>([]);

    const onCloseByKey = (key: number) => () => setNotification(
        notifications.filter(y => key !== y.key)
    );

    return (
        <Fragment>
            <NotificationContext.Provider
                value={{
                    ErrorComponent: ({ message }) => <Snackbar>{message}</Snackbar>,
                    notification: (type: "info" | "error", message: string) => {
                        setNotification(
                            notifications.concat({
                                type,
                                message,
                                key  : Date.now()
                            })
                        );
                    }
                }}
            >
                {children}
            </NotificationContext.Provider>
            {notifications.map(x =>
                <Snackbar
                    type={x.type}
                    key={x.key}
                    onHidden={onCloseByKey(x.key)}
                >
                    {x.message}
                </Snackbar>
            )}
        </Fragment>
    );
};
