import firebase from "firebase/app";
import React, { useEffect, useState } from "react";
import config from "src/config";
import FirebaseContext from "src/contexts/FirebaseContext";

export default (
    {
        children
    }: React.Props<{}>
) => {

    const [app, setApp] = useState<firebase.app.App | null>(null);

    useEffect(
        () => {
            setApp(_app => firebase.initializeApp(config.firebase));
        },
        []
    );

    return (
        <FirebaseContext.Provider
            value={{
                app
            }}
        >
            {children}
        </FirebaseContext.Provider>
    );
};
