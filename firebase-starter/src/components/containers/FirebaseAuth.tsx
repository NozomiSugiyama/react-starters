import * as firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useEffect, useState, Fragment } from "react";
import AuthContext from "src/contexts/FirebaseAuthContext";
import FirebaseContext from "src/contexts/FirebaseContext";
import RouterHistoryContext from "src/contexts/RouterHistoryContext";

export default (
    {
        children
    }: React.Props<{}>
) => {
    const firebaseValue = useContext(FirebaseContext);
    const routerHistory = useContext(RouterHistoryContext);

    const [auth, setAuth] = useState<firebase.auth.Auth | null>(firebaseValue.app ? firebase.auth(firebaseValue.app) : null);

    useEffect(
        () => {
            if (firebaseValue.app) {
                const new_auth = firebase.auth(firebaseValue.app);
                setAuth(new_auth);
                return new_auth.onAuthStateChanged(user => {
                    if (user) {
                        routerHistory.history.push("/");
                    } else {
                        routerHistory.history.push("/auth/sign-in");
                    }
                });
            }
            return;
        },
        [firebaseValue.app]
    );

    if (!auth) {
        return <Fragment/>;
    }

    return (
        <AuthContext.Provider
            value={{
                auth,
                signIn: async (email: string, password: string) => {
                    if (!auth) {
                        throw new Error("Not Authenticated");
                    }
                    const user = await auth.signInWithEmailAndPassword(email, password);
                    return user;
                },
                signOut: async () => {
                    if (!auth) {
                        throw new Error("Not Authenticated");
                    }
                    await auth.signOut();
                    return;
                },
                updateEmail: (_email) => new Promise((_resolve, _reject) => {}),
                updatePassword: (_password, _newPassword) => new Promise((_resolve, _reject) => {}),
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
