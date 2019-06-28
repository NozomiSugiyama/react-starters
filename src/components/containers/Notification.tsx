import React, { useState, Fragment } from "react";
import NotificationComponent from "src/components/atoms/Notification";
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
                    ErrorComponent: ({ message }) => <NotificationComponent type="error" message={message}/>,
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
                <NotificationComponent
                    type={x.type}
                    key={x.key}
                    message={x.message}
                    open={true}
                    onClose={onCloseByKey(x.key)}
                />
            )}
        </Fragment>
    );
};
